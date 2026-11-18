// Progressive enhancement only: the policy reads fine with JavaScript off.
(function () {
  // Highlight the section you're reading in the table of contents.
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var setCurrent = function (id) {
      links.forEach(function (a) {
        if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    }, { rootMargin: '-80px 0px -65% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }

  // Print button.
  var print = document.querySelector('[data-print]');
  if (print) print.addEventListener('click', function () { window.print(); });

  // Back-to-top button, shown once you've scrolled a screen down.
  var top = document.querySelector('[data-top]');
  if (top) {
    var toggle = function () { top.hidden = window.scrollY < window.innerHeight; };
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
    top.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
  }

  // Keep the footer year current.
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
