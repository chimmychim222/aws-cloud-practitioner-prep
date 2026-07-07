# Blog Auto-Publish Review Queue

Posts auto-published by the pipeline. Review weekly after each Wednesday run.

- **Auto-published**: visit the live URL, spot-check accuracy against official AWS docs, change ⬜ to ✅ and commit.
- **HELD**: draft is at `blog-drafts/_held_[slug].md` — fix the smoke-test failure, rename to `[slug].md`, and the next Wednesday run retries automatically.

| Title | Date | Live URL | Status |
|-------|------|----------|--------|
| AWS Shared Responsibility Model Explained | 2026-07-06 | [https://cloudpractitionerprep.com/blog/aws-shared-responsibility-model-explained](https://cloudpractitionerprep.com/blog/aws-shared-responsibility-model-explained) | ✅ Reviewed — held draft files deleted, fact-checked and accurate |
