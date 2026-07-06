#!/usr/bin/env node
// scripts/hold-draft.js
//
// Renames a failed draft so the pipeline does not retry it on the next run.
// Reads SMOKE_SLUG and SMOKE_REASONS from env.
//
// Actions:
//   - blog-drafts/[slug].md          → blog-drafts/_held_[slug].md
//   - blog-drafts/[slug].factcheck.md → blog-drafts/_held_[slug].factcheck.md  (if exists)
//   - Flips topic status in blog/topics.js: drafted → needs-manual-attention
//   - Appends a HELD row to blog-drafts/review-queue.md

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT        = path.join(__dirname, '..');
const DRAFTS_DIR  = path.join(ROOT, 'blog-drafts');
const TOPICS_PATH = path.join(ROOT, 'blog', 'topics.js');
const QUEUE_PATH  = path.join(DRAFTS_DIR, 'review-queue.md');

function initQueueFile() {
  return `# Blog Auto-Publish Review Queue

Posts and held drafts from the automated pipeline. Review weekly.

- **Auto-published**: visit the live URL, spot-check accuracy, mark reviewed (change ⬜ to ✅ and commit).
- **HELD**: draft is at \`blog-drafts/_held_[slug].md\` — fix the issue, rename to \`[slug].md\`, and the next pipeline run retries.

| Title | Date | Live URL | Status |
|-------|------|----------|--------|
`;
}

function main() {
  const slug    = process.env.SMOKE_SLUG;
  const reasons = process.env.SMOKE_REASONS || '(no reasons provided)';

  if (!slug) throw new Error('SMOKE_SLUG environment variable is not set');

  const date = new Date().toISOString().slice(0, 10);

  // Rename draft
  const from = path.join(DRAFTS_DIR, `${slug}.md`);
  const to   = path.join(DRAFTS_DIR, `_held_${slug}.md`);
  if (fs.existsSync(from)) {
    fs.renameSync(from, to);
    console.log(`Renamed: blog-drafts/${slug}.md → blog-drafts/_held_${slug}.md`);
  } else {
    console.warn(`Draft not found at ${from} — skipping rename`);
  }

  // Rename factcheck if present
  const fcFrom = path.join(DRAFTS_DIR, `${slug}.factcheck.md`);
  const fcTo   = path.join(DRAFTS_DIR, `_held_${slug}.factcheck.md`);
  if (fs.existsSync(fcFrom)) {
    fs.renameSync(fcFrom, fcTo);
    console.log(`Renamed: blog-drafts/${slug}.factcheck.md → blog-drafts/_held_${slug}.factcheck.md`);
  }

  // Flip topic status: drafted → needs-manual-attention
  // generate-blog-draft.js only picks status:'queued', so this topic will
  // never be auto-retried — a human must change it back to 'queued' manually.
  if (fs.existsSync(TOPICS_PATH)) {
    const raw = fs.readFileSync(TOPICS_PATH, 'utf8');
    const re  = new RegExp(
      `(slug:\\s*['"]${slug}['"][\\s\\S]*?status:\\s*')drafted(')`
    );
    if (re.test(raw)) {
      fs.writeFileSync(TOPICS_PATH, raw.replace(re, "$1needs-manual-attention$2"));
      console.log(`Updated: blog/topics.js — ${slug} → needs-manual-attention`);
    } else {
      console.warn(`WARNING: could not find ${slug} with status 'drafted' in topics.js — skipping status update`);
    }
  }

  // Append HELD row to review queue
  if (!fs.existsSync(QUEUE_PATH)) {
    fs.writeFileSync(QUEUE_PATH, initQueueFile());
  }
  const row = `| HELD: ${slug} | ${date} | \`blog-drafts/_held_${slug}.md\` | ⚠️ Smoke-test failed: ${reasons.replace(/\|/g, ';')} |\n`;
  fs.appendFileSync(QUEUE_PATH, row);
  console.log(`Appended HELD entry to: blog-drafts/review-queue.md`);

  console.log(`\nDraft held: blog-drafts/_held_${slug}.md`);
  console.log(`Reasons: ${reasons}`);
  console.log('Next pipeline run will generate a fresh draft from the topic queue.');
}

main();
