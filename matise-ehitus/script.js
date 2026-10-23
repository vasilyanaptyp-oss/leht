(function () {
  'use strict';
  var doc = document, html = doc.documentElement;

  /* language: Estonian by default, Russian with ?lang=ru */
  var lang = 'et';
  try { lang = new URLSearchParams(location.search).get('lang') === 'ru' ? 'ru' : 'et'; } catch (e) {}
  if (lang === 'ru') {
    var R = {};
    try { R = JSON.parse(doc.getElementById('i18n-ru').textContent); } catch (e) {}
    html.lang = 'ru';
    doc.querySelectorAll('[data-k]').forEach(function (el) {
      var v = R[el.getAttribute('data-k')]; if (v != null) el.innerHTML = v;
    });
    doc.querySelectorAll('[data-ka]').forEach(function (el) {
      el.getAttribute('data-ka').split(';').forEach(function (pair) {
        var p = pair.split(':'), v = R[p[1]];
        if (v != null) el.setAttribute(p[0], v.replace(/<[^>]+>/g, ''));
      });
    });
    if (R.title) doc.title = R.title;
    var md = doc.querySelector('meta[name="description"]'); if (md && R.desc) md.setAttribute('content', R.desc);
  }
  doc.querySelectorAll('.lang a').forEach(function (a) {
    if (a.getAttribute('data-l') === lang) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
  });

  /* mobile menu */
  var burger = doc.querySelector('.burger'), mnav = doc.getElementById('mnav'), hdr = doc.getElementById('hdr');
  function setMenu(open) {
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    mnav.classList.toggle('open', open);
    if (hdr) hdr.classList.toggle('open', open);
  }
  function hdrScroll() { if (hdr) hdr.classList.toggle('sc', window.scrollY > 24); }
  window.addEventListener('scroll', hdrScroll, { passive: true }); hdrScroll();
  if (burger && mnav) {
    burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
    mnav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 979) setMenu(false); });
  }

  /* enquiry form: opens the visitor's mail program with a ready letter */
  var form = doc.getElementById('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = doc.getElementById('f-err');
      var F = form.elements, name = F['name'].value.trim(), contact = F['contact'].value.trim(), msg = F['msg'].value.trim();
      if (!msg) { err.hidden = false; F['msg'].focus(); return; }
      err.hidden = true;
      var subj = (doc.getElementById('f-subj').textContent || '').trim() + (name ? ': ' + name : '');
      var body = msg + '\n\n' + [name, contact].filter(Boolean).join('\n');
      location.href = 'mailto:' + form.getAttribute('data-mail') + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
    });
  }
})();
