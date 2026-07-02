// components/payment.js
// Shared buy-flow: intent persistence, post-auth auto-resume, bfcache button reset.
// Load on every page before firebase-auth.js — no per-page configuration required
// for the intent/reset logic; call registerBtn() for each visible buy button.
//
// Usage on any page:
//   window.BuyFlow.registerBtn('button-id', 'Default text')
//   element.addEventListener('click', window.BuyFlow.handlePay)

(function () {
  'use strict';

  var _btns = {}; // { id: defaultText } for all registered pay buttons

  // ── Core redirect ────────────────────────────────────────────────────────
  function doStripeRedirect() {
    var auth = window.AppAuth;
    var link = window.SiteConfig && window.SiteConfig.stripePaymentLink;
    if (!auth || !auth.isLoggedIn() || !link) return;
    Object.keys(_btns).forEach(function (id) {
      var b = document.getElementById(id);
      if (b) { b.disabled = true; b.textContent = 'Redirecting to Stripe…'; }
    });
    if (window.gtag) gtag('event', 'checkout_started');
    window.location.href = link + '?client_reference_id=' +
      encodeURIComponent(auth.currentUser.uid);
  }

  function waitDocReadyThenRedirect() {
    var auth = window.AppAuth;
    if (auth && auth.docReady) { doStripeRedirect(); return; }
    Object.keys(_btns).forEach(function (id) {
      var b = document.getElementById(id);
      if (b) { b.disabled = true; b.textContent = 'Preparing checkout…'; }
    });
    var poll = setInterval(function () {
      var a = window.AppAuth;
      if (a && a.docReady) { clearInterval(poll); doStripeRedirect(); }
    }, 100);
  }

  // ── Public: click handler for any buy button ─────────────────────────────
  function handlePay() {
    var auth = window.AppAuth;
    if (!auth || !auth.isLoggedIn()) {
      // Remember intent so after signup/signin we auto-redirect, no second click needed
      sessionStorage.setItem('pendingBuyIntent', '1');
      if (window.showAuthModal) window.showAuthModal('login');
      return;
    }
    if (auth.hasPaid()) { window.location.href = '/'; return; }
    waitDocReadyThenRedirect();
  }

  // ── Public: reset all registered buttons (called by pageshow listener) ───
  function resetBtns() {
    Object.keys(_btns).forEach(function (id) {
      var b = document.getElementById(id);
      if (b) { b.disabled = false; b.textContent = _btns[id]; }
    });
  }

  // ── Public: register a button and its default label ──────────────────────
  function registerBtn(id, defaultText) {
    _btns[id] = defaultText;
  }

  // ── Global listeners — set up at module load, not deferred ───────────────
  // auth-ready fires every time onAuthStateChanged resolves (including after modal sign-in).
  // If pendingBuyIntent is set AND the user is now logged in, auto-redirect to Stripe.
  // Works on any page — no registered buttons required for the intent to fire.
  document.addEventListener('auth-ready', function () {
    if (!sessionStorage.getItem('pendingBuyIntent')) return;
    var auth = window.AppAuth;
    if (!auth || !auth.isLoggedIn()) return;
    sessionStorage.removeItem('pendingBuyIntent');
    if (auth.hasPaid()) return; // already paid, nothing to do
    waitDocReadyThenRedirect();
  });

  // pageshow fires on normal load AND on bfcache restore (persisted=true).
  // Reset buttons whenever the user returns without a completed payment session.
  window.addEventListener('pageshow', function () {
    if (!new URLSearchParams(window.location.search).get('session_id')) {
      resetBtns();
    }
  });

  window.BuyFlow = {
    registerBtn: registerBtn,
    handlePay: handlePay,
    resetBtns: resetBtns
  };
})();
