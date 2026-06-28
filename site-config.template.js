// ============================================================
// SITE CONFIGURATION — Edit this file to create a new cert site
// ============================================================
// This is the TEMPLATE. The actual site-config.js is generated
// at deploy time by GitHub Actions, which substitutes %%VAR%%
// placeholders with values from repository secrets.
//
// For local development:
//   cp site-config.template.js site-config.js
//   then fill in the real values in your local site-config.js
//   (site-config.js is .gitignored — never commit it)
// ============================================================

window.SiteConfig = {
  // ---- Certification Info ----
  examCode: 'CLF-C02',
  certName: 'Cloud Practitioner',
  certFullName: 'AWS Certified Cloud Practitioner',
  certLevel: 'Foundational',

  // ---- Exam Details ----
  totalQuestions: 65,
  scoredQuestions: 50,
  unscoredQuestions: 15,
  timeMinutes: 90,
  passScore: 700,
  maxScore: 1000,

  // ---- Exam Domains (weights must sum to 1.0) ----
  domains: [
    { name: 'Cloud Concepts', weight: 0.24 },
    { name: 'Security and Compliance', weight: 0.30 },
    { name: 'Cloud Technology and Services', weight: 0.34 },
    { name: 'Billing, Pricing, and Support', weight: 0.12 }
  ],

  // ---- Test Options (duration tiers) ----
  testOptions: [
    { minutes: 20, questions: 15, seconds: 1200, free: true },
    { minutes: 40, questions: 30, seconds: 2400, free: false },
    { minutes: 60, questions: 45, seconds: 3600, free: false },
    { minutes: 90, questions: 65, seconds: 5400, free: false, featured: true }
  ],

  // ---- Branding ----
  logoText: 'CLF-C02',
  logoAccent: 'Prep',
  heroSubtitle: 'CLF-C02 Exam Preparation',
  heroDescription: 'Master the fundamentals of AWS Cloud with guided training and realistic practice exams. Build confidence for exam day.',
  featureSubtitle: 'Two ways to prepare for the AWS Cloud Practitioner exam',

  // ---- Pricing ----
  price: 49,
  currency: 'USD',
  guarantee: '10-day money-back guarantee',

  // ---- Domain & URLs ----
  domain: 'cloudpractitionerprep.com',

  // ---- Stripe ----
  stripePaymentLink: 'https://buy.stripe.com/00wfZa2GE1mZ9Qtdg43ks01',

  // ---- Firebase (injected by CI — never hardcode here) ----
  firebaseConfig: {
    apiKey:            '%%FIREBASE_API_KEY%%',
    authDomain:        '%%FIREBASE_AUTH_DOMAIN%%',
    projectId:         '%%FIREBASE_PROJECT_ID%%',
    storageBucket:     '%%FIREBASE_STORAGE_BUCKET%%',
    messagingSenderId: '%%FIREBASE_MESSAGING_SENDER_ID%%',
    appId:             '%%FIREBASE_APP_ID%%'
  },

  // ---- Google Search Console verification ----
  googleVerification: '02NUvjZ3KgS7aYAsMjeY12esYnWJdnDJL572EAe5ihI',

  // ---- Footer ----
  footerDisclaimer: 'AWS Certified Cloud Practitioner CLF-C02 Practice — Not affiliated with or endorsed by Amazon Web Services.'
};
