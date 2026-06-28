// ============================================================
// SITE CONFIGURATION — LOCAL DEV COPY (gitignored)
// Do NOT commit this file. The deployed version is generated
// from site-config.template.js by GitHub Actions.
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
  // Payment link success URL must be configured in Stripe Dashboard to:
  //   https://cloudpractitionerprep.com/?session_id={CHECKOUT_SESSION_ID}
  // uid is appended at runtime as ?client_reference_id=<uid>
  //
  // To test without charging real cards: set stripeTestMode to true and
  // replace stripePaymentLinkTest with your Stripe test-mode payment link.
  // NEVER commit stripeTestMode: true — live site must always use the live link.
  stripeTestMode: false,
  stripePaymentLinkLive: 'https://buy.stripe.com/7sY14ngtj0Bicg0fhedjO00',
  stripePaymentLinkTest: 'REPLACE_WITH_STRIPE_TEST_LINK',
  get stripePaymentLink() {
    return this.stripeTestMode ? this.stripePaymentLinkTest : this.stripePaymentLinkLive;
  },

  // ---- Firebase ----
  firebaseConfig: {
    apiKey: "AIzaSyCxrC9P263tCT_RFh5Xd99WHm0bJRxUekw",
    authDomain: "aws-ccp-prep.firebaseapp.com",
    projectId: "aws-ccp-prep",
    storageBucket: "aws-ccp-prep.firebasestorage.app",
    messagingSenderId: "623544110265",
    appId: "1:623544110265:web:badf967e25d1e50dcd5f68"
  },

  // ---- Google Search Console verification ----
  googleVerification: '02NUvjZ3KgS7aYAsMjeY12esYnWJdnDJL572EAe5ihI',

  // ---- Footer ----
  footerDisclaimer: 'AWS Certified Cloud Practitioner CLF-C02 Practice — Not affiliated with or endorsed by Amazon Web Services.'
};
