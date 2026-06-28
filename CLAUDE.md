# cloudpractitionerprep.com — Developer Notes

## Hosting
**Static site + serverless API deployed to Vercel.**
Connect the GitHub repo to Vercel (vercel.com → New Project → import repo).
Vercel deploys automatically on every push to `main`. The `api/` directory is
served as Node.js serverless functions; everything else is served as static files.

The old GitHub Actions GH Pages workflow (`.github/workflows/deploy.yml`) is
superseded by Vercel's GitHub integration and can be removed.

## Secrets — NEVER commit these
The following must be set as **Vercel environment variables** (Project → Settings →
Environment Variables). They must never appear in any committed file, `.env` file,
or `site-config.js`.

| Variable | What it is | Where to get it |
|---|---|---|
| `STRIPE_SECRET_KEY` | Stripe API secret key (`sk_live_…`) | Stripe Dashboard → Developers → API keys |
| `STRIPE_PRICE_ID` | Stripe Price ID for the $49 product (`price_…`) | Stripe Dashboard → Products → your product → price |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret (`whsec_…`) | Stripe Dashboard → Developers → Webhooks → your endpoint |
| `FIREBASE_SERVICE_ACCOUNT` | Firebase Admin SDK service account JSON (stringified) | Firebase Console → Project Settings → Service Accounts → Generate new private key |

`.env` and `.env.*` files are in `.gitignore` and must never be committed.

## Firebase config
`site-config.js` contains the Firebase Web SDK config (apiKey, authDomain, etc.) and
is committed to the repo. **This is intentional and correct.**

Firebase Web API keys are public project identifiers, not secrets. They must ship to
the browser for the SDK to initialise. Security is provided by:

- **Firebase Authorized Domains** — only `cloudpractitionerprep.com` and
  `localhost` can make auth requests with this config.
- **Firestore Security Rules** — all read/write access is gated by rules in the
  Firebase Console, not by hiding the config.

Do not add the Firebase config to GitHub Secrets or treat it as a credential.
If you duplicate this site, create a new Firebase project and update `site-config.js`
with the new project's config.

## Admin moderation page (`/admin.html`)
The admin review moderation UI lives at `/admin.html`. It is **not linked from any
public page**. Access is gated by two checks on page load:

1. The visitor must be signed in via Firebase Auth.
2. Their Firebase UID must exist as a document in the Firestore `admins` collection
   with `isAdmin: true`.

### Adding an admin user
1. Have the person sign in to the site (creates their Firebase Auth account).
2. Firebase Console → Authentication → Users → find their email → copy their UID.
3. Firestore → Data → `admins` collection → Add document:
   - Document ID: their UID
   - Fields: `isAdmin` (boolean) = `true`, `email` (string) = their email
4. They can now access `/admin.html`.

### Firestore Security Rules for testimonials
Apply these rules in the Firebase Console (Firestore → Rules):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

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

    function isAdmin(uid) {
      return uid != null &&
        get(/databases/$(database)/documents/admins/$(uid)).data.isAdmin == true;
    }
  }
}
```

## Duplication checklist (new certification site)
1. Copy this repo → new repo.
2. Update `site-config.js` with new cert details and a new Firebase project config.
3. Update `index.html` `<head>` meta tags (title, description, canonical URL, OG/Twitter).
4. Update `CNAME` with the new domain.
5. Update `sitemap.xml` and `robots.txt` with the new domain.
6. Generate new `questions.js` and `training-content.js`.
7. Create a new Firebase project, enable Email/Password + Google auth, set Firestore rules.
8. Create a new Stripe product + payment link.
9. Register the new domain in Google Search Console.
