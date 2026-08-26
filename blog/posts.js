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
  },
  {
    slug: 'is-aws-cloud-practitioner-worth-it',
    title: 'Is AWS Cloud Practitioner Worth It?',
    date: '2026-07-29',
    readingTime: '8 min read',
    excerpt: 'Wondering if the AWS Cloud Practitioner cert is worth your time and money? Here\'s an honest look at who benefits most and what to expect.',
    category: 'career-salary'
  },
  {
    slug: 'aws-iam-basics-users-groups-roles-policies',
    title: 'AWS IAM Basics: Users, Groups, Roles & Policies',
    date: '2026-08-05',
    readingTime: '8 min read',
    excerpt: 'Master AWS IAM basics—users, groups, roles, and policies—and understand why they make up 30% of the CLF-C02 Security domain.',
    category: 'security-compliance'
  },
  {
    slug: 'ec2-instance-types-explained-clf-c02',
    title: 'EC2 Instance Types Explained for CLF-C02',
    date: '2026-08-12',
    readingTime: '7 min read',
    excerpt: 'Learn the five EC2 instance families tested on the CLF-C02 exam and how to match each one to the right workload scenario.',
    category: 'cloud-technology'
  },
  {
    slug: 'aws-storage-services-compared-s3-ebs-efs',
    title: 'AWS Storage Services Compared: S3 vs EBS vs EFS',
    date: '2026-08-19',
    readingTime: '8 min read',
    excerpt: 'Confused by AWS storage options? Learn how S3, EBS, and EFS differ and which one to choose for any scenario on the CLF-C02 exam.',
    category: 'cloud-technology'
  },
  {
    slug: 'aws-pricing-models-on-demand-reserved-spot',
    title: 'AWS Pricing Models: On-Demand vs Reserved vs Spot',
    date: '2026-08-26',
    readingTime: '8 min read',
    excerpt: 'Learn how AWS EC2 pricing models work—On-Demand, Reserved, Spot, and more—and what you need to know for the CLF-C02 exam.',
    category: 'billing-pricing'
  }
];
