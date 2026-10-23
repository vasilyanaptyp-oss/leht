(function () {
  'use strict';
  var root = document.documentElement;
  var D = {}, GAL = {};
  try { D = JSON.parse(document.getElementById('i18n').textContent); } catch (e) { D = {}; }
  try { GAL = JSON.parse(document.getElementById('gal').textContent); } catch (e) { GAL = {}; }
  var cur = 'et';

  /* ---------- language: ET in the HTML, ?lang=ru switches to RU in place ---------- */
  function apply(lang) {
    var t = D[lang];
    if (!t) { root.classList.remove('ru-pending'); return; }
    cur = lang;
    [].forEach.call(document.querySelectorAll('[data-i]'), function (el) {
      var k = el.getAttribute('data-i');
      if (t[k] == null) return;
      if (el instanceof SVGElement) el.textContent = t[k]; else el.innerHTML = t[k];
    });
    [].forEach.call(document.querySelectorAll('[data-a]'), function (el) {
      el.getAttribute('data-a').split('|').forEach(function (pair) {
        var p = pair.split(':');
        if (t[p[1]] != null) el.setAttribute(p[0], t[p[1]]);
      });
    });
    var other = lang === 'ru' ? 'et' : 'ru';
    var lb = document.getElementById('lang'), l2 = document.getElementById('lang2');
    if (lb) lb.setAttribute('lang', other);
    if (l2) { l2.setAttribute('lang', other); l2.setAttribute('href', lang === 'ru' ? './' : '?lang=ru'); }
    root.lang = t._lang;
    document.title = t._title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t._desc);
    root.classList.remove('ru-pending');
  }
  function setUrl(lang) {
    try {
      var u = new URL(location.href);
      if (lang === 'ru') u.searchParams.set('lang', 'ru'); else u.searchParams.delete('lang');
      history.replaceState(null, '', u.pathname + u.search + u.hash);
    } catch (e) {}
  }
  function toggle() { var next = cur === 'ru' ? 'et' : 'ru'; apply(next); setUrl(next); }
  if (/[?&]lang=ru(&|$)/.test(location.search)) apply('ru'); else root.classList.remove('ru-pending');
  var lbtn = document.getElementById('lang'), l2 = document.getElementById('lang2');
  if (lbtn) lbtn.addEventListener('click', toggle);
  if (l2) l2.addEventListener('click', function (e) { e.preventDefault(); toggle(); window.scrollTo(0, 0); });

  /* ---------- mobile menu ---------- */
  var burger = document.querySelector('.burger'), mnav = document.getElementById('mnav'), hdr = document.getElementById('hdr');
  function setMenu(open) {
    hdr.classList.toggle('open', open);
    root.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (burger) burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  if (mnav) mnav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && hdr.classList.contains('open')) setMenu(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 1080 && hdr.classList.contains('open')) setMenu(false); });
  function hdrScroll() { hdr.classList.toggle('sc', window.scrollY > 24); }
  window.addEventListener('scroll', hdrScroll, { passive: true }); hdrScroll();

  /* ---------- nav: mark the section in view ---------- */
  var links = [].slice.call(document.querySelectorAll('.nav a'));
  if ('IntersectionObserver' in window && links.length) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['top', 'ettevote', 'teenused', 'referentsid', 'kuidas', 'kontakt'].forEach(function (id) { var s = document.getElementById(id); if (s) so.observe(s); });
  }

  /* ---------- reveal on scroll ---------- */
  var rv = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('js-rv');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -6% 0px' });
    [].forEach.call(rv, function (el) { io.observe(el); });
  }

  /* ---------- project gallery ---------- */
  var dlg = document.getElementById('lb'), img = document.getElementById('lb-i'), ttl = document.getElementById('lb-t'), cnt = document.getElementById('lb-c');
  var g = null, gi = 0, gn = 0, opener = null;
  function show(i) {
    gi = (i + g.length) % g.length;
    var it = g[gi];
    img.src = it.src; img.width = it.w; img.height = it.h;
    img.alt = (D[cur] && D[cur]['p' + gn]) || '';
    cnt.textContent = (gi + 1) + ' / ' + g.length;
    var nx = g[(gi + 1) % g.length]; if (nx) { var pre = new Image(); pre.src = nx.src; }
  }
  function open(n, btn) {
    g = GAL[n]; gn = n; opener = btn;
    if (!g || !g.length || !dlg) return;
    ttl.textContent = (D[cur] && D[cur]['p' + n]) || '';
    dlg.classList.toggle('one', g.length < 2);
    show(0);
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }
  function close() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
  [].forEach.call(document.querySelectorAll('[data-g]'), function (b) {
    b.addEventListener('click', function () { open(b.getAttribute('data-g'), b); });
  });
  if (dlg) {
    document.getElementById('lb-x').addEventListener('click', close);
    document.getElementById('lb-p').addEventListener('click', function () { show(gi - 1); });
    document.getElementById('lb-n').addEventListener('click', function () { show(gi + 1); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
    dlg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(gi - 1);
      else if (e.key === 'ArrowRight') show(gi + 1);
    });
    dlg.addEventListener('close', function () { if (opener) opener.focus(); });
    var sx = null;
    dlg.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    dlg.addEventListener('touchend', function (e) {
      if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 50 && g && g.length > 1) show(gi + (dx < 0 ? 1 : -1));
    });
  }

  /* ---------- form: opens the visitor's mail program ---------- */
  var f = document.getElementById('cform');
  if (f) f.addEventListener('submit', function (e) {
    e.preventDefault();
    var t = D[cur] || {};
    var el = f.elements, req = [el.name, el.email, el.msg];
    var ok = true;
    req.forEach(function (x) {
      var bad = !x.value.trim() || (x.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x.value.trim()));
      x.setAttribute('aria-invalid', bad ? 'true' : 'false'); if (bad) ok = false;
    });
    var err = f.querySelector('.f-err');
    if (!ok) { err.hidden = false; return; }
    err.hidden = true;
    var body = el.msg.value.trim() + '\n\n' + t.f_l_name + ': ' + el.name.value.trim() +
      (el.company.value.trim() ? '\n' + t.f_l_comp + ': ' + el.company.value.trim() : '') +
      '\n' + t.f_l_mail + ': ' + el.email.value.trim();
    var subj = t.f_subj + (el.topic.value.trim() ? ': ' + el.topic.value.trim() : '');
    location.href = 'mailto:info@multimees.ee?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
  });
  if (f) f.addEventListener('input', function (e) { if (e.target.getAttribute('aria-invalid') === 'true' && e.target.value.trim()) e.target.setAttribute('aria-invalid', 'false'); });
})();
