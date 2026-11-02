(function () {
  'use strict';
  var EMAIL = 'madiskandla@gmail.com';
  var hdr = document.querySelector('.hdr');
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');

  /* header rule on scroll */
  function onScroll() { hdr.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  function setMenu(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Sulge menüü' : 'Ava menüü');
    menu.hidden = !open;
    if (open) { var first = menu.querySelector('a'); if (first) first.focus(); }
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) { setMenu(false); btn.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (!menu.hidden && !e.target.closest('.hdr')) setMenu(false);
  });
  window.addEventListener('resize', function () { if (window.innerWidth >= 960 && !menu.hidden) setMenu(false); });

  /* request form: checks the fields, then opens a ready e-mail */
  var form = document.getElementById('paring');
  var status = document.getElementById('form-status');
  function field(name) { return form.elements[name]; }
  function setErr(input, bad, msg) {
    var err = document.getElementById(input.getAttribute('aria-describedby'));
    input.closest('.field').classList.toggle('is-error', bad);
    input.setAttribute('aria-invalid', bad ? 'true' : 'false');
    if (msg) err.textContent = msg;
    err.hidden = !bad;
  }
  function contactProblem(v) {
    if (!v) return 'Lisa e-post või telefon, et saaksime vastata.';
    var isMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    var digits = v.replace(/\D/g, '').length;
    var isPhone = /^[+\d][\d\s()-]*$/.test(v) && digits >= 7;
    return (isMail || isPhone) ? '' : 'Kontrolli e-posti aadressi või telefoninumbrit.';
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nimi = field('nimi'), kontakt = field('kontakt'), plaan = field('plaan');
    var kProblem = contactProblem(kontakt.value.trim());
    var checks = [
      [nimi, nimi.value.trim().length < 2, ''],
      [kontakt, !!kProblem, kProblem],
      [plaan, plaan.value.trim().length < 3, '']
    ];
    var firstBad = null;
    checks.forEach(function (c) { setErr(c[0], c[1], c[2]); if (c[1] && !firstBad) firstBad = c[0]; });
    if (firstBad) { status.textContent = ''; firstBad.focus(); return; }

    var koht = field('koht').value.trim();
    var subject = 'Ehituspäring' + (koht ? ': ' + koht : '') + ' (' + nimi.value.trim() + ')';
    var body = [
      'Nimi: ' + nimi.value.trim(),
      'E-post või telefon: ' + kontakt.value.trim(),
      'Asukoht: ' + (koht || 'ei ole märgitud'),
      '',
      'Mis on plaanis:',
      plaan.value.trim()
    ].join('\r\n');
    var a = document.createElement('a');
    a.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    a.remove();
    status.textContent = 'Kiri on sinu e-posti programmis valmis, vajuta seal Saada. Kui programm ei avanenud, kirjuta otse aadressile ' + EMAIL + '.';
  });
  ['nimi', 'kontakt', 'plaan'].forEach(function (n) {
    field(n).addEventListener('input', function () {
      var el = field(n);
      if (!el.closest('.field').classList.contains('is-error')) return;
      var ok = n === 'kontakt' ? !contactProblem(el.value.trim()) : el.value.trim().length > 1;
      if (ok) setErr(el, false, '');
    });
  });
})();
