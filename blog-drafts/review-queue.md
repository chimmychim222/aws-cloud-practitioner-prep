# Blog Auto-Publish Review Queue

Posts auto-published by the pipeline. Review weekly after each Wednesday run.

- **Auto-published**: visit the live URL, spot-check accuracy against official AWS docs, change ⬜ to ✅ and commit.
- **HELD**: draft is at `blog-drafts/_held_[slug].md` — fix the smoke-test failure, rename to `[slug].md`, and the next Wednesday run retries automatically.

| Title | Date | Live URL | Status |
|-------|------|----------|--------|
