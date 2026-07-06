# Blog Auto-Publish Review Queue

Posts auto-published by the pipeline. Review weekly after each Wednesday run.

- **Auto-published**: visit the live URL, spot-check accuracy against official AWS docs, change ⬜ to ✅ and commit.
- **HELD**: draft is at `blog-drafts/_held_[slug].md` — fix the smoke-test failure, rename to `[slug].md`, and the next Wednesday run retries automatically.

| Title | Date | Live URL | Status |
|-------|------|----------|--------|
| HELD: aws-shared-responsibility-model-explained | 2026-07-06 | `blog-drafts/_held_aws-shared-responsibility-model-explained.md` | ⚠️ Smoke-test failed: No frontmatter block found (expected --- delimiters) ; Body contains "(placeholder" text |
