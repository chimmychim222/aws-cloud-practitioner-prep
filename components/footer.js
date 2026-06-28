// components/footer.js
// Injects the canonical site footer into <div id="site-footer-mount">.
// Must load AFTER site-config.js (which sets window.SiteConfig).

(function () {
  var mount = document.getElementById('site-footer-mount');
  if (!mount) return;

  var cfg        = window.SiteConfig || {};
  var disclaimer = cfg.footerDisclaimer ||
    'AWS Certified Cloud Practitioner CLF-C02 Practice — Not affiliated with or endorsed by Amazon Web Services.';

  mount.outerHTML = '<footer id="site-footer"><div class="container"><p>' + disclaimer + '</p></div></footer>';
})();
