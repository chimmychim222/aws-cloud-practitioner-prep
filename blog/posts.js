// blog/posts.js
// SINGLE SOURCE OF TRUTH for the blog index (/blog) and the blog pipeline.
// Add a post here and it automatically appears on the index — no other
// code change needed. Remove a post here to unlist it (the page itself
// still exists at its URL unless also deleted).
//
// Fields:
//   slug         — matches the .html filename in /blog (no extension)
//   title        — must match the <title>/<h1> on the post page
//   date         — YYYY-MM-DD, used for sorting (newest first) and display
//   readingTime  — e.g. "6 min read", must match the post page's meta line
//   excerpt      — 1-2 sentences, shown on the card
//   category     — exactly ONE of:
//                  cloud-concepts       (exam domain 1 — domain-study content)
//                  security-compliance  (exam domain 2 — domain-study content)
//                  cloud-technology     (exam domain 3 — domain-study content)
//                  billing-pricing      (exam domain 4 — domain-study content)
//                  aws-basics           (free tier, account setup, general
//                                        AWS explainers not tied to a domain)
//                  exam-prep-tips       (study strategies, exam-day advice,
//                                        scoring/format, how-to-pass content)
//                  career-salary        (salary data, job prospects, cert
//                                        comparisons)

window.BlogPosts = [
  {
    slug: 'aws-cloud-practitioner-passing-score-explained',
    title: 'AWS Cloud Practitioner Passing Score Explained',
    date: '2026-06-30',
    readingTime: '6 min read',
    excerpt: "What's the AWS Cloud Practitioner passing score? Learn how CLF-C02's scaled scoring (700/1000) actually works and what counts as exam-ready.",
    category: 'exam-prep-tips'
  }
];
