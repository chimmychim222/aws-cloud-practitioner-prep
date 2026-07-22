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
  },
  {
    slug: 'aws-well-architected-framework-pillars-explained',
    title: 'AWS Well-Architected Framework: The 6 Pillars Explained',
    date: '2026-07-01',
    readingTime: '8 min read',
    excerpt: 'Learn the 6 pillars of the AWS Well-Architected Framework and why they matter for the CLF-C02 Cloud Practitioner exam.',
    category: 'cloud-concepts'
  },
  {
    slug: 'capex-vs-opex-aws-cloud-economics',
    title: 'CapEx vs OpEx AWS: Cloud Economics for CLF-C02',
    date: '2026-07-02',
    readingTime: '7 min read',
    excerpt: 'Master CapEx vs OpEx for the AWS CLF-C02 exam. Understand why trading upfront capital costs for variable operating expense is a core cloud advantage.',
    category: 'cloud-concepts'
  },
  {
    slug: 'aws-shared-responsibility-model-explained',
    title: 'AWS Shared Responsibility Model Explained',
    date: '2026-07-06',
    readingTime: '8 min read',
    excerpt: 'Learn exactly who secures what in AWS — a must-know concept for the CLF-C02 exam that appears throughout the Security and Compliance domain.',
    category: 'security-compliance'
  },
  {
    slug: 'how-to-pass-aws-cloud-practitioner-exam',
    title: 'How to Pass the AWS Cloud Practitioner Exam',
    date: '2026-07-08',
    readingTime: '8 min read',
    excerpt: 'A practical, domain-by-domain guide to passing the AWS CLF-C02 exam on your first attempt—covering study strategy, key concepts, and exam-day tips.',
    category: 'exam-prep-tips'
  },
  {
    slug: 'clf-c02-exam-domains-format-question-types',
    title: 'CLF-C02 Exam Format: Domains, Questions & Tips',
    date: '2026-07-15',
    readingTime: '8 min read',
    excerpt: 'A clear breakdown of the CLF-C02 exam format, domain weightings, question types, and what to expect on test day.',
    category: 'exam-prep-tips'
  },
  {
    slug: 'how-long-to-study-for-aws-cloud-practitioner',
    title: 'How Long to Study for AWS Cloud Practitioner',
    date: '2026-07-22',
    readingTime: '7 min read',
    excerpt: 'Find out how many study hours you realistically need for the CLF-C02 exam and how to build a schedule that fits your background.',
    category: 'exam-prep-tips'
  }
];
