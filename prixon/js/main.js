(function () {
  'use strict';
  var EMAIL = 'prixon.st@gmail.com';
  var hdr = document.querySelector('.hdr');
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  var callbar = document.getElementById('callbar');

  /* header line on scroll */
  function onScroll() { hdr.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  function setMenu(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Sulge menüü' : 'Ava menüü');
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) { var first = menu.querySelector('a'); if (first) first.focus(); }
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) { setMenu(false); btn.focus(); }
  });
  window.addEventListener('resize', function () { if (window.innerWidth >= 960 && !menu.hidden) setMenu(false); });

  /* call bar: visible on phones after the hero, hidden over the contact section */
  if ('IntersectionObserver' in window && callbar) {
    var heroVisible = true, contactVisible = false;
    var links = callbar.querySelectorAll('a');
    function update() {
      var on = !heroVisible && !contactVisible;
      callbar.classList.toggle('is-on', on);
      callbar.setAttribute('aria-hidden', on ? 'false' : 'true');
      for (var i = 0; i < links.length; i++) links[i].tabIndex = on ? 0 : -1;
    }
    var hero = document.querySelector('.hero');
    var contact = document.getElementById('kontakt');
    new IntersectionObserver(function (en) { heroVisible = en[0].isIntersecting; update(); }, { threshold: 0, rootMargin: '-' + (hdr.offsetHeight + 16) + 'px 0px 0px 0px' }).observe(hero);
    new IntersectionObserver(function (en) { contactVisible = en[0].isIntersecting; update(); }, { threshold: 0 }).observe(contact);
  }

  /* request form: build a ready e-mail */
  var form = document.getElementById('paring');
  var status = document.getElementById('form-status');
  function field(name) { return form.elements[name]; }
  function setErr(input, errId, bad) {
    var wrap = input.closest('.field');
    var err = document.getElementById(errId);
    wrap.classList.toggle('is-error', bad);
    input.setAttribute('aria-invalid', bad ? 'true' : 'false');
    err.hidden = !bad;
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nimi = field('nimi'), kontakt = field('kontakt'), kirjeldus = field('kirjeldus');
    var checks = [
      [nimi, 'e-nimi', nimi.value.trim().length < 2],
      [kontakt, 'e-kontakt', kontakt.value.trim().length < 5],
      [kirjeldus, 'e-kirjeldus', kirjeldus.value.trim().length < 3]
    ];
    var firstBad = null;
    checks.forEach(function (c) { setErr(c[0], c[1], c[2]); if (c[2] && !firstBad) firstBad = c[0]; });
    if (firstBad) { status.textContent = ''; firstBad.focus(); return; }

    var too = field('too').value;
    var koht = field('koht').value.trim();
    var subject = 'Päring: ' + (too || 'viimistlustöö') + (koht ? ', ' + koht : '');
    var body = [
      'Nimi: ' + nimi.value.trim(),
      'Kontakt: ' + kontakt.value.trim(),
      'Töö liik: ' + (too || 'ei ole valitud'),
      'Objekti asukoht: ' + (koht || 'ei ole märgitud'),
      '',
      kirjeldus.value.trim()
    ].join('\r\n');
    var href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    var a = document.createElement('a');
    a.href = href; a.hidden = true; a.className = 'mailto-out';
    document.body.appendChild(a);
    a.click();
    a.remove();
    status.textContent = 'Kiri on koostatud. Kui e-posti programm ei avanenud, kirjutage aadressile ' + EMAIL + '.';
  });
  ['nimi', 'kontakt', 'kirjeldus'].forEach(function (n) {
    field(n).addEventListener('input', function () {
      var el = field(n);
      if (el.closest('.field').classList.contains('is-error') && el.value.trim().length > 1) setErr(el, 'e-' + n, false);
    });
  });
})();
