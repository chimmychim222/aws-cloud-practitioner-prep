#!/usr/bin/env node
// scripts/smoke-test-draft.js
//
// Finds the first publishable draft in blog-drafts/, runs 6 checks, and
// writes result/slug/reasons to $GITHUB_OUTPUT (or stdout when run locally).
//
// Candidate draft: a .md file in blog-drafts/ that does NOT start with '_'
// (held drafts are prefixed _held_), is not PUBLISHING.md, review-queue.md,
// or a .factcheck.md file.
//
// Exit codes: 0 always — failures are signalled via result=fail output, not
// a non-zero exit, so the workflow can branch on result rather than on the
// step's success/failure status.
//
// Checks:
//   (a) All required frontmatter fields present (title, slug, excerpt,
//       category, date, readingTime)
//   (b) Companion .factcheck.md exists, is non-trivial, has no HARD ERROR markers
//   (c) No [/path] bracket-notation internal links; all markdown internal links
//       target known site routes
//   (d) No template placeholders (TODO, (placeholder, [PLACEHOLDER])
//   (e) Body word count >= 900
//   (f) Slug does not already exist in blog/posts.js or as blog/[slug].html

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT       = path.join(__dirname, '..');
const DRAFTS_DIR = path.join(ROOT, 'blog-drafts');
const POSTS_PATH = path.join(ROOT, 'blog', 'posts.js');
const BLOG_DIR   = path.join(ROOT, 'blog');

const VALID_ROUTES = new Set([
  '/', '/diagnostic', '/exam-guide', '/practice-questions',
  '/study-plan', '/faq', '/blog', '/privacy', '/terms', '/refund'
]);

// ── Output helpers ────────────────────────────────────────────────────────────

function setOutput(key, value) {
  const ghOut = process.env.GITHUB_OUTPUT;
  if (ghOut) {
    fs.appendFileSync(ghOut, `${key}=${value}\n`);
  } else {
    console.log(`OUTPUT: ${key}=${value}`);
  }
}

function done(result, slug, reasons) {
  setOutput('result', result);
  setOutput('slug', slug || '');
  setOutput('reasons', (reasons || []).join(' | '));
  if (result === 'pass') {
    console.log(`SMOKE TEST PASSED: ${slug}`);
  } else if (result === 'fail') {
    console.error(`SMOKE TEST FAILED: ${slug}`);
    reasons.forEach(r => console.error(`  - ${r}`));
  } else {
    console.log('SMOKE TEST: noop (no candidate drafts found)');
  }
}

// ── Frontmatter parser ────────────────────────────────────────────────────────

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { _hasFm: false };
  const fm = { _hasFm: true };
  match[1].split('\n').forEach(line => {
    const m = line.match(/^([a-zA-Z]+):\s*(.+)$/);
    if (m) fm[m[1].trim()] = m[2].trim();
  });
  return fm;
}

function getBody(content) {
  const match = content.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
  return match ? match[1] : content;
}

// ── Candidate discovery ───────────────────────────────────────────────────────

function findCandidate() {
  if (!fs.existsSync(DRAFTS_DIR)) return null;
  const files = fs.readdirSync(DRAFTS_DIR)
    .filter(f =>
      f.endsWith('.md') &&
      !f.startsWith('_') &&          // skip _held_ drafts
      f !== 'PUBLISHING.md' &&
      f !== 'review-queue.md' &&
      !f.endsWith('.factcheck.md')
    )
    .sort();                          // alphabetical — deterministic
  return files.length > 0 ? files[0] : null;
}

// ── Checks ────────────────────────────────────────────────────────────────────

function checkFrontmatter(fm, errors) {
  if (!fm._hasFm) {
    errors.push('No frontmatter block found (expected --- delimiters)');
    return;
  }
  const required = ['title', 'slug', 'excerpt', 'category', 'date', 'readingTime'];
  const missing = required.filter(k => !fm[k] || fm[k].trim() === '');
  if (missing.length) errors.push(`Missing or empty frontmatter fields: ${missing.join(', ')}`);
}

function checkFactcheck(slug, errors) {
  const fcPath = path.join(DRAFTS_DIR, `${slug}.factcheck.md`);
  if (!fs.existsSync(fcPath)) {
    errors.push(`Fact-check file missing: blog-drafts/${slug}.factcheck.md`);
    return;
  }
  const fc = fs.readFileSync(fcPath, 'utf8');
  if (fc.trim().length < 100) {
    errors.push('Fact-check file is suspiciously short — may be empty or malformed');
  }
  if (/HARD ERROR:/i.test(fc)) {
    errors.push('Fact-check file contains a HARD ERROR marker');
  }
}

function checkLinks(body, errors) {
  // (c1) No unconverted bracket-notation internal links like [/path]
  const bracketLinks = body.match(/\[\/[^\]\s]+\]/g);
  if (bracketLinks) {
    errors.push(`Unconverted bracket-notation internal links: ${bracketLinks.slice(0, 3).join(', ')}`);
  }

  // (c2) All markdown internal links resolve to known routes
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  const unknown = [];
  while ((m = linkRegex.exec(body)) !== null) {
    const href = m[2];
    if (!href.startsWith('/') || href.startsWith('//')) continue; // skip absolute/external
    const base = href.split('#')[0].split('?')[0]; // strip fragment/query
    if (!VALID_ROUTES.has(base) && !base.startsWith('/blog/')) {
      unknown.push(href);
    }
  }
  if (unknown.length) {
    errors.push(`Internal links to unknown routes: ${unknown.slice(0, 3).join(', ')}`);
  }
}

function checkPlaceholders(body, errors) {
  if (/\bTODO\b/.test(body))         errors.push('Body contains "TODO" placeholder');
  if (/\(placeholder/i.test(body))   errors.push('Body contains "(placeholder" text');
  if (/\[PLACEHOLDER\]/i.test(body)) errors.push('Body contains "[PLACEHOLDER]" marker');
}

function checkWordCount(body, errors) {
  const words = body.replace(/[#*_`\[\]()]/g, '').trim().split(/\s+/).filter(Boolean).length;
  if (words < 900) errors.push(`Word count too low: ${words} words (minimum 900)`);
}

function checkDuplicate(slug, errors) {
  // (f1) Slug in blog/posts.js
  if (fs.existsSync(POSTS_PATH)) {
    const postsRaw = fs.readFileSync(POSTS_PATH, 'utf8');
    if (postsRaw.includes(`slug: '${slug}'`) || postsRaw.includes(`slug: "${slug}"`)) {
      errors.push(`Duplicate slug: '${slug}' already exists in blog/posts.js`);
    }
  }
  // (f2) blog/[slug].html already exists
  const htmlPath = path.join(BLOG_DIR, `${slug}.html`);
  if (fs.existsSync(htmlPath)) {
    errors.push(`Duplicate slug: blog/${slug}.html already exists on disk`);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  const filename = findCandidate();

  if (!filename) {
    done('noop', '', []);
    return;
  }

  const slug    = filename.replace(/\.md$/, '');
  const content = fs.readFileSync(path.join(DRAFTS_DIR, filename), 'utf8');
  const fm      = parseFrontmatter(content);
  const body    = getBody(content);
  const errors  = [];

  checkFrontmatter(fm, errors);
  checkFactcheck(slug, errors);
  checkLinks(body, errors);
  checkPlaceholders(body, errors);
  checkWordCount(body, errors);
  checkDuplicate(slug, errors);

  if (errors.length === 0) {
    done('pass', slug, []);
  } else {
    done('fail', slug, errors);
  }
}

main();
