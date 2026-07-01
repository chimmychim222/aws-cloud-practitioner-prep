// components/cta.js
// Shared context-aware CTA system.
// Manages two concerns:
//   1. Inline CTAs: elements with data-cta="primary" update their label,
//      href, and click behaviour based on AppAuth state (logged-out /
//      unpaid / paid) whenever auth-ready fires.
//   2. Sticky CTA bar: CTA.initSticky(opts) injects a dismissible fixed
//      bar that appears after the user scrolls past a threshold.
//
// Auth states → primary action:
//   logged-out  → "Take the free diagnostic"  href=/diagnostic
//   unpaid      → "Unlock practice tests"     BuyFlow.handlePay()
//   paid        → "Go to practice tests"      href=/
//
// Load before firebase-auth.js so the auth-ready listener is registered
// before the event fires. No DOM manipulation needed at load time.

(function () {
  'use strict';

  var DISMISS_KEY = 'cta_sticky_dismissed';

  // ── State ────────────────────────────────────────────────────────────────
  function getState() {
    var auth = window.AppAuth;
    if (!auth || !auth.isLoggedIn()) return 'logged-out';
    return auth.hasPaid() ? 'paid' : 'unpaid';
  }

  var STATES = {
    'logged-out': {
      label: 'Start free',
      href: '/diagnostic',
      usesBuyFlow: false
    },
    'unpaid': {
      label: 'Unlock all practice tests — $49',
      href: null,
      usesBuyFlow: true
    },
    'paid': {
      label: 'Go to practice tests',
      href: '/',
      usesBuyFlow: false
    }
  };

  // ── Inline CTA updates ───────────────────────────────────────────────────
  // Elements marked data-cta="primary" get their text, href, and click
  // behaviour updated on every auth-ready event. A single persistent click
  // handler reads state at click time so it stays correct across transitions.
  function updateElement(el) {
    var state = getState();
    var cfg = STATES[state];

    el.textContent = cfg.label;

    // Register the click handler once; it reads current state when fired.
    if (!el.dataset.ctaInited) {
      el.dataset.ctaInited = '1';
      el.addEventListener('click', function (e) {
        var cur = STATES[getState()];
        if (cur.usesBuyFlow) {
          e.preventDefault();
          if (window.BuyFlow) window.BuyFlow.handlePay();
        } else if (el.tagName !== 'A') {
          window.location.href = cur.href;
        }
        // <a> tags: browser follows the href that was set below — no extra handling needed.
      });
    }

    // Always update href so transitions (e.g. unpaid→paid) reflect new state.
    if (cfg.usesBuyFlow) {
      el.setAttribute('href', '#');
    } else if (el.tagName === 'A') {
      el.setAttribute('href', cfg.href);
    }
  }

  function updateAll() {
    document.querySelectorAll('[data-cta="primary"]').forEach(updateElement);
    updateStickyState();
  }

  // ── Sticky CTA bar ───────────────────────────────────────────────────────
  var stickyBar = null;

  function updateStickyState() {
    if (!stickyBar) return;
    var state = getState();
    var cfg = STATES[state];
    var btn = stickyBar.querySelector('.sticky-cta-btn');
    if (btn) btn.textContent = cfg.label;
  }

  function handleStickyClick() {
    var state = getState();
    var cfg = STATES[state];
    if (cfg.usesBuyFlow) {
      if (window.BuyFlow) window.BuyFlow.handlePay();
    } else {
      window.location.href = cfg.href;
    }
  }

  function initSticky(opts) {
    opts = opts || {};
    var threshold    = opts.threshold != null ? opts.threshold : 600;
    var contextText  = opts.text || 'Continue to the next step';

    // Respect session-level dismissal
    if (sessionStorage.getItem(DISMISS_KEY)) return;

    var bar = document.createElement('div');
    bar.id = 'sticky-cta-bar';
    bar.className = 'sticky-cta-bar';
    bar.setAttribute('role', 'complementary');
    bar.setAttribute('aria-label', 'Page action');

    var state = getState();
    var cfg = STATES[state];

    bar.innerHTML =
      '<div class="sticky-cta-inner">' +
        '<span class="sticky-cta-context">' + escapeHTML(contextText) + '</span>' +
        '<div class="sticky-cta-actions">' +
          '<button type="button" class="btn btn-primary btn-sm sticky-cta-btn">' +
            escapeHTML(cfg.label) +
          '</button>' +
          '<button type="button" class="sticky-cta-dismiss" aria-label="Dismiss this bar">' +
            '&times;' +
          '</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(bar);
    stickyBar = bar;

    bar.querySelector('.sticky-cta-btn').addEventListener('click', handleStickyClick);

    bar.querySelector('.sticky-cta-dismiss').addEventListener('click', function () {
      bar.classList.add('sticky-cta-bar--hidden');
      sessionStorage.setItem(DISMISS_KEY, '1');
    });

    // Show/hide on scroll — initially hidden, slides in after threshold
    bar.classList.add('sticky-cta-bar--hidden');

    var ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          if (sessionStorage.getItem(DISMISS_KEY)) { ticking = false; return; }
          var past = window.scrollY > threshold;
          bar.classList.toggle('sticky-cta-bar--hidden', !past);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function escapeHTML(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ── Bootstrap ─────────────────────────────────────────────────────────────
  // Re-run whenever AppAuth resolves (including after login/logout in a modal).
  document.addEventListener('auth-ready', updateAll);

  // Initial pass in case auth is already resolved when this script loads.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAll);
  } else {
    updateAll();
  }

  window.CTA = {
    updateAll: updateAll,
    getState: getState,
    initSticky: initSticky
  };
})();
