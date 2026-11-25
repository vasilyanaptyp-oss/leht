(function () {
  'use strict';
  var d = document, root = d.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var T = window.PP_TEXT || {};
  var MAIL = 'puitjaplaat@hotmail.com';

  /* header: solid after the hero top */
  var hdr = d.querySelector('.hdr');
  function onScroll() {
    if (!hdr) return;
    var y = window.scrollY || window.pageYOffset;
    var lim = window.innerWidth >= 760 ? 10 : Math.max(120, window.innerHeight * 0.32);
    hdr.classList.toggle('is-solid', y > lim);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* hero entrance */
  var hero = d.querySelector('.hero');
  if (hero) {
    if (reduce) hero.classList.add('is-in');
    else requestAnimationFrame(function () { requestAnimationFrame(function () { hero.classList.add('is-in'); }); });
  }

  /* reveal on scroll */
  var rv = [].slice.call(d.querySelectorAll('.rv'));
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rv.forEach(function (el) { io.observe(el); });
  } else rv.forEach(function (el) { el.classList.add('is-in'); });

  /* navigation helper (tests set window.__noNav and read window.__mailto) */
  function go(url) {
    if (window.__noNav) { window.__mailto = url; return; }
    window.location.href = url;
  }

  function copy(text, done) {
    function fallback() {
      var ta = d.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      d.body.appendChild(ta); ta.select();
      var ok = false; try { ok = d.execCommand('copy'); } catch (e) {}
      d.body.removeChild(ta); done(ok);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
    } else fallback();
  }

  function flash(btn, ok) {
    var lbl = btn.querySelector('[data-lbl]') || btn;
    var old = lbl.textContent;
    lbl.textContent = ok ? (T.copied || 'Kopeeritud') : (T.copyFail || 'Kopeerige käsitsi');
    btn.classList.add('copied');
    setTimeout(function () { lbl.textContent = old; btn.classList.remove('copied'); }, 2200);
  }

  [].slice.call(d.querySelectorAll('[data-copy-mail]')).forEach(function (b) {
    b.addEventListener('click', function () { copy(MAIL, function (ok) { flash(b, ok); }); });
  });

  /* inquiry builder */
  var form = d.getElementById('askForm');
  if (!form) return;
  var state = { work: [], room: [], when: [] };
  var preSubj = d.getElementById('lSubj'), preBody = d.getElementById('lBody');
  var area = d.getElementById('fArea'), place = d.getElementById('fPlace'), nameEl = d.getElementById('fName');
  var note = d.getElementById('lNote');

  [].slice.call(form.querySelectorAll('.opt')).forEach(function (b) {
    b.addEventListener('click', function () {
      var g = b.getAttribute('data-g'), v = b.getAttribute('data-v');
      var single = b.parentNode.getAttribute('data-single') === '1';
      var arr = state[g], i = arr.indexOf(v);
      if (single) {
        [].slice.call(b.parentNode.querySelectorAll('.opt')).forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        state[g] = i > -1 ? [] : [v];
        b.setAttribute('aria-pressed', i > -1 ? 'false' : 'true');
      } else {
        if (i > -1) arr.splice(i, 1); else arr.push(v);
        b.setAttribute('aria-pressed', i > -1 ? 'false' : 'true');
      }
      render();
    });
  });
  [area, place, nameEl].forEach(function (el) { if (el) el.addEventListener('input', render); });

  function list(a) {
    if (a.length < 2) return a.join('');
    return a.slice(0, -1).join(', ') + ' ' + T.and + ' ' + a[a.length - 1];
  }

  function build() {
    var work = state.work.length ? list(state.work) : '';
    var room = state.room.length ? list(state.room) : '';
    var m2 = (area && area.value || '').replace(/[^\d.,]/g, '').slice(0, 6);
    var pl = (place && place.value || '').trim().slice(0, 80);
    var subj = T.subj + (work ? ': ' + work : '');
    var lines = [T.hello, ''];
    lines.push(T.want + (work ? ' ' + work : ' ' + T.workUnknown) + (room ? ' (' + room + ')' : '') + '.');
    if (m2) lines.push(T.area + ' ' + m2 + ' m².');
    if (pl) lines.push(T.place + ' ' + pl + '.');
    if (state.when.length) lines.push(T.when + ' ' + state.when[0] + '.');
    var nm = (nameEl && nameEl.value || '').trim().slice(0, 60);
    lines.push('');
    lines.push(T.bye + (nm ? '\n' + nm : ''));
    return { subj: subj, body: lines.join('\n') };
  }

  function render() {
    var m = build();
    if (preSubj) preSubj.textContent = m.subj;
    if (preBody) preBody.textContent = m.body;
  }
  render();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var m = build();
    var url = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(m.subj) + '&body=' + encodeURIComponent(m.body);
    if (note) note.hidden = false;
    go(url);
  });
  var cb = d.getElementById('copyLetter');
  if (cb) cb.addEventListener('click', function () {
    var m = build();
    copy(T.toLabel + ' ' + MAIL + '\n' + T.subjLabel + ' ' + m.subj + '\n\n' + m.body, function (ok) { flash(cb, ok); if (note) note.hidden = false; });
  });

  /* preselect from material links (#paring?too=plaat) */
  [].slice.call(d.querySelectorAll('[data-pick]')).forEach(function (a) {
    a.addEventListener('click', function () {
      var v = a.getAttribute('data-pick');
      var b = form.querySelector('.opt[data-g="work"][data-key="' + v + '"]');
      if (b && b.getAttribute('aria-pressed') !== 'true') b.click();
    });
  });
})();
