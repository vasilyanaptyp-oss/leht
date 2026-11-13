(function(){
  var d = document;
  var hd = d.querySelector('.hd'), sent = d.createElement('div'); sent.style.cssText = 'position:absolute;top:0;height:1px;width:1px;pointer-events:none';
  d.body.prepend(sent);
  if ('IntersectionObserver' in window) new IntersectionObserver(function(e){ hd.classList.toggle('sc', !e[0].isIntersecting); }).observe(sent);
  var panel = d.getElementById('panel'), hero = d.getElementById('hero');
  if (panel) requestAnimationFrame(function(){ requestAnimationFrame(function(){ panel.classList.add('in'); hero.classList.add('in'); }); });
  // phone menu
  var burger = d.querySelector('.burger'), menu = d.getElementById('menu');
  function setMenu(open){ menu.hidden = !open; burger.setAttribute('aria-expanded', open ? 'true' : 'false'); d.body.classList.toggle('mo', open); if (open) menu.focus({preventScroll:true}); }
  burger.addEventListener('click', function(){ setMenu(menu.hidden); });
  menu.addEventListener('click', function(e){ if (e.target.closest('a')) setMenu(false); });
  d.addEventListener('keydown', function(e){ if (e.key === 'Escape' && !menu.hidden) { setMenu(false); burger.focus(); } });
  window.matchMedia('(min-width: 960px)').addEventListener('change', function(e){ if (e.matches && !menu.hidden) setMenu(false); });

  // the measure (home): job + area -> first line of the message in the form
  var area = d.getElementById('area');
  if (area) {
    var areaN = d.getElementById('area-n'), measLine = d.getElementById('meas-line'), msg = d.getElementById('f-msg');
    var LINE_RE = /^Töö: [^\n]*\n*/;
    var job = function(){ var c = d.querySelector('#jobs input:checked'); return c ? c.getAttribute('data-l') : ''; };
    var line = function(){ var j = job(); return j ? 'Töö: ' + j + ', umbes ' + area.value + ' m².' : ''; };
    var apply = function(){
      areaN.textContent = area.value; area.setAttribute('aria-valuetext', 'umbes ' + area.value + ' ruutmeetrit');
      var l = line();
      if (msg) { var rest = msg.value.replace(LINE_RE, ''); msg.value = l ? (l + (rest ? '\n' + rest : '')) : rest; }
      measLine.textContent = l ? 'Päringu esimene rida: ' + l : 'Valige töö liik, siis koostame päringu esimese rea.';
    };
    area.addEventListener('input', apply);
    d.querySelectorAll('#jobs input').forEach(function(r){ r.addEventListener('change', apply); });
    var go = d.getElementById('meas-go');
    if (go && msg) go.addEventListener('click', function(){ setTimeout(function(){ try { msg.focus({preventScroll:true}); } catch (e) { msg.focus(); } }, 700); });
  }

  // lightbox: every .lb-t opens its own photo; arrows, keys and swipe walk through all photos on the page
  var items = [].slice.call(d.querySelectorAll('.lb-t:not(.lb-alias)'));
  if (!items.length) return;
  var ICX = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>';
  var ICL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>';
  var ICR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 4 8 8-8 8" fill="none" stroke="currentColor" stroke-width="2.4"/></svg>';
  var lb = d.createElement('div');
  lb.className = 'lb'; lb.hidden = true; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Foto suurelt');
  lb.innerHTML = '<figure class="lb-fig"><img class="lb-img" alt=""><figcaption class="lb-cap"><span class="lb-num"></span><span class="lb-txt"></span></figcaption></figure>' +
    '<button class="lb-b lb-p" type="button" aria-label="Eelmine foto">' + ICL + '</button>' +
    '<button class="lb-b lb-n" type="button" aria-label="Järgmine foto">' + ICR + '</button>' +
    '<button class="lb-b lb-x" type="button" aria-label="Sulge">' + ICX + '</button>';
  d.body.appendChild(lb);
  var img = lb.querySelector('.lb-img'), num = lb.querySelector('.lb-num'), txt = lb.querySelector('.lb-txt');
  var bx = lb.querySelector('.lb-x'), bp = lb.querySelector('.lb-p'), bn = lb.querySelector('.lb-n');
  var idx = 0, back = null, cache = {};
  function pre(i){ var t = items[(i + items.length) % items.length], u = t.getAttribute('data-full'); if (!cache[u]) { cache[u] = new Image(); cache[u].src = u; } }
  function show(i){
    idx = (i + items.length) % items.length;
    var t = items[idx], th = t.querySelector('img');
    img.removeAttribute('src');
    img.width = +t.getAttribute('data-w'); img.height = +t.getAttribute('data-h');
    img.src = t.getAttribute('data-full'); img.alt = th ? th.alt : '';
    num.textContent = (idx + 1) + ' / ' + items.length; txt.textContent = th ? th.alt : '';
    pre(idx + 1); pre(idx - 1);
  }
  function open(i){ back = d.activeElement; lb.hidden = false; d.body.classList.add('mo'); show(i); bx.focus({preventScroll:true}); }
  function close(){ lb.hidden = true; d.body.classList.remove('mo'); img.removeAttribute('src'); if (back) try { back.focus({preventScroll:true}); } catch (e) {} }
  items.forEach(function(t, i){ t.addEventListener('click', function(){ open(i); }); });
  [].forEach.call(d.querySelectorAll('.lb-alias'), function(a){ a.addEventListener('click', function(){
    var u = a.getAttribute('data-full'), k = 0; items.forEach(function(t, i){ if (t.getAttribute('data-full') === u) k = i; }); open(k); }); });
  bx.addEventListener('click', close);
  bp.addEventListener('click', function(){ show(idx - 1); });
  bn.addEventListener('click', function(){ show(idx + 1); });
  lb.addEventListener('click', function(e){ if (e.target === lb || e.target.classList.contains('lb-fig')) close(); });
  d.addEventListener('keydown', function(e){
    if (lb.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); show(idx - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); show(idx + 1); }
    else if (e.key === 'Tab') {
      var f = [bp, bn, bx], k = f.indexOf(d.activeElement);
      e.preventDefault(); f[(k + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  var sx = 0, sy = 0;
  lb.addEventListener('touchstart', function(e){ var t = e.changedTouches[0]; sx = t.clientX; sy = t.clientY; }, {passive:true});
  lb.addEventListener('touchend', function(e){ var t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(idx + (dx < 0 ? 1 : -1)); }, {passive:true});
})();
