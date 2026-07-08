# Blog Auto-Publish Review Queue

Posts auto-published by the pipeline. Review weekly after each Wednesday run.

- **Auto-published**: visit the live URL, spot-check accuracy against official AWS docs, change ⬜ to ✅ and commit.
- **HELD**: draft is at `blog-drafts/_held_[slug].md` — fix the smoke-test failure, rename to `[slug].md`, and the next Wednesday run retries automatically.

| Title | Date | Live URL | Status |
|-------|------|----------|--------|
| HELD: aws-shared-responsibility-model-explained | 2026-07-06 | `blog-drafts/_held_aws-shared-responsibility-model-explained.md` | ⚠️ Smoke-test failed: No frontmatter block found (expected --- delimiters) ; Body contains "(placeholder" text |
| AWS Shared Responsibility Model Explained | 2026-07-06 | [https://cloudpractitionerprep.com/blog/aws-shared-responsibility-model-explained](https://cloudpractitionerprep.com/blog/aws-shared-responsibility-model-explained) | ⬜ Not yet reviewed |
| How to Pass the AWS Cloud Practitioner Exam | 2026-07-08 | [https://cloudpractitionerprep.com/blog/how-to-pass-aws-cloud-practitioner-exam](https://cloudpractitionerprep.com/blog/how-to-pass-aws-cloud-practitioner-exam) | ⬜ Not yet reviewed |
