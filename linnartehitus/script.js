(function () {
  'use strict';

  var MAIL = 'linnartehitus@gmail.com';

  var T = {
    et: {
      title: 'LINN ARTEHITUS OÜ · Siseviimistlus ja remont Tallinnas',
      desc: 'Siseviimistlus ja remont Tallinnas: seinte pahteldamine ja värvimine, plaatimine, põrandad, kipsitööd, siseuksed, korteri remont võtmed kätte. Kirjutage: linnartehitus@gmail.com',
      navLabel: 'Menüü', langLabel: 'Keel',
      navServices: 'Teenused', navWorks: 'Tehtud tööd', navHow: 'Kuidas töötame', navContact: 'Kontakt',
      cta: 'Kirjuta meile',
      h1: 'Siseviimistlus<br>ja remont<br>Tallinnas.',
      lead: 'Seinad, laed, põrandad, plaadid ja uksed. Kirjutage, mida on vaja teha, ja vastame pakkumisega.',
      heroAlt: 'Valgete seinte ja pähklipuu tooni põrandaga tuba pärast viimistlust, päike langeb põrandale',
      introBig: 'Teeme ruumid seest valmis. <em>Ühest seinast terve korterini.</em>',
      introText: 'Tallinna ettevõte, äriregistris alates 10.11.2017. Töid tellides suhtlete otse meiega ja saate arve käibemaksuga.',
      factReg: 'Registrikood', factVat: 'KMKR', factSince: 'Äriregistris', factSinceVal: 'alates 10.11.2017',
      regLink: 'Vaata äriregistri kaarti',
      servLabel: 'Teenused', servTitle: 'Mida teeme', ask: 'Küsi pakkumist',
      s1T: 'Seinte pahteldamine ja värvimine', s1P: 'Tasandame, pahteldame, lihvime ja värvime seinad ja laed.', s1Alt: 'Värvirull heledal seinal',
      s2T: 'Plaatimine vannitoas ja köögis', s2P: 'Paigaldame seina- ja põrandaplaadid vannituppa, kööki ja esikusse.', s2Alt: 'Heledate marmorimustriga plaatidega vannituba',
      s3T: 'Põrandate paigaldus', s3P: 'Laminaat, parkett ja vinüül koos aluspinna ettevalmistuse ja liistudega.', s3Alt: 'Uus tume puitpõrand heledas toas',
      s4T: 'Kipsplaadist seinad ja laed', s4P: 'Ehitame vaheseinad ja ripplaed ning valmistame pinnad viimistluseks ette.', s4Alt: 'Kipsplaadist lae lihvimine',
      s5T: 'Siseuste paigaldus', s5P: 'Paigaldame siseuksed koos lengide ja piirdeliistudega.', s5Alt: 'Valge siseuks heledas esikus',
      s6T: 'Korteri remont võtmed kätte', s6P: 'Kogu siseviimistlus ühest kohast, esimesest pahtlikihist viimase liistuni.', s6Alt: 'Valmis viimistlusega hele korter',
      detLabel: 'Viimistlus', detTitle: 'Sirged seinad,<br>puhtad nurgad,<br>täpsed liistud.',
      detText: 'Viimistlust vaadatakse lähedalt. Seepärast teeme hoolega ka selle, mis jääb mööbli taha.',
      detAlt: 'Valge põrandaliist ja seinapaneel puitpõranda kohal',
      worksLabel: 'Objektid', worksTitle: 'Tehtud tööd',
      howLabel: 'Töö käik', howTitle: 'Kuidas töötame',
      h1T: 'Kirjutage meile', h1P: 'Kirjeldage ruume ja töid. Fotod ja mõõdud aitavad vastata täpsemalt.',
      h2T: 'Lepime kokku', h2P: 'Mahu, tähtaja ja hinna paneme kirja enne töö algust.',
      h3T: 'Teeme ja anname üle', h3P: 'Teeme töö ära ja vaatame tulemuse koos teiega üle.',
      conLabel: 'Kontakt', conTitle: 'Kirjutage, mida on vaja teha.', conCity: 'Tallinn, Eesti',
      fName: 'Nimi', fContact: 'E-post või telefon', fType: 'Tööde liik', fAddr: 'Objekti aadress', fAddrPh: 'Linn, tänav',
      fMsg: 'Sõnum', fMsgPh: 'Mis ruumid, mis tööd, millal', fSend: 'Saada päring',
      fNote: 'Nupp avab teie e-posti programmi valmis kirjaga.',
      o1: 'Pahteldamine ja värvimine', o2: 'Plaatimine', o3: 'Põrandad', o4: 'Kipsplaadist seinad ja laed', o5: 'Siseuksed', o6: 'Korteri remont võtmed kätte', o0: 'Muu',
      footAddr: 'Juriidiline aadress: Katusepapi tn 6, 11412 Tallinn',
      other: 'Русский',
      errName: 'Palun kirjutage oma nimi', errContact: 'Palun lisage e-post või telefon', errMsg: 'Palun kirjeldage lühidalt tööd',
      subject: 'Päring kodulehelt', mailSubject: 'Päring kodulehelt',
      bName: 'Nimi', bContact: 'Kontakt', bType: 'Tööde liik', bAddr: 'Aadress', bMsg: 'Sõnum'
    },
    ru: {
      title: 'LINN ARTEHITUS OÜ · Внутренняя отделка и ремонт в Таллине',
      desc: 'Внутренняя отделка и ремонт в Таллине: шпаклёвка и покраска стен, плитка, полы, гипсокартон, межкомнатные двери, ремонт квартиры под ключ. Пишите: linnartehitus@gmail.com',
      navLabel: 'Меню', langLabel: 'Язык',
      navServices: 'Услуги', navWorks: 'Наши работы', navHow: 'Как работаем', navContact: 'Контакты',
      cta: 'Написать',
      h1: 'Внутренняя<br>отделка и ремонт<br>в Таллине.',
      lead: 'Стены, потолки, полы, плитка и двери. Напишите, что нужно сделать, и мы ответим с предложением.',
      heroAlt: 'Комната с белыми стенами и полом цвета ореха после отделки, на полу солнечный свет',
      introBig: 'Доводим помещения до готового вида. <em>От одной стены до целой квартиры.</em>',
      introText: 'Фирма из Таллина, в коммерческом регистре с 10.11.2017. Вы общаетесь напрямую с нами и получаете счёт с НДС.',
      factReg: 'Регистрационный код', factVat: 'KMKR', factSince: 'В регистре', factSinceVal: 'с 10.11.2017',
      regLink: 'Карточка в коммерческом регистре',
      servLabel: 'Услуги', servTitle: 'Что делаем', ask: 'Запросить цену',
      s1T: 'Шпаклёвка и покраска стен', s1P: 'Выравниваем, шпаклюем, шлифуем и красим стены и потолки.', s1Alt: 'Малярный валик на светлой стене',
      s2T: 'Плитка в ванной и на кухне', s2P: 'Кладём настенную и напольную плитку в ванной, на кухне и в прихожей.', s2Alt: 'Ванная со светлой плиткой под мрамор',
      s3T: 'Укладка полов', s3P: 'Ламинат, паркет и винил с подготовкой основания и плинтусами.', s3Alt: 'Новый тёмный деревянный пол в светлой комнате',
      s4T: 'Стены и потолки из гипсокартона', s4P: 'Ставим перегородки и подвесные потолки, готовим поверхности под отделку.', s4Alt: 'Шлифовка потолка из гипсокартона',
      s5T: 'Монтаж межкомнатных дверей', s5P: 'Устанавливаем двери с коробками и наличниками.', s5Alt: 'Белая межкомнатная дверь в светлой прихожей',
      s6T: 'Ремонт квартиры под ключ', s6P: 'Вся внутренняя отделка в одних руках, от первого слоя шпаклёвки до последнего плинтуса.', s6Alt: 'Светлая квартира с готовой отделкой',
      detLabel: 'Отделка', detTitle: 'Ровные стены,<br>чистые углы,<br>точные плинтусы.',
      detText: 'Отделку рассматривают вблизи. Поэтому аккуратно делаем и то, что потом закроет мебель.',
      detAlt: 'Белый плинтус и стеновая панель над деревянным полом',
      worksLabel: 'Объекты', worksTitle: 'Наши работы',
      howLabel: 'Порядок работы', howTitle: 'Как работаем',
      h1T: 'Напишите нам', h1P: 'Опишите помещения и работы. Фото и размеры помогут ответить точнее.',
      h2T: 'Договариваемся', h2P: 'Объём, срок и цену фиксируем до начала работ.',
      h3T: 'Делаем и сдаём', h3P: 'Выполняем работу и вместе с вами проверяем результат.',
      conLabel: 'Контакты', conTitle: 'Напишите, что нужно сделать.', conCity: 'Таллин, Эстония',
      fName: 'Имя', fContact: 'E-mail или телефон', fType: 'Вид работ', fAddr: 'Адрес объекта', fAddrPh: 'Город, улица',
      fMsg: 'Сообщение', fMsgPh: 'Какие помещения, какие работы, когда', fSend: 'Отправить запрос',
      fNote: 'Кнопка откроет вашу почтовую программу с готовым письмом.',
      o1: 'Шпаклёвка и покраска', o2: 'Плитка', o3: 'Полы', o4: 'Стены и потолки из гипсокартона', o5: 'Межкомнатные двери', o6: 'Ремонт квартиры под ключ', o0: 'Другое',
      footAddr: 'Юридический адрес: Katusepapi tn 6, 11412 Tallinn',
      other: 'Eesti keeles',
      errName: 'Напишите, пожалуйста, имя', errContact: 'Укажите e-mail или телефон', errMsg: 'Коротко опишите работу',
      subject: 'Запрос с сайта', mailSubject: 'Запрос с сайта',
      bName: 'Имя', bContact: 'Контакт', bType: 'Вид работ', bAddr: 'Адрес', bMsg: 'Сообщение'
    }
  };

  var lang = 'et';
  var doc = document;
  function $(s, r) { return (r || doc).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); }

  function stored() { try { return localStorage.getItem('la-lang'); } catch (e) { return null; } }
  function store(v) { try { localStorage.setItem('la-lang', v); } catch (e) { /* private mode */ } }

  function mailHref() {
    return 'mailto:' + MAIL + '?subject=' + encodeURIComponent(T[lang].mailSubject);
  }

  function setLang(next, remember) {
    if (!T[next]) next = 'et';
    lang = next;
    var d = T[lang];
    doc.documentElement.lang = lang;
    doc.title = d.title;
    var md = $('meta[name="description"]');
    if (md) md.setAttribute('content', d.desc);
    $$('[data-i18n]').forEach(function (el) { var k = el.getAttribute('data-i18n'); if (d[k] != null) el.textContent = d[k]; });
    $$('[data-i18n-html]').forEach(function (el) { var k = el.getAttribute('data-i18n-html'); if (d[k] != null) el.innerHTML = d[k]; });
    $$('[data-i18n-alt]').forEach(function (el) { var k = el.getAttribute('data-i18n-alt'); if (d[k] != null) el.alt = d[k]; });
    $$('[data-i18n-ph]').forEach(function (el) { var k = el.getAttribute('data-i18n-ph'); if (d[k] != null) el.placeholder = d[k]; });
    $$('[data-i18n-aria]').forEach(function (el) { var k = el.getAttribute('data-i18n-aria'); if (d[k] != null) el.setAttribute('aria-label', d[k]); });
    $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang)); });
    $$('[data-lang-toggle]').forEach(function (b) { b.textContent = d.other; b.lang = lang === 'et' ? 'ru' : 'et'; });
    $$('[data-mail]').forEach(function (a) { a.href = mailHref(); });
    $$('.f__err').forEach(function (p) { p.hidden = true; });
    $$('.f--bad').forEach(function (f) { f.classList.remove('f--bad'); });
    if (remember) store(lang);
  }

  function buildMailto(v) {
    var d = T[lang];
    var typeText = d['o' + String(v.type || 's0').slice(1)] || d.o0;
    var lines = [
      d.bName + ': ' + (v.name || ''),
      d.bContact + ': ' + (v.contact || ''),
      d.bType + ': ' + typeText
    ];
    if (v.addr) lines.push(d.bAddr + ': ' + v.addr);
    lines.push('', d.bMsg + ':', v.msg || '');
    return 'mailto:' + MAIL +
      '?subject=' + encodeURIComponent(d.subject + ': ' + typeText) +
      '&body=' + encodeURIComponent(lines.join('\r\n'));
  }

  function formValues() {
    return {
      name: $('#f-name').value.trim(),
      contact: $('#f-contact').value.trim(),
      type: $('#f-type').value,
      addr: $('#f-addr').value.trim(),
      msg: $('#f-msg').value.trim()
    };
  }

  function validate() {
    var d = T[lang], v = formValues(), first = null;
    [['name', 'f-name', 'e-name', d.errName, v.name.length > 1],
     ['contact', 'f-contact', 'e-contact', d.errContact, v.contact.length > 4],
     ['msg', 'f-msg', 'e-msg', d.errMsg, v.msg.length > 2]].forEach(function (r) {
      var input = doc.getElementById(r[1]), err = doc.getElementById(r[2]);
      var bad = !r[4];
      input.parentNode.classList.toggle('f--bad', bad);
      input.setAttribute('aria-invalid', String(bad));
      if (bad) { err.textContent = r[3]; input.setAttribute('aria-describedby', r[2]); } else { input.removeAttribute('aria-describedby'); }
      err.hidden = !bad;
      if (bad && !first) first = input;
    });
    if (first) first.focus();
    return first ? null : v;
  }

  // language: ?lang=ru wins, then the remembered choice, then Estonian
  var q = null;
  try { q = new URLSearchParams(location.search).get('lang'); } catch (e) { /* old browser */ }
  var start = T[q] ? q : (T[stored()] ? stored() : 'et');
  setLang(start, !!T[q]);

  $$('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); });
  });
  $$('[data-lang-toggle]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(lang === 'et' ? 'ru' : 'et', true); });
  });

  // "ask for a price" links preselect the work type in the form
  $$('[data-pick]').forEach(function (a) {
    a.addEventListener('click', function () { $('#f-type').value = a.getAttribute('data-pick'); });
  });

  var form = $('#form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = validate();
    if (v) window.location.href = buildMailto(v);
  });
  $$('input, textarea', form).forEach(function (el) {
    el.addEventListener('input', function () {
      if (el.parentNode.classList.contains('f--bad')) {
        el.parentNode.classList.remove('f--bad');
        el.removeAttribute('aria-invalid');
        var p = $('.f__err', el.parentNode); if (p) p.hidden = true;
      }
    });
  });

  // own works: the block shows itself once it has photos
  var works = $('#tood');
  if (works && $$('.works__grid > *', works).length) {
    works.hidden = false;
    $$('[data-works-link]').forEach(function (a) { a.hidden = false; });
  }

  // header gets a background once the hero is scrolled away
  var top = $('.top');
  function onScroll() { top.classList.toggle('top--solid', window.scrollY > window.innerHeight * 0.72); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // quiet reveal on scroll
  var items = $$('.rv');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    doc.documentElement.classList.add('js-rv');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
    window.addEventListener('beforeprint', function () { items.forEach(function (el) { el.classList.add('in'); }); });
  }

  window.LinnArtehitus = { buildMailto: buildMailto, setLang: setLang, getLang: function () { return lang; } };
})();
