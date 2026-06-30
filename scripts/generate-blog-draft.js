#!/usr/bin/env node
// scripts/generate-blog-draft.js
//
// Generates ONE draft blog post from the next queued topic in
// blog/topics.js, using the Anthropic API. Writes the draft (markdown)
// and a companion fact-check checklist into /blog-drafts/.
//
// THIS SCRIPT NEVER PUBLISHES ANYTHING:
//   - does NOT write to blog/posts.js (the live manifest the blog index reads)
//   - does NOT write to sitemap.xml
//   - does NOT create a live /blog/[slug].html page
//   - /blog-drafts/ is excluded from the GitHub Pages deploy (see
//     .github/workflows/deploy.yml exclude_assets) — drafts are never
//     served on the live site, even accidentally.
//
// Taking a draft live is always a deliberate, manual, human action.
// See blog-drafts/PUBLISHING.md for the exact steps.
//
// Usage:
//   ANTHROPIC_API_KEY=sk-ant-... node scripts/generate-blog-draft.js
//
// Requires Node 18+ (uses built-in fetch). No npm dependencies.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TOPICS_PATH = path.join(ROOT, 'blog', 'topics.js');
const DRAFTS_DIR = path.join(ROOT, 'blog-drafts');

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';
const API_KEY = process.env.ANTHROPIC_API_KEY;

// Verified CLF-C02 facts the model must not contradict — sourced from
// CLAUDE.md "Exam Facts (CLF-C02)", which is itself sourced from the
// official AWS exam guide. Keep this block in sync with CLAUDE.md.
const CLF_C02_FACTS = `
- Exam code: CLF-C02. Full name: AWS Certified Cloud Practitioner. Level: Foundational.
- 65 total questions per exam: 50 scored + 15 unscored (unscored questions are not identifiable during the exam).
- Duration: 90 minutes.
- Passing score: 700 out of 1000. Score range: 100-1000 (scaled, not a raw percentage).
- Standard exam registration fee: $100 USD (subject to change; do not state this as permanent).
- Domain weightings: 1) Cloud Concepts 24% — 2) Security and Compliance 30% — 3) Cloud Technology and Services 34% — 4) Billing, Pricing, and Support 12%.
- Question types: multiple-choice (1 correct answer) and multiple-response (exactly 2 correct answers, no partial credit).
`.trim();

const CATEGORY_VALUES = [
  'cloud-concepts', 'security-compliance', 'cloud-technology',
  'billing-pricing', 'aws-basics', 'exam-prep-tips', 'career-salary'
];

function loadTopics() {
  delete require.cache[require.resolve(TOPICS_PATH)];
  return require(TOPICS_PATH);
}

// Targeted in-place edit: flips status:'queued' -> status:'drafted' for the
// matching slug only. Deliberately NOT a full-file rewrite from the JS
// array — that would strip comments and reformat the hand-authored file.
function markDrafted(slug) {
  const raw = fs.readFileSync(TOPICS_PATH, 'utf8');
  const re = new RegExp(
    `(slug:\\s*'${slug}'[\\s\\S]*?status:\\s*')queued(')`
  );
  if (!re.test(raw)) {
    throw new Error(`Could not find queued entry for slug "${slug}" in topics.js to update.`);
  }
  fs.writeFileSync(TOPICS_PATH, raw.replace(re, '$1drafted$2'));
}

function buildPrompt(topic) {
  return `You are writing a blog post for cloudpractitionerprep.com, an independent
AWS Certified Cloud Practitioner (CLF-C02) exam-prep resource. This site is
NOT affiliated with, endorsed by, or sponsored by Amazon Web Services, Inc.
or its affiliates. Never imply otherwise anywhere in the article.

TOPIC: ${topic.topic}
TARGET KEYWORD: ${topic.targetKeyword}
CATEGORY: ${topic.category}
PROPOSED SLUG: ${topic.slug}

Verified CLF-C02 exam facts you may rely on and must not contradict:
${CLF_C02_FACTS}

Requirements:
- 1200-1800 words.
- Clear structure using markdown ## (H2) and ### (H3) headings.
- Include an "FAQ" H2 section near the end with 4-6 question/answer pairs
  (use #### for each question, plain text answer below it).
- Naturally include internal links as markdown links to /diagnostic,
  /exam-guide, and /practice-questions at least once each, only where
  contextually relevant — do not force them in unnaturally or repeat them.
- Do not claim or imply AWS affiliation, endorsement, or official status
  anywhere.
- Do not fabricate statistics, prices, percentages, or specific numbers you
  are not confident are correct. If you are not certain of an exact figure
  (e.g. a specific AWS service price, a specific service limit), describe it
  qualitatively instead of inventing a precise number, and flag it in the
  fact-check checklist as "needs current figure from AWS docs" rather than
  stating a guessed number as fact.
- Write for a human studying for the exam, not for search engines — no
  keyword stuffing, no filler.
- Do not fabricate or cite specific salary figures, job posting counts, or
  market statistics as if from a named source unless you are citing a
  well-known, stable figure — when in doubt, describe ranges/trends
  qualitatively and flag the claim in the fact-check checklist.

Output format — respond with ONLY the following three sections, in this
exact order, no preamble or commentary before or after:

---FRONTMATTER---
title: <title, under 60 characters, no surrounding quotes>
slug: <url-slug, lowercase-with-hyphens, close to "${topic.slug}">
excerpt: <1-2 sentence summary, under 155 characters, no surrounding quotes>
readingTime: <estimate at 200 words/minute, formatted like "7 min read">
category: ${topic.category}
---END FRONTMATTER---

<the full markdown article body, starting with a single # H1 matching the title>

---FACT-CHECK CHECKLIST---
<a markdown checklist, ONE item per specific factual claim made in the
article above that a human must verify before publishing. Include: every
AWS service name + behavior/capability claim, every number/price/limit/date,
every claim about exam mechanics not already covered by the verified facts
list above, and every salary/market/career claim. Format each line exactly
as:
- [ ] <the specific claim, quoted or paraphrased> — verify against: <where to check, e.g. "AWS S3 pricing page" or "official CLF-C02 exam guide">
If the article makes no claims needing verification beyond the provided
verified facts, write a single line: "- [ ] No additional claims beyond the verified facts list — re-read for accuracy regardless."
---END FACT-CHECK CHECKLIST---`;
}

async function callClaude(prompt) {
  if (!API_KEY) {
    throw new Error('ANTHROPIC_API_KEY environment variable is not set.');
  }
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      messages: [{ role: 'user', content: prompt }]
    })
  });
  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Anthropic API error ${res.status}: ${errBody}`);
  }
  const data = await res.json();
  return data.content.map((block) => block.text || '').join('');
}

function parseResponse(text) {
  const fm = text.match(/---FRONTMATTER---([\s\S]*?)---END FRONTMATTER---/);
  const fc = text.match(/---FACT-CHECK CHECKLIST---([\s\S]*?)---END FACT-CHECK CHECKLIST---/);
  if (!fm || !fc) {
    throw new Error('Model response did not match the expected ---FRONTMATTER---/---FACT-CHECK CHECKLIST--- format. Raw response saved for inspection.');
  }
  const body = text
    .slice(fm.index + fm[0].length, fc.index)
    .trim();

  const frontmatter = {};
  fm[1].trim().split('\n').forEach((line) => {
    const m = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (m) frontmatter[m[1].trim()] = m[2].trim();
  });

  return { frontmatter, body, factCheck: fc[1].trim() };
}

function validateFrontmatter(fm, topic) {
  const required = ['title', 'slug', 'excerpt', 'readingTime', 'category'];
  const missing = required.filter((k) => !fm[k]);
  if (missing.length) {
    throw new Error(`Generated frontmatter is missing required field(s): ${missing.join(', ')}`);
  }
  if (!CATEGORY_VALUES.includes(fm.category)) {
    throw new Error(`Generated category "${fm.category}" is not one of the 7 valid categories: ${CATEGORY_VALUES.join(', ')}`);
  }
  if (fm.title.length > 60) {
    console.warn(`WARNING: generated title is ${fm.title.length} chars (target <60): "${fm.title}"`);
  }
  if (fm.excerpt.length > 155) {
    console.warn(`WARNING: generated excerpt is ${fm.excerpt.length} chars (target <155): "${fm.excerpt}"`);
  }
}

function formatDraftFile(fm, body, topic) {
  const today = new Date().toISOString().slice(0, 10);
  return `<!--
DRAFT — NOT PUBLISHED.
Generated: ${today}
Source topic: ${topic.topic} (blog/topics.js slug: ${topic.slug})
Model: ${MODEL}

Do NOT add this to blog/posts.js or sitemap.xml until:
  1. Every item in the companion ${fm.slug}.factcheck.md has been verified
     against official AWS documentation and checked off.
  2. The content has been read end-to-end by a human for accuracy and tone.
See blog-drafts/PUBLISHING.md for the full publish checklist.
-->

---
title: ${fm.title}
slug: ${fm.slug}
excerpt: ${fm.excerpt}
readingTime: ${fm.readingTime}
category: ${fm.category}
date: ${today}  (placeholder — set to the actual publish date when you publish)
---

${body}
`;
}

function formatFactCheckFile(fm, factCheck, topic) {
  return `# Fact-check checklist — ${fm.title}

Draft: \`${fm.slug}.md\`
Generated: ${new Date().toISOString().slice(0, 10)}

**Every item below must be verified against official AWS documentation (or
the official CLF-C02 exam guide) before this draft can be published.**
Do not assume any AI-generated fact, number, price, service-behavior claim,
or statistic is correct — verify, then check it off. If a claim turns out
to be wrong or outdated, fix it in \`${fm.slug}.md\` before publishing.

${factCheck}

## Sign-off

- [ ] All claims above verified against official sources
- [ ] Read the full draft end-to-end for tone, accuracy, and AWS
      non-affiliation compliance
- [ ] Reviewed by: _______________________  Date: _______________________
`;
}

async function main() {
  const topics = loadTopics();
  const next = topics.find((t) => t.status === 'queued');

  if (!next) {
    console.log('No queued topics remaining in blog/topics.js. Add more before running again.');
    return;
  }

  console.log(`Generating draft for: "${next.topic}" (category: ${next.category})`);

  const prompt = buildPrompt(next);
  const raw = await callClaude(prompt);
  const { frontmatter, body, factCheck } = parseResponse(raw);
  validateFrontmatter(frontmatter, next);

  if (!fs.existsSync(DRAFTS_DIR)) fs.mkdirSync(DRAFTS_DIR, { recursive: true });

  const slug = frontmatter.slug;
  const draftPath = path.join(DRAFTS_DIR, `${slug}.md`);
  const factCheckPath = path.join(DRAFTS_DIR, `${slug}.factcheck.md`);

  if (fs.existsSync(draftPath)) {
    throw new Error(`Draft already exists at ${draftPath} — refusing to overwrite. Remove it manually if you want to regenerate.`);
  }

  fs.writeFileSync(draftPath, formatDraftFile(frontmatter, body, next));
  fs.writeFileSync(factCheckPath, formatFactCheckFile(frontmatter, factCheck, next));

  markDrafted(next.slug);

  console.log(`Draft written:      blog-drafts/${slug}.md`);
  console.log(`Fact-check written: blog-drafts/${slug}.factcheck.md`);
  console.log(`blog/topics.js: marked "${next.slug}" as drafted.`);
  console.log('\nThis is a DRAFT ONLY. It has not been published anywhere.');
  console.log('See blog-drafts/PUBLISHING.md for the human review and publish steps.');
}

main().catch((err) => {
  console.error('Draft generation failed:', err.message);
  process.exitCode = 1;
});
