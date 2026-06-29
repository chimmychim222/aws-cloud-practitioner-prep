# cloudpractitionerprep.com — Developer Reference

> **Affiliation disclaimer (required on every page)**
> This site is an independent exam-preparation resource. It is **not affiliated with,
> endorsed by, or sponsored by Amazon Web Services, Inc. or its affiliates.**
> The footer must always include the string:
> _"AWS Certified Cloud Practitioner CLF-C02 Practice — Not affiliated with or endorsed by Amazon Web Services."_
> This text is driven by `site-config.js → footerDisclaimer` and rendered via
> `data-cfg="footer-disclaimer"` in `index.html`. Never remove it.

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
| Fonts | Inter (Google Fonts CDN); Amazon Ember as secondary fallback |
| Hosting | **GitHub Pages** — static files only, served from the `gh-pages` branch |
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

**Host:** GitHub Pages, served from the `gh-pages` branch of
`chimmychim222/aws-cloud-practitioner-prep`. Custom domain: `cloudpractitionerprep.com`.
CDN: Fastly (`185.199.108–111.153`). Cache: `Cache-Control: max-age=600` (10 min, set by GitHub Pages).

### How a push reaches the live site

```
git push origin main
       ↓
GitHub Actions (.github/workflows/deploy.yml) triggers on push to main
       ↓
peaceiris/actions-gh-pages@v4 force-pushes all files
(excluding .github/ and CNAME.example) to the gh-pages branch
       ↓
GitHub Pages detects gh-pages branch update → rebuilds (1–2 min)
       ↓
Fastly CDN serves files at cloudpractitionerprep.com (max-age=600)
```

To trigger a deploy manually: GitHub → repo → Actions → "Deploy to GitHub Pages" → Run workflow.

### Clean URLs and vercel.json

`vercel.json` is **inert on GitHub Pages** — GitHub Pages does not process it.
It is kept in the repo as documentation of the intended URL structure (`"cleanUrls": true`)
and will be needed if the site is migrated to a platform that does support it (Vercel, Netlify).

Clean URLs (`/faq` instead of `/faq.html`) work via GitHub Pages' own server-side URL
normalization, not via `vercel.json`. Note: the workflow deploys with a `.nojekyll` file
(added by `peaceiris/actions-gh-pages` by default), which disables Jekyll. Confirm on the
live site that `/faq` and `/faq.html` both resolve — GitHub Pages behavior without Jekyll
can vary. If `/faq` returns 404, internal links must use `/faq.html` or a custom 404 redirect.

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

## Conventions

These rules apply to every change made to this codebase. No exceptions.

### AWS affiliation
- Never claim or imply affiliation with, endorsement by, or sponsorship by Amazon Web Services.
- The footer disclaimer must appear on every page at all times.
- Exam-related marketing copy must describe what the product *is*, not imply official status.

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
