# cloudpractitionerprep.com — Developer Notes

## Hosting
Static site deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).
Pushes to `main` trigger a workflow that copies the repo to the `gh-pages` branch,
which GitHub Pages serves at `cloudpractitionerprep.com`.

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
