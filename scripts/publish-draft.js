#!/usr/bin/env node
// scripts/publish-draft.js
//
// Runs only when smoke-test-draft.js outputs result=pass.
// Reads SMOKE_SLUG from env, converts the draft markdown → HTML using
// blog/post-template.html, updates all manifests, cleans up, and appends
// a row to blog-drafts/review-queue.md.
//
// No npm dependencies — Node 18+ built-ins only.
//
// Steps:
//   1. Parse frontmatter + body from blog-drafts/[slug].md
//   2. Convert markdown body → HTML (in-house parser)
//   3. Build table of contents from H2/H3 headings
//   4. Extract FAQ pairs from ## FAQ section for FAQPage JSON-LD
//   5. Fill blog/post-template.html with generated content
//   6. Write blog/[slug].html
//   7. Append entry to blog/posts.js
//   8. Insert <url> block in sitemap.xml
//   9. Flip blog/topics.js status drafted → published
//  10. Delete blog-drafts/[slug].md + [slug].factcheck.md
//  11. Append published row to blog-drafts/review-queue.md

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT          = path.join(__dirname, '..');
const DRAFTS_DIR    = path.join(ROOT, 'blog-drafts');
const BLOG_DIR      = path.join(ROOT, 'blog');
const TEMPLATE_PATH = path.join(BLOG_DIR, 'post-template.html');
const POSTS_PATH    = path.join(BLOG_DIR, 'posts.js');
const TOPICS_PATH   = path.join(BLOG_DIR, 'topics.js');
const SITEMAP_PATH  = path.join(ROOT, 'sitemap.xml');
const QUEUE_PATH    = path.join(DRAFTS_DIR, 'review-queue.md');
const BASE_URL      = 'https://cloudpractitionerprep.com';

// ── Frontmatter ───────────────────────────────────────────────────────────────
// Drafts have an HTML comment header before the --- delimiters, so we search
// for the first --- occurrence rather than anchoring at the start of the file.

function parseFrontmatter(content) {
  const fmStart = content.indexOf('---\n');
  if (fmStart === -1) throw new Error('No frontmatter --- found in draft');
  const fmEnd = content.indexOf('\n---\n', fmStart + 4);
  if (fmEnd === -1) throw new Error('No closing frontmatter --- found in draft');

  const fmText = content.slice(fmStart + 4, fmEnd);
  const body   = content.slice(fmEnd + 5);   // skip the \n---\n

  const fm = {};
  fmText.split('\n').forEach(line => {
    const m = line.match(/^([a-zA-Z]+):\s*(.+)$/);
    if (m) {
      // Strip trailing " (placeholder ...)" added by generate-blog-draft.js
      fm[m[1].trim()] = m[2].trim().replace(/\s*\(placeholder[^)]*\)\s*$/, '').trim();
    }
  });
  return { fm, body };
}

// ── Markdown → HTML ───────────────────────────────────────────────────────────

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Inline-only HTML conversion (bold, italic, code, links)
function inline(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*\*([^*\n]+)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, txt, href) => `<a href="${href}">${txt}</a>`);
}

function parseTable(block) {
  const rows = block.split('\n').map(r => r.trim()).filter(Boolean);
  if (rows.length < 2) return `<p>${inline(block)}</p>\n`;
  const headers = rows[0].split('|').filter(c => c.trim())
    .map(c => `<th>${inline(c.trim())}</th>`);
  const body = rows.slice(2).map(row => {
    const cells = row.split('|').filter(c => c.trim())
      .map(c => `<td>${inline(c.trim())}</td>`);
    return `        <tr>${cells.join('')}</tr>`;
  });
  return (
    `<table>\n` +
    `        <thead><tr>${headers.join('')}</tr></thead>\n` +
    `        <tbody>\n${body.join('\n')}\n        </tbody>\n` +
    `      </table>\n`
  );
}

const CTA_HTML = `
        <div class="blog-cta">
          <h3>Not sure where you stand?</h3>
          <p>Take the free 10-question CLF-C02 diagnostic and get an instant score, your weakest domain, and a study plan.</p>
          <a href="/diagnostic" class="btn btn-primary btn-lg" data-cta="primary">Take the free diagnostic</a>
        </div>
`;

// Converts a markdown body to HTML, collecting TOC entries and FAQ pairs.
// Returns { html, toc: [{id, text, level}], faq: [{q, a}] }
function convertMarkdown(markdown) {
  const blocks = [];
  let cur = [];
  for (const line of markdown.split('\n')) {
    if (line.trim() === '') {
      if (cur.length) { blocks.push(cur.join('\n')); cur = []; }
    } else {
      cur.push(line);
    }
  }
  if (cur.length) blocks.push(cur.join('\n'));

  const toc  = [];
  const faq  = [];
  let html   = '';
  let h2Count       = 0;
  let ctaDone       = false;
  let inFaqSection  = false;
  let pendingFaqQ   = null;

  for (const block of blocks) {
    const first = block.split('\n')[0];

    // H1 — skip; already in blog-header <h1>
    if (/^# [^#]/.test(first)) continue;

    // H2
    if (/^## /.test(first)) {
      h2Count++;
      if (h2Count === 3 && !ctaDone) { html += CTA_HTML; ctaDone = true; }
      const text = first.slice(3).trim();
      const id   = slugify(text);
      toc.push({ id, text, level: 2 });
      inFaqSection = /^faq$/i.test(id) || /frequently.asked/i.test(text);
      if (inFaqSection) pendingFaqQ = null;
      html += `\n        <h2 id="${id}">${inline(text)}</h2>\n`;
      continue;
    }

    // H3
    if (/^### /.test(first)) {
      const text = first.slice(4).trim();
      const id   = slugify(text);
      toc.push({ id, text, level: 3 });
      html += `        <h3 id="${id}">${inline(text)}</h3>\n`;
      continue;
    }

    // H4 — FAQ questions rendered as h3, no TOC entry
    if (/^#### /.test(first)) {
      const text = first.slice(5).trim();
      if (inFaqSection) pendingFaqQ = text;
      html += `        <h3>${inline(text)}</h3>\n`;
      continue;
    }

    // Horizontal rule
    if (/^-{3,}$/.test(first.trim())) { html += `        <hr>\n`; continue; }

    // Blockquote
    if (first.startsWith('> ')) {
      const lines = block.split('\n').map(l => l.replace(/^> ?/, '')).map(inline);
      html += `        <blockquote><p>${lines.join('<br>')}</p></blockquote>\n`;
      continue;
    }

    // Unordered list
    if (/^[-*] /.test(first)) {
      const items = block.split('\n')
        .filter(l => /^[-*] /.test(l.trim()))
        .map(l => `          <li>${inline(l.replace(/^[-*]\s+/, ''))}</li>`);
      html += `        <ul>\n${items.join('\n')}\n        </ul>\n`;
      continue;
    }

    // Ordered list
    if (/^\d+\. /.test(first)) {
      const items = block.split('\n')
        .filter(l => /^\d+\.\s/.test(l.trim()))
        .map(l => `          <li>${inline(l.replace(/^\d+\.\s+/, ''))}</li>`);
      html += `        <ol>\n${items.join('\n')}\n        </ol>\n`;
      continue;
    }

    // Table
    if (first.startsWith('|')) {
      html += '        ' + parseTable(block).trimStart();
      continue;
    }

    // Paragraph — also capture FAQ answers
    const paraHtml = block.split('\n').map(inline).join(' ');
    if (inFaqSection && pendingFaqQ) {
      faq.push({ q: pendingFaqQ, a: block.split('\n').join(' ').replace(/\s+/g, ' ').trim() });
      pendingFaqQ = null;
    }
    html += `        <p>${paraHtml}</p>\n`;
  }

  if (!ctaDone) html += CTA_HTML;

  return { html, toc, faq };
}

// ── TOC HTML ──────────────────────────────────────────────────────────────────

function buildToc(toc) {
  return toc.map(({ id, text, level }) => {
    const cls = level === 3 ? ' class="toc-h3"' : '';
    return `          <li${cls}><a href="#${id}">${escHtml(text)}</a></li>`;
  }).join('\n');
}

// ── JSON-LD ───────────────────────────────────────────────────────────────────

function buildJsonLd(fm, date, faq) {
  const url     = `${BASE_URL}/blog/${fm.slug}`;
  const titFull = `${fm.title} — Cloud Practitioner Prep`;

  const article = {
    '@context':  'https://schema.org',
    '@type':     'Article',
    headline:    fm.title,
    description: fm.excerpt,
    url,
    datePublished: date,
    dateModified:  date,
    author:    { '@type': 'Organization', name: 'Cloud Practitioner Prep', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name:    'Cloud Practitioner Prep',
      logo:    { '@type': 'ImageObject', url: `${BASE_URL}/og-image.png` }
    },
    image:             `${BASE_URL}/og-image.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: titFull, item: url }
    ]
  };

  const schemas = [article, breadcrumb];

  if (faq && faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type':    'FAQPage',
      mainEntity: faq.map(({ q, a }) => ({
        '@type': 'Question',
        name:    q,
        acceptedAnswer: { '@type': 'Answer', text: a }
      }))
    });
  }

  return JSON.stringify(schemas, null, 2);
}

// ── Date helpers ──────────────────────────────────────────────────────────────

function formatDisplayDate(iso) {
  // "2026-07-09" → "9 July 2026"
  const [y, mo, d] = iso.split('-').map(Number);
  const months = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  return `${d} ${months[mo - 1]} ${y}`;
}

// ── Template filling ──────────────────────────────────────────────────────────

function fillTemplate(template, fm, date, bodyHtml, tocHtml, jsonLd) {
  const titFull     = `${fm.title} — Cloud Practitioner Prep`;
  const url         = `${BASE_URL}/blog/${fm.slug}`;
  const displayDate = formatDisplayDate(date);

  let html = template;

  // <title>
  html = html.replace(
    '<title>TODO Post Title — Cloud Practitioner Prep</title>',
    `<title>${escHtml(titFull)}</title>`
  );

  // meta description
  html = html.replace(
    '<meta name="description" content="TODO post description.">',
    `<meta name="description" content="${escHtml(fm.excerpt)}">`
  );

  // canonical href
  html = html.replace(
    'href="https://cloudpractitionerprep.com/blog/todo-slug">',
    `href="${url}">`
  );

  // og:title (template uses alignment spaces)
  html = html.replace(
    /<meta property="og:title"\s+content="TODO Post Title — Cloud Practitioner Prep">/,
    `<meta property="og:title"       content="${escHtml(titFull)}">`
  );

  // og:description
  html = html.replace(
    /(<meta property="og:description" content=")TODO OG description\.(")/,
    `$1${escHtml(fm.excerpt)}$2`
  );

  // og:url (only the meta tag; the JSON-LD occurrence is replaced wholesale below)
  html = html.replace(
    /<meta property="og:url"\s+content="https:\/\/cloudpractitionerprep\.com\/blog\/todo-slug">/,
    `<meta property="og:url"         content="${url}">`
  );

  // twitter:title
  html = html.replace(
    /<meta name="twitter:title"\s+content="TODO Twitter Title">/,
    `<meta name="twitter:title"       content="${escHtml(titFull)}">`
  );

  // twitter:description
  html = html.replace(
    /(<meta name="twitter:description" content=")TODO Twitter description\.(")/,
    `$1${escHtml(fm.excerpt)}$2`
  );

  // Replace entire JSON-LD script block
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${jsonLd}\n  </script>`
  );

  // Breadcrumb <span>
  html = html.replace(
    '<span><!-- TODO: post title --></span>',
    `<span>${escHtml(fm.title)}</span>`
  );

  // Blog header h1
  html = html.replace(
    '<h1><!-- TODO: post title --></h1>',
    `<h1>${escHtml(fm.title)}</h1>`
  );

  // Published date
  html = html.replace(
    '<span><!-- TODO: e.g. Published 30 June 2026 --></span>',
    `<span>Published ${escHtml(displayDate)}</span>`
  );

  // Reading time
  html = html.replace(
    '<span><!-- TODO: e.g. 6 min read --></span>',
    `<span>${escHtml(fm.readingTime)}</span>`
  );

  // Table of contents — exact match against template placeholder content
  const tocOld = [
    '        <ol>',
    '          <li><a href="#TODO-anchor-1">TODO heading 1</a></li>',
    '          <li><a href="#TODO-anchor-2">TODO heading 2</a></li>',
    '        </ol>'
  ].join('\n');
  const tocNew = `        <ol>\n${tocHtml}\n        </ol>`;
  if (html.includes(tocOld)) {
    html = html.replace(tocOld, tocNew);
  } else {
    // Fallback: match any <ol> inside the blog-toc nav
    html = html.replace(
      /(<nav class="blog-toc"[\s\S]*?<ol>)[\s\S]*?(<\/ol>)/,
      (_, pre, suf) => `${pre}\n${tocHtml}\n        ${suf}`
    );
    console.warn('WARNING: TOC placeholder not found — used fallback replacement');
  }

  // Article body
  html = html.replace(
    /<article class="blog-body">[\s\S]*?<\/article>/,
    `<article class="blog-body">\n${bodyHtml}\n      </article>`
  );

  return html;
}

// ── Manifest updates ──────────────────────────────────────────────────────────

function updatePosts(fm, date) {
  const raw = fs.readFileSync(POSTS_PATH, 'utf8').replace(/\r\n/g, '\n');
  const esc = s => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const entry = (
    `,\n  {\n` +
    `    slug: '${esc(fm.slug)}',\n` +
    `    title: '${esc(fm.title)}',\n` +
    `    date: '${date}',\n` +
    `    readingTime: '${esc(fm.readingTime)}',\n` +
    `    excerpt: '${esc(fm.excerpt)}',\n` +
    `    category: '${esc(fm.category)}'\n` +
    `  }`
  );
  const marker = '\n];';
  const idx = raw.lastIndexOf(marker);
  if (idx === -1) throw new Error('Could not find closing ]; in blog/posts.js');
  fs.writeFileSync(POSTS_PATH, raw.slice(0, idx) + entry + raw.slice(idx));
}

function updateSitemap(fm, date) {
  const raw = fs.readFileSync(SITEMAP_PATH, 'utf8').replace(/\r\n/g, '\n');
  const block = (
    `\n  <url>\n` +
    `    <loc>${BASE_URL}/blog/${fm.slug}</loc>\n` +
    `    <lastmod>${date}</lastmod>\n` +
    `    <changefreq>monthly</changefreq>\n` +
    `    <priority>0.6</priority>\n` +
    `  </url>\n`
  );
  const insertBefore = raw.includes('  <!-- Legal -->') ? '  <!-- Legal -->' : '</urlset>';
  if (!raw.includes(insertBefore)) {
    throw new Error(`sitemap.xml: could not find insertion point "${insertBefore}"`);
  }
  fs.writeFileSync(SITEMAP_PATH, raw.replace(insertBefore, block + insertBefore));
}

function updateTopics(slug) {
  const raw = fs.readFileSync(TOPICS_PATH, 'utf8');
  const re  = new RegExp(
    `(slug:\\s*['"]${slug}['"][\\s\\S]*?status:\\s*')(?:queued|drafted)(')`
  );
  if (!re.test(raw)) {
    console.warn(`WARNING: could not find "${slug}" in topics.js to mark published — skipping`);
    return;
  }
  fs.writeFileSync(TOPICS_PATH, raw.replace(re, '$1published$2'));
}

function appendToQueue(fm, date) {
  const url = `${BASE_URL}/blog/${fm.slug}`;
  const row = `| ${fm.title} | ${date} | [${url}](${url}) | ⬜ Not yet reviewed |\n`;
  if (!fs.existsSync(QUEUE_PATH)) {
    fs.writeFileSync(QUEUE_PATH, initQueueFile());
  }
  fs.appendFileSync(QUEUE_PATH, row);
}

function initQueueFile() {
  return (
    `# Blog Auto-Publish Review Queue\n\n` +
    `Posts auto-published by the pipeline. Review weekly.\n\n` +
    `- **Auto-published**: visit the live URL, spot-check accuracy, change ⬜ to ✅ and commit.\n` +
    `- **HELD**: draft is at \`blog-drafts/_held_[slug].md\` — fix the issue, rename to \`[slug].md\`, and the next pipeline run retries.\n\n` +
    `| Title | Date | Live URL | Status |\n` +
    `|-------|------|----------|--------|\n`
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  const slug = process.env.SMOKE_SLUG;
  if (!slug) throw new Error('SMOKE_SLUG env var is not set');

  const draftPath = path.join(DRAFTS_DIR, `${slug}.md`);
  if (!fs.existsSync(draftPath)) throw new Error(`Draft not found: ${draftPath}`);

  const template  = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const content   = fs.readFileSync(draftPath, 'utf8');
  const date      = new Date().toISOString().slice(0, 10);

  const { fm, body }       = parseFrontmatter(content);
  const { html, toc, faq } = convertMarkdown(body);
  const tocHtml             = buildToc(toc);
  const jsonLd              = buildJsonLd(fm, date, faq);
  const pageHtml            = fillTemplate(template, fm, date, html, tocHtml, jsonLd);

  fs.writeFileSync(path.join(BLOG_DIR, `${slug}.html`), pageHtml);
  console.log(`Written:  blog/${slug}.html`);

  updatePosts(fm, date);
  console.log(`Updated:  blog/posts.js`);

  updateSitemap(fm, date);
  console.log(`Updated:  sitemap.xml`);

  updateTopics(slug);
  console.log(`Updated:  blog/topics.js`);

  fs.unlinkSync(draftPath);
  const fcPath = path.join(DRAFTS_DIR, `${slug}.factcheck.md`);
  if (fs.existsSync(fcPath)) fs.unlinkSync(fcPath);
  console.log(`Deleted:  blog-drafts/${slug}.md + .factcheck.md`);

  appendToQueue(fm, date);
  console.log(`Appended: blog-drafts/review-queue.md`);

  console.log(`\nPublished: ${BASE_URL}/blog/${slug}`);
}

main();
