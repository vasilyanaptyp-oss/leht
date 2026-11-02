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
    document.documentElement.style.overflow = open ? 'hidden' : '';
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

  /* mobile contact bar: after the hero button has scrolled away, until the contact section */
  var bar = document.getElementById('cta-bar');
  var heroCta = document.querySelector('.hero__cta');
  var contact = document.getElementById('kontakt');
  function onBar() {
    var on = heroCta.getBoundingClientRect().bottom < 0 && contact.getBoundingClientRect().top > window.innerHeight;
    bar.classList.toggle('is-on', on);
  }
  window.addEventListener('scroll', onBar, { passive: true });
  window.addEventListener('resize', onBar);
  onBar();

  /* copy helper: Clipboard API, with a textarea fallback for older browsers */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { return fallbackCopy(text); });
    }
    return fallbackCopy(text);
  }
  function fallbackCopy(text) {
    return new Promise(function (resolve, reject) {
      var t = document.createElement('textarea');
      t.value = text; t.setAttribute('readonly', ''); t.style.position = 'fixed'; t.style.top = '-1000px';
      document.body.appendChild(t); t.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      t.remove();
      if (ok) resolve(); else reject(new Error('copy'));
    });
  }

  /* request form: checks the fields, then opens a ready e-mail and shows the address with copy buttons */
  var form = document.getElementById('paring');
  var done = document.getElementById('form-done');
  var status = document.getElementById('form-status');
  var copied = document.getElementById('form-copied');
  var mailText = '';
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
    if (firstBad) { done.hidden = true; status.textContent = ''; firstBad.focus(); return; }

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
    mailText = subject + '\r\n\r\n' + body;
    var a = document.createElement('a');
    a.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    a.remove();
    copied.textContent = '';
    done.hidden = false;
    status.textContent = '';
    status.appendChild(document.createTextNode('Kiri on e-posti programmis valmis, vajuta seal „Saada“. '));
    var strong = document.createElement('strong');
    strong.textContent = 'Kui programm ei avanenud, saada päring sellele aadressile:';
    status.appendChild(strong);
  });
  document.getElementById('copy-addr').addEventListener('click', function () {
    copyText(EMAIL).then(function () { copied.textContent = 'Aadress on kopeeritud.'; },
      function () { copied.textContent = 'Kopeerimine ei õnnestunud. Märgi aadress ja kopeeri see käsitsi.'; });
  });
  document.getElementById('copy-text').addEventListener('click', function () {
    copyText(mailText).then(function () { copied.textContent = 'Kirja tekst on kopeeritud. Kleebi see oma e-posti uude kirja.'; },
      function () { copied.textContent = 'Kopeerimine ei õnnestunud. Kirjuta palun otse aadressile ' + EMAIL + '.'; });
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
