// blog/topics.js
// TOPIC QUEUE for the blog content pipeline (scripts/generate-blog-draft.js).
// Works in both Node (require) and the browser (window.BlogTopics), same
// pattern as posts.js.
//
// scripts/generate-blog-draft.js reads this file, finds the first entry
// with status:'queued' (in array order), generates a DRAFT into
// /blog-drafts/, and flips that entry's status to 'drafted'. It never
// touches blog/posts.js or sitemap.xml — see blog-drafts/PUBLISHING.md
// for the manual human steps that take a draft live.
//
// Fields:
//   topic         — working title / subject for the generator prompt
//   targetKeyword — primary SEO keyword to write toward (not stuffed)
//   category      — exactly one of the 7 values documented in blog/posts.js:
//                   cloud-concepts | security-compliance | cloud-technology |
//                   billing-pricing | aws-basics | exam-prep-tips | career-salary
//   slug          — proposed URL slug; the generator may refine it slightly
//                   but should stay close to this for predictability
//   status        — queued -> drafted (by the generator) -> published
//                   (by the human publish step, once live in blog/posts.js)

(function (root) {
  var BlogTopics = [
    // Already published — kept here for queue history/tracking.
    {
      topic: 'AWS Cloud Practitioner Passing Score Explained',
      targetKeyword: 'AWS Cloud Practitioner passing score',
      category: 'exam-prep-tips',
      slug: 'aws-cloud-practitioner-passing-score-explained',
      status: 'published'
    },

    // Domain 1 — Cloud Concepts
    {
      topic: 'AWS Well-Architected Framework: The 6 Pillars Explained',
      targetKeyword: 'AWS Well-Architected Framework pillars',
      category: 'cloud-concepts',
      slug: 'aws-well-architected-framework-pillars-explained',
      status: 'queued'
    },
    {
      topic: 'Cloud Economics: CapEx vs OpEx for the CLF-C02 Exam',
      targetKeyword: 'CapEx vs OpEx AWS',
      category: 'cloud-concepts',
      slug: 'capex-vs-opex-aws-cloud-economics',
      status: 'queued'
    },

    // Domain 2 — Security and Compliance
    {
      topic: 'AWS Shared Responsibility Model Explained',
      targetKeyword: 'AWS shared responsibility model',
      category: 'security-compliance',
      slug: 'aws-shared-responsibility-model-explained',
      status: 'queued'
    },
    {
      topic: 'AWS IAM Basics: Users, Groups, Roles, and Policies',
      targetKeyword: 'AWS IAM basics',
      category: 'security-compliance',
      slug: 'aws-iam-basics-users-groups-roles-policies',
      status: 'queued'
    },

    // Domain 3 — Cloud Technology and Services
    {
      topic: 'EC2 Instance Types Explained for CLF-C02',
      targetKeyword: 'EC2 instance types explained',
      category: 'cloud-technology',
      slug: 'ec2-instance-types-explained-clf-c02',
      status: 'queued'
    },
    {
      topic: 'AWS Storage Services Compared: S3 vs EBS vs EFS',
      targetKeyword: 'S3 vs EBS vs EFS',
      category: 'cloud-technology',
      slug: 'aws-storage-services-compared-s3-ebs-efs',
      status: 'queued'
    },

    // Domain 4 — Billing, Pricing, and Support
    {
      topic: 'AWS Pricing Models: On-Demand vs Reserved vs Spot Instances',
      targetKeyword: 'AWS pricing models explained',
      category: 'billing-pricing',
      slug: 'aws-pricing-models-on-demand-reserved-spot',
      status: 'queued'
    },
    {
      topic: 'Understanding AWS Support Plans',
      targetKeyword: 'AWS support plans explained',
      category: 'billing-pricing',
      slug: 'understanding-aws-support-plans',
      status: 'queued'
    },

    // AWS Basics
    {
      topic: "AWS Free Tier Explained: What's Actually Free",
      targetKeyword: 'AWS free tier explained',
      category: 'aws-basics',
      slug: 'aws-free-tier-explained',
      status: 'queued'
    },
    {
      topic: 'How to Create an AWS Account: Step-by-Step',
      targetKeyword: 'how to create an AWS account',
      category: 'aws-basics',
      slug: 'how-to-create-an-aws-account',
      status: 'queued'
    },

    // Exam Prep & Tips
    {
      topic: 'How to Study for the AWS Cloud Practitioner Exam in 4 Weeks',
      targetKeyword: 'how to study for CLF-C02',
      category: 'exam-prep-tips',
      slug: 'how-to-study-for-aws-cloud-practitioner-in-4-weeks',
      status: 'queued'
    },
    {
      topic: 'CLF-C02 Exam Day: What to Expect and How to Prepare',
      targetKeyword: 'CLF-C02 exam day tips',
      category: 'exam-prep-tips',
      slug: 'clf-c02-exam-day-what-to-expect',
      status: 'queued'
    },

    // Career & Salary
    {
      topic: 'AWS Cloud Practitioner Salary: What to Expect',
      targetKeyword: 'AWS Cloud Practitioner salary',
      category: 'career-salary',
      slug: 'aws-cloud-practitioner-salary-what-to-expect',
      status: 'queued'
    },
    {
      topic: 'AWS Cloud Practitioner vs Solutions Architect: Which Certification First?',
      targetKeyword: 'AWS Cloud Practitioner vs Solutions Architect',
      category: 'career-salary',
      slug: 'aws-cloud-practitioner-vs-solutions-architect',
      status: 'queued'
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = BlogTopics;
  } else {
    root.BlogTopics = BlogTopics;
  }
})(typeof window !== 'undefined' ? window : this);
