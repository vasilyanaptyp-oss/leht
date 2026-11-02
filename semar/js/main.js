/* Semar kitchens: language switch (ET/EN/RU), header, menu, call bar, gallery lightbox, mailto form. No libraries. */
(function () {
  'use strict';
  var doc = document, root = doc.documentElement;
  root.classList.add('js');
  var MAIL = 'sergeiinstaller@gmail.com';

  /* ---------- texts ---------- */
  var RU = {
    skip: 'Перейти к содержанию', navAria: 'Главное меню', ftrNavAria: 'Меню в подвале', menuOpen: 'Открыть меню',
    navServ: 'Услуги', navWork: 'Наши работы', navHow: 'Как мы работаем', navContact: 'Контакты',
    heroWhere: 'Виймси и Таллин', h1: 'Кухни и мебель на заказ',
    heroAlt: 'Угловая кухня с зеленоватыми фасадами, высокими шкафами в тёмном древесном тоне и золотистыми ручками',
    call: 'Позвонить', cta: 'Запросите предложение',
    heroLead: 'Мы семейная мастерская: делаем кухни и мебель по размерам вашего дома. Замеряем, проектируем, изготавливаем и устанавливаем.',
    heroReg: 'Semar kitchens OÜ, рег. код 16677638',
    servH: 'Услуги', servIntro: 'Изготавливаем и устанавливаем кухни и встроенную мебель в домах Виймси и Таллина.',
    s1h: 'Кухонная мебель', s1p: 'Делаем кухню по размерам вашего помещения и устанавливаем её. Фасады выставляем с ровными зазорами.',
    s1alt: 'Кухонные шкафы и ящики терракотового цвета, тёмная столешница',
    s2h: 'Столешницы', s2p: 'Устанавливаем столешницу и встраиваем в неё мойку и варочную панель.',
    s2alt: 'Столешница под мрамор, варочная панель и подсветка под верхними шкафами',
    s3h: 'Встраиваемая техника', s3p: 'Встраиваем духовой шкаф, микроволновку, варочную панель и вытяжку в шкафы и столешницу.',
    s3alt: 'Тёмные высокие шкафы со встроенными микроволновкой и духовкой',
    s4h: 'Шкафы и гардеробные', s4p: 'Делаем их по размерам помещения, в том числе с зеркальными дверями и скруглённым торцом.',
    s4alt: 'Встроенный шкаф со скруглённым торцом в спальне',
    s5h: 'Мебель для ванной', s5p: 'Изготавливаем и устанавливаем тумбы под раковину и высокий шкаф для стиральной и сушильной машин.',
    s5alt: 'Высокий шкаф в древесном тоне для стиральной и сушильной машины и тумба с белой раковиной',
    workH: 'Наши работы', workIntro: 'Все фото с наших объектов. Нажмите на фото, чтобы увеличить.',
    tagKitchen: 'Кухня', tagWardrobe: 'Шкаф', tagBath: 'Ванная',
    w10: 'Угловая кухня с зеленоватыми фасадами, высокими шкафами в тёмном древесном тоне и золотистыми ручками',
    w07: 'Прямая кухня: серо-зелёные верхние шкафы с подсветкой, тёмно-зелёные нижние и столешница под мрамор',
    w02: 'Встроенный шкаф со скруглённым торцом в спальне, рядом открытая дверь в гардеробную',
    w05: 'Кухня терракотового цвета с тёмной столешницей и чёрной мойкой',
    w09: 'Тёмные высокие шкафы с микроволновкой и духовкой, рядом белые нижние шкафы с тёмной столешницей',
    w03: 'Голубая тумба с двумя раковинами и золотистыми ручками',
    w01: 'Светло-бежевый шкаф с двумя зеркальными дверями в спальне',
    w04: 'Серая подвесная тумба под раковину с открытыми полками',
    w08: 'Ванная: высокий шкаф в древесном тоне для стиральной и сушильной машины и подвесная тумба',
    motto1a: 'Каждый дом особенный.', motto1b: 'Каждый проект уникальный.', motto2: 'Сделано так, как вы хотели.',
    howH: 'Как мы работаем', howIntro: 'Четыре шага от замера до готовой мебели.',
    st1h: 'Замер', st1p: 'Приезжаем и измеряем помещение. Обсуждаем, что вам нужно.',
    st2h: 'Проект', st2p: 'Делаем проект по вашим размерам и пожеланиям. Вместе выбираем материалы и цвета.',
    st3h: 'Изготовление', st3p: 'Делаем шкафы и фасады в своей мастерской. Каждая деталь делается для вашего дома.',
    st4h: 'Монтаж', st4p: 'Привозим и устанавливаем мебель. Регулируем двери и ящики и вместе с вами всё проверяем.',
    dataH: 'Данные компании', about: 'Семейная мастерская Сергея и Марины.',
    dName: 'Название', dCode: 'Регистрационный код', dReg: 'Зарегистрирована', dSeat: 'Юридический адрес', dSeatV: 'Маарду, Харьюмаа',
    contactH: 'Контакты', contactLead: 'Звоните, пишите в WhatsApp или запросите предложение через форму.',
    waWrite: 'Написать в WhatsApp', cMail: 'E-mail', cArea: 'Где работаем',
    formH: 'Запросите предложение', fName: 'Имя', fPhone: 'Телефон', fCity: 'Город или волость', fOpt: '(необязательно)',
    fCityPh: 'Например: Виймси', fType: 'Тип проекта', fTypeNone: 'Выберите', fTypeKitchen: 'Кухня', fTypeWardrobe: 'Шкаф',
    fTypeBath: 'Мебель для ванной', fTypeOther: 'Другое', fSource: 'Откуда вы о нас узнали?', fSourcePh: 'Например: от знакомых или из интернета',
    fSubmit: 'Отправить запрос', fNote: 'Кнопка откроет вашу почтовую программу с готовым письмом.', fAlt: 'Или напишите напрямую:',
    copyAddr: 'Скопировать адрес', copyText: 'Скопировать текст письма',
    ftrFacts: '© 2026 Semar kitchens OÜ, рег. код 16677638', up: 'Наверх',
    lbAria: 'Фото крупно', lbClose: 'Закрыть', lbPrev: 'Предыдущее фото', lbNext: 'Следующее фото'
  };
  var EN = {
    skip: 'Skip to content', navAria: 'Main menu', ftrNavAria: 'Footer menu', menuOpen: 'Open menu',
    navServ: 'Services', navWork: 'Our work', navHow: 'How we work', navContact: 'Contact',
    heroWhere: 'Viimsi and Tallinn', h1: 'Kitchens and furniture made to order',
    heroAlt: 'Corner kitchen with green-grey fronts, tall cabinets in a dark wood tone and golden handles',
    call: 'Call', cta: 'Request a quote',
    heroLead: 'We are a family workshop making kitchens and furniture to fit your home. We measure, design, build and install.',
    heroReg: 'Semar kitchens OÜ, registry code 16677638',
    servH: 'Services', servIntro: 'We make and install kitchens and built-in furniture for homes in Viimsi and Tallinn.',
    s1h: 'Kitchen furniture', s1p: 'We make the kitchen to the measurements of your room and install it. We align the fronts with even gaps.',
    s1alt: 'Terracotta kitchen cabinets and drawers, a dark worktop',
    s2h: 'Worktops', s2p: 'We fit the worktop and set the sink and the hob into it.',
    s2alt: 'Marble-look worktop, a hob and lighting under the wall cabinets',
    s3h: 'Built-in appliances', s3p: 'We fit the oven, microwave, hob and cooker hood into the cabinets and the worktop.',
    s3alt: 'Dark tall cabinets with a built-in microwave and oven',
    s4h: 'Wardrobes and dressing rooms', s4p: 'Made to the measurements of the room, including mirrored doors and a rounded end.',
    s4alt: 'Wardrobe with a rounded end in a bedroom',
    s5h: 'Bathroom furniture', s5p: 'We make and install vanity units and a tall cabinet for the washer and dryer.',
    s5alt: 'Tall wood-tone cabinet for the washer and dryer and a vanity unit with a white basin',
    workH: 'Our work', workIntro: 'Every photo is from our own jobs. Click or tap a photo to enlarge it.',
    tagKitchen: 'Kitchen', tagWardrobe: 'Wardrobe', tagBath: 'Bathroom',
    w10: 'Corner kitchen with green-grey fronts, tall cabinets in a dark wood tone and golden handles',
    w07: 'Straight kitchen: grey-green wall cabinets with lighting, dark green base cabinets and a marble-look worktop',
    w02: 'Wardrobe with a rounded end in a bedroom, an open door to the walk-in closet next to it',
    w05: 'Terracotta kitchen with a dark worktop and a black sink',
    w09: 'Dark tall cabinets with a microwave and an oven, white base cabinets with a dark worktop next to them',
    w03: 'Light blue vanity unit with two basins and golden handles',
    w01: 'Light beige wardrobe with two mirrored doors in a bedroom',
    w04: 'Grey wall-hung vanity unit with open shelves',
    w08: 'Bathroom: a tall wood-tone cabinet for the washer and dryer and a wall-hung vanity unit',
    motto1a: 'Every home is special.', motto1b: 'Every project is unique.', motto2: 'Made the way you wanted.',
    howH: 'How we work', howIntro: 'Four steps from measuring to finished furniture.',
    st1h: 'Measuring', st1p: 'We come over and measure the room. We talk through what you need.',
    st2h: 'Design', st2p: 'We draw up the design to your measurements and wishes. Together we choose the materials and colours.',
    st3h: 'Manufacturing', st3p: 'We make the cabinets and fronts in our own workshop. Every part is made for your home.',
    st4h: 'Installation', st4p: 'We bring the furniture over and install it. We adjust the doors and drawers and check everything together with you.',
    dataH: 'Company details', about: 'A family workshop run by Sergei and Marina.',
    dName: 'Company name', dCode: 'Registry code', dReg: 'Registered', dSeat: 'Registered address', dSeatV: 'Maardu, Harju County',
    contactH: 'Contact', contactLead: 'Call, message us on WhatsApp or request a quote with the form.',
    waWrite: 'Message on WhatsApp', cMail: 'E-mail', cArea: 'Area',
    formH: 'Request a quote', fName: 'Name', fPhone: 'Phone', fCity: 'Town or parish', fOpt: '(optional)',
    fCityPh: 'For example: Viimsi', fType: 'Project type', fTypeNone: 'Choose', fTypeKitchen: 'Kitchen', fTypeWardrobe: 'Wardrobe',
    fTypeBath: 'Bathroom furniture', fTypeOther: 'Other', fSource: 'How did you hear about us?', fSourcePh: 'For example: from friends or online',
    fSubmit: 'Send request', fNote: 'The button opens your e-mail program with a ready message.', fAlt: 'Or write directly:',
    copyAddr: 'Copy address', copyText: 'Copy message text',
    ftrFacts: '© 2026 Semar kitchens OÜ, registry code 16677638', up: 'Top',
    lbAria: 'Photo full size', lbClose: 'Close', lbPrev: 'Previous photo', lbNext: 'Next photo'
  };
  var DICT = { ru: RU, en: EN };
  var META = {
    et: { title: 'Köögid ja mööbel eritellimusel | Semar kitchens OÜ',
          desc: 'Semar kitchens on pereettevõte: teeme köögid ja mööbli eritellimusel. Mõõdame, projekteerime, valmistame ja paigaldame. Viimsi ja Tallinn. Helistage +372 5554 9755.' },
    ru: { title: 'Кухни и мебель на заказ | Semar kitchens OÜ',
          desc: 'Semar kitchens: семейная мастерская кухонь и мебели на заказ. Замер, проект, изготовление и монтаж. Виймси и Таллин. Звоните +372 5554 9755.' },
    en: { title: 'Kitchens and furniture made to order | Semar kitchens OÜ',
          desc: 'Semar kitchens is a family workshop making kitchens and furniture to order. Measuring, design, manufacturing and installation. Viimsi and Tallinn. Call +372 5554 9755.' }
  };
  var MSG = {
    et: { menuOpen: 'Ava menüü', menuClose: 'Sulge menüü',
          eName: 'Kirjutage oma nimi.', ePhone: 'Kirjutage telefoninumber.', ePhoneBad: 'Kontrollige telefoninumbrit.', eType: 'Valige projekti tüüp.',
          ok: 'Teie e-posti programm peaks nüüd avanema valmis kirjaga. Kui seda ei juhtunud, saatke päring sellele aadressile:',
          cAddr: 'Aadress on kopeeritud.', cText: 'Kirja tekst on kopeeritud. Kleepige see uude kirja.', cFail: 'Kopeerimine ei õnnestunud. Märkige aadress ja kopeerige see käsitsi.',
          subj: 'Pakkumise päring', lName: 'Nimi', lPhone: 'Telefon', lCity: 'Linn või vald', lType: 'Projekt', lSource: 'Kust kuulsite' },
    ru: { menuOpen: 'Открыть меню', menuClose: 'Закрыть меню',
          eName: 'Укажите имя.', ePhone: 'Укажите номер телефона.', ePhoneBad: 'Проверьте номер телефона.', eType: 'Выберите тип проекта.',
          ok: 'Сейчас должна открыться ваша почтовая программа с готовым письмом. Если этого не произошло, отправьте запрос на этот адрес:',
          cAddr: 'Адрес скопирован.', cText: 'Текст письма скопирован. Вставьте его в новое письмо.', cFail: 'Не удалось скопировать. Выделите адрес и скопируйте его вручную.',
          subj: 'Запрос предложения', lName: 'Имя', lPhone: 'Телефон', lCity: 'Город или волость', lType: 'Проект', lSource: 'Откуда узнали' },
    en: { menuOpen: 'Open menu', menuClose: 'Close menu',
          eName: 'Please enter your name.', ePhone: 'Please enter a phone number.', ePhoneBad: 'Please check the phone number.', eType: 'Please choose the project type.',
          ok: 'Your e-mail program should open now with a ready message. If it did not, send the request to this address:',
          cAddr: 'The address is copied.', cText: 'The message text is copied. Paste it into a new e-mail.', cFail: 'Copying did not work. Select the address and copy it by hand.',
          subj: 'Quote request', lName: 'Name', lPhone: 'Phone', lCity: 'Town or parish', lType: 'Project', lSource: 'Heard about us from' }
  };

  /* ---------- language ---------- */
  var lang = 'et';
  var textEls = doc.querySelectorAll('[data-t]'), attrEls = doc.querySelectorAll('[data-ta]');
  var ET = {};
  Array.prototype.forEach.call(textEls, function (el) { var k = el.getAttribute('data-t'); if (!(k in ET)) ET[k] = el.textContent; });
  Array.prototype.forEach.call(attrEls, function (el) {
    el.getAttribute('data-ta').split(',').forEach(function (pair) { var p = pair.split(':'); if (!(p[1] in ET)) ET[p[1]] = el.getAttribute(p[0]); });
  });
  ET.menuOpen = MSG.et.menuOpen;
  function t(k) { var d = DICT[lang]; return (d ? d[k] : ET[k]) || ET[k] || ''; }
  function setMeta(sel, val) { var m = doc.querySelector(sel); if (m) m.setAttribute('content', val); }

  function applyLang(l, save) {
    lang = (l === 'ru' || l === 'en') ? l : 'et';
    root.lang = lang;
    Array.prototype.forEach.call(textEls, function (el) { el.textContent = t(el.getAttribute('data-t')); });
    Array.prototype.forEach.call(attrEls, function (el) {
      el.getAttribute('data-ta').split(',').forEach(function (pair) { var p = pair.split(':'); el.setAttribute(p[0], t(p[1])); });
    });
    doc.title = META[lang].title;
    setMeta('meta[name="description"]', META[lang].desc);
    setMeta('meta[property="og:title"]', META[lang].title);
    setMeta('meta[property="og:description"]', META[lang].desc);
    setMeta('meta[name="twitter:title"]', META[lang].title);
    setMeta('meta[name="twitter:description"]', META[lang].desc);
    var LOC = { et: 'et_EE', ru: 'ru_RU', en: 'en_GB' };
    setMeta('meta[property="og:locale"]', LOC[lang]);
    Array.prototype.forEach.call(doc.querySelectorAll('meta[property="og:locale:alternate"]'), function (m, i) {
      m.setAttribute('content', ['et', 'ru', 'en'].filter(function (x) { return x !== lang; }).map(function (x) { return LOC[x]; })[i]);
    });
    Array.prototype.forEach.call(doc.querySelectorAll('.lang__b'), function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    menuLabel();
    clearErrors();
    if (lbOpen) showPhoto(cur);
    if (save) { try { localStorage.setItem('semar-lang', lang); } catch (e) {} }
    root.classList.remove('i18n-wait');
  }
  Array.prototype.forEach.call(doc.querySelectorAll('.lang__b'), function (b) {
    b.addEventListener('click', function () {
      applyLang(b.getAttribute('data-lang'), true);
      try { history.replaceState(null, '', location.pathname + (lang === 'et' ? '' : '?lang=' + lang) + location.hash); } catch (e) {}
    });
  });

  /* ---------- header + menu ---------- */
  var hdr = doc.querySelector('.hdr'), menuBtn = doc.querySelector('.menu-btn'), menu = doc.getElementById('menu');
  function onScroll() { hdr.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  function menuLabel() { menuBtn.setAttribute('aria-label', MSG[lang][menuBtn.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen']); }
  function setMenu(open, focusBack) {
    menu.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open)); menuLabel();
    if (open) { var first = menu.querySelector('a'); if (first) first.focus(); }
    else if (focusBack) menuBtn.focus();
  }
  menuBtn.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  doc.addEventListener('click', function (e) { if (!menu.hidden && !e.target.closest('.hdr')) setMenu(false); });

  /* ---------- call bar: after the hero buttons, never over the contact section or footer ---------- */
  var bar = doc.getElementById('callbar');
  if ('IntersectionObserver' in window && bar) {
    var seen = { cta: true, contact: false, footer: false };
    var map = new Map([[doc.querySelector('.hero__cta'), 'cta'], [doc.getElementById('kontakt'), 'contact'], [doc.getElementById('jalus'), 'footer']]);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var k = map.get(en.target);
        seen[k] = k === 'cta' ? (en.isIntersecting || en.boundingClientRect.top > 0) : en.isIntersecting;
      });
      var on = !seen.cta && !seen.contact && !seen.footer;
      bar.classList.toggle('is-on', on);
      if (on) bar.removeAttribute('inert'); else bar.setAttribute('inert', '');
    });
    map.forEach(function (_, el) { if (el) io.observe(el); });
  }

  /* ---------- gallery lightbox ---------- */
  var lb = doc.getElementById('lb'), lbImg = doc.getElementById('lb-img'), lbCap = doc.getElementById('lb-cap'), lbCount = doc.getElementById('lb-count');
  var tiles = Array.prototype.slice.call(doc.querySelectorAll('.tile__b'));
  var order = tiles, cur = 0, lbOpen = false, opener = null;
  function visualOrder() {
    return tiles.slice().sort(function (a, b) {
      var ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      return Math.abs(ra.top - rb.top) > 4 ? ra.top - rb.top : ra.left - rb.left;
    });
  }
  function showPhoto(i) {
    cur = (i + order.length) % order.length;
    var b = order[cur], im = b.querySelector('img');
    lbImg.src = b.getAttribute('data-full');
    lbImg.alt = im.getAttribute('alt');
    lbCap.textContent = im.getAttribute('alt');
    lbCount.textContent = (cur + 1) + ' / ' + order.length;
  }
  function openLb(btn) {
    order = visualOrder(); opener = btn; lbOpen = true;
    showPhoto(order.indexOf(btn));
    lb.hidden = false; root.style.overflow = 'hidden';
    doc.getElementById('lb-close').focus();
  }
  function closeLb() {
    if (!lbOpen) return;
    lbOpen = false; lb.hidden = true; root.style.overflow = ''; lbImg.removeAttribute('src');
    if (opener) opener.focus();
  }
  tiles.forEach(function (b) { b.addEventListener('click', function () { openLb(b); }); });
  doc.getElementById('lb-close').addEventListener('click', closeLb);
  doc.getElementById('lb-prev').addEventListener('click', function () { showPhoto(cur - 1); });
  doc.getElementById('lb-next').addEventListener('click', function () { showPhoto(cur + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  doc.addEventListener('keydown', function (e) {
    if (lbOpen) {
      if (e.key === 'Escape') { e.preventDefault(); closeLb(); }
      else if (e.key === 'ArrowLeft') showPhoto(cur - 1);
      else if (e.key === 'ArrowRight') showPhoto(cur + 1);
      else if (e.key === 'Tab') {
        var f = lb.querySelectorAll('button'), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    } else if (e.key === 'Escape' && !menu.hidden) { setMenu(false, true); }
  });
  var x0 = null, y0 = null;
  lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) showPhoto(cur + (dx < 0 ? 1 : -1));
  });

  /* ---------- form: check, then open the mail program ---------- */
  var form = doc.getElementById('paring'), status = doc.getElementById('f-status'), done = doc.getElementById('f-done'),
      copied = doc.getElementById('f-copied'), formAlt = form.querySelector('.form__alt'), mailText = '';
  function fieldOf(id) { return doc.getElementById(id).closest('.field'); }
  function setErr(id, key) {
    var fld = fieldOf(id), err = fld.querySelector('.err'), inp = doc.getElementById(id);
    if (key) { err.textContent = MSG[lang][key]; err.hidden = false; err.setAttribute('data-k', key); fld.classList.add('is-bad'); inp.setAttribute('aria-invalid', 'true'); }
    else { err.textContent = ''; err.hidden = true; err.removeAttribute('data-k'); fld.classList.remove('is-bad'); inp.removeAttribute('aria-invalid'); }
  }
  function clearErrors() {
    if (!form) return;
    Array.prototype.forEach.call(form.querySelectorAll('.err'), function (er) {
      var k = er.getAttribute('data-k'); if (k) er.textContent = MSG[lang][k];
    });
    if (status.getAttribute('data-k')) status.textContent = MSG[lang].ok;
    var ck = copied.getAttribute('data-k'); if (ck) copied.textContent = MSG[lang][ck];
  }
  function okPhone(v) { var n = v.replace(/\D/g, '').length; return n >= 7 && n <= 15; }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    function val(id) { return doc.getElementById(id).value.trim(); }
    var name = val('f-name'), phone = val('f-phone'), city = val('f-city'), type = val('f-type'), source = val('f-source');
    var sel = doc.getElementById('f-type'), typeTxt = type ? sel.options[sel.selectedIndex].textContent : '';
    var bad = [];
    setErr('f-name', name ? null : 'eName'); if (!name) bad.push('f-name');
    var pk = !phone ? 'ePhone' : (okPhone(phone) ? null : 'ePhoneBad');
    setErr('f-phone', pk); if (pk) bad.push('f-phone');
    setErr('f-type', type ? null : 'eType'); if (!type) bad.push('f-type');
    status.textContent = ''; status.removeAttribute('data-k'); copied.textContent = ''; copied.removeAttribute('data-k');
    if (bad.length) { done.hidden = true; formAlt.hidden = false; doc.getElementById(bad[0]).focus(); return; }
    var m = MSG[lang];
    var subject = m.subj + ': ' + name + (city ? ', ' + city : '');
    var body = [m.lName + ': ' + name, m.lPhone + ': ' + phone, city ? m.lCity + ': ' + city : '', m.lType + ': ' + typeTxt,
                source ? m.lSource + ': ' + source : ''].filter(Boolean).join('\n') + '\n';
    var href = 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    mailText = subject + '\n\n' + body;
    var link = doc.createElement('a'); link.href = href; link.hidden = true; doc.body.appendChild(link); link.click(); link.remove();
    /* the page cannot know whether a mail program opened: say what should happen and show the address */
    status.textContent = m.ok; status.setAttribute('data-k', 'ok');
    done.hidden = false; formAlt.hidden = true;
  });
  /* copy helper: Clipboard API, with a textarea fallback (file:// and older browsers) */
  function fallbackCopy(text) {
    return new Promise(function (resolve, reject) {
      var ta = doc.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.top = '-1000px';
      doc.body.appendChild(ta); ta.select(); var ok = false;
      try { ok = doc.execCommand('copy'); } catch (err) { ok = false; }
      ta.remove(); if (ok) resolve(); else reject(new Error('copy'));
    });
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).catch(function () { return fallbackCopy(text); });
    return fallbackCopy(text);
  }
  function showCopied(key) { copied.textContent = MSG[lang][key]; copied.setAttribute('data-k', key); }
  doc.getElementById('copy-addr').addEventListener('click', function () { copyText(MAIL).then(function () { showCopied('cAddr'); }, function () { showCopied('cFail'); }); });
  doc.getElementById('copy-text').addEventListener('click', function () { copyText(mailText).then(function () { showCopied('cText'); }, function () { showCopied('cFail'); }); });
  Array.prototype.forEach.call(form.querySelectorAll('input, textarea, select'), function (inp) {
    inp.addEventListener(inp.tagName === 'SELECT' ? 'change' : 'input', function () { if (inp.getAttribute('aria-invalid')) setErr(inp.id, null); });
  });

  /* ---------- start ---------- */
  var start = 'et';
  try {
    var mm = /[?&]lang=(et|ru|en)\b/.exec(location.search);
    start = mm ? mm[1] : (localStorage.getItem('semar-lang') || 'et');
  } catch (e) {}
  if (start === 'ru' || start === 'en') applyLang(start, false); else root.classList.remove('i18n-wait');
})();
