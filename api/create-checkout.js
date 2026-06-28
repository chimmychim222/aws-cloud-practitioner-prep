// api/create-checkout.js
// Creates a Stripe Checkout session with the Firebase uid as client_reference_id.
// The webhook reads that uid to know which user to grant paid access.

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
    )
  });
}

const ALLOWED_ORIGINS = [
  'https://cloudpractitionerprep.com',
  'http://localhost:3000',
];

module.exports = async function handler(req, res) {
  const origin = ALLOWED_ORIGINS.includes(req.headers.origin)
    ? req.headers.origin
    : ALLOWED_ORIGINS[0];

  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  // Verify Firebase ID token from Authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  let uid;
  try {
    const decoded = await admin.auth().verifyIdToken(authHeader.slice(7));
    uid = decoded.uid;
  } catch (err) {
    return res.status(401).json({ error: 'invalid_token' });
  }

  // Prevent double-purchase
  const userDoc = await admin.firestore().collection('users').doc(uid).get();
  if (userDoc.exists && userDoc.data().paid === true) {
    return res.status(400).json({ error: 'already_paid' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
      mode: 'payment',
      client_reference_id: uid,
      success_url: `${origin}/?payment=pending`,
      cancel_url: `${origin}/`,
    });
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe session creation failed:', err.message);
    return res.status(500).json({ error: 'checkout_failed' });
  }
};
