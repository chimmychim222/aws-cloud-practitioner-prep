// api/stripe-webhook.js
// ============================================================
// NOT ACTIVE — GitHub Pages cannot execute server-side code.
// This function requires a serverless runtime (Vercel, Cloudflare
// Workers, AWS Lambda, etc.). Retained for future use if a serverless
// host is added. The active payment flow uses client-side session
// validation in firebase-auth.js. See CLAUDE.md.
// ============================================================
// Receives POST from Stripe, verifies signature, grants paid access via Admin SDK.
// Body parsing MUST be disabled so we receive raw bytes Stripe signed.

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    )
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  // Read raw body — required for Stripe signature verification
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const rawBody = Buffer.concat(chunks);

  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Stripe signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Only act on completed, paid checkouts — return 200 for everything else
  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true });
  }

  const session = event.data.object;

  if (session.payment_status !== 'paid') {
    return res.status(200).json({ received: true });
  }

  const uid = session.client_reference_id;
  if (!uid) {
    // Log but return 200 — returning 4xx causes Stripe to retry indefinitely
    console.error('checkout.session.completed missing client_reference_id:', session.id);
    return res.status(200).json({ received: true });
  }

  const db = admin.firestore();
  const sessionRef = db.collection('stripe_sessions').doc(session.id);
  const userRef = db.collection('users').doc(uid);

  // Replay protection — ignore if already processed
  const existing = await sessionRef.get();
  if (existing.exists) {
    return res.status(200).json({ received: true, duplicate: true });
  }

  // Atomic batch: mark session consumed + grant access
  const batch = db.batch();
  batch.set(sessionRef, {
    uid,
    redeemedAt: admin.firestore.FieldValue.serverTimestamp()
  });
  batch.update(userRef, { paid: true });
  await batch.commit();

  return res.status(200).json({ received: true });
};

// Vercel: disable body parsing so we receive the raw bytes Stripe signed
module.exports.config = {
  api: { bodyParser: false }
};
