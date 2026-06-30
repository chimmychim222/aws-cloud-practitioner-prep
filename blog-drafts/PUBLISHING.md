# Publishing a blog draft — manual checklist

This folder (`/blog-drafts/`) holds AI-generated drafts produced by
`scripts/generate-blog-draft.js` from the topic queue in `blog/topics.js`.
**Nothing in this folder is ever served on the live site** — it's excluded
from the GitHub Pages deploy (see `.github/workflows/deploy.yml`
`exclude_assets`). A draft only becomes a real page when you do the steps
below, deliberately, by hand.

Do not skip the fact-check pass. Do not assume any AI-generated fact, price,
number, or AWS service behavior claim is correct.

---

## 1. Review the draft

1. Open `blog-drafts/[slug].md`. Read it end-to-end.
2. Check tone, accuracy, and structure — does it actually serve someone
   studying for CLF-C02? Cut anything that's filler or off-topic.
3. Confirm there is no claim of AWS affiliation, endorsement, or official
   status anywhere (per CLAUDE.md — this is a hard requirement on every page).

## 2. Fact-check pass

1. Open the companion `blog-drafts/[slug].factcheck.md`.
2. For **every** checklist item: verify it against official AWS
   documentation (docs.aws.amazon.com) or the official CLF-C02 exam guide —
   not against your own memory, not against the draft's own claim.
3. If a claim is correct, check it off. If a claim is wrong, outdated, or
   you can't find an authoritative source for it: fix or remove it in
   `[slug].md` before moving on. Re-verify after editing.
4. Pay special attention to: prices (AWS pricing changes), specific service
   limits/quotas, exam mechanics not already covered by CLAUDE.md's "Exam
   Facts" table, and any salary/market claims (these age fast and are
   easy to overstate).
5. Once every item is checked, fill in the sign-off block at the bottom of
   the `.factcheck.md` file (your name + date).

## 3. Convert to a live page

1. Copy `blog/post-template.html` to `blog/[slug].html` (use the `slug`
   from the draft's frontmatter — must match exactly for the URL to be
   `/blog/[slug]`).
2. Fill in every `TODO:` in the new file:
   - `<title>` — use the draft's `title` (must stay under 60 chars)
   - meta description — use the draft's `excerpt` (must stay under 155 chars)
   - canonical URL, `og:url`, `BreadcrumbList` URL — all `https://cloudpractitionerprep.com/blog/[slug]`
   - OG/Twitter title + description — reuse title/excerpt, trimmed to fit
   - Article JSON-LD: `headline`, `description`, `datePublished` /
     `dateModified` (today's date, not the draft's placeholder date), `url`,
     `mainEntityOfPage`
   - FAQPage JSON-LD: copy each `#### Question` / answer pair from the
     draft's FAQ section into the `mainEntity` array (template includes a
     ready-to-fill block — see `blog/post-template.html`)
3. Paste the draft's markdown body into the page, converting to the
   template's HTML structure:
   - `# H1` → the page's single `<h1>` in `.blog-header`
   - `## H2` / `### H3` → `<h2 id="...">` / `<h3 id="...">` in `.blog-body`,
     each with a unique `id` for the table of contents to link to
   - Build the `.blog-toc` block: one `<li><a href="#anchor-id">` per H2/H3
   - `#### Question` / answer pairs in the FAQ section → a normal `<h3>` +
     `<p>` per pair, same as the rest of the body (the FAQPage schema is
     what makes these eligible for rich results, not special HTML)
   - Markdown links `[text](/diagnostic)` → `<a href="/diagnostic">text</a>`
4. Insert the standard author/disclaimer line (already in the template):
   *"Written for CloudPractitionerPrep. Independent resource, not
   affiliated with or endorsed by Amazon Web Services. Verify exam details
   against official AWS documentation."*
5. Insert the inline diagnostic CTA block partway through the body (template
   includes this — same pattern as the existing sample post).
6. Update the "Related resources" section if there are now other relevant
   posts to link instead of (or in addition to) the static tool pages.

## 4. Add it to the live manifest

Open `blog/posts.js` and add an entry (this is what makes it appear on
`/blog`):

```js
{
  slug: '[slug]',
  title: '[title from frontmatter]',
  date: 'YYYY-MM-DD',          // today's actual publish date
  readingTime: '[readingTime from frontmatter]',
  excerpt: '[excerpt from frontmatter]',
  category: '[category from frontmatter]'   // one of the 7 valid values
}
```

## 5. Add it to the sitemap

Open `sitemap.xml` and add:

```xml
<url>
  <loc>https://cloudpractitionerprep.com/blog/[slug]</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

(Same priority/changefreq as the existing sample post entry.)

## 6. Update the topic queue

Open `blog/topics.js` and change that topic's `status` from `'drafted'` to
`'published'`, so the queue accurately reflects what's live.

## 7. Test before pushing

Use the preview workflow: confirm the new page has exactly one `<h1>`, all
table-of-contents anchors resolve, internal links work, the category tag
renders correctly on `/blog`, and the new card appears with the right
filter. Check the browser console for errors.

## 8. Clean up and ship

1. Delete `blog-drafts/[slug].md` and `blog-drafts/[slug].factcheck.md` (the
   live page is now the source of truth — don't let stale drafts linger).
2. Commit everything together: the new `blog/[slug].html`, the
   `blog/posts.js` addition, the `sitemap.xml` addition, the `blog/topics.js`
   status change, and the draft-file deletions.
3. Push to `main`. The existing deploy workflow
   (`.github/workflows/deploy.yml`) publishes it automatically.

---

**Reminder:** publishing is always this manual sequence. The scheduled
GitHub Action (`.github/workflows/blog-draft.yml`) only ever opens a PR
with new files in `/blog-drafts/` — it never touches `blog/posts.js`,
`sitemap.xml`, or creates a live `/blog/*.html` page, and `/blog-drafts/`
itself is excluded from the GitHub Pages deploy. Nothing the automation
does can make a draft go live without you doing steps 1-8 above.
