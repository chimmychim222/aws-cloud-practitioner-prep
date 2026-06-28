// components/footer.js
// Injects the canonical site footer into <div id="site-footer-mount">.
// Must load AFTER site-config.js (which sets window.SiteConfig).
//
// To add a new page link: append to the `links` array below.
// Use clean paths — never .html extensions.

(function () {
  var mount = document.getElementById('site-footer-mount');
  if (!mount) return;

  var cfg        = window.SiteConfig || {};
  var disclaimer = cfg.footerDisclaimer ||
    'AWS Certified Cloud Practitioner CLF-C02 Practice — Not affiliated with or endorsed by Amazon Web Services.';

  // Add new content pages here as they are built
  var links = [
    { label: 'Home',       href: '/' },
    { label: 'Exam Guide', href: '/exam-guide' },
    { label: 'FAQ',        href: '/faq' }
    // { label: 'Diagnostic', href: '/diagnostic' },
    // { label: 'Study Plan', href: '/study-plan' },
    // { label: 'Blog',       href: '/blog' },
  ];

  var linksHTML = links.map(function (l) {
    return '<a href="' + l.href + '" class="footer-link">' + l.label + '</a>';
  }).join('<span class="footer-sep" aria-hidden="true">&middot;</span>');

  mount.outerHTML = [
    '<footer id="site-footer">',
    '  <div class="container">',
    '    <nav class="footer-nav" aria-label="Site links">' + linksHTML + '</nav>',
    '    <p class="footer-disclaimer">' + disclaimer + '</p>',
    '  </div>',
    '</footer>'
  ].join('');
})();
