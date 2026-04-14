// ============================================================
// Firebase Authentication & Session Management
// ============================================================
(function () {
  'use strict';

  // Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCxrC9P263tCT_RFh5Xd99WHm0bJRxUekw",
    authDomain: "aws-ccp-prep.firebaseapp.com",
    projectId: "aws-ccp-prep",
    storageBucket: "aws-ccp-prep.firebasestorage.app",
    messagingSenderId: "623544110265",
    appId: "1:623544110265:web:badf967e25d1e50dcd5f68"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  // Session ID for single-session enforcement
  const SESSION_ID = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substr(2);

  // ---- Helpers ----
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  // ---- Expose global auth API ----
  window.AppAuth = {
    currentUser: null,
    userPaid: false,
    ready: false,
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

        // Listen for session changes (kick if another login happens)
        userRef.onSnapshot((snap) => {
          if (!snap.exists) return;
          const data = snap.data();

          // Update paid status in real time
          window.AppAuth.userPaid = data.paid === true;
          updateUI();

          // Check if we got kicked by another session
          if (data.sessionId && data.sessionId !== SESSION_ID) {
            auth.signOut();
            showSessionKicked();
          }
        });

        // Check for Stripe payment redirect
        checkPaymentRedirect(user.uid, userRef);

      } catch (e) {
        console.error('Auth state error:', e);
      }
    }

    window.AppAuth.ready = true;
    updateUI();

    // Notify app.js that auth is ready
    if (window.AppAuth.onReady) window.AppAuth.onReady();
    document.dispatchEvent(new Event('auth-ready'));
  });

  // ---- Check Stripe redirect ----
  function checkPaymentRedirect(uid, userRef) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('paid') === 'success' || urlParams.get('session_id')) {
      // Mark user as paid in Firestore
      userRef.update({ paid: true }).then(() => {
        window.AppAuth.userPaid = true;
        window.history.replaceState({}, '', window.location.pathname);
        showPaymentSuccessBanner();
        updateUI();
      });
    }
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
    banner.innerHTML = '<span>Payment successful! You now have full access to all practice tests.</span><button class="banner-close" onclick="this.parentElement.remove()">x</button>';
    document.body.insertBefore(banner, document.body.firstChild);
    setTimeout(() => banner.remove(), 8000);
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuthUI);
  } else {
    initAuthUI();
  }
})();
