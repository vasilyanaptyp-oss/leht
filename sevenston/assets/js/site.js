(function () {
  'use strict';
  var T = {
    en: {
      title: 'Sevenston OÜ | Building design, owner supervision and building audits in Tallinn',
      desc: 'Sevenston OÜ is an engineering office in Tallinn: building design, owner supervision, building audits and construction works. Call +372 52 93 714.',
      nav_services: 'Services', nav_process: 'How we work', nav_contact: 'Contact',
      hero_eyebrow: 'Sevenston OÜ · engineering office in Tallinn',
      h1_a: 'Design.', h1_b: 'Supervision.', h1_c: 'Audit.',
      hero_lead: 'Building design, owner supervision, building audits and construction works. Call us and tell us about your site.',
      call: 'Call', write: 'Write',
      mtr_t: 'Notices in the Estonian register of economic activities', mtr_s: 'valid since 25.07.2016',
      s1_t: 'Building design', s2_t: 'Owner supervision', s3_t: 'Building audit', s4_t: 'Construction',
      about_label: 'About', about_big: 'Sevenston is an engineering office in Tallinn. We design buildings, supervise construction on the client’s side and assess the condition of existing buildings.',
      f1_t: 'In the business register', f1_d: 'since 2012',
      f2_t: 'Main activity', f2_d: 'construction engineering design and consulting',
      f3_t: 'Register of economic activities', f3_d: 'four valid notices: design, owner supervision, building audit, construction',
      f4_t: 'Location', f4_d: 'Keevise 10, Tallinn',
      svc_label: 'Services', svc_h: 'What we do',
      s1_p: 'We prepare the building design you need to apply for a permit and to build. Drawings and the explanatory note are clear to both the official and the builder.',
      s1_a: 'Preliminary, main and working design', s1_b: 'Documents for a building permit or building notice', s1_c: 'Design changes during construction',
      s2_p: 'We represent the client on site. We check that the work follows the design and that its quality meets the requirements.',
      s2_a: 'Checking works and materials on site', s2_b: 'Inspecting covered works before they are closed', s2_c: 'Checking construction documents and accepting works',
      s3_p: 'We inspect an existing building and assess whether it meets the requirements. An audit is needed, for example, when a building has no use permit or no design.',
      s3_a: 'On-site inspection of the building', s3_b: 'Audit report with conclusions', s3_c: 'Proposals for fixing the shortcomings',
      s4_p: 'We carry out construction works and organise the work on site. Scope and deadline are agreed after we have seen the site.',
      s4_a: 'Construction works in the agreed scope', s4_b: 'Organising the work on site', s4_c: 'Handover of finished work with documents',
      adv_label: 'Consulting', adv_q: 'Not sure where to start? Call us. We will tell you which documents and works your building needs.',
      works_label: 'Completed work', works_h: 'Completed work',
      st_label: 'How we work', st_h: 'How the work goes',
      st1_t: 'You get in touch', st1_p: 'You call or write and describe the site.',
      st2_t: 'We take a look', st2_p: 'We study the site and the existing documents.',
      st3_t: 'We make an offer', st3_p: 'You get the scope, deadline and price in writing.',
      st4_t: 'We do the work', st4_p: 'We hand over the finished design, report or construction work.',
      c_label: 'Contact', c_h: 'Let’s talk about your site', c_person: 'Contact person', c_mail: 'E-mail', c_addr: 'Address', c_addr_v: 'Keevise 10, 11415 Tallinn, Estonia',
      fm_h: 'Send an enquiry', fm_name: 'Name', fm_contact: 'Phone or e-mail', fm_service: 'Service', fm_msg: 'Short description',
      fm_err: 'Please enter your name and a phone number or e-mail.', fm_send: 'Send enquiry', fm_note: 'The button opens your e-mail program with the message ready to send.',
      ft_tag: 'Design, supervision, audit, construction', ft_reg: 'Registry code', ft_vat: 'VAT number', ft_tel: 'Phone',
      alt_hero: 'Building under construction and cranes in morning fog', alt_detail: 'Pencil and ruler on a construction drawing',
      alt_proj: 'Engineer drawing a building design with a scale ruler', alt_jv: 'Three people in safety vests checking openings in a concrete wall on site',
      alt_audit: 'Facade of an old masonry building seen from below', alt_ehit: 'Floor slab reinforcement on a construction site seen from above',
      mail_subj: 'Enquiry from the website', mail_name: 'Name', mail_contact: 'Contact', mail_service: 'Service', mail_msg: 'Description', nav_aria: 'Menu'
    },
    ru: {
      title: 'Sevenston OÜ | Проектирование, технадзор и аудит зданий в Таллине',
      desc: 'Sevenston OÜ, инженерное бюро в Таллине: строительные проекты, надзор заказчика, аудит зданий и строительные работы. Звоните: +372 52 93 714.',
      nav_services: 'Услуги', nav_process: 'Как работаем', nav_contact: 'Контакты',
      hero_eyebrow: 'Sevenston OÜ · инженерное бюро в Таллине',
      h1_a: 'Проект.', h1_b: 'Технадзор.', h1_c: 'Аудит.',
      hero_lead: 'Строительные проекты, надзор заказчика, аудит зданий и строительные работы. Позвоните, обсудим ваш объект.',
      call: 'Позвонить', write: 'Написать',
      mtr_t: 'Уведомления в регистре хозяйственной деятельности (MTR)', mtr_s: 'действуют с 25.07.2016',
      s1_t: 'Проектирование', s2_t: 'Надзор заказчика', s3_t: 'Аудит здания', s4_t: 'Строительство',
      about_label: 'О бюро', about_big: 'Sevenston это инженерное бюро в Таллине. Проектируем здания, контролируем стройку на стороне заказчика и оцениваем состояние существующих зданий.',
      f1_t: 'В коммерческом регистре', f1_d: 'с 2012 года',
      f2_t: 'Основная деятельность', f2_d: 'инженерно-техническое проектирование и консультации в строительстве',
      f3_t: 'Регистр хозяйственной деятельности', f3_d: 'четыре действующих уведомления: проектирование, надзор заказчика, аудит здания, строительство',
      f4_t: 'Адрес', f4_d: 'Keevise 10, Таллин',
      svc_label: 'Услуги', svc_h: 'Что мы делаем',
      s1_p: 'Готовим строительный проект, по которому можно получить разрешение и строить. Чертежи и пояснительная записка понятны и чиновнику, и строителю.',
      s1_a: 'Эскизный, основной и рабочий проект', s1_b: 'Документы для разрешения на строительство или уведомления', s1_c: 'Изменения проекта во время стройки',
      s2_p: 'Представляем заказчика на стройплощадке. Проверяем, что строят по проекту и что качество работ соответствует требованиям.',
      s2_a: 'Контроль работ и материалов на объекте', s2_b: 'Осмотр скрытых работ до их закрытия', s2_c: 'Проверка строительной документации и приёмка работ',
      s3_p: 'Осматриваем существующее здание и оцениваем, соответствует ли оно требованиям. Аудит нужен, например, когда у здания нет разрешения на эксплуатацию или проекта.',
      s3_a: 'Осмотр здания на месте', s3_b: 'Отчёт аудита с выводами', s3_c: 'Предложения по устранению недостатков',
      s4_p: 'Выполняем строительные работы и организуем работу на объекте. Объём и срок согласуем после осмотра объекта.',
      s4_a: 'Строительные работы в согласованном объёме', s4_b: 'Организация работ на объекте', s4_c: 'Сдача готовой работы с документами',
      adv_label: 'Консультация', adv_q: 'Не знаете, с чего начать? Позвоните. Скажем, какие документы и работы нужны вашему зданию.',
      works_label: 'Выполненные работы', works_h: 'Выполненные работы',
      st_label: 'Как работаем', st_h: 'Как идёт работа',
      st1_t: 'Вы связываетесь с нами', st1_p: 'Звоните или пишете и описываете объект.',
      st2_t: 'Смотрим объект', st2_p: 'Изучаем объект и имеющиеся документы.',
      st3_t: 'Делаем предложение', st3_p: 'Вы получаете письменно состав работы, срок и цену.',
      st4_t: 'Выполняем работу', st4_p: 'Передаём готовый проект, отчёт или строительную работу.',
      c_label: 'Контакты', c_h: 'Обсудим ваш объект', c_person: 'Контактное лицо', c_mail: 'Эл. почта', c_addr: 'Адрес', c_addr_v: 'Keevise 10, 11415 Таллин',
      fm_h: 'Отправить запрос', fm_name: 'Имя', fm_contact: 'Телефон или эл. почта', fm_service: 'Услуга', fm_msg: 'Короткое описание',
      fm_err: 'Напишите, пожалуйста, имя и телефон или эл. почту.', fm_send: 'Отправить запрос', fm_note: 'Кнопка откроет вашу почтовую программу с готовым письмом.',
      ft_tag: 'Проект, надзор, аудит, строительство', ft_reg: 'Регистрационный код', ft_vat: 'Номер НСО (KMKR)', ft_tel: 'Телефон',
      alt_hero: 'Строящееся здание и краны в утреннем тумане', alt_detail: 'Карандаш и линейка на строительном чертеже',
      alt_proj: 'Инженер чертит строительный проект по масштабной линейке', alt_jv: 'Трое в сигнальных жилетах проверяют проёмы в бетонной стене на стройке',
      alt_audit: 'Фасад старого каменного дома, вид снизу', alt_ehit: 'Арматура перекрытия на стройплощадке, вид сверху',
      mail_subj: 'Запрос с сайта', mail_name: 'Имя', mail_contact: 'Контакт', mail_service: 'Услуга', mail_msg: 'Описание', nav_aria: 'Меню'
    }
  };
  var RELAY = 'https://script.google.com/macros/s/AKfycbxG8sh9Xi-msP2Ol6iG9FBB__M4_Btafq6KlNpsJNSXS-XnmKKVrajYfpyaGgVzA8zG/exec';
  var SITE = 'sevenston', MAIL = 'avo@sevenston.ee';
  var doc = document, root = doc.documentElement;
  var page = root.getAttribute('data-page') || 'index';
  var md = doc.querySelector('meta[name=description]');
  T.et = {
    title: doc.title, desc: md.content,
    mail_subj: 'Päring kodulehelt', mail_name: 'Nimi', mail_contact: 'Kontakt', mail_service: 'Teenus', mail_msg: 'Kirjeldus', nav_aria: 'Menüü'
  };
  var X = window.I18N || {};
  ['et', 'en', 'ru'].forEach(function (l) { for (var k in (X[l] || {})) T[l][k] = X[l][k]; });
  var nodes = doc.querySelectorAll('[data-i18n]');
  var htmls = doc.querySelectorAll('[data-i18n-html]');
  var alts = doc.querySelectorAll('[data-i18n-alt]');
  nodes.forEach(function (n) { var k = n.dataset.i18n; if (!(k in T.et)) T.et[k] = n.textContent; });
  htmls.forEach(function (n) { var k = n.dataset.i18nHtml; if (!(k in T.et)) T.et[k] = n.innerHTML; });
  alts.forEach(function (n) { T.et[n.dataset.i18nAlt] = n.alt; });

  var cur = 'et';
  function stored() { try { return localStorage.getItem('sv-lang'); } catch (e) { return null; } }
  function store(v) { try { localStorage.setItem('sv-lang', v); } catch (e) { /* private mode */ } }
  /* internal links keep the chosen language */
  function carry() {
    doc.querySelectorAll('a[href]').forEach(function (a) {
      var h = a.getAttribute('href');
      if (/^(https?:|tel:|mailto:|#|\?)/.test(h)) return;
      var i = h.indexOf('#'), hash = i > -1 ? h.slice(i) : '', base = (i > -1 ? h.slice(0, i) : h).split('?')[0];
      a.setAttribute('href', base + (cur === 'et' ? '' : '?lang=' + cur) + hash);
    });
  }
  function apply(lang) {
    if (!T[lang]) lang = 'et';
    cur = lang;
    var d = T[lang];
    nodes.forEach(function (n) { var v = d[n.dataset.i18n]; if (v != null) n.textContent = v; });
    htmls.forEach(function (n) { var v = d[n.dataset.i18nHtml]; if (v != null) n.innerHTML = v; });
    alts.forEach(function (n) { var v = d[n.dataset.i18nAlt]; if (v != null) n.alt = v; });
    root.lang = lang;
    doc.title = (page === 'index' ? d.title : d['title_' + page]) || T.et.title;
    md.content = (page === 'index' ? d.desc : d['desc_' + page]) || T.et.desc;
    doc.querySelector('.nav').setAttribute('aria-label', d.nav_aria);
    doc.querySelectorAll('.lang a').forEach(function (a) {
      if (a.dataset.lang === lang) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
    carry();
  }
  var q = null;
  try { q = new URLSearchParams(location.search).get('lang'); } catch (e) { /* old browser */ }
  q = q && q.toLowerCase();
  var start = T[q] ? q : (T[stored()] ? stored() : 'et');
  if (start !== 'et') apply(start);
  if (T[q]) store(q);
  doc.querySelectorAll('.lang a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      apply(a.dataset.lang);
      store(cur);
      try {
        var u = new URL(location.href);
        if (cur === 'et') u.searchParams.delete('lang'); else u.searchParams.set('lang', cur);
        history.replaceState(null, '', u.pathname + u.search + u.hash);
      } catch (err) { /* file:// */ }
    });
  });

  /* menu */
  var menu = doc.getElementById('menu'), burger = doc.getElementById('burger'), mx = doc.getElementById('menu-x');
  function setMenu(on) {
    menu.hidden = !on;
    burger.setAttribute('aria-expanded', String(on));
    root.style.overflow = on ? 'hidden' : '';
    (on ? mx : burger).focus();
  }
  burger.addEventListener('click', function () { setMenu(true); });
  mx.addEventListener('click', function () { setMenu(false); });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });
  menu.querySelectorAll('.menu__nav a').forEach(function (a) { a.addEventListener('click', function () { menu.hidden = true; root.style.overflow = ''; }); });

  /* reveal on scroll */
  var rv = doc.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rv.forEach(function (n) { io.observe(n); });
  } else {
    rv.forEach(function (n) { n.classList.add('in'); });
  }

  /* phone bar: after the first screen, hidden while the contact block is on screen */
  var bar = doc.getElementById('bar');
  var first = doc.querySelector('.hero, .phead');
  var contact = doc.getElementById('kontakt');
  function onScroll() {
    var past = first.getBoundingClientRect().bottom < 80;
    var cr = contact && contact.getBoundingClientRect();
    var atContact = cr && cr.top < window.innerHeight * 0.75 && cr.bottom > 0;
    var on = past && !atContact;
    bar.classList.toggle('on', on);
    bar.setAttribute('aria-hidden', on ? 'false' : 'true');
    bar.querySelectorAll('a').forEach(function (a) { a.tabIndex = on ? 0 : -1; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* enquiry form: sent through the forms relay (tools/forms_relay, site 'sevenston');
     if the relay does not accept it, the visitor's mail program opens with the message ready */
  var form = doc.getElementById('form');
  if (!form) return;
  var err = doc.getElementById('form-err'), ok = doc.getElementById('form-ok'), btn = form.querySelector('button[type=submit]');
  var t0 = Date.now(), busy = false, MAX_FILES = 6, MAX_BYTES = 18 * 1024 * 1024;
  function showErr(key) { err.textContent = T[cur][key] || T.et[key]; err.setAttribute('data-i18n-live', key); err.hidden = false; }
  function readFile(f) {
    return new Promise(function (res, rej) {
      var r = new FileReader();
      r.onload = function () { res({ name: f.name, type: f.type || 'image/jpeg', data: String(r.result).split(',')[1] || '' }); };
      r.onerror = rej;
      r.readAsDataURL(f);
    });
  }
  function mailto(v) {
    var d = T[cur];
    var body = d.mail_name + ': ' + v.name + '\n' + d.mail_contact + ': ' + v.contact + '\n' + d.mail_service + ': ' + v.svc +
      (v.msg ? '\n\n' + d.mail_msg + ':\n' + v.msg : '');
    return 'mailto:' + MAIL + '?subject=' + encodeURIComponent(d.mail_subj + ': ' + v.svc) + '&body=' + encodeURIComponent(body);
  }
  function done(key) {
    form.querySelector('.form__body').hidden = true;
    ok.textContent = T[cur][key] || T.et[key];
    ok.hidden = false;
    form.dataset.state = key;
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (busy) return;
    var f = form.elements;
    var v = { name: f.name.value.trim(), contact: f.contact.value.trim(), svc: f.service.options[f.service.selectedIndex].text.replace(/­/g, ''), msg: f.msg.value.trim() };
    if (!v.name || !v.contact) { showErr('fm_err'); (v.name ? f.contact : f.name).focus(); return; }
    var files = Array.prototype.slice.call(f.files.files || []);
    var total = files.reduce(function (s, x) { return s + x.size; }, 0);
    if (files.length > MAX_FILES || total > MAX_BYTES) { showErr('fm_files_err'); return; }
    err.hidden = true;
    var href = mailto(v);
    form.dataset.mailto = href;
    busy = true;
    var label = btn.textContent;
    btn.textContent = T[cur].fm_sending || T.et.fm_sending;
    btn.disabled = true;
    Promise.all(files.map(readFile)).then(function (photos) {
      return fetch(RELAY, {
        method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ site: SITE, name: v.name, contact: v.contact, svc: v.svc, place: '', msg: v.msg, hp: f.website.value, t: Date.now() - t0, photos: photos })
      });
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (!j || !j.ok) throw new Error('relay');
      done('fm_ok');
    }).catch(function () {
      done('fm_fallback');
      if (!window.__noMail) location.href = href;
    }).then(function () { busy = false; btn.disabled = false; btn.textContent = label; });
  });
})();
