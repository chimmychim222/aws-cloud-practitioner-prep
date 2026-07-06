# cloudpractitionerprep.com — Developer Reference

> **Affiliation disclaimer (required on every page)**
> This site is an independent exam-preparation resource. It is **not affiliated with,
> endorsed by, or sponsored by Amazon Web Services, Inc. or its affiliates.**
> The sole disclaimer surface is the **footer disclaimer**, injected by `components/footer.js`
> using `site-config.js → footerDisclaimer`. It appears on every page at all times and is
> crawlable (the string lives in a static config file). The exact string must be:
> _"CloudPractitionerPrep is an independent, third-party study platform and is not affiliated with, endorsed by, or sponsored by Amazon Web Services, Inc. or its affiliates. AWS and Cloud Practitioner are trademarks of Amazon.com, Inc. or its affiliates."_
> Never remove this surface or shorten this copy.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | Vanilla HTML5 — single-page app in `index.html` |
| Styles | Vanilla CSS (`styles.css`) with CSS custom properties for all tokens |
| Client JS | Vanilla ES5/ES6 (`app.js`, `firebase-auth.js`, `admin.js`) — no framework, no bundler |
| Firebase (client) | Firebase JS SDK compat v10.12.0 via CDN — Auth + Firestore |
| Firebase (server) | Firebase Admin SDK v12 (Node.js) in `api/` — **requires a separate serverless host; does NOT run on GitHub Pages** |
| Payments | Stripe JS SDK v16 (Node.js) in `api/` — **currently non-functional; see Stripe Integration** |
| Fonts | Inter (Google Fonts CDN) |
| Hosting | **GitHub Pages** — static files only, GitHub Actions deploy mode |
| Repo | GitHub — `chimmychim222/aws-cloud-practitioner-prep` |

**No build step.** Files are served as-is. No webpack, Vite, TypeScript, or transpilation.

**GitHub Pages is a static host.** It serves pre-built HTML/CSS/JS files only. No server-side code executes. The `api/` directory is present in the repo but its files are served as raw text — they are not invoked as functions on GitHub Pages.

### File inventory

```
index.html             — Single-page app shell; all four views live here
app.js                 — All client-side logic (test engine, training, UI, testimonials)
firebase-auth.js       — Firebase Auth init, Google sign-in, session management
styles.css             — All styles; design tokens at top as CSS custom properties
site-config.js         — Cert-specific config (exam facts, branding, Firebase config)
questions.js           — window.questionBank — 400 CLF-C02 questions
training-content.js    — window.trainingContent — HTML study material by domain/topic
admin.html             — Admin review moderation page (not linked publicly)
admin.js               — Admin page logic (Firestore reads/writes)
api/stripe-webhook.js  — Node.js serverless function (NOT active on GitHub Pages)
api/create-checkout.js — Node.js serverless function (NOT active on GitHub Pages)
package.json           — Node deps for api/ functions (stripe, firebase-admin)
vercel.json            — Inert on GitHub Pages; retained as documentation of URL intent
site-config.js         — Committed; Firebase web config is intentionally public
.gitignore             — Ignores node_modules, .env/.env.*, .vercel/, secrets
CLAUDE.md              — This file; source of truth for all project conventions
CNAME                  — cloudpractitionerprep.com
sitemap.xml / robots.txt
.github/workflows/deploy.yml — GitHub Actions deploy workflow
```

---

## Hosting and Deploy

**Host:** GitHub Pages, GitHub Actions deploy mode (source: GitHub Actions, not a branch).
Custom domain: `cloudpractitionerprep.com`.
CDN: Fastly (`185.199.108–111.153`). Cache: `Cache-Control: max-age=600` (10 min, set by GitHub Pages).

### How a push reaches the live site

```
git push origin main
       ↓
GitHub Actions (.github/workflows/deploy.yml) triggers on push to main
       ↓
build job:
  actions/checkout@v4          — check out main
  actions/configure-pages@v5   — configure Pages environment (adds .nojekyll)
  rm -rf blog-drafts scripts .github CNAME.example  — strip unpublished content
  actions/upload-pages-artifact@v3  — package remaining files as Pages artifact
       ↓
deploy job (needs: build):
  actions/deploy-pages@v4      — publish artifact to GitHub Pages CDN
       ↓
Fastly CDN serves files at cloudpractitionerprep.com (max-age=600)
```

**Concurrency:** `group: "pages", cancel-in-progress: false` — overlapping pushes queue
cleanly; a slow deploy is never cancelled mid-flight by a newer push.

**No Jekyll.** In GitHub Actions deploy mode Jekyll is never invoked. Files are served
as-is from the artifact. `actions/configure-pages` adds `.nojekyll` automatically.

**Excluded from the published artifact** (removed in the build job before upload):
- `blog-drafts/` — unreviewed AI drafts; must never be reachable by direct URL
- `scripts/` — Node tooling, not site content
- `.github/` — workflow files; not part of the published site
- `CNAME.example` — example file, not needed on live site

`CNAME` itself (the live domain record) is **not** excluded and must stay in the artifact
so GitHub Pages keeps the custom domain binding.

To trigger a deploy manually: GitHub → repo → Actions → "Deploy to GitHub Pages" → Run workflow.

### Clean URLs and vercel.json

`vercel.json` is **inert on GitHub Pages** — GitHub Pages does not process it.
It is kept in the repo as documentation of the intended URL structure (`"cleanUrls": true`)
and will be needed if the site is migrated to a platform that does support it (Vercel, Netlify).

Clean URLs (`/faq` instead of `/faq.html`) work via GitHub Pages' own server-side URL
normalization. In GitHub Actions deploy mode, Jekyll is never run, so there is no
`.nojekyll`-vs-Jekyll ambiguity. Confirm on the live site that `/faq` and `/faq.html`
both resolve. If `/faq` returns 404, internal links must use `/faq.html` or a custom
404 redirect.

### GitHub Pages cannot run server-side code

GitHub Pages is a **static host only**. The `api/` directory (Node.js serverless functions
for Stripe checkout and webhooks) is present in the repo but its files are served as raw
JavaScript text, not executed. Any `fetch('/api/create-checkout')` call from the browser
receives the JS source file as the response, not a function execution.

To activate the `api/` functions, they must be deployed to a separate serverless platform
(Vercel, Cloudflare Workers, AWS Lambda, etc.) that can execute Node.js. See the Stripe
Integration section for the current payment flow status.

---

## Routing

This is a **client-side single-page app** with no server-side routing.

Four named views are rendered as `<section class="view">` elements in `index.html`.
Only one is visible at a time. `showView(name)` in `app.js` toggles the `active-view`
CSS class, which switches `display` from `none` to `block`.

| View ID | URL | Trigger |
|---|---|---|
| `home-view` | `/` (default) | Logo click, Home nav button |
| `training-view` | `/` (in-page) | "Start Training" button |
| `test-view` | `/` (in-page) | "Take Practice Test" button |
| `results-view` | `/` (in-page) | Test submission |

`/admin.html` is a separate HTML page — not a view in the SPA.

---

## Shared Header

The site nav is **static HTML, duplicated identically across every page**, not
JS-injected. This is a deliberate crawlability decision: every nav link (Home,
Training, Practice Test, and the six items grouped under the "Resources"
dropdown — Exam Guide, Study Plan, Diagnostic, Practice Qs, Blog, FAQ) must
exist as a real `<a href>` in the raw served HTML, visible in view-source with
zero JS execution.

**`components/header.js` does not build any markup.** It only enhances the
static `<header id="site-header">` block already present in each page:
- active-state highlighting (`.nav-link.active`) based on `window.location.pathname`
- the Resources dropdown's open/close behavior (click, Escape, outside-click —
  desktop hover-to-open is pure CSS, no JS)
- the mobile hamburger menu toggle

**To add, remove, or rename a nav link:** edit the static `<header>...</header>`
block (plus its `<noscript><style>...</noscript>` fallback) in `page-template.html`,
then propagate the *identical* block to every other page that has one — currently
`index.html`, `faq.html`, `exam-guide.html`, `diagnostic.html`, `study-plan.html`,
`practice-questions.html`, `privacy.html`, `terms.html`, `refund.html`,
`blog/index.html`, `blog/post-template.html`, and every published post under
`blog/`. There is no build step to do this automatically — it is manual,
identical-block duplication by design, traded off against JS-rendered markup
that would not be crawlable as static HTML.

The `<noscript>` block forces the nav fully visible (abandoning the
collapsible hamburger and hover-only dropdown) when JavaScript is unavailable,
so the site remains fully navigable without JS.

**Logo text is static**, not driven by `site-config.js` for non-SPA pages
(see Duplication Checklist below for the implication when cloning this site
for a new certification).

---


## Disclaimer Banner (removed July 2026)

The top-of-page `<div class="disclaimer-banner">` banner was removed. The trademark
disclaimer is now handled exclusively by the **footer** (see `site-config.js → footerDisclaimer`
and `components/footer.js`).

**Reason:** The footer appears on every page including interior landings, is single-sourced
(one edit in `site-config.js` propagates everywhere), carries no top-of-page space cost, and
avoids the fixed-header-offset complexity the banner required.

---
## Design Tokens

All tokens are CSS custom properties on `:root` in `styles.css`. **Never hardcode
these values in component styles — always reference the variable.**

### Colors

```css
/* AWS Brand */
--aws-orange:       #FF9900   /* primary CTA, highlights, accents */
--aws-orange-hover: #EC7211
--aws-orange-light: #FFF4E6   /* orange tint backgrounds */
--aws-squid-ink:    #232F3E   /* header, dark surfaces */
--aws-ink-hover:    #37475A
--aws-ink-dark:     #161E2D

/* Semantic */
--color-success:    #037F0C
--color-error:      #D91515
--color-warning:    #B8860B
--color-info:       #0972D3

/* Neutrals */
--bg-page:          #F2F3F3
--bg-card:          #FFFFFF
--text-primary:     #16191F
--text-secondary:   #5F6B7A
--text-muted:       #8D99A8
--border-color:     #D5DBDB
--border-light:     #EAEDED
```

### Typography

```css
--font-main: 'Inter', 'Amazon Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;

/* Scale */
--fs-xs:   0.75rem    /* 12px */
--fs-sm:   0.875rem   /* 14px */
--fs-base: 1rem       /* 16px */
--fs-lg:   1.125rem   /* 18px */
--fs-xl:   1.25rem    /* 20px */
--fs-2xl:  1.5rem     /* 24px */
--fs-3xl:  2rem       /* 32px */
--fs-4xl:  2.75rem    /* 44px */
```

### Spacing

4px base unit. Variables run `--sp-1` (4px) through `--sp-20` (80px) in the
standard 1/2/3/4/5/6/8/10/12/16/20 scale.

### Other tokens

```css
/* Radii */
--r-sm: 4px  --r-md: 8px  --r-lg: 12px  --r-xl: 16px  --r-full: 9999px

/* Transitions */
--t-fast:   150ms cubic-bezier(.4,0,.2,1)
--t-base:   250ms cubic-bezier(.4,0,.2,1)
--t-slow:   400ms cubic-bezier(.4,0,.2,1)
--t-spring: 500ms cubic-bezier(.175,.885,.32,1.275)

/* Layout */
--header-h: 56px
--max-w:    1200px
```

---

## Exam Facts (CLF-C02)

**Source: Official AWS Certified Cloud Practitioner Exam Guide (CLF-C02)**

These facts are fixed by the exam specification and must never be invented or
approximated. If AWS updates the guide, update `site-config.js` and this file together.

| Field | Value |
|---|---|
| Exam code | CLF-C02 |
| Full name | AWS Certified Cloud Practitioner |
| Level | Foundational |
| Total questions | 65 (50 scored + 15 unscored) |
| Duration | 90 minutes |
| Passing score | 700 / 1000 |
| Maximum score | 1000 |
| Scoring model | Scaled: `round(100 + (correct/total) × 900)` |

### Domains and official weightings

| # | Domain | Weight |
|---|---|---|
| 1 | Cloud Concepts | 24% |
| 2 | Security and Compliance | 30% |
| 3 | Cloud Technology and Services | 34% |
| 4 | Billing, Pricing, and Support | 12% |

Practice tests sample questions in proportion to these weights. The rounding
adjustment is applied to the largest domain (Domain 3) to ensure the total
equals the requested question count exactly.

### Task statements (official CLF-C02 exam guide)

Source: AWS Certified Cloud Practitioner Exam Guide (CLF-C02), publicly available
from aws.amazon.com/certification. Task statements define the sub-topics tested
within each domain. This breakdown is used to ground the blog generation script
(`scripts/generate-blog-draft.js`) and should be kept in sync with any future
exam guide revision.

**Domain 1 — Cloud Concepts (24%)**

| Task | Statement | Key topics for blog grounding |
|---|---|---|
| 1.1 | Define the benefits of the AWS Cloud | Value proposition; six advantages: trade CapEx for variable expense, economies of scale, stop guessing capacity, increase speed and agility, stop spending on data centres, go global in minutes; high availability, elasticity, agility, scalability |
| 1.2 | Identify design principles of the AWS Cloud | **AWS Well-Architected Framework** — six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability; AWS Well-Architected Tool |
| 1.3 | Understand migration strategies to the AWS Cloud | **AWS Cloud Adoption Framework (CAF)** — six perspectives: Business, People, Governance, Platform, Security, Operations; migration strategies (the "6 Rs": Rehost, Replatform, Repurchase, Refactor/Re-architect, Retire, Retain; AWS documentation also lists a 7th — Relocate — but exam focus is on the core 6); AWS Snow Family (Snowcone, Snowball Edge, Snowmobile); AWS DataSync |
| 1.4 | Understand concepts of cloud economics | Rightsizing; automation benefits; managed services reducing operational overhead; TCO (Total Cost of Ownership); AWS Pricing Calculator for estimates |

**Domain 2 — Security and Compliance (30%)**

| Task | Statement | Key topics for blog grounding |
|---|---|---|
| 2.1 | Understand the AWS shared responsibility model | AWS responsible for security OF the cloud (hardware, AZs, global network, hypervisor); customer responsible for security IN the cloud (OS patches, app config, IAM, data encryption, security groups) |
| 2.2 | Cloud security, governance, and compliance | AWS Artifact (compliance reports); AWS Audit Manager; AWS Config; AWS CloudTrail (API audit logs); Amazon GuardDuty (threat detection); Amazon Inspector (vulnerability scanning); AWS Security Hub; Amazon Macie (sensitive data discovery); encryption at rest and in transit; AWS KMS; AWS CloudHSM |
| 2.3 | AWS access management | IAM users, groups, roles, policies; principle of least privilege; MFA; IAM Identity Center (AWS SSO); Amazon Cognito; AWS Directory Service; root account best practices |
| 2.4 | Security resources and network security | AWS Shield (Standard free / Advanced paid, DDoS protection); AWS WAF (web application firewall); Amazon VPC security groups vs NACLs; AWS Network Firewall; AWS Firewall Manager; Amazon Route 53 (DNS) |

**Domain 3 — Cloud Technology and Services (34%)**

| Task | Statement | Key topics for blog grounding |
|---|---|---|
| 3.1 | Deploying and operating in the AWS Cloud | AWS Management Console; AWS CLI; AWS SDKs; AWS CloudFormation (IaC); AWS Elastic Beanstalk (PaaS); AWS OpsWorks; AWS CodePipeline / CodeBuild / CodeDeploy / CodeCommit (DevOps toolchain) |
| 3.2 | AWS global infrastructure | Regions (geographically isolated, 2+ AZs each); Availability Zones (one or more discrete data centres, redundant power/networking); Edge Locations (CloudFront CDN, Route 53); AWS Local Zones; AWS Wavelength; AWS Outposts |
| 3.3 | AWS compute services | EC2 (instance families: General Purpose, Compute Optimized, Memory Optimized, Storage Optimized, Accelerated Computing); EC2 Auto Scaling; ELB (ALB, NLB, GLB); AWS Lambda (serverless); ECS; EKS; AWS Fargate; Elastic Beanstalk; AWS Batch; AWS Lightsail |
| 3.4 | AWS database services | Amazon RDS (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server); Amazon Aurora (MySQL/PostgreSQL compatible, up to 5× standard MySQL throughput); Amazon DynamoDB (NoSQL, key-value + document); Amazon ElastiCache (Redis / Memcached); Amazon Redshift (data warehouse); Amazon Neptune (graph); Amazon DocumentDB (MongoDB-compatible) |
| 3.5 | AWS network services | Amazon VPC; subnets (public/private); Internet Gateway; NAT Gateway; AWS VPN; AWS Direct Connect; Amazon Route 53; Amazon CloudFront; Elastic Load Balancing; AWS PrivateLink; AWS Transit Gateway |
| 3.6 | AWS storage services | S3 (storage classes: Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval, Glacier Deep Archive); Amazon EBS; Amazon EFS; AWS Storage Gateway; AWS Backup; AWS Snow Family |
| 3.7 | AI/ML and analytics | Amazon SageMaker; Amazon Rekognition; Amazon Polly; Amazon Transcribe; Amazon Translate; Amazon Comprehend; Amazon Lex; Amazon Textract; Amazon Forecast; Amazon Personalize; Amazon Kendra; Amazon Athena; Amazon EMR; Amazon Kinesis; AWS Glue; Amazon QuickSight; Amazon OpenSearch Service |
| 3.8 | Other in-scope services | Amazon SQS; Amazon SNS; Amazon EventBridge; AWS Step Functions; Amazon MQ; AWS IoT Core; Amazon AppStream 2.0; Amazon WorkSpaces |

**Domain 4 — Billing, Pricing, and Support (12%)**

| Task | Statement | Key topics for blog grounding |
|---|---|---|
| 4.1 | AWS pricing models | On-Demand (no commitment, per-second/per-hour); Spot Instances (unused capacity, up to 90% discount, can be reclaimed with 2-min notice); Reserved Instances: Standard (highest discount, least flexibility) and Convertible (change instance type); Savings Plans: Compute and EC2 Instance; Dedicated Hosts; Dedicated Instances; AWS Free Tier (12-month, Always Free, Trials) |
| 4.2 | Billing, budget, and cost management | AWS Cost Explorer; AWS Budgets; AWS Cost and Usage Report (CUR); AWS Pricing Calculator; consolidated billing via AWS Organizations; cost allocation tags; AWS Cost Anomaly Detection |
| 4.3 | Technical resources and Support | Support plans: Basic (free), Developer, Business, Enterprise On-Ramp, Enterprise (includes Technical Account Manager); AWS Trusted Advisor (cost, security, performance, fault tolerance, service limits checks); AWS Health Dashboard (formerly Personal Health Dashboard); AWS Knowledge Center; AWS re:Post; AWS IQ (expert marketplace); AWS Professional Services; AWS Partner Network |

---

## Test Engine Data Model

### Question (`questions.js`)

`window.questionBank` is an array of question objects.

```javascript
{
  id:           Number,   // sequential, 1-based, unique
  domain:       Number,   // 1–4, maps to official domain
  domainName:   String,   // e.g. "Cloud Concepts"
  topic:        String,   // e.g. "1.1" — matches official exam guide task IDs
  type:         "multiple-choice" | "multiple-response",
  question:     String,
  options:      String[], // ["A) …", "B) …", "C) …", "D) …"] (4–5 options)
  correctAnswers: Number[], // zero-based indices into options[]
                            // length 1 for multiple-choice, 2 for multiple-response
  explanation:  String,   // explains why correct answers are right AND wrong options are wrong
}
```

`multiple-response` questions have exactly 2 correct answers.
`correctAnswers` is always sorted ascending.

### Training content (`training-content.js`)

`window.trainingContent` is a keyed object.

```javascript
{
  "1": {                          // domain number as string key
    name:   String,               // "Cloud Concepts"
    weight: Number,               // 24 (percentage, integer)
    topics: {
      "1.1": {                    // topic ID as string key
        title:   String,          // "Define the benefits of the AWS Cloud"
        content: String,          // HTML string — rendered into .training-content-body
      }
    }
  }
}
```

Content HTML uses: `<h3>`, `<h4>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<strong>`,
`<table>`, `<div class="key-concept">`, `<div class="tip-box">`.

### Runtime test state (`app.js` — `state` object)

```javascript
{
  // Practice test
  testQuestions:       Question[],   // sampled subset of questionBank
  testAnswers:         { [idx]: Number[] }, // user's selected answer indices per question
  flaggedQuestions:    Set<Number>,  // question indices flagged for review
  currentQuestionIndex: Number,
  timerInterval:       Number | null,
  timeRemaining:       Number,       // seconds remaining
  testSubmitted:       Boolean,
  reviewFilter:        'all' | 'correct' | 'incorrect' | 'flagged',
  // Quick quiz (training mode)
  quizQuestions:       Question[],
  quizAnswers:         { [idx]: Number[] },
  quizCurrentIndex:    Number,
  quizChecked:         Boolean,
  quizCorrectCount:    Number,
}
```

---

## Firestore Collections

Project: `aws-ccp-prep`

### `users/{uid}`

Created on first sign-in. Written by `firebase-auth.js`.

| Field | Type | Notes |
|---|---|---|
| `email` | string | from Firebase Auth |
| `displayName` | string | from Firebase Auth |
| `paid` | boolean | **Set server-side only** by `api/stripe-webhook.js`. Client never writes this field. |
| `sessionId` | string | Current session UUID. Used to detect concurrent logins and sign out the older session. |
| `createdAt` | timestamp | Set once on document creation |
| `lastLogin` | timestamp | Updated on every sign-in |

### `stripe_sessions/{stripeSessionId}`

Replay protection for the Stripe webhook. Written by `api/stripe-webhook.js`.

| Field | Type | Notes |
|---|---|---|
| `uid` | string | Firebase uid that redeemed this session |
| `redeemedAt` | timestamp | Server timestamp |

If a document for a given `stripeSessionId` already exists, the webhook ignores the event (duplicate delivery).

### `testimonials/{id}`

Auto-ID documents. Written by authenticated users (via review form in `app.js`).
Updated by admins (via `admin.js`).

| Field | Type | Notes |
|---|---|---|
| `uid` | string | Submitter's Firebase uid. Stored for audit; never exposed publicly. |
| `name` | string | Submitter-provided display name |
| `role` | string \| null | Optional; e.g. "Cloud Engineer" |
| `quote` | string | Review text, max 400 chars |
| `verified_score` | number \| null | Self-reported AWS exam score (100–1000). Not verified by us. |
| `date` | timestamp | Submission time |
| `status` | `"pending"` \| `"approved"` \| `"rejected"` | Set to `"pending"` on create. Admin-only update. |

**Public reads** are restricted to `status == "approved"` by Firestore rules.
The section is hidden client-side until ≥ 3 approved reviews exist.
**Never seed, fabricate, or hardcode example reviews.**

### `admins/{uid}`

Document ID is the Firebase uid. Written only via the Firebase Console.

| Field | Type | Notes |
|---|---|---|
| `isAdmin` | boolean | Must be `true` to pass the admin auth gate |
| `email` | string | For human reference only |

---

## Firebase Auth Setup

**Project:** `aws-ccp-prep` (config in `site-config.js`)

**Enabled providers:**
- Email/Password
- Google (OAuth 2.0 via Firebase `signInWithPopup`)

**Account linking:** If a Google sign-in returns `auth/account-exists-with-different-credential`, the user is prompted to sign in with their password first; then `linkWithCredential` merges the accounts.

**Single-session enforcement:** On every sign-in, `firebase-auth.js` writes a new `sessionId` UUID to the user's Firestore doc and starts an `onSnapshot` listener. If the `sessionId` in Firestore changes (another device signed in), the current session is signed out and a kicked-out banner is shown.

**Authorized domains** (set in Firebase Console → Authentication → Settings):
- `cloudpractitionerprep.com`
- `localhost`

---

## Stripe Integration

**Active flow: client-side payment completion via Stripe Payment Link.**
This matches the CCA (client-side) model and works on static hosting (GitHub Pages).

### Active payment flow

1. User clicks "Pay $49" → `app.js` appends the Firebase uid to the Stripe Payment Link:
   `https://buy.stripe.com/…?client_reference_id=<uid>`
2. User pays on Stripe's hosted checkout page.
3. Stripe redirects to the success URL configured in the Stripe Dashboard:
   `https://cloudpractitionerprep.com/?session_id={CHECKOUT_SESSION_ID}`
4. `firebase-auth.js` `checkPaymentRedirect(uid, userRef)` detects `?session_id=cs_…`,
   clears the URL, then:
   a. Reads `stripe_sessions/{sessionId}` — if the doc exists, the session was already
      used; abort silently.
   b. Writes `stripe_sessions/{sessionId}` with `{uid, redeemedAt}` (replay protection).
   c. Writes `users/{uid}.paid = true`.
   d. Calls `showPaymentSuccessBanner()` and queues the review prompt.

**Security tradeoff:** `paid` is written by the client after validating the `cs_` prefix
and checking replay protection. A sophisticated attacker who obtained a valid Stripe
session ID before it was claimed could exploit this. This is the accepted tradeoff for
static hosting. Server-side verification (`api/stripe-webhook.js`) is the hardening path
when a serverless host is available. Do not work around this by removing the replay guard.

### Stripe Dashboard setup required

The Payment Link must have its **After payment** success URL set to:
```
https://cloudpractitionerprep.com/?session_id={CHECKOUT_SESSION_ID}
```
Stripe Dashboard → Payment Links → your link → Edit → After payment → Success URL.

`client_reference_id` is passed as a URL query parameter at runtime by `app.js`. Stripe
Payment Links support this natively — no server needed.

### Inactive server-side functions (retained for future use)

`api/create-checkout.js` and `api/stripe-webhook.js` are Node.js serverless functions
that require a runtime to execute. They are **NOT active** on GitHub Pages. Both files
carry a `NOT ACTIVE` banner comment. When a serverless host is added:
- Deploy both files to the platform
- Set the four env vars (below) on that platform
- Register the webhook URL (`/api/stripe-webhook`) in Stripe Dashboard
- Change the pay button in `app.js` to call `/api/create-checkout` instead of
  redirecting directly to the payment link

### Secrets (for serverless host — not currently needed for static site)

These are only needed when `api/` functions are active. They must **never** appear in
any committed file, `.env` file, or `site-config.js`.

| Variable | Purpose |
|---|---|
| `STRIPE_SECRET_KEY` | Creates checkout sessions (`sk_live_…`) |
| `STRIPE_PRICE_ID` | Stripe Price ID for the $49 product (`price_…`) |
| `STRIPE_WEBHOOK_SECRET` | Verifies webhook signatures (`whsec_…`) |
| `FIREBASE_SERVICE_ACCOUNT` | Firebase Admin SDK service account (full JSON, stringified) |

---

## Admin Moderation Page (`/admin.html`)

Not linked from any public page. Direct URL only.

**Auth gate:** Firebase Auth sign-in required, then `admins/{uid}.isAdmin === true` checked in Firestore. Redirect to `/` on failure.

**Adding an admin:**
1. Sign in to the site (creates Firebase Auth account).
2. Firebase Console → Authentication → Users → copy the UID.
3. Firestore → `admins` collection → New document:
   - Document ID: `{uid}`
   - Fields: `isAdmin` (boolean) = `true`, `email` (string)

**Capabilities:** Real-time list of all testimonials grouped by status. Approve, reject, toggle back, inline edit before approving. Confirm dialog before reject. `uid` and email are never rendered in the UI.

---

## Firestore Security Rules

Apply in Firebase Console → Firestore → Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }

    match /stripe_sessions/{sessionId} {
      // Client reads to check replay; creates to record redemption.
      // uid must match the authenticated user. Sessions are immutable once created.
      allow read: if request.auth != null;
      allow create: if request.auth != null
        && request.resource.data.uid == request.auth.uid;
      allow update, delete: if false;
    }

    match /testimonials/{id} {
      allow read: if resource.data.status == 'approved';
      allow create: if request.auth != null
        && request.resource.data.status == 'pending'
        && request.resource.data.uid == request.auth.uid
        && !('email' in request.resource.data);
      allow update, delete: if isAdmin(request.auth.uid);
    }

    match /admins/{uid} {
      allow read: if request.auth != null && request.auth.uid == uid;
      allow write: if false;
    }

    match /diagnostic_leads/{id} {
      // Diagnostic email opt-in — unauthenticated users allowed (lead magnet).
      // create-only: no reads, updates, or deletes from the client.
      allow create: if request.resource.data.consent == true
        && request.resource.data.source == 'diagnostic'
        && request.resource.data.email is string
        && request.resource.data.email.size() > 0;
      allow read, update, delete: if false;
    }

    function isAdmin(uid) {
      return uid != null &&
        get(/databases/$(database)/documents/admins/$(uid)).data.isAdmin == true;
    }
  }
}
```

---

## Blog Pipeline

### Overview

One post per week, auto-published. Wednesday 09:00 UTC via
`.github/workflows/blog-draft.yml` (also triggerable via `workflow_dispatch`).

**Flow per run:**

1. **Check** — look for any `.md` in `blog-drafts/` that does not start with
   `_` and is not a meta file (PUBLISHING.md, review-queue.md, .factcheck.md).
2. **Generate** (if no candidate) — `scripts/generate-blog-draft.js` calls the
   Anthropic API (model from `ANTHROPIC_MODEL` env, default `claude-sonnet-4-6`).
   Writes `blog-drafts/[slug].md` + `blog-drafts/[slug].factcheck.md`.
   Marks topic `queued` → `drafted` in `blog/topics.js`.
3. **Smoke test** — `scripts/smoke-test-draft.js` runs 6 checks (see below).
   Outputs `result=pass|fail|noop` and `slug=` to `$GITHUB_OUTPUT`.
4. **Publish (pass)** — `scripts/publish-draft.js` converts markdown → HTML,
   fills `blog/post-template.html`, writes `blog/[slug].html`, appends to
   `blog/posts.js`, inserts into `sitemap.xml`, marks topic `published`,
   deletes draft files, appends to `review-queue.md`. Commits and pushes to main.
5. **Hold (fail)** — `scripts/hold-draft.js` renames draft to
   `_held_[slug].md` (and `.factcheck.md`), appends HELD row to
   `review-queue.md`. Commits and pushes. Next run generates fresh draft.
6. **Noop** — nothing to do (no candidate, no queued topics); no commit.

### Smoke-test checks

Checks run by `scripts/smoke-test-draft.js` before any publish:

| | Check | Detail |
|-|-------|--------|
| a | Frontmatter completeness | title, slug, excerpt, category, date, readingTime all present and non-empty |
| b | Factcheck integrity | companion `.factcheck.md` exists, length ≥ 100 chars, no `HARD ERROR:` markers |
| c | Internal links | no `[/path]` bracket-only links; all `/path` markdown links target known routes |
| d | No placeholders | no `TODO`, `(placeholder`, or `[PLACEHOLDER]` in body |
| e | Word count | body word count ≥ 900 |
| f | No duplicate slug | slug not already in `blog/posts.js` or as `blog/[slug].html` |

All 6 checks must pass. Any failure → hold. The script always exits 0;
failures are signalled via `result=fail` output, not a non-zero exit code.

### Held-draft retry mechanism

When a smoke test fails, `hold-draft.js` renames the draft:
- `blog-drafts/[slug].md` → `blog-drafts/_held_[slug].md`
- `blog-drafts/[slug].factcheck.md` → `blog-drafts/_held_[slug].factcheck.md`

The candidate-finder in both the workflow and `smoke-test-draft.js` skips files
starting with `_`, so the held draft is never retried automatically. The next
run generates a fresh draft from the topic queue instead.

To manually retry a held draft: rename `_held_[slug].md` → `[slug].md` (and
the `.factcheck.md` correspondingly), then trigger the workflow via
`workflow_dispatch` or wait for the next Wednesday.

### Review queue

`blog-drafts/review-queue.md` is appended to by both `publish-draft.js` (on
publish) and `hold-draft.js` (on hold). It is excluded from the GitHub Pages
deploy — it lives only in the repo.

Weekly review task: open the file after each Wednesday run, visit live URLs for
auto-published posts, spot-check accuracy against official AWS docs, and change
⬜ to ✅. Investigate HELD entries and fix or re-queue them.

### Topic queue

`blog/topics.js` — a `window.BlogTopics` array. Status values:
- `queued` — not yet drafted
- `drafted` — draft exists in `blog-drafts/` (or was held)
- `published` — live on the site

The generate script picks the first `queued` topic. Add new topics to the
array in `queued` status when the queue runs low.

### Required secret

`ANTHROPIC_API_KEY` — set as a GitHub Actions repo secret. Used only by
`generate-blog-draft.js` via the Anthropic API. Never commit this secret.

### Key files

| File | Role |
|------|------|
| `scripts/generate-blog-draft.js` | Calls Anthropic API, writes draft + factcheck |
| `scripts/smoke-test-draft.js` | Runs 6 checks, outputs result/slug/reasons |
| `scripts/publish-draft.js` | Markdown → HTML, fills template, updates manifests |
| `scripts/hold-draft.js` | Renames failed draft, appends to review queue |
| `.github/workflows/blog-draft.yml` | Wednesday cron, orchestrates all steps |
| `blog/topics.js` | Topic queue (queued → drafted → published) |
| `blog/posts.js` | Live post manifest read by blog index |
| `blog/post-template.html` | HTML template with TODO markers |
| `blog-drafts/review-queue.md` | Human review log (excluded from deploy) |
| `blog-drafts/PUBLISHING.md` | Reference doc for manual publishes |

---

## Conventions

These rules apply to every change made to this codebase. No exceptions.

### AWS affiliation
- Never claim or imply affiliation with, endorsement by, or sponsorship by Amazon Web Services.
- The **footer disclaimer** (`components/footer.js` reads `site-config.js → footerDisclaimer`) is the sole trademark disclaimer surface and must appear on every page at all times. Never remove it or shorten the `footerDisclaimer` string.
- Exam-related marketing copy must describe what the product *is*, not imply official status.

### Brand naming in metadata
**The site brand is "Cloud Practitioner Prep"** — not "AWS Cloud Practitioner Prep".

Reason: leading the brand identity with a registered AWS trademark ("AWS") is
inappropriate for an independent third-party site, even though the exam name
"AWS Certified Cloud Practitioner" and "AWS CLF-C02" may appear freely as
descriptors (nominative references to the real exam).

Rules that apply to every page's `<head>`:
- `og:site_name` → `Cloud Practitioner Prep`
- `meta[name="author"]` → `Cloud Practitioner Prep` (only on pages that include it)
- `<title>` — "Cloud Practitioner Prep" must be the **leading brand token**:
  - Format A (most pages): `Cloud Practitioner Prep — [Descriptive Page Topic]`
  - Format B (blog posts with a natural topic-first title): topic leads, brand
    appears as a suffix: `[Topic] — Cloud Practitioner Prep`
  - "AWS" or "CLF-C02" may appear anywhere in the title as a descriptor/qualifier
    of the exam, but must not be the **first word** of the title acting as a brand.
- `og:title` and `twitter:title` follow the same convention as `<title>`.
- Do **not** change body copy, hero headings, or in-content references like
  "AWS Certified Cloud Practitioner" — those are legitimate nominative uses.
- The nav logo text `CLF-C02 Prep` is a short in-page label, not a metadata
  brand claim; it is intentionally kept as-is for UI brevity.

### Exam facts
- All CLF-C02 facts (question count, duration, pass score, domain names, domain weights) come from the **official AWS exam guide** only.
- Do not invent, estimate, or round these figures. If the guide changes, update `site-config.js` and this file together, then regenerate affected content.
- Question IDs, domain IDs, and topic IDs in `questions.js` must map to real exam guide task statements.

### Fabricated data
- **Never** generate, seed, hardcode, or commit example reviews, testimonials, student names, scores, or aggregate statistics (pass rates, student counts, ratings).
- The testimonials section must remain hidden until ≥ 3 real approved reviews exist in Firestore.
- Stats (average score etc.) are computed from real Firestore data only. Render nothing — not a zero, not a placeholder — when the data set is empty.

### Payment status
- `users/{uid}.paid` is written client-side by `firebase-auth.js` `checkPaymentRedirect()`
  after the Stripe Payment Link redirects back with a `?session_id=cs_…` parameter.
- The flow includes replay protection: `stripe_sessions/{sessionId}` is written first and
  checked on every redirect. If the doc already exists, the write is silently rejected.
- **Known tradeoff:** A client-side paywall can be bypassed by a technically sophisticated
  user who obtains a valid, unclaimed Stripe session ID. This is the accepted model for
  static hosting (matches the CCA approach). Do not add further client-side bypasses.
- The inactive `api/stripe-webhook.js` is the hardening path: cryptographic Stripe
  signature verification server-side, then `paid: true` set via Admin SDK. Activate it
  when a serverless host is available.
- Do not add any *new* client-side path that sets `paid: true` without the session-ID
  check and replay guard already in `checkPaymentRedirect()`.

### Secrets
- `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`, `FIREBASE_SERVICE_ACCOUNT`
  are environment variables for the serverless host that runs `api/`. They are not Vercel-specific
  — set them on whichever platform hosts the functions.
- These must never appear in committed files, `.env` files, or `site-config.js`.
- Firebase Web SDK config (`apiKey`, `authDomain`, etc.) in `site-config.js` is intentionally
  public — it is a project identifier, not a secret.

### No fabricated outcome claims
- Do not add pass-rate percentages, student-count statistics, or rating scores to meta tags, OG tags, structured data, or page copy unless they are computed from real Firestore data at runtime.
- Structured data (`application/ld+json`) must not include `aggregateRating` unless backed by live data.

---

## Duplication Checklist (new certification site)

1. Copy this repo → new GitHub repo.
2. Update `site-config.js` — new exam code, cert name, domains, weights, prices, Firebase config.
3. Update `index.html` `<head>` — title, meta description, canonical URL, OG/Twitter tags.
   - `og:site_name` and `meta[name="author"]` must use the new site's brand name (not "AWS …")
   - Follow the brand-naming convention in `## Conventions → Brand naming in metadata`.
4. Update `CNAME` with the new domain.
5. Update `sitemap.xml` and `robots.txt`.
6. Generate new `questions.js` and `training-content.js` from official exam guide.
7. Create a new Firebase project — enable Email/Password + Google auth, apply Firestore rules.
8. Create a new Stripe product and note the Price ID.
9. Push to `main` → GitHub Actions deploys to `gh-pages` branch → GitHub Pages goes live.
   For Stripe payments to work, also deploy `api/` to a separate serverless host and set the
   four env vars (`STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`,
   `FIREBASE_SERVICE_ACCOUNT`) there.
10. Register the new domain in Google Search Console.
11. Update the footer disclaimer in `site-config.js → footerDisclaimer` for the new cert.
