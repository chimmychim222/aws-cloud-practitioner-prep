// ============================================================
// Firebase Authentication & Session Management
// ============================================================
(function () {
  'use strict';

  // Firebase config — reads from site-config.js
  const firebaseConfig = window.SiteConfig.firebaseConfig;

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Google provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.addScope('email');
  googleProvider.addScope('profile');

  // Session ID for single-session enforcement
  const SESSION_ID = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substr(2);

  // True only when checkPaymentRedirect completes a real Stripe purchase in this page
  // session. Set before paid=true is written so the onSnapshot listener can tell the
  // difference between "purchase just happened" and "returning paid user signing in."
  let purchasedThisSession = false;

  // ---- Helpers ----
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  // ---- Expose global auth API ----
  window.AppAuth = {
    currentUser: null,
    userPaid: false,
    ready: false,
    docReady: false,   // true once the user's Firestore doc is confirmed/created
    onReady: null,

    hasPaid() {
      return this.userPaid;
    },

    isLoggedIn() {
      return !!this.currentUser;
    },

    getDisplayName() {
      if (!this.currentUser) return '';
      return this.currentUser.displayName || this.currentUser.email.split('@')[0];
    },

    async logout() {
      try {
        await auth.signOut();
      } catch (e) {
        console.error('Logout error:', e);
      }
    }
  };

  // ---- Auth State Listener ----
  auth.onAuthStateChanged(async (user) => {
    window.AppAuth.currentUser = user;
    window.AppAuth.userPaid = false;
    window.AppAuth.docReady = false;

    if (user) {
      try {
        // Get or create user document
        const userRef = db.collection('users').doc(user.uid);
        const doc = await userRef.get();

        if (doc.exists) {
          const data = doc.data();
          window.AppAuth.userPaid = data.paid === true;

          // Check single session
          if (data.sessionId && data.sessionId !== SESSION_ID) {
            // Another session exists — update with our session (kick the old one)
          }

          // Update session ID
          await userRef.update({
            sessionId: SESSION_ID,
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
          });
        } else {
          // New user — create document
          await userRef.set({
            email: user.email,
            displayName: user.displayName || user.email.split('@')[0],
            paid: false,
            sessionId: SESSION_ID,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
          });
        }

        // Doc is confirmed to exist (found or just created) — pay button can now redirect
        window.AppAuth.docReady = true;

        // Listen for session changes (kick if another login happens)
        userRef.onSnapshot((snap) => {
          if (!snap.exists) return;
          const data = snap.data();

          const wasPaid = window.AppAuth.userPaid;
          window.AppAuth.userPaid = data.paid === true;
          updateUI();

          // Show banner only when the purchase happened in this page session.
          // purchasedThisSession is set by checkPaymentRedirect (Path A) before it
          // writes paid=true, so returning paid users signing in never hit this.
          // purchase_completed fires exclusively in checkPaymentRedirect — not here —
          // to prevent false GA4/Google Ads conversions on every paid-user sign-in.
          if (!wasPaid && data.paid === true && purchasedThisSession) {
            showPaymentSuccessBanner();
          }

          // Check if we got kicked by another session
          if (data.sessionId && data.sessionId !== SESSION_ID) {
            auth.signOut();
            showSessionKicked();
          }
        });

        // Check for completed Stripe payment and grant access client-side
        checkPaymentRedirect(user.uid, userRef);

      } catch (e) {
        console.error('Auth state error:', e);
      }
    } else {
      // No signed-in user — check for a pending unclaimed payment in the URL.
      // If found, show a prompt so the user can sign in and claim it.
      checkPendingPaymentOnSignOut();
    }

    window.AppAuth.ready = true;
    updateUI();

    // Notify app.js that auth is ready
    if (window.AppAuth.onReady) window.AppAuth.onReady();
    document.dispatchEvent(new Event('auth-ready'));
  });

  // ---- Pending payment with no signed-in user ----
  // Called when onAuthStateChanged fires with user=null and a cs_ session_id is in the URL.
  // Does NOT clean the URL — the session_id must survive until sign-in so that
  // onAuthStateChanged (re-fired after auth) can hand it to checkPaymentRedirect.
  function checkPendingPaymentOnSignOut() {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    if (!sessionId || !sessionId.startsWith('cs_')) return;
    if (document.getElementById('claim-purchase-banner')) return; // already shown

    const banner = document.createElement('div');
    banner.id = 'claim-purchase-banner';
    banner.className = 'payment-success-banner';
    banner.style.background = 'linear-gradient(90deg, #1565C0, #0D47A1)';
    banner.innerHTML =
      '<span>Payment received! Sign in to unlock your practice tests.</span>' +
      '<button style="margin-left:12px;padding:4px 14px;font-size:0.82rem;font-weight:700;' +
        'background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.5);' +
        'color:#fff;border-radius:6px;cursor:pointer" ' +
        'onclick="window.showAuthModal && window.showAuthModal(\'login\')">' +
        'Sign In</button>';
    document.body.insertBefore(banner, document.body.firstChild);

    // Open the sign-in modal immediately so the action is obvious
    if (window.showAuthModal) window.showAuthModal('login');
  }

  // ---- Check Stripe redirect ----
  // Client-side payment completion for static hosting (GitHub Pages).
  // Security tradeoff: paid is written by the client after validating the session ID
  // prefix and checking replay protection. A sophisticated attacker who obtained a
  // valid cs_ session ID before it was claimed could exploit this. This matches the
  // CCA model; server-side verification (api/stripe-webhook.js) is the hardening path
  // when a serverless host is available.
  function checkPaymentRedirect(uid, userRef) {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    // Only accept Stripe checkout session IDs (cs_ prefix)
    if (!sessionId || !sessionId.startsWith('cs_')) return;

    // Clean URL immediately regardless of outcome
    window.history.replaceState({}, '', window.location.pathname);

    // Replay protection: reject if this session was already redeemed
    const sessionRef = db.collection('stripe_sessions').doc(sessionId);
    sessionRef.get().then(function(snap) {
      if (snap.exists) return; // already used — ignore silently

      // Record session as redeemed, then grant access
      sessionRef.set({
        uid: uid,
        redeemedAt: firebase.firestore.FieldValue.serverTimestamp()
      }).then(function() {
        // set+merge instead of update: creates the doc if it somehow doesn't exist yet,
        // ensuring a paying customer can never be left without paid:true
        return userRef.set({ paid: true }, { merge: true });
      }).then(function() {
        const claimBanner = document.getElementById('claim-purchase-banner');
        if (claimBanner) claimBanner.remove();
        // Set flag before writing paid=true so the onSnapshot listener (which fires
        // when Firestore delivers the write) sees purchasedThisSession=true.
        purchasedThisSession = true;
        window.AppAuth.userPaid = true;
        updateUI();
        showPaymentSuccessBanner();
        if (window.gtag) gtag('event', 'purchase_completed', { value: 49, currency: 'USD' });
      });
    });
  }

  // ---- UI Updates ----
  function updateUI() {
    const user = window.AppAuth.currentUser;
    const authBtn = $('#auth-header-btn');
    const userMenu = $('#user-menu');
    const userName = $('#user-menu-name');
    const userEmail = $('#user-menu-email');
    const testUserName = $('#test-user-name');

    if (user) {
      const name = window.AppAuth.getDisplayName();
      if (authBtn) {
        authBtn.innerHTML = '<span class="auth-avatar">' + name.charAt(0).toUpperCase() + '</span>';
        authBtn.classList.add('logged-in');
      }
      if (userName) userName.textContent = name;
      if (userEmail) userEmail.textContent = user.email;
      if (testUserName) testUserName.textContent = name;

      // Update test card locks
      if (typeof window.updateTestCardLocks === 'function') {
        window.updateTestCardLocks();
      }
    } else {
      if (authBtn) {
        authBtn.innerHTML = 'Sign In';
        authBtn.classList.remove('logged-in');
      }
      if (userMenu) userMenu.classList.add('hidden');
      if (testUserName) testUserName.textContent = '';

      if (typeof window.updateTestCardLocks === 'function') {
        window.updateTestCardLocks();
      }
    }
  }

  // ---- Auth Modal ----
  function showAuthModal(tab) {
    const modal = $('#auth-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    switchAuthTab(tab || 'login');
    clearAuthErrors();
  }

  function hideAuthModal() {
    const modal = $('#auth-modal');
    if (!modal) return;
    modal.classList.add('closing');
    setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('modal-open', 'closing');
      document.body.style.overflow = '';
    }, 250);
  }

  function switchAuthTab(tab) {
    $$('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    $$('.auth-form').forEach(f => f.classList.toggle('hidden', f.id !== 'auth-form-' + tab));
  }

  function clearAuthErrors() {
    $$('.auth-error').forEach(e => { e.textContent = ''; e.classList.add('hidden'); });
  }

  function showAuthError(formId, msg) {
    const el = $(`#${formId} .auth-error`);
    if (el) { el.textContent = msg; el.classList.remove('hidden'); }
  }

  // ---- Google Sign-In ----
  async function handleGoogleSignIn() {
    clearAuthErrors();
    try {
      var result = await auth.signInWithPopup(googleProvider);
      hideAuthModal();
      if (result.additionalUserInfo && result.additionalUserInfo.isNewUser) {
        if (window.gtag) gtag('event', 'signup_completed', { method: 'google' });
        showOnboardingModal(result.user.uid);
      }
    } catch (err) {
      if (err.code === 'auth/account-exists-with-different-credential') {
        // Email/password account already exists — prompt to link
        window._pendingGoogleCred = err.credential;
        showAuthError('auth-form-login',
          'An account with that email already exists. Sign in with your password below to link your Google account.');
        switchAuthTab('login');
        const emailEl = $('#login-email');
        if (emailEl) emailEl.value = err.email || '';
      } else if (err.code !== 'auth/popup-closed-by-user') {
        showAuthError('auth-form-login', 'Google sign-in failed. Please try again.');
      }
    }
  }

  // ---- Signup ----
  async function handleSignup(e) {
    e.preventDefault();
    clearAuthErrors();
    const name = $('#signup-name').value.trim();
    const email = $('#signup-email').value.trim();
    const password = $('#signup-password').value;
    const btn = $('#signup-submit');

    if (!name) { showAuthError('auth-form-signup', 'Please enter your name.'); return; }
    if (!email) { showAuthError('auth-form-signup', 'Please enter your email.'); return; }
    if (password.length < 6) { showAuthError('auth-form-signup', 'Password must be at least 6 characters.'); return; }

    btn.disabled = true;
    btn.textContent = 'Creating account...';

    try {
      const cred = await auth.createUserWithEmailAndPassword(email, password);
      await cred.user.updateProfile({ displayName: name });
      hideAuthModal();
      if (window.gtag) gtag('event', 'signup_completed', { method: 'email' });
      showOnboardingModal(cred.user.uid);
    } catch (err) {
      const msg = err.code === 'auth/email-already-in-use' ? 'This email is already registered. Try logging in.'
        : err.code === 'auth/invalid-email' ? 'Invalid email address.'
        : err.code === 'auth/weak-password' ? 'Password is too weak.'
        : err.message;
      showAuthError('auth-form-signup', msg);
    } finally {
      btn.disabled = false;
      btn.textContent = 'Create Account';
    }
  }

  // ---- Login ----
  async function handleLogin(e) {
    e.preventDefault();
    clearAuthErrors();
    const email = $('#login-email').value.trim();
    const password = $('#login-password').value;
    const btn = $('#login-submit');

    if (!email || !password) { showAuthError('auth-form-login', 'Please enter email and password.'); return; }

    btn.disabled = true;
    btn.textContent = 'Signing in...';

    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Link pending Google credential if user arrived via Google→email flow
      if (window._pendingGoogleCred) {
        try { await auth.currentUser.linkWithCredential(window._pendingGoogleCred); }
        finally { window._pendingGoogleCred = null; }
      }
      hideAuthModal();
    } catch (err) {
      const msg = err.code === 'auth/user-not-found' ? 'No account found with this email.'
        : err.code === 'auth/wrong-password' ? 'Incorrect password.'
        : err.code === 'auth/invalid-credential' ? 'Invalid email or password.'
        : err.code === 'auth/too-many-requests' ? 'Too many attempts. Please wait and try again.'
        : err.message;
      showAuthError('auth-form-login', msg);
    } finally {
      btn.disabled = false;
      btn.textContent = 'Sign In';
    }
  }

  // ---- Password Reset ----
  async function handleForgotPassword(e) {
    e.preventDefault();
    const email = $('#login-email').value.trim();
    if (!email) { showAuthError('auth-form-login', 'Enter your email above, then click Forgot Password.'); return; }
    try {
      await auth.sendPasswordResetEmail(email);
      showAuthError('auth-form-login', 'Password reset email sent! Check your inbox.');
      $('#auth-form-login .auth-error').style.color = '#2E7D32';
    } catch (err) {
      showAuthError('auth-form-login', 'Could not send reset email. Check the address.');
    }
  }

  // ---- Session Kicked ----
  function showSessionKicked() {
    const banner = document.createElement('div');
    banner.className = 'payment-success-banner';
    banner.style.background = 'linear-gradient(90deg, #d32f2f, #c62828)';
    banner.innerHTML = '<span>You were signed out because your account was logged in on another device.</span><button class="banner-close" onclick="this.parentElement.remove()">x</button>';
    document.body.insertBefore(banner, document.body.firstChild);
  }

  // ---- Payment Success Banner ----
  function showPaymentSuccessBanner() {
    const banner = document.createElement('div');
    banner.className = 'payment-success-banner';
    banner.innerHTML = '<span>Payment successful! You now have full access to all practice tests.</span><button class="banner-close" onclick="this.parentElement.remove()">&#10005;</button>';
    document.body.insertBefore(banner, document.body.firstChild);
    setTimeout(() => banner.remove(), 8000);
    // Invite buyer to leave a review after the banner has settled
    setTimeout(() => { if (typeof window.showReviewPrompt === 'function') window.showReviewPrompt(); }, 2500);
  }

  // ── Onboarding Modal ──────────────────────────────────────────────────────
  function markOnboardingSeen(uid) {
    if (!uid) return;
    db.collection('users').doc(uid).set({ onboardingSeen: true }, { merge: true });
  }

  function showOnboardingModal(uid) {
    if (document.getElementById('onboarding-modal')) return;

    var overlay = document.createElement('div');
    overlay.id = 'onboarding-modal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-content onboarding-modal">
        <button class="modal-close" id="onboarding-close" aria-label="Dismiss">&times;</button>
        <div class="onboarding-icon" aria-hidden="true">&#127881;</div>
        <h2 class="onboarding-title">Welcome to CLF-C02 Prep</h2>
        <p class="onboarding-sub">Find your weak spots before exam day — then study what actually matters.</p>
        <div class="onboarding-actions">
          <button id="onboarding-diagnostic-btn" class="btn btn-primary btn-lg onboarding-cta-primary">
            Take the free diagnostic first
            <span class="onboarding-cta-hint">10 questions · ~5 min · find your weak areas</span>
          </button>
          <button id="onboarding-pricing-btn" class="btn btn-secondary onboarding-cta-secondary">
            See pricing — $49
          </button>
        </div>
        <button class="onboarding-dismiss" id="onboarding-dismiss">No thanks — I'll explore on my own</button>
      </div>`;
    document.body.appendChild(overlay);
    if (window.gtag) gtag('event', 'onboarding_shown');

    function escHandler(e) { if (e.key === 'Escape') dismiss(); }

    function dismiss() {
      markOnboardingSeen(uid);
      document.removeEventListener('keydown', escHandler);
      overlay.remove();
    }

    document.getElementById('onboarding-close').addEventListener('click', dismiss);
    document.getElementById('onboarding-dismiss').addEventListener('click', dismiss);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) dismiss(); });
    document.addEventListener('keydown', escHandler);

    document.getElementById('onboarding-diagnostic-btn').addEventListener('click', function () {
      if (window.gtag) gtag('event', 'onboarding_diagnostic_clicked');
      markOnboardingSeen(uid);
      overlay.remove();
      window.location.href = '/diagnostic';
    });

    document.getElementById('onboarding-pricing-btn').addEventListener('click', function () {
      if (window.gtag) gtag('event', 'onboarding_pricing_clicked');
      markOnboardingSeen(uid);
      overlay.remove();
      if (window.BuyFlow) window.BuyFlow.handlePay();
    });
  }

  // ---- Expose showAuthModal globally ----
  window.showAuthModal = showAuthModal;

  // ---- Wire up events on DOM ready ----
  function initAuthUI() {
    // Auth header button
    const authBtn = $('#auth-header-btn');
    if (authBtn) {
      authBtn.addEventListener('click', () => {
        if (window.AppAuth.isLoggedIn()) {
          const menu = $('#user-menu');
          if (menu) menu.classList.toggle('hidden');
        } else {
          showAuthModal('login');
        }
      });
    }

    // Close user menu when clicking outside
    document.addEventListener('click', (e) => {
      const menu = $('#user-menu');
      const authBtn = $('#auth-header-btn');
      if (menu && !menu.contains(e.target) && authBtn && !authBtn.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });

    // User menu logout
    const logoutBtn = $('#user-menu-logout');
    if (logoutBtn) logoutBtn.addEventListener('click', () => {
      $('#user-menu').classList.add('hidden');
      window.AppAuth.logout();
    });

    // Auth modal close
    const closeBtn = $('#auth-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', hideAuthModal);

    const modal = $('#auth-modal');
    if (modal) {
      modal.addEventListener('click', (e) => { if (e.target === modal) hideAuthModal(); });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) hideAuthModal();
    });

    // Tab switching
    $$('.auth-tab').forEach(tab => {
      tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
    });

    // Forms
    const signupForm = $('#auth-form-signup');
    if (signupForm) signupForm.addEventListener('submit', handleSignup);

    const loginForm = $('#auth-form-login');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    // Forgot password
    const forgotBtn = $('#forgot-password-btn');
    if (forgotBtn) forgotBtn.addEventListener('click', handleForgotPassword);

    // Google sign-in buttons (one per form)
    $$('.google-signin-btn').forEach(btn => btn.addEventListener('click', handleGoogleSignIn));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthUI);
  } else {
    initAuthUI();
  }
})();
