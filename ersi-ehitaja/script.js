(function () {
  'use strict';
  var D = document, root = D.documentElement;
  var I = JSON.parse(D.getElementById('i18n').textContent);
  var lang = 'et';

  /* ---------- language: ET in the HTML, RU from the dictionary, ?lang=ru ---------- */
  var ATTRS = [['data-ialt', 'alt'], ['data-iar', 'aria-label'], ['data-iph', 'placeholder']];
  function apply(l) {
    var dict = I[l]; lang = l;
    D.querySelectorAll('[data-i]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i')]; if (v != null) el.innerHTML = v;
    });
    ATTRS.forEach(function (p) {
      D.querySelectorAll('[' + p[0] + ']').forEach(function (el) {
        var v = dict[el.getAttribute(p[0])]; if (v != null) el.setAttribute(p[1], v);
      });
    });
    root.lang = l;
    D.title = dict.title;
    var md = D.querySelector('meta[name=description]'); if (md) md.setAttribute('content', dict.desc);
    D.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === l ? 'true' : 'false');
    });
    if (lb.open) showLb(cur);
  }
  function setUrl(l) {
    try {
      var u = new URL(location.href);
      if (l === 'ru') u.searchParams.set('lang', 'ru'); else u.searchParams.delete('lang');
      history.replaceState(null, '', u.pathname + u.search + u.hash);
    } catch (e) {}
  }
  D.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      var l = b.getAttribute('data-lang'); if (l === lang) return;
      apply(l); setUrl(l);
    });
  });

  /* ---------- header + drawer ---------- */
  var hdr = D.getElementById('hdr');
  function onScroll() { hdr.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var drawer = D.getElementById('drawer'), burger = D.querySelector('.burger');
  function openDrawer(o) {
    drawer.hidden = !o; burger.setAttribute('aria-expanded', o ? 'true' : 'false');
    D.body.style.overflow = o ? 'hidden' : '';
    if (o) drawer.querySelector('.dr-close').focus(); else burger.focus({ preventScroll: true });
  }
  burger.addEventListener('click', function () { openDrawer(true); });
  drawer.querySelector('.dr-close').addEventListener('click', function () { openDrawer(false); });
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { drawer.hidden = true; burger.setAttribute('aria-expanded', 'false'); D.body.style.overflow = ''; });
  });
  D.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !drawer.hidden) openDrawer(false); });

  /* ---------- before / after ---------- */
  D.querySelectorAll('.ba-frame').forEach(function (fr) {
    var range = fr.querySelector('.ba-range'), drag = false;
    function set(p) { p = Math.max(0, Math.min(100, p)); fr.style.setProperty('--p', p + '%'); range.value = Math.round(p); }
    function fromX(x) { var r = fr.getBoundingClientRect(); set((x - r.left) / r.width * 100); }
    fr.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      drag = true; fromX(e.clientX);
    });
    fr.addEventListener('pointermove', function (e) { if (drag) fromX(e.clientX); });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (t) { fr.addEventListener(t, function () { drag = false; }); });
    range.addEventListener('input', function () { set(+range.value); });
    fr.addEventListener('click', function () { range.focus({ preventScroll: true }); });
  });

  /* ---------- gallery lightbox ---------- */
  var lb = D.getElementById('lb'), lbImg = D.getElementById('lb-img'), lbCap = D.getElementById('lb-cap'), lbCount = D.getElementById('lb-count');
  var items = Array.prototype.slice.call(D.querySelectorAll('.g-item')), cur = 0, opener = null;
  function showLb(i) {
    cur = (i + items.length) % items.length;
    var it = items[cur], k = it.getAttribute('data-k');
    lbImg.src = it.getAttribute('data-full');
    lbImg.width = +it.getAttribute('data-w'); lbImg.height = +it.getAttribute('data-h');
    lbImg.alt = I[lang][k]; lbCap.textContent = I[lang][k];
    lbCount.textContent = (cur + 1) + ' / ' + items.length;
  }
  items.forEach(function (it, i) {
    it.addEventListener('click', function () {
      opener = it; showLb(i);
      if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
      D.body.style.overflow = 'hidden';
    });
  });
  function closeLb() { if (lb.open) lb.close(); }
  lb.addEventListener('close', function () { D.body.style.overflow = ''; if (opener) opener.focus({ preventScroll: true }); });
  lb.querySelector('.lb-x').addEventListener('click', closeLb);
  lb.querySelector('.lb-p').addEventListener('click', function () { showLb(cur - 1); });
  lb.querySelector('.lb-n').addEventListener('click', function () { showLb(cur + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.tagName === 'FIGURE') closeLb(); });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') showLb(cur - 1);
    if (e.key === 'ArrowRight') showLb(cur + 1);
  });
  var tx = null;
  lb.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (tx == null) return; var dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 50) showLb(cur + (dx < 0 ? 1 : -1));
  }, { passive: true });

  /* ---------- form: opens the visitor's mail program ---------- */
  var form = D.getElementById('form'), err = form.querySelector('.f-err');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var F = form.elements, n = F['name'].value.trim(), c = F['contact'].value.trim(), m = F['msg'].value.trim();
    if (!n || !c) { err.hidden = false; (n ? F['contact'] : F['name']).focus(); return; }
    err.hidden = true;
    var body = m + '\n\n' + n + '\n' + c;
    location.href = 'mailto:' + I.mail + '?subject=' + encodeURIComponent(I[lang].f_subj) + '&body=' + encodeURIComponent(body);
  });

  /* ---------- initial language ---------- */
  if (/[?&]lang=ru(&|$)/.test(location.search)) apply('ru');
  root.classList.remove('lr');
})();
