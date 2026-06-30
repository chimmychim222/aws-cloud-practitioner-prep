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
// OUTPUT FORMAT: this script asks Claude for structured output via tool
// use (a forced function call), not delimiter-separated free text. An
// earlier version asked the model to reproduce literal markers like
// "---FRONTMATTER---" in plain text — that failed in production because
// the model used the far more common Jekyll-style `---`/`---` frontmatter
// convention instead of our bespoke marker text. Forcing a tool call with
// a JSON schema makes the response shape an API-level guarantee instead
// of a prompting convention. A forgiving text-based parser remains as a
// fallback, and any unrecoverable failure now actually writes the raw
// API response to disk (the previous version's error message claimed to
// do this but never did).
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

// ── Structured-output tool schema ─────────────────────────────────────
// Forcing this tool call (via tool_choice below) is what actually
// guarantees parseable output — see the file header comment.
const DRAFT_TOOL = {
  name: 'submit_blog_draft',
  description: 'Submit the completed CLF-C02 blog post draft and its fact-check checklist.',
  input_schema: {
    type: 'object',
    properties: {
      title: { type: 'string', description: 'Post title, under 60 characters, no surrounding quotes.' },
      slug: { type: 'string', description: 'URL slug, lowercase-with-hyphens.' },
      excerpt: { type: 'string', description: '1-2 sentence summary, under 155 characters, no surrounding quotes.' },
      readingTime: { type: 'string', description: 'Estimate at 200 words/minute, formatted like "7 min read".' },
      category: { type: 'string', enum: CATEGORY_VALUES },
      bodyMarkdown: {
        type: 'string',
        description: 'Full article body in markdown. Must start with a single "# " H1 matching the title. 1200-1800 words. Use ## and ### for structure. Include an "## FAQ" section near the end with 4-6 "#### Question" headings each followed by a plain-text answer. Include markdown links to /diagnostic, /exam-guide, and /practice-questions at least once each, only where contextually relevant.'
      },
      factCheckChecklist: {
        type: 'array',
        description: 'One entry per specific factual claim in bodyMarkdown that a human must verify before publishing: AWS service behavior/capability claims, numbers, prices, limits, dates, exam-mechanics claims not already covered by the supplied verified facts, and salary/market/career claims. Empty array only if the article truly makes no claims beyond the supplied verified facts.',
        items: {
          type: 'object',
          properties: {
            claim: { type: 'string', description: 'The specific claim made in the article, quoted or paraphrased.' },
            verifyAgainst: { type: 'string', description: 'Where to verify it, e.g. "AWS S3 pricing page" or "official CLF-C02 exam guide".' }
          },
          required: ['claim', 'verifyAgainst']
        }
      }
    },
    required: ['title', 'slug', 'excerpt', 'readingTime', 'category', 'bodyMarkdown', 'factCheckChecklist']
  }
};

function buildPrompt(topic, retryNote) {
  const base = `You are writing a blog post for cloudpractitionerprep.com, an independent
AWS Certified Cloud Practitioner (CLF-C02) exam-prep resource. This site is
NOT affiliated with, endorsed by, or sponsored by Amazon Web Services, Inc.
or its affiliates. Never imply otherwise anywhere in the article.

TOPIC: ${topic.topic}
TARGET KEYWORD: ${topic.targetKeyword}
CATEGORY: ${topic.category}
PROPOSED SLUG: ${topic.slug}

Verified CLF-C02 exam facts you may rely on and must not contradict:
${CLF_C02_FACTS}

Content requirements:
- 1200-1800 words in bodyMarkdown.
- Clear structure using markdown ## (H2) and ### (H3) headings.
- Include an "## FAQ" section near the end with 4-6 question/answer pairs
  (use #### for each question, plain text answer below it).
- Naturally include internal links as markdown links to /diagnostic,
  /exam-guide, and /practice-questions at least once each, only where
  contextually relevant — do not force them in unnaturally or repeat them.
- Do not claim or imply AWS affiliation, endorsement, or official status
  anywhere.
- Do not fabricate statistics, prices, percentages, or specific numbers you
  are not confident are correct. If you are not certain of an exact figure
  (e.g. a specific AWS service price, a specific service limit), describe it
  qualitatively instead of inventing a precise number, and add it to
  factCheckChecklist as "needs current figure from AWS docs" rather than
  stating a guessed number as fact.
- Write for a human studying for the exam, not for search engines — no
  keyword stuffing, no filler.
- Do not fabricate or cite specific salary figures, job posting counts, or
  market statistics as if from a named source unless you are confident they
  are well-known and stable — when in doubt, describe ranges/trends
  qualitatively and flag the claim in factCheckChecklist.

You MUST respond by calling the submit_blog_draft tool with all required
fields filled in. Do not respond with plain text. Do not add commentary
before or after the tool call.`;

  return retryNote ? `${retryNote}\n\n${base}` : base;
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
      max_tokens: 8192,
      tools: [DRAFT_TOOL],
      tool_choice: { type: 'tool', name: 'submit_blog_draft' },
      messages: [{ role: 'user', content: prompt }]
    })
  });
  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Anthropic API error ${res.status}: ${errBody}`);
  }
  return res.json();
}

function extractToolInput(response) {
  const block = (response.content || []).find(
    (b) => b.type === 'tool_use' && b.name === 'submit_blog_draft'
  );
  return block ? block.input : null;
}

// Fallback free-text parser — only reached if the model somehow responds
// with text instead of the forced tool call (shouldn't happen with
// tool_choice, but this is defense-in-depth, not the primary path).
// Forgiving: strips a wrapping code fence, accepts case-insensitive /
// whitespace-tolerant delimiter variants, and falls back to standard
// Jekyll `---`/`---` frontmatter and a "## Fact-Check" heading if the
// literal ---FRONTMATTER---/---FACT-CHECK CHECKLIST--- markers aren't
// present — these are the two real-world deviations that broke the
// previous exact-match version.
function extractTextFallback(text) {
  let t = text.trim();
  const fenceMatch = t.match(/^```[a-zA-Z]*\n([\s\S]*?)\n```$/);
  if (fenceMatch) t = fenceMatch[1].trim();

  const missing = [];

  let fmBlock = null;
  let bodyStart = 0;
  let m = t.match(/-{2,}\s*FRONTMATTER\s*-{2,}([\s\S]*?)-{2,}\s*END\s*FRONTMATTER\s*-{2,}/i);
  if (m) {
    fmBlock = m[1];
    bodyStart = m.index + m[0].length;
  } else {
    m = t.match(/^-{3,}\n([\s\S]*?)\n-{3,}/);
    if (m) {
      fmBlock = m[1];
      bodyStart = m.index + m[0].length;
    }
  }
  if (!fmBlock) {
    missing.push('frontmatter (no ---FRONTMATTER--- block and no leading "---\\n...\\n---" block found)');
  }

  let fcBlock = null;
  let bodyEnd = t.length;
  let fcm = t.match(/-{2,}\s*FACT-?CHECK\s*CHECKLIST\s*-{2,}([\s\S]*?)(?:-{2,}\s*END\s*FACT-?CHECK\s*CHECKLIST\s*-{2,}|$)/i);
  if (fcm) {
    fcBlock = fcm[1];
    bodyEnd = fcm.index;
  } else {
    fcm = t.match(/##\s*Fact-?Check\s*(?:Checklist)?\s*\n([\s\S]*)$/i);
    if (fcm) {
      fcBlock = fcm[1];
      bodyEnd = fcm.index;
    }
  }
  if (!fcBlock) {
    missing.push('fact-check checklist (no ---FACT-CHECK CHECKLIST--- block and no "## Fact-Check" heading found)');
  }

  if (missing.length) return { ok: false, missing };

  const body = t.slice(bodyStart, bodyEnd).trim();
  if (!body || !/^#\s+/.test(body)) {
    missing.push('article body (empty, or does not start with a single "# " H1)');
  }
  if (missing.length) return { ok: false, missing };

  const frontmatter = {};
  fmBlock.trim().split('\n').forEach((line) => {
    const fm = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (fm) frontmatter[fm[1].trim()] = fm[2].trim();
  });

  const requiredFm = ['title', 'slug', 'excerpt', 'readingTime', 'category'];
  const missingFm = requiredFm.filter((k) => !frontmatter[k]);
  if (missingFm.length) {
    return { ok: false, missing: [`frontmatter field(s): ${missingFm.join(', ')}`] };
  }

  return {
    ok: true,
    draft: {
      title: frontmatter.title,
      slug: frontmatter.slug,
      excerpt: frontmatter.excerpt,
      readingTime: frontmatter.readingTime,
      category: frontmatter.category,
      bodyMarkdown: body,
      factCheckChecklist: fcBlock.trim() // raw text, not a structured array — formatFactCheckList handles both
    }
  };
}

function validateDraft(draft) {
  const required = ['title', 'slug', 'excerpt', 'readingTime', 'category', 'bodyMarkdown'];
  const missing = required.filter((k) => !draft[k]);
  if (missing.length) {
    throw new Error(`Draft is missing required field(s): ${missing.join(', ')}`);
  }
  if (!CATEGORY_VALUES.includes(draft.category)) {
    throw new Error(`category "${draft.category}" is not one of the 7 valid categories: ${CATEGORY_VALUES.join(', ')}`);
  }
  const hasChecklist = Array.isArray(draft.factCheckChecklist)
    ? draft.factCheckChecklist.length > 0
    : typeof draft.factCheckChecklist === 'string' && draft.factCheckChecklist.trim().length > 0;
  if (!hasChecklist) {
    throw new Error('factCheckChecklist is empty or missing.');
  }
  const wordCount = draft.bodyMarkdown.trim().split(/\s+/).length;
  if (wordCount < 900 || wordCount > 2200) {
    console.warn(`WARNING: body is ${wordCount} words (target 1200-1800).`);
  }
  if (draft.title.length > 60) {
    console.warn(`WARNING: title is ${draft.title.length} chars (target <60): "${draft.title}"`);
  }
  if (draft.excerpt.length > 155) {
    console.warn(`WARNING: excerpt is ${draft.excerpt.length} chars (target <155): "${draft.excerpt}"`);
  }
}

function saveFailedResponse(label, payload) {
  if (!fs.existsSync(DRAFTS_DIR)) fs.mkdirSync(DRAFTS_DIR, { recursive: true });
  const file = path.join(DRAFTS_DIR, `_failed-${label}-${Date.now()}.json`);
  fs.writeFileSync(file, JSON.stringify(payload, null, 2));
  return path.relative(ROOT, file);
}

function formatFactCheckList(checklist) {
  if (Array.isArray(checklist)) {
    return checklist.map((c) => `- [ ] ${c.claim} — verify against: ${c.verifyAgainst}`).join('\n');
  }
  return String(checklist);
}

function formatDraftFile(draft, topic) {
  const today = new Date().toISOString().slice(0, 10);
  return `<!--
DRAFT — NOT PUBLISHED.
Generated: ${today}
Source topic: ${topic.topic} (blog/topics.js slug: ${topic.slug})
Model: ${MODEL}

Do NOT add this to blog/posts.js or sitemap.xml until:
  1. Every item in the companion ${draft.slug}.factcheck.md has been verified
     against official AWS documentation and checked off.
  2. The content has been read end-to-end by a human for accuracy and tone.
See blog-drafts/PUBLISHING.md for the full publish checklist.
-->

---
title: ${draft.title}
slug: ${draft.slug}
excerpt: ${draft.excerpt}
readingTime: ${draft.readingTime}
category: ${draft.category}
date: ${today}  (placeholder — set to the actual publish date when you publish)
---

${draft.bodyMarkdown}
`;
}

function formatFactCheckFile(draft) {
  return `# Fact-check checklist — ${draft.title}

Draft: \`${draft.slug}.md\`
Generated: ${new Date().toISOString().slice(0, 10)}

**Every item below must be verified against official AWS documentation (or
the official CLF-C02 exam guide) before this draft can be published.**
Do not assume any AI-generated fact, number, price, service-behavior claim,
or statistic is correct — verify, then check it off. If a claim turns out
to be wrong or outdated, fix it in \`${draft.slug}.md\` before publishing.

${formatFactCheckList(draft.factCheckChecklist)}

## Sign-off

- [ ] All claims above verified against official sources
- [ ] Read the full draft end-to-end for tone, accuracy, and AWS
      non-affiliation compliance
- [ ] Reviewed by: _______________________  Date: _______________________
`;
}

// One generation attempt: call the API, try the structured tool-call path,
// fall back to forgiving text parsing, and save the raw response to disk
// before throwing if neither path produces a usable draft.
async function generateOnce(topic, retryNote) {
  const prompt = buildPrompt(topic, retryNote);
  const response = await callClaude(prompt);

  const toolInput = extractToolInput(response);
  if (toolInput) {
    validateDraft(toolInput);
    return toolInput;
  }

  const textBlock = (response.content || []).find((b) => b.type === 'text' && b.text);
  if (textBlock) {
    const fallback = extractTextFallback(textBlock.text);
    if (fallback.ok) {
      validateDraft(fallback.draft);
      return fallback.draft;
    }
    const file = saveFailedResponse('parse', { topic: topic.topic, slug: topic.slug, missing: fallback.missing, rawText: textBlock.text });
    throw new Error(`Could not parse model response. Missing: ${fallback.missing.join('; ')}. Raw response saved to ${file} for inspection.`);
  }

  const file = saveFailedResponse('no-tool-call', { topic: topic.topic, slug: topic.slug, response });
  throw new Error(`Model did not call submit_blog_draft and returned no text content. Raw API response saved to ${file} for inspection.`);
}

async function main() {
  const topics = loadTopics();
  const next = topics.find((t) => t.status === 'queued');

  if (!next) {
    console.log('No queued topics remaining in blog/topics.js. Add more before running again.');
    return;
  }

  console.log(`Generating draft for: "${next.topic}" (category: ${next.category})`);

  let draft;
  try {
    draft = await generateOnce(next, null);
  } catch (firstErr) {
    console.warn(`First attempt failed: ${firstErr.message}`);
    console.log('Retrying once with a stricter format instruction...');
    const retryNote = 'IMPORTANT: your previous response could not be used. You MUST call the submit_blog_draft tool directly as a function call — do not respond with plain text, do not wrap anything in markdown code fences, and do not add commentary before or after the tool call.';
    try {
      draft = await generateOnce(next, retryNote);
    } catch (secondErr) {
      throw new Error(`Draft generation failed after 1 retry.\n  First attempt: ${firstErr.message}\n  Retry attempt: ${secondErr.message}`);
    }
  }

  if (!fs.existsSync(DRAFTS_DIR)) fs.mkdirSync(DRAFTS_DIR, { recursive: true });

  const slug = draft.slug;
  const draftPath = path.join(DRAFTS_DIR, `${slug}.md`);
  const factCheckPath = path.join(DRAFTS_DIR, `${slug}.factcheck.md`);

  if (fs.existsSync(draftPath)) {
    throw new Error(`Draft already exists at ${draftPath} — refusing to overwrite. Remove it manually if you want to regenerate.`);
  }

  fs.writeFileSync(draftPath, formatDraftFile(draft, next));
  fs.writeFileSync(factCheckPath, formatFactCheckFile(draft));

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
