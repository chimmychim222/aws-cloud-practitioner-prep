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
    'CloudPractitionerPrep is an independent, third-party study platform and is not affiliated with, endorsed by, or sponsored by Amazon Web Services, Inc. or its affiliates. AWS and Cloud Practitioner are trademarks of Amazon.com, Inc. or its affiliates.';

  // Add new content pages here as they are built
  var links = [
    { label: 'Home',               href: '/' },
    { label: 'Exam Guide',         href: '/exam-guide' },
    { label: 'Study Plan',         href: '/study-plan' },
    { label: 'Diagnostic',         href: '/diagnostic' },
    { label: 'Practice Questions', href: '/practice-questions' },
    { label: 'Blog',               href: '/blog' },
    { label: 'FAQ',                href: '/faq' }
  ];

  var linksHTML = links.map(function (l) {
    return '<a href="' + l.href + '" class="footer-link">' + l.label + '</a>';
  }).join('<span class="footer-sep" aria-hidden="true">&middot;</span>');

  var legalLinks = [
    { label: 'Privacy Policy',   href: '/privacy' },
    { label: 'Terms of Service', href: '/terms'   },
    { label: 'Refund Policy',    href: '/refund'  }
  ];
  var legalHTML = legalLinks.map(function (l) {
    return '<a href="' + l.href + '" class="footer-legal-link">' + l.label + '</a>';
  }).join('<span class="footer-sep" aria-hidden="true">&middot;</span>');

  mount.outerHTML = [
    '<footer id="site-footer">',
    '  <div class="container">',
    '    <nav class="footer-nav" aria-label="Site links">' + linksHTML + '</nav>',
    '    <nav class="footer-legal" aria-label="Legal links">' + legalHTML + '</nav>',
    '    <p class="footer-disclaimer">' + disclaimer + '</p>',
    '  </div>',
    '</footer>'
  ].join('');
})();
