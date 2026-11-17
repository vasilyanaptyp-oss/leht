(function () {
  'use strict';
  var top = document.getElementById('top');
  var hero = document.querySelector('.hero');
  var rows = [].slice.call(document.querySelectorAll('.svc-row'));
  var imgs = [].slice.call(document.querySelectorAll('.svc-media img'));
  var media = document.querySelector('.svc-media');
  var wide = window.matchMedia('(min-width: 900px)');
  var hoverLock = 0;

  function setRow(row) {
    if (!row || row.classList.contains('on')) return;
    rows.forEach(function (r) { r.classList.toggle('on', r === row); });
    var i = +row.getAttribute('data-i');
    imgs.forEach(function (im, n) { im.classList.toggle('on', n === i); });
  }

  function onScroll() {
    var y = window.pageYOffset;
    top.classList.toggle('is-solid', y > hero.offsetHeight - top.offsetHeight - 8);
    if (!rows.length || Date.now() < hoverLock) return;
    var line = wide.matches ? window.innerHeight * 0.46 : media.getBoundingClientRect().bottom + 90;
    var cur = rows[0];
    for (var k = 0; k < rows.length; k++) {
      if (rows[k].getBoundingClientRect().top <= line) cur = rows[k];
    }
    setRow(cur);
  }

  var tick = false;
  window.addEventListener('scroll', function () {
    if (tick) return;
    tick = true;
    requestAnimationFrame(function () { tick = false; onScroll(); });
  }, { passive: true });
  window.addEventListener('resize', onScroll);

  rows.forEach(function (r) {
    r.addEventListener('mouseenter', function () {
      if (!wide.matches) return;
      hoverLock = Date.now() + 900;
      setRow(r);
    });
  });

  var items = [].slice.call(document.querySelectorAll('[data-r]'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  onScroll();
})();
