# Blog pipeline — automated + manual reference

This folder (`/blog-drafts/`) holds AI-generated drafts produced by
`scripts/generate-blog-draft.js`. **Nothing in this folder is ever served on
the live site** — it is excluded from the GitHub Pages deploy (see
`.github/workflows/deploy.yml`).

---

## Automated pipeline (primary flow)

The scheduled workflow (`.github/workflows/blog-draft.yml`) runs every
**Wednesday at 09:00 UTC**:

1. **Generate** — If no publishable candidate exists in `blog-drafts/`, calls
   the Anthropic API to generate a draft from the next `queued` topic in
   `blog/topics.js`. Writes `[slug].md` + `[slug].factcheck.md`.
2. **Smoke test** — `scripts/smoke-test-draft.js` runs 6 checks:
   - (a) All required frontmatter fields present
   - (b) Companion `.factcheck.md` exists, non-trivial, no HARD ERROR markers
   - (c) No unconverted `[/path]` bracket links; all internal links on known routes
   - (d) No `TODO` / `(placeholder` / `[PLACEHOLDER]` markers in body
   - (e) Body word count ≥ 900
   - (f) Slug not already in `blog/posts.js` or as `blog/[slug].html`
3. **Publish (pass)** — `scripts/publish-draft.js` converts markdown → HTML,
   fills `blog/post-template.html`, writes `blog/[slug].html`, updates
   `blog/posts.js`, `sitemap.xml`, and `blog/topics.js`, deletes the draft
   files, and appends a row to `blog-drafts/review-queue.md`. All changes are
   committed and pushed directly to `main`.
4. **Hold (fail)** — `scripts/hold-draft.js` renames the draft to
   `_held_[slug].md` (skipped by future candidate searches), appends a HELD
   row to `blog-drafts/review-queue.md`, and commits. The next pipeline run
   generates a fresh draft.

### Weekly review duty

After each Wednesday run, check **`blog-drafts/review-queue.md`** (in the
repo, not on the live site — it's excluded from deploy):

- **Auto-published posts**: visit the live URL, read it, verify accuracy
  against official AWS docs, change ⬜ to ✅ and commit.
- **HELD entries**: the draft is at `blog-drafts/_held_[slug].md`. Fix the
  smoke-test failure, rename to `[slug].md`, and the next Wednesday's run
  retries it automatically.

The pipeline has **no safety gate** beyond the smoke test — it will publish
whatever passes. Human review is the only quality check; do it weekly.

---

## Manual publish flow (fallback / override)

If you need to publish or fix a post outside the automated schedule, do it
manually following these steps:

### 1. Review the draft

1. Open `blog-drafts/[slug].md`. Read it end-to-end.
2. Check tone, accuracy, and structure.
3. Confirm there is no claim of AWS affiliation, endorsement, or official
   status (hard requirement per CLAUDE.md on every page).

### 2. Fact-check pass

1. Open `blog-drafts/[slug].factcheck.md`.
2. For **every** item: verify against official AWS docs or the CLF-C02 exam
   guide — not your memory, not the draft itself.
3. Fix any wrong claims in `[slug].md` before checking them off.
4. Fill in the sign-off block (name + date).

### 3. Convert to a live page

Run `SMOKE_SLUG=[slug] node scripts/publish-draft.js` — it performs steps 3–8
of the old manual checklist automatically:
- Converts markdown to HTML and fills `blog/post-template.html`
- Writes `blog/[slug].html`
- Appends to `blog/posts.js`
- Inserts into `sitemap.xml`
- Marks `blog/topics.js` status as `published`
- Deletes draft files
- Appends a row to `review-queue.md`

Then commit all changes and push. The existing deploy workflow publishes to
GitHub Pages automatically.

### 4. If publish-draft.js is unavailable

Follow the original manual steps instead:
1. Copy `blog/post-template.html` → `blog/[slug].html`
2. Fill every `TODO:` (title, description, canonical, OG/Twitter, JSON-LD,
   breadcrumb, h1, date, reading time, TOC, article body)
3. Add entry to `blog/posts.js` (slug, title, date, readingTime, excerpt, category)
4. Add `<url>` block to `sitemap.xml` (priority 0.6, changefreq monthly)
5. Change status in `blog/topics.js`: `drafted` → `published`
6. Delete `blog-drafts/[slug].md` and `[slug].factcheck.md`
7. Commit all changes and push

---

**Reminder:** `blog-drafts/` is excluded from the GitHub Pages deploy — its
contents are never reachable by URL on the live site.
