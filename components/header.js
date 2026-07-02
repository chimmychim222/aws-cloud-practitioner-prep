// components/header.js
// Enhances the STATIC header markup already present in every page's HTML
// (for crawlability — nav links are real <a href> elements in the served
// HTML, not JS-injected; view-source shows them with zero JS execution).
//
// This script does NOT build any markup. It only adds:
//   - active-state highlighting (current path / SPA view)
//   - Resources dropdown open/close (click, Escape, outside-click —
//     hover-to-open on desktop is pure CSS, no JS involved)
//   - mobile hamburger menu toggle
//
// To add/remove/rename a nav link: edit the static <header> block in
// page-template.html, then propagate the identical block to every other
// page. See CLAUDE.md "Shared Header" section.

(function () {
  var header = document.getElementById('site-header');
  if (!header) return;

  var path  = window.location.pathname.replace(/\/$/, '') || '/';
  var isSPA = (path === '/' || path === '/index' || path === '/index.html');

  // ── Active-state highlighting ───────────────────────────────────────────
  // Flat SPA-view items are keyed by id -> view name; everything else is
  // keyed by href matching the current path (including nested prefixes,
  // e.g. /blog matches /blog/some-post).
  var primaryViewMap = { 'nav-home-btn': 'home', 'nav-training-btn': 'training', 'nav-test-btn': 'test' };

  function isLinkActive(link) {
    var view = primaryViewMap[link.id];
    if (view) return isSPA && view === 'home';
    var href = link.getAttribute('href');
    return path === href || path.indexOf(href + '/') === 0;
  }

  header.querySelectorAll('.header-nav a.nav-link[href]').forEach(function (link) {
    link.classList.toggle('active', isLinkActive(link));
  });

  var resourcesPanel = document.getElementById('nav-resources-panel');
  var resourcesBtn   = document.getElementById('nav-resources-btn');
  if (resourcesPanel && resourcesBtn) {
    var isResourcesActive = Array.prototype.some.call(
      resourcesPanel.querySelectorAll('a[href]'),
      isLinkActive
    );
    resourcesBtn.classList.toggle('active', isResourcesActive);
  }

  // ── Resources dropdown ──────────────────────────────────────────────────
  var dropdown = document.getElementById('nav-resources-dropdown');
  var trigger  = document.getElementById('nav-resources-btn');

  function closeDropdown() {
    if (!dropdown) return;
    dropdown.classList.remove('open');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  }

  if (dropdown && trigger) {
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        closeDropdown();
        trigger.focus();
      }
    });
  }

  // ── Mobile hamburger menu ───────────────────────────────────────────────
  var mobileBtn = document.getElementById('mobile-menu-btn');
  var nav       = document.getElementById('header-nav');

  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      mobileBtn.classList.toggle('open', open);
      mobileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!open) closeDropdown();
    });
  }

  // Single outside-click handler closes both the mobile menu and the dropdown.
  document.addEventListener('click', function (e) {
    if (mobileBtn && nav && !mobileBtn.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      mobileBtn.classList.remove('open');
      mobileBtn.setAttribute('aria-expanded', 'false');
    }
    if (dropdown && !dropdown.contains(e.target)) {
      closeDropdown();
    }
  });


})();
