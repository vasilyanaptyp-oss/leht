/* LINN ARTEHITUS OÜ: language switch (ET / RU), mail form, small header and reveal effects. */
(function () {
  "use strict";

  var EMAIL = "linnartehitus@gmail.com";
  var doc = document.documentElement;
  doc.classList.add("js");

  var RU = {
    "meta.title": "LINN ARTEHITUS OÜ | Строительство и ремонт в Таллинне",
    "meta.desc": "LINN ARTEHITUS OÜ строит и ремонтирует жилые и коммерческие здания в Таллинне. Новые здания, реконструкция и ремонт. Пишите: linnartehitus@gmail.com",
    "skip": "Перейти к содержанию",
    "brand.aria": "LINN ARTEHITUS OÜ, в начало страницы",
    "nav.aria": "Главное меню",
    "nav.services": "Услуги",
    "nav.why": "Почему мы",
    "nav.work": "Работы",
    "nav.process": "Как работаем",
    "nav.contact": "Контакты",
    "top.cta": "Написать нам",

    "hero.alt": "Каменщик кладёт кирпичную стену на фоне городских многоэтажек",
    "hero.title": "Строим и ремонтируем здания в <em>Таллинне</em>",
    "hero.lead": "Жилые и коммерческие здания, ремонт квартир и домов. Опишите вашу работу, и мы вам ответим.",
    "hero.cta": "Написать нам",
    "hero.reg": "В коммерческом регистре с 10.11.2017 · регистрационный код 14368778",

    "services.title": "Что мы делаем",
    "services.intro": "Строим новые здания и приводим в порядок старые. Вот наши основные работы.",
    "s1.name": "Строительство жилых домов",
    "s1.text": "Частные и другие жилые дома. Фундамент, стены, перекрытия и кровля.",
    "s1.tags": "Фундамент · Стены · Кровля",
    "svc.ask": "Запросить предложение",
    "s1.alt": "Строящийся жилой дом в лесах и башенный кран",
    "s2.name": "Нежилые здания",
    "s2.text": "Коммерческие, складские и вспомогательные здания. Строим новые и выполняем общестроительные работы в существующих.",
    "s2.tags": "Коммерческие здания · Склады · Хозпостройки",
    "s2.alt": "Фасадные работы с подъёмной платформы на стене здания",
    "s3.name": "Реконструкция и ремонт",
    "s3.text": "Квартиры, дома и коммерческие помещения. Демонтаж, новые стены, полы и отделка.",
    "s3.tags": "Квартиры · Дома · Помещения",
    "s3.alt": "Рабочий шлифует потолок из гипсокартона в ремонтируемом помещении",

    "why.title": "Строительная компания из Таллинна, с 2017 года",
    "why.link": "Проверить данные в регистре",
    "w1.t": "Открытые данные",
    "w1.p": "Мы в коммерческом регистре с 10.11.2017, регистрационный код 14368778. Все данные можно проверить.",
    "w2.t": "Напрямую с руководителем",
    "w2.p": "Ваше письмо попадает прямо к руководителю компании. Обсуждаем работу без посредников.",
    "w3.t": "Счета с НДС",
    "w3.p": "Мы плательщик НДС, KMKR EE102127946. Подходит и для фирм, и для квартирных товариществ.",
    "w4.t": "Местная компания",
    "w4.p": "Компания находится в Таллинне, в районе Ласнамяэ.",

    "gallery.title": "Виды работ",
    "gallery.intro": "Примеры работ, которые мы выполняем на стройке и в ремонте.",
    "g1.c": "Фундамент",
    "g1.alt": "Заливка бетона в фундаментную яму",
    "g2.c": "Фасадные работы",
    "g2.alt": "Рабочие на фасадных лесах старого каменного дома",
    "g3.c": "Кровельные работы",
    "g3.alt": "Кровельные работы: укладка нового покрытия",
    "g4.c": "Установка окон",
    "g4.alt": "Установка окна в светлой комнате",
    "g5.c": "Внутренняя отделка",
    "g5.alt": "Шпаклёвка стены при внутренней отделке",
    "g6.c": "Полы",
    "g6.alt": "Подготовка основания пола под плитку",

    "process.title": "Как мы работаем",
    "process.alt": "Рулетка и план квартиры на столе",
    "p1.t": "Напишите нам",
    "p1.p": "Опишите, что нужно сделать и где. Фото и чертежи помогут лучше понять задачу.",
    "p2.t": "Договариваемся",
    "p2.p": "Смотрим объект и обсуждаем объём работ, сроки и цену.",
    "p3.t": "Выполняем работу",
    "p3.p": "Работаем в согласованные сроки и сдаём вам готовый результат.",

    "contact.title": "Расскажите о своём объекте",
    "contact.lead": "Напишите нам или заполните форму. Форма подготовит готовое письмо в вашей почтовой программе.",
    "contact.email": "E-mail",
    "contact.city": "Где мы",
    "contact.cityv": "Таллинн, Харьюмаа",
    "contact.firm": "Компания",
    "contact.reg": "Регистрационный код 14368778",

    "f.name": "Имя",
    "f.contact": "E-mail или телефон",
    "f.type": "Вид работ",
    "f.t1": "Строительство жилого дома",
    "f.t2": "Строительство нежилого здания",
    "f.t3": "Реконструкция",
    "f.t4": "Ремонт",
    "f.t5": "Другая работа",
    "f.place": "Где находится объект",
    "f.opt": "(необязательно)",
    "f.placeph": "напр. Таллинн, Ласнамяэ",
    "f.msg": "Сообщение",
    "f.msgph": "Что нужно сделать?",
    "f.send": "Отправить по e-mail",
    "f.note": "Кнопка откроет вашу почтовую программу с готовым письмом. Если она не открылась, напишите на linnartehitus@gmail.com.",

    "foot.reg": "Регистрационный код 14368778",
    "foot.addr": "Юридический адрес: Katusepapi tn 6, 11412 Tallinn",
    "foot.lang": "Eesti keeles"
  };

  /* Texts that only live in JS (form messages, mail subject and body). */
  var MSG = {
    et: {
      "err.name": "Palun kirjutage oma nimi.",
      "err.contact": "Palun lisage e-post või telefon, et saaksime vastata.",
      "err.msg": "Palun kirjeldage lühidalt, mida on vaja teha.",
      "ok": "E-kiri on avatud teie e-posti programmis. Kontrollige see üle ja vajutage seal Saada.",
      "subject": "Päring kodulehelt",
      "b.name": "Nimi",
      "b.contact": "Kontakt",
      "b.type": "Töö liik",
      "b.place": "Objekti asukoht",
      "foot.lang": "Русская версия",
      "lang.label": "Keel"
    },
    ru: {
      "err.name": "Пожалуйста, укажите имя.",
      "err.contact": "Укажите e-mail или телефон, чтобы мы могли ответить.",
      "err.msg": "Коротко опишите, что нужно сделать.",
      "ok": "Письмо открыто в вашей почтовой программе. Проверьте его и нажмите там «Отправить».",
      "subject": "Запрос с сайта",
      "b.name": "Имя",
      "b.contact": "Контакт",
      "b.type": "Вид работ",
      "b.place": "Где объект",
      "foot.lang": "Eesti keeles",
      "lang.label": "Язык"
    }
  };

  var ET = {}; /* filled from the page itself, so Estonian lives only in the HTML */
  var current = "et";

  function each(sel, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(sel), fn);
  }

  function collectEstonian() {
    ET["meta.title"] = document.title;
    var md = document.querySelector('meta[name="description"]');
    ET["meta.desc"] = md ? md.getAttribute("content") : "";
    each("[data-i18n]", function (el) { ET[el.getAttribute("data-i18n")] = el.innerHTML; });
    each("[data-i18n-alt]", function (el) { ET[el.getAttribute("data-i18n-alt")] = el.getAttribute("alt"); });
    each("[data-i18n-ph]", function (el) { ET[el.getAttribute("data-i18n-ph")] = el.getAttribute("placeholder"); });
    each("[data-i18n-aria]", function (el) { ET[el.getAttribute("data-i18n-aria")] = el.getAttribute("aria-label"); });
  }

  function t(key, lang) {
    var dict = lang === "ru" ? RU : ET;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : ET[key];
  }

  function setLang(lang, opts) {
    lang = lang === "ru" ? "ru" : "et";
    current = lang;
    doc.setAttribute("lang", lang);
    document.title = t("meta.title", lang);
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.desc", lang));

    each("[data-i18n]", function (el) {
      var key = el.getAttribute("data-i18n");
      if (key === "foot.lang") { el.textContent = MSG[lang]["foot.lang"]; return; }
      var v = t(key, lang);
      if (v != null) el.innerHTML = v;
    });
    each("[data-i18n-alt]", function (el) { el.setAttribute("alt", t(el.getAttribute("data-i18n-alt"), lang)); });
    each("[data-i18n-ph]", function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"), lang)); });
    each("[data-i18n-aria]", function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"), lang)); });
    each(".lang__btn", function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    var foot = document.querySelector("[data-lang-toggle]");
    if (foot) foot.setAttribute("lang", lang === "ru" ? "et" : "ru");

    /* hero mail button: subject in the page language */
    each('a[data-mailsubject="hero"]', function (a) {
      a.setAttribute("href", "mailto:" + EMAIL + "?subject=" + encodeURIComponent(MSG[lang].subject));
    });

    /* clear old form errors, they were in the other language */
    each(".field__err", function (p) { p.textContent = ""; });
    each(".field [aria-invalid]", function (f) { f.removeAttribute("aria-invalid"); });
    var ok = document.getElementById("form-ok");
    if (ok) ok.textContent = "";

    if (!opts || !opts.silent) {
      try { localStorage.setItem("la-lang", lang); } catch (e) { /* storage blocked */ }
      try {
        var url = new URL(window.location.href);
        if (lang === "ru") url.searchParams.set("lang", "ru"); else url.searchParams.delete("lang");
        history.replaceState(null, "", url.pathname + url.search + url.hash);
      } catch (e) { /* file:// or old browser */ }
    }
  }

  function initialLang() {
    try {
      var q = new URLSearchParams(window.location.search).get("lang");
      if (q === "ru" || q === "et") return q;
    } catch (e) { /* ignore */ }
    try {
      var s = localStorage.getItem("la-lang");
      if (s === "ru" || s === "et") return s;
    } catch (e) { /* ignore */ }
    return "et";
  }

  /* ---------- mail form ---------- */
  function buildMailto(data, lang) {
    var m = MSG[lang === "ru" ? "ru" : "et"];
    var subject = m.subject + (data.type ? ": " + data.type : "");
    var lines = [
      m["b.name"] + ": " + (data.name || ""),
      m["b.contact"] + ": " + (data.contact || ""),
      m["b.type"] + ": " + (data.type || "")
    ];
    if (data.place) lines.push(m["b.place"] + ": " + data.place);
    lines.push("", data.message || "");
    return "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\r\n"));
  }

  function readForm(form) {
    var sel = form.querySelector("#f-type");
    return {
      name: form.querySelector("#f-name").value.trim(),
      contact: form.querySelector("#f-contact").value.trim(),
      type: sel ? sel.options[sel.selectedIndex].text.trim() : "",
      place: form.querySelector("#f-place").value.trim(),
      message: form.querySelector("#f-msg").value.trim()
    };
  }

  function validate(form) {
    var m = MSG[current];
    var checks = [
      ["#f-name", "#e-name", "err.name"],
      ["#f-contact", "#e-contact", "err.contact"],
      ["#f-msg", "#e-msg", "err.msg"]
    ];
    var first = null;
    checks.forEach(function (c) {
      var input = form.querySelector(c[0]);
      var err = form.querySelector(c[1]);
      if (!input.value.trim()) {
        input.setAttribute("aria-invalid", "true");
        err.textContent = m[c[2]];
        if (!first) first = input;
      } else {
        input.removeAttribute("aria-invalid");
        err.textContent = "";
      }
    });
    if (first) {
      first.focus({ preventScroll: true });
      first.closest(".field").scrollIntoView({ block: "center" });
    }
    return !first;
  }

  function initForm() {
    var form = document.getElementById("paring");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = document.getElementById("form-ok");
      ok.textContent = "";
      if (!validate(form)) return;
      var url = buildMailto(readForm(form), current);
      ok.textContent = MSG[current].ok;
      window.location.href = url;
    });
    form.addEventListener("input", function (e) {
      var el = e.target;
      if (el.getAttribute("aria-invalid") === "true" && el.value.trim()) {
        el.removeAttribute("aria-invalid");
        var errId = el.getAttribute("aria-describedby");
        var err = errId && document.getElementById(errId);
        if (err) err.textContent = "";
      }
    });
  }

  /* ---------- header shadow line and reveal ---------- */
  function initHeader() {
    var top = document.getElementById("top");
    if (!top) return;
    var onScroll = function () { top.classList.toggle("is-scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    /* the contact block and the form are never hidden, even for a moment */
    var items = document.querySelectorAll(".sec__head, .svc__row, .why__lead, .why__list li, .gal__item, .steps li, .process__img");
    var showAll = function () {
      each(".reveal:not(.is-in)", function (el) { el.classList.add("is-in"); });
    };
    /* safety net: at the bottom of the page, or before printing, everything is shown */
    window.addEventListener("scroll", function () {
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 4) showAll();
    }, { passive: true });
    window.addEventListener("beforeprint", showAll);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.01 });
    Array.prototype.forEach.call(items, function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return; /* already on screen: no effect */
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  collectEstonian();
  setLang(initialLang(), { silent: true });

  each(".lang__btn", function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  var footToggle = document.querySelector("[data-lang-toggle]");
  if (footToggle) footToggle.addEventListener("click", function () {
    setLang(current === "ru" ? "et" : "ru");
    window.scrollTo({ top: 0 });
  });

  /* "ask for an offer" links pick the matching work type in the form */
  each(".svc__ask[data-type]", function (a) {
    a.addEventListener("click", function () {
      var sel = document.getElementById("f-type");
      if (sel) sel.value = a.getAttribute("data-type");
    });
  });

  /* scrollbar width, so the hero text lines up with the page grid */
  function setScrollbar() {
    doc.style.setProperty("--sbw", (window.innerWidth - doc.clientWidth) + "px");
  }
  setScrollbar();
  window.addEventListener("resize", setScrollbar);

  initForm();
  initHeader();
  initReveal();

  window.LinnArtehitus = { setLang: setLang, buildMailto: buildMailto, lang: function () { return current; } };
})();
