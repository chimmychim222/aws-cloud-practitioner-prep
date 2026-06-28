// components/header.js
// Injects the canonical site header into <div id="site-header-mount">.
// Must load AFTER site-config.js (which sets window.SiteConfig).
// firebase-auth.js wires auth state display and the Sign In button separately.
//
// Nav links use <a href> so they are crawlable by all search engines,
// including those that do not execute JavaScript.

(function () {
  var mount = document.getElementById('site-header-mount');
  if (!mount) return;

  var cfg = window.SiteConfig || {};
  var logoText   = cfg.logoText   || 'CLF-C02';
  var logoAccent = cfg.logoAccent || 'Prep';

  // Nav items: add new content pages here as they are built.
  // Use clean paths — never .html extensions.
  // SPA view items carry id + view so app.js can wire click handlers and
  // showView() can find them by ID to manage the active state.
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  var isSPA = (path === '/' || path === '/index' || path === '/index.html');
  var navItems = [
    {
      label: 'Home',         href: '/',    id: 'nav-home-btn',     view: 'home',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1.3L1 7v7.5c0 .3.2.5.5.5H6V10h4v5h4.5c.3 0 .5-.2.5-.5V7L8 1.3z"/></svg>'
    },
    {
      label: 'Training',     href: '/',    id: 'nav-training-btn', view: 'training',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M2 2h12v2H2V2zm0 5h8v2H2V7zm0 5h12v2H2v-2z"/></svg>'
    },
    {
      label: 'Practice Test', href: '/',   id: 'nav-test-btn',     view: 'test',
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm.5 12H7V7h1.5v5zM8 5.5a1 1 0 110-2 1 1 0 010 2z"/><path d="M8 3v5l3.5 2-.5 1L7 9V3h1z"/></svg>'
    },
    {
      label: 'Exam Guide',   href: '/exam-guide', id: null,        view: null,
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M3 2a1 1 0 011-1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2zm2 1v10h6V3H5zm1 2h4v1H6V5zm0 2h4v1H6V7zm0 2h2v1H6V9z"/></svg>'
    },
    {
      label: 'FAQ',          href: '/faq', id: null,               view: null,
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM7.25 5a.75.75 0 011.5 0c0 .69-1 1.13-1 2.25h-1C6.75 5.88 7.25 5.63 7.25 5zm-.5 5.25h1.5v1.5h-1.5v-1.5z" clip-rule="evenodd"/></svg>'
    }
  ];

  var navHTML = navItems.map(function (item) {
    // SPA view items (home/training/test): active only when on the SPA and it's
    // the home view (initial state). showView() takes over after first click.
    // Content page items: active when the path matches their href.
    var isActive = item.view
      ? (isSPA && item.view === 'home')
      : (path === item.href || path.indexOf(item.href + '/') === 0);

    var attrs = 'href="' + item.href + '" class="nav-link' + (isActive ? ' active' : '') + '"';
    if (item.id)   attrs += ' id="'        + item.id   + '"';
    if (item.view) attrs += ' data-view="' + item.view + '"';

    return '<a ' + attrs + '>' + item.icon + item.label + '</a>';
  }).join('');

  mount.innerHTML = [
    '<header id="site-header">',
    '  <div class="header-inner">',

    '    <a href="/" class="header-logo" aria-label="' + logoText + ' ' + logoAccent + ' — Home">',
    '      <svg class="logo-aws" width="40" height="24" viewBox="0 0 40 24" fill="none" aria-hidden="true">',
    '        <path d="M11.2 14.8c0 .4.1.8.2 1 .1.3.3.5.5.8.1.1.1.2.1.3 0 .1-.1.3-.3.4l-1 .7c-.1.1-.3.1-.4.1-.2 0-.3-.1-.5-.3-.2-.2-.4-.5-.5-.8-.7.8-1.5 1.2-2.5 1.2-.7 0-1.3-.2-1.7-.6-.4-.4-.7-1-.7-1.7 0-.7.3-1.3.8-1.8.5-.4 1.2-.6 2.1-.6.3 0 .6 0 .9.1.3.1.7.1 1 .2v-.6c0-.7-.1-1.2-.4-1.5-.3-.3-.8-.4-1.5-.4-.3 0-.7.1-1 .2-.3.1-.7.2-1 .4l-.5.2c-.1 0-.2-.1-.2-.3v-.5c0-.2 0-.3.1-.4.1-.1.2-.2.4-.3.3-.2.7-.3 1.1-.4.4-.1.9-.2 1.4-.2.8 0 1.5.2 1.9.6.4.4.6 1 .6 1.9v2.5zm-3.4 1.3c.3 0 .6-.1.9-.2.3-.1.6-.4.7-.7.1-.2.2-.4.2-.6V14c-.2-.1-.5-.1-.8-.2-.3-.1-.6-.1-.8-.1-.6 0-1 .1-1.3.3-.3.2-.5.6-.5 1 0 .4.1.7.3.9.2.3.6.4 1.1.4h.2zm6.7 1c-.2 0-.3 0-.4-.1-.1-.1-.2-.2-.3-.4L11.4 10c-.1-.2-.1-.3-.1-.4 0-.2.1-.3.3-.3h1.5c.2 0 .3 0 .4.1.1.1.2.2.2.4l1.6 6.5 1.5-6.5c.1-.2.1-.3.2-.4.1-.1.3-.1.4-.1h1.2c.2 0 .3 0 .4.1.1.1.2.2.2.4l1.5 6.6 1.7-6.6c.1-.2.1-.3.2-.4.1-.1.3-.1.4-.1h1.4c.2 0 .3.1.3.3 0 .1 0 .1-.1.2 0 .1 0 .2-.1.3l-2.5 6.6c-.1.2-.1.3-.3.4-.1.1-.3.1-.4.1h-1.3c-.2 0-.3 0-.4-.1-.1-.1-.2-.2-.2-.4l-1.5-6.3-1.5 6.3c-.1.2-.1.3-.2.4-.1.1-.3.1-.4.1h-1.3zm10.7.3c-.5 0-.9-.1-1.4-.2-.5-.1-.8-.3-1-.4-.1-.1-.2-.2-.2-.3v-.6c0-.2.1-.3.2-.3h.1l.2.1c.3.1.7.2 1 .3.4.1.7.1 1 .1.5 0 1-.1 1.2-.3.3-.2.4-.5.4-.8 0-.2-.1-.5-.3-.6-.2-.2-.5-.3-1-.5l-1.4-.5c-.7-.2-1.2-.5-1.5-1-.3-.4-.5-.9-.5-1.4 0-.4.1-.8.3-1.1.2-.3.4-.6.7-.8.3-.2.6-.4 1-.5.4-.1.8-.2 1.2-.2.2 0 .4 0 .7.1.2 0 .5.1.7.2.2.1.4.1.6.2.2.1.3.2.4.2.1.1.2.2.2.3.1.1.1.3.1.4v.6c0 .2-.1.3-.2.3-.1 0-.2-.1-.4-.2-.6-.3-1.3-.4-2-.4-.5 0-.9.1-1.1.2-.3.2-.4.4-.4.8 0 .2.1.5.3.6.2.2.6.3 1.1.5l1.4.4c.7.2 1.2.5 1.5.9.3.4.4.9.4 1.3 0 .4-.1.8-.3 1.2-.2.3-.4.6-.8.8-.3.2-.7.4-1.1.5-.4.1-.9.2-1.4.2z" fill="#fff"/>',
    '        <path d="M30.5 18.5c-3 2.2-7.3 3.4-11 3.4-5.2 0-9.9-1.9-13.5-5.1-.3-.3 0-.6.3-.4 3.8 2.2 8.6 3.6 13.5 3.6 3.3 0 6.9-.7 10.3-2.1.5-.2.9.3.4.6z" fill="#F90"/>',
    '        <path d="M31.8 17c-.4-.5-2.5-.2-3.5-.1-.3 0-.3-.2-.1-.4 1.7-1.2 4.5-.9 4.8-.5.3.4-.1 3.2-1.7 4.6-.2.2-.5.1-.4-.2.4-.9 1.2-3 .9-3.4z" fill="#F90"/>',
    '      </svg>',
    '      <span class="logo-text">' + logoText + ' <span class="logo-accent">' + logoAccent + '</span></span>',
    '    </a>',

    '    <nav class="header-nav" id="header-nav" aria-label="Main navigation">',
    navHTML,
    '    </nav>',

    '    <div class="auth-header-wrap">',
    '      <button class="auth-header-btn" id="auth-header-btn" aria-label="Sign in or view account">Sign In</button>',
    '      <div class="user-menu hidden" id="user-menu" role="menu">',
    '        <div class="user-menu-info">',
    '          <div class="user-menu-name" id="user-menu-name"></div>',
    '          <div class="user-menu-email" id="user-menu-email"></div>',
    '        </div>',
    '        <div class="user-menu-divider"></div>',
    '        <button class="user-menu-item" id="user-menu-logout" role="menuitem">Sign Out</button>',
    '      </div>',
    '    </div>',

    '    <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false">',
    '      <span></span><span></span><span></span>',
    '    </button>',

    '  </div>',
    '</header>'
  ].join('\n');

  // Wire mobile menu toggle — auth wiring is handled by firebase-auth.js
  var mobileBtn = document.getElementById('mobile-menu-btn');
  var nav       = document.getElementById('header-nav');
  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      mobileBtn.classList.toggle('open', open);
      mobileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!mobileBtn.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        mobileBtn.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
