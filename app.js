'use strict';

/* ══════════════════════════════════════
   DATABASE
══════════════════════════════════════ */
const DB = {
  g: k => { try { return JSON.parse(localStorage.getItem('jg_' + k)); } catch { return null; } },
  s: (k, v) => localStorage.setItem('jg_' + k, JSON.stringify(v)),
  d: k => localStorage.removeItem('jg_' + k),

  prods:    () => DB.g('prods') || [],
  setProds: p  => DB.s('prods', p),
  users:    () => DB.g('users') || [],
  setUsers: u  => DB.s('users', u),
  orders:   () => DB.g('orders') || [],
  setOrders:o  => DB.s('orders', o),
  cart:     () => DB.g('cart') || [],
  setCart:  c  => DB.s('cart', c),
  me:       () => DB.g('me'),
  setMe:    u  => DB.s('me', u),
  clearMe:  () => DB.d('me'),
  pphone:   () => DB.g('pp') || '',
  setPphone:p  => DB.s('pp', p),
  clrPhone: () => DB.d('pp'),
};

/* ── Catalog version check ── */
const CATALOG_VER = '5';
if (DB.g('catalog_ver') !== CATALOG_VER) {
  DB.d('prods');
  DB.s('catalog_ver', CATALOG_VER);
}

/* ── Товары JUNGLE — только с качественными фото ── */
(function seed() {
  if (DB.prods().length > 5) return;
  DB.setProds([

    /* ══ БУКЕТЫ ══ */
    { id:1,  name:'Букет «Солнечный свет»',       sub:'Из пионовидных кустовых роз',                  price:11500, qty:'55 шт.', cat:'Букеты', img:'kat_ph1.jpg' },
    { id:2,  name:'Букет «Яркие акценты»',        sub:'Из роз и хризантем',                           price:8000,  qty:'25 шт.', cat:'Букеты', img:'kat_ph2.jpg' },
    { id:3,  name:'Букет «Нежное очарование»',    sub:'Из кустовых роз и одноголовых',                price:13000, qty:'35 шт.', cat:'Букеты', img:'kat_ph3.jpg' },
    { id:4,  name:'Букет «Синяя дымка»',          sub:'Из хризантемы и гортензии стабилизированной',  price:5000,  qty:'1 шт.',  cat:'Букеты', img:'p2_buket_sin_dymka.jpg' },
    { id:5,  name:'Букет «Огненный пожар»',       sub:'Розы, альстромерия, декоративная зелень',      price:6800,  qty:'1 шт.',  cat:'Букеты', img:'p2_ognennyy.jpg' },
    { id:6,  name:'Букет «Белый»',                sub:'Хризантемы, ромашки, эустома, эвкалипт',       price:6500,  qty:'1 шт.',  cat:'Букеты', img:'p2_buket_belyy.jpg' },
    { id:7,  name:'Букет «Розовый сон»',          sub:'Сборный букет',                                price:7000,  qty:'1 шт.',  cat:'Букеты', img:'p2_buket_pink.jpg' },
    { id:8,  name:'Букет «Радость»',              sub:'Сборный букет',                                price:7500,  qty:'1 шт.',  cat:'Букеты', img:'p2_buket_radost2.jpg' },
    { id:9,  name:'Букет «Страсть»',              sub:'Из красных роз и хризантем',                   price:8500,  qty:'30 шт.', cat:'Букеты', img:'photo_1.jpg' },
    { id:10, name:'Букет «Карамель»',             sub:'Из кустовых пионовидных роз',                  price:9500,  qty:'45 шт.', cat:'Букеты', img:'photo_2.jpg' },
    { id:11, name:'Букет «Персиковый»',           sub:'Из пионовидных роз',                           price:10500, qty:'50 шт.', cat:'Букеты', img:'photo_3.jpg' },

    /* ══ КОМПОЗИЦИИ ИЗ ЖИВЫХ ЦВЕТОВ ══ */
    { id:12, name:'Композиция-комплимент',        sub:'Нежная хризантема и эвкалипт в сумочке',       price:1300,  qty:'1 шт.',  cat:'Композиции из живых цветов', img:'p2_kompoziciya_sumka.jpg' },
    { id:13, name:'Композиция-комплимент',        sub:'Хризантема, эвкалипт, розовая сумочка',        price:1300,  qty:'1 шт.',  cat:'Композиции из живых цветов', img:'p2_kompoziciya2_sumka.jpg' },
    { id:14, name:'Композиция в корзине',         sub:'Белые хризантемы с пшеницей, плетёная корзина',price:2500,  qty:'1 шт.',  cat:'Композиции из живых цветов', img:'p2_kompoziciya_korzina.jpg' },

    /* ══ ГОРШЕЧНЫЕ РАСТЕНИЯ ══ */
    { id:15, name:'Орхидея Фаленопсис',           sub:'Цветущее растение',                            price:1300,  qty:'1 шт.',  cat:'Горшечные растения', img:'p2_orchid_fal.jpg' },
    { id:16, name:'Фатсия',                       sub:'Декоративно-лиственное растение',              price:1650,  qty:'1 шт.',  cat:'Горшечные растения', img:'p2_fatsiya2.jpg' },
    { id:17, name:'Аглаонема розовая',            sub:'Декоративно-лиственное растение',              price:850,   qty:'1 шт.',  cat:'Горшечные растения', img:'p2_aglaon_pink.jpg' },
    { id:18, name:'Аглаонема зелёная',            sub:'Декоративно-лиственное растение',              price:900,   qty:'1 шт.',  cat:'Горшечные растения', img:'p2_aglaon_green2.jpg' },
    { id:19, name:'Филодендрон',                  sub:'Декоративно-лиственное растение',              price:950,   qty:'1 шт.',  cat:'Горшечные растения', img:'p2_filodendron.jpg' },
    { id:20, name:'Пахира',                       sub:'Декоративно-лиственное растение',              price:1550,  qty:'1 шт.',  cat:'Горшечные растения', img:'p2_pahira.jpg' },
    { id:21, name:'Нефролепис',                   sub:'Папоротник',                                   price:1500,  qty:'1 шт.',  cat:'Горшечные растения', img:'p2_nefrolepis.jpg' },
    { id:22, name:'Драцена фрагранс массанджеана',sub:'Декоративно-лиственное растение',              price:3600,  qty:'1 шт.',  cat:'Горшечные растения', img:'p2_dracena.jpg' },
    { id:23, name:'Бегония',                      sub:'Декоративно-лиственное растение',              price:750,   qty:'1 шт.',  cat:'Горшечные растения', img:'p2_begonia.jpg' },
    { id:24, name:'Кактус микс',                  sub:'В керамическом горшке',                        price:350,   qty:'1 шт.',  cat:'Горшечные растения', img:'p2_kaktus.jpg' },

    /* ══ РИТУАЛЬНЫЕ ТОВАРЫ ══ */
    { id:25, name:'Венок траурный',               sub:'Искусственные цветы, декоративная сетка',      price:3500,  qty:'1 шт.',  cat:'Ритуальные товары', img:'p2_venok.jpg' },
    { id:26, name:'Каллы живые',                  sub:'Свежие каллы, пучок',                          price:800,   qty:'1 шт.',  cat:'Ритуальные товары', img:'p2_kally_live.jpg' },

    /* ══ КАШПО ══ */
    { id:27, name:'Кашпо чёрное «Волна»',         sub:'Пластик, с поддоном, набор 3 шт.',             price:450,   qty:'3 шт.',  cat:'Кашпо', img:'p2_kashpo_black.jpg' },
    { id:28, name:'Кашпо белое «Конус»',          sub:'Пластик двухцветный, набор 3 шт.',             price:400,   qty:'3 шт.',  cat:'Кашпо', img:'p2_kashpo_white.jpg' },

    /* ══ МЯГКИЕ ИГРУШКИ ══ */
    { id:29, name:'Мишка (пара)',                 sub:'Мягкая игрушка «Мишка», набор 2 шт.',          price:1400,  qty:'2 шт.',  cat:'Мягкие игрушки', img:'p2_mishki_para.jpg' },

    /* ══ ОТКРЫТКИ РАЗМЕРОМ А5 ══ */
    { id:30, name:'Открытка «С прибавлением!»',   sub:'Дизайнерская открытка с конвертом',            price:180,   qty:'1 шт.',  cat:'Открытки размером А5', img:'p2_otkr_pribavlenie.jpg' },

    /* ══ ДЕРЕВЯННЫЕ ИЗДЕЛИЯ ══ */
    { id:31, name:'Деревянная открытка «С ДР»',   sub:'Дерево с ручной росписью, на магните',         price:350,   qty:'1 шт.',  cat:'Деревянные изделия', img:'p2_otkr_dr.jpg' },

  ]);
})()

/* ══════════════════════════════════════
   HELPERS
══════════════════════════════════════ */
const fmt = n => Number(n).toLocaleString('ru') + ' ₽';
const cartSum = () => DB.cart().reduce((s, i) => s + i.price * (i.count || 1), 0);

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
let _tt;
function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_tt);
  _tt = setTimeout(() => el.classList.remove('show'), 3200);
}

/* ══════════════════════════════════════
   HEADER INIT
══════════════════════════════════════ */
function initHeader() {
  // Scroll shadow
  const hdr = document.querySelector('.header');
  if (hdr) window.addEventListener('scroll', () => hdr.classList.toggle('shadow', scrollY > 10));

  // Active nav link
  const pg = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .mnav a').forEach(a => {
    if ((a.getAttribute('href') || '') === pg) a.classList.add('active');
  });

  // Update login button & cart
  updateLoginBtn();
  updateCartBadge();
}

function toggleBurger() {
  document.getElementById('burger')?.classList.toggle('open');
  document.getElementById('mnav')?.classList.toggle('open');
}

function updateLoginBtn() {
  const u = DB.me();
  const el = document.getElementById('login-link');
  if (el) el.textContent = u ? 'Личный кабинет' : 'Войти в кабинет';
}

function updateCartBadge() {
  const el = document.getElementById('cart-badge');
  if (el) el.textContent = DB.cart().reduce((s, i) => s + (i.count || 1), 0);
}

function goLogin() {
  location.href = DB.me() ? 'profile.html' : 'login.html';
}

/* ══════════════════════════════════════
   CART SVG ICON
══════════════════════════════════════ */
const CART_SVG = `<svg class="cart-icon" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.5 4H5L7 18H22L25 8H9"/>
  <path d="M7 18H22"/>
  <circle cx="11" cy="22.5" r="2" fill="#294340" stroke="none"/>
  <circle cx="20" cy="22.5" r="2" fill="#294340" stroke="none"/>
</svg>`;

/* ══════════════════════════════════════
   PRODUCT CARD HTML
══════════════════════════════════════ */
function makeCard(p, size) {
  const gridClass = size === 'home' ? 'pgrid' : '';
  return `
    <div class="pcard" onclick="location.href='product.html?id=${p.id}'">
      <div class="pcard-img">
        <img src="${p.img}" alt="${p.name}"
          onerror="this.style.background='#d4d4d0';this.removeAttribute('src')">
      </div>
      <div class="pcard-name">${p.name}</div>
      <div class="pcard-sub">${p.sub}</div>
      <div class="pcard-price">${fmt(p.price)}</div>
      <div class="pcard-btns">
        <button class="btn-outline" onclick="event.stopPropagation();location.href='product.html?id=${p.id}'">ПОДРОБНЕЕ</button>
        <button class="btn-solid"   onclick="event.stopPropagation();addToCart(${p.id})">КУПИТЬ</button>
      </div>
    </div>`;
}

/* ══════════════════════════════════════
   НАДЁЖНАЯ АНИМАЦИЯ ПОЯВЛЕНИЯ
   Использует IntersectionObserver.
   Если элемент уже виден — показывает сразу.
   Если браузер не поддерживает Observer — показывает всё сразу.
══════════════════════════════════════ */
function animateOnScroll(elements, delayStep) {
  if (!elements || !elements.length) return;

  // Сразу делаем готовыми к анимации
  elements.forEach(el => el.classList.add('will-animate'));

  if (!('IntersectionObserver' in window)) {
    // Fallback: браузер не поддерживает — сразу показать всё
    elements.forEach(el => {
      el.classList.remove('will-animate');
      el.classList.add('animate-in');
    });
    return;
  }

  const step = delayStep || 80;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const idx = parseInt(el.dataset.animIdx || 0);
      setTimeout(() => {
        el.classList.add('animate-in');
      }, idx * step);
      observer.unobserve(el);
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  elements.forEach((el, i) => {
    el.dataset.animIdx = i;
    observer.observe(el);
  });

  // Страховка: через 1.5с показать всё что ещё не показано
  setTimeout(() => {
    elements.forEach(el => {
      if (!el.classList.contains('animate-in')) {
        el.classList.add('animate-in');
      }
    });
  }, 1500);
}

/* Запустить анимацию карточек в контейнере */
function animCards(container) {
  if (!container) return;
  const cards = Array.from(container.querySelectorAll('.pcard'));
  // Сбрасываем старые классы (при перелистывании слайдера)
  cards.forEach(c => {
    c.classList.remove('will-animate', 'animate-in');
  });
  // Небольшая пауза чтобы DOM отрисовался
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      animateOnScroll(cards, 80);
    });
  });
}

/* ══════════════════════════════════════
   HOME PAGE
══════════════════════════════════════ */
let _si = 0;

function initHome() {
  renderSlider();
  animateReviews();
}

function animateReviews() {
  const reviews = Array.from(document.querySelectorAll('.review'));
  if (!reviews.length) return;
  animateOnScroll(reviews, 120);
}

function renderSlider() {
  const el = document.getElementById('home-slider');
  if (!el) return;
  const p = DB.prods();
  if (!p.length) return;
  const n = p.length;
  const i = ((_si % n) + n) % n;
  el.innerHTML = [p[i % n], p[(i+1)%n], p[(i+2)%n]].map(x => makeCard(x)).join('');
  animCards(el);
}

function slideHome(d) { _si += d; renderSlider(); }

/* ══════════════════════════════════════
   CATALOG PAGE
══════════════════════════════════════ */
const ALL_CATS = [
  'Букеты','Искусственные растения','Горшечные растения','Сухоцветы',
  'Деревянные изделия','Вазы из стекла','Садовые фигуры','Композиции из живых цветов',
  'Денежные коробки','Мягкие игрушки','Кашпо','Вазы из керамики',
  'Уход за растениями','Гипсофила','Подарочные пакеты','Открытки размером А5',
  'Конверты для денег','Топеры','Плетёные изделия','Открытки размером А4',
  'Ритуальные товары','Шары',
];
let _af = new Set();

function initCatalog() {
  const cat = new URLSearchParams(location.search).get('cat');
  _af = new Set(cat ? [cat] : ['Букеты']);
  renderFilters();
  renderGrid();
}

function renderFilters() {
  // Фильтруем только категории у которых есть товары
  const prods = DB.prods();
  const catsWithProducts = new Set(prods.map(p => p.cat));
  const activeCats = ALL_CATS.filter(c => catsWithProducts.has(c));

  const makeFilterHTML = (prefix) => activeCats.map(c => {
    const id = prefix + '_' + c.replace(/[^a-zA-Zа-яА-Я0-9]/g, '_');
    const count = prods.filter(p => p.cat === c).length;
    return `<div class="fitem">
      <input type="checkbox" id="${id}" ${_af.has(c) ? 'checked' : ''} onchange="toggleF('${c}')">
      <label for="${id}">${c} <span class="fcount">(${count})</span></label>
    </div>`;
  }).join('');

  // Desktop
  const el = document.getElementById('filter-list');
  if (el) el.innerHTML = makeFilterHTML('fd');

  // Mobile
  const mel = document.getElementById('mob-filter-list');
  if (mel) mel.innerHTML = makeFilterHTML('fm');
}

function toggleF(c) {
  if (_af.has(c)) _af.delete(c);
  else _af.add(c);
  renderFilters(); // re-render both desktop & mobile
  renderGrid();
  // Update mobile filter count badge
  const countEl = document.getElementById('mob-filter-count');
  if (countEl) countEl.textContent = _af.size > 0 ? _af.size : '';
}

function renderGrid() {
  const grid = document.getElementById('cat-grid');
  if (!grid) return;
  const p = DB.prods();
  const f = _af.size === 0 ? p : p.filter(x => _af.has(x.cat));
  if (!f.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;color:var(--mgray);font-size:12px;padding:40px 0">Товары не найдены</p>';
    return;
  }
  grid.innerHTML = f.map(x => makeCard(x)).join('');
  animCards(grid);
}

/* ══════════════════════════════════════
   PRODUCT PAGE
══════════════════════════════════════ */
let _curProd = null;

function initProduct() {
  const id = parseInt(new URLSearchParams(location.search).get('id'));
  const p = DB.prods().find(x => x.id === id);
  if (!p) { location.href = '404.html'; return; }
  _curProd = p;

  const img = document.getElementById('prod-img');
  if (img) { img.src = p.img; img.alt = p.name; img.onerror = () => { img.style.background='#d4d4d0'; img.removeAttribute('src'); }; }

  ['prod-name','prod-sub','prod-qty','prod-price'].forEach(i => {
    const el = document.getElementById(i);
    if (!el) return;
    if (i === 'prod-name')  el.textContent = p.name;
    if (i === 'prod-sub')   el.textContent = p.sub;
    if (i === 'prod-qty')   el.textContent = p.qty;
    if (i === 'prod-price') el.textContent = fmt(p.price);
  });
}

function addCurrent() { if (_curProd) addToCart(_curProd.id); }

/* ══════════════════════════════════════
   CART
══════════════════════════════════════ */
function addToCart(id) {
  const p = DB.prods().find(x => x.id === id);
  if (!p) return;
  const cart = DB.cart();
  const ex = cart.find(i => i.id === id);
  if (ex) ex.count = (ex.count || 1) + 1;
  else cart.push({ ...p, count: 1 });
  DB.setCart(cart);
  updateCartBadge();
  toast('Добавлено: ' + p.name);
  const btn = document.getElementById('cart-btn');
  if (btn) { btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop'); setTimeout(() => btn.classList.remove('pop'), 400); }
}

function removeFromCart(id) {
  DB.setCart(DB.cart().filter(i => i.id !== id));
  updateCartBadge();
  renderCartPage();
  toast('Товар удалён');
}

function renderCartPage() {
  const cart = DB.cart();
  const el = document.getElementById('cart-items');
  if (!el) return;

  if (!cart.length) {
    el.innerHTML = `<div class="cart-empty">
      <div class="cart-empty-h">ВАША КОРЗИНА ПУСТА</div>
      <div class="cart-empty-s">Добавленные изделия будут показаны здесь</div>
    </div>`;
    const foot = document.getElementById('cart-foot');
    if (foot) foot.style.display = 'none';
    return;
  }

  el.innerHTML = cart.map(it => `
    <div class="citem">
      <img class="citem-img" src="${it.img}" alt="${it.name}"
        onerror="this.style.background='#d4d4d0';this.removeAttribute('src')">
      <div>
        <div class="citem-name">${it.name}</div>
        <div class="citem-sub">${it.sub}</div>
        <div class="citem-price">${fmt(it.price)} × ${it.count || 1}</div>
        <button class="btn-outline" onclick="removeFromCart(${it.id})">УДАЛИТЬ</button>
      </div>
    </div>`).join('');

  const tot = document.getElementById('cart-total');
  if (tot) tot.textContent = fmt(cartSum());
  const foot = document.getElementById('cart-foot');
  if (foot) foot.style.display = '';
}

/* ══════════════════════════════════════
   AUTH
══════════════════════════════════════ */
function doLogin() {
  const ph = document.getElementById('lph')?.value.trim();
  if (!ph) { toast('Введите номер телефона'); return; }
  const u = DB.users().find(x => x.phone === ph);
  if (u) {
    DB.setMe(u); updateLoginBtn();
    toast('Добро пожаловать, ' + u.name + '!');
    setTimeout(() => location.href = 'profile.html', 700);
  } else {
    DB.setPphone(ph);
    location.href = 'register.html';
  }
}

function doRegister() {
  const name = document.getElementById('rname')?.value.trim();
  const sur  = document.getElementById('rsur')?.value.trim();
  if (!name || !sur) { toast('Заполните все поля'); return; }
  const phone = DB.pphone() || '+7 000 000 00 00';
  const users = DB.users();
  const u = { id: Date.now(), name, sur, phone, reg: new Date().toLocaleDateString('ru') };
  users.push(u);
  DB.setUsers(users);
  DB.setMe(u);
  DB.clrPhone();
  updateLoginBtn();
  toast('Добро пожаловать, ' + name + '!');
  setTimeout(() => location.href = 'profile.html', 700);
}

function initProfile() {
  const u = DB.me();
  if (!u) { location.href = 'login.html'; return; }
  const n = document.getElementById('pname'); if (n) n.value = u.name || '';
  const s = document.getElementById('psur');  if (s) s.value = u.sur  || '';

  const myO = DB.orders().filter(o => o.uid === u.id).reverse();
  const oh = document.getElementById('order-hist');
  if (oh) {
    oh.innerHTML = myO.length
      ? myO.map(o => `<div class="order-row">
          <div class="order-id">Заказ #${String(o.id).slice(-6)}</div>
          <div class="order-date">${o.date}</div>
          <div class="order-total">${fmt(o.total)}</div>
        </div>`).join('')
      : '<p style="color:rgba(255,255,255,.7);font-size:11px;margin-top:18px">Заказов пока нет</p>';
  }
}

function saveProfile() {
  const u = DB.me();
  if (!u) return;
  u.name = document.getElementById('pname')?.value.trim() || u.name;
  u.sur  = document.getElementById('psur')?.value.trim()  || u.sur;
  DB.setUsers(DB.users().map(x => x.id === u.id ? u : x));
  DB.setMe(u);
  updateLoginBtn();
  toast('Данные сохранены');
}

function logout() {
  DB.clearMe(); updateLoginBtn();
  toast('Вы вышли из системы');
  setTimeout(() => location.href = 'index.html', 600);
}

/* ══════════════════════════════════════
   DELIVERY & PAYMENT
══════════════════════════════════════ */
let _deliv = {};

function initDelivery() {
  const tot = document.getElementById('deliv-total');
  if (tot) tot.textContent = fmt(cartSum());
  const u = DB.me();
  if (u) {
    const n = document.getElementById('dname'); if (n) n.value = u.name || '';
    const s = document.getElementById('dsur');  if (s) s.value = u.sur  || '';
  }
}

function toggleSP() { document.getElementById('sp-check')?.classList.toggle('on'); }

function goPayment() {
  const name  = document.getElementById('dname')?.value.trim();
  const phone = document.getElementById('dphone')?.value.trim();
  if (!name)  { toast('Введите имя получателя'); return; }
  if (!phone) { toast('Введите номер телефона'); return; }
  _deliv = {
    name, sur: document.getElementById('dsur')?.value || '',
    phone, addr: document.getElementById('daddr')?.value || '',
    self: document.getElementById('sp-check')?.classList.contains('on'),
  };
  sessionStorage.setItem('jg_deliv', JSON.stringify(_deliv));
  location.href = 'payment.html';
}

function initPayment() {
  const tot = document.getElementById('pay-total');
  if (tot) tot.textContent = fmt(cartSum());
}

function placeOrder() {
  const cart = DB.cart();
  if (!cart.length) { toast('Корзина пуста'); return; }
  const d = JSON.parse(sessionStorage.getItem('jg_deliv') || '{}');
  const u = DB.me();
  const order = {
    id: Date.now(), uid: u?.id || null,
    name: (d.name + ' ' + (d.sur||'')).trim(),
    phone: d.phone||'',
    addr: d.self ? 'Самовывоз' : (d.addr||''),
    items: cart.map(i => i.name + ' ×' + (i.count||1)).join(', '),
    total: cartSum(), status: 'Новый',
    date: new Date().toLocaleDateString('ru'),
  };
  const orders = DB.orders();
  orders.push(order);
  DB.setOrders(orders);
  DB.setCart([]);
  sessionStorage.removeItem('jg_deliv');
  updateCartBadge();
  toast('🎉 Заказ оформлен! Спасибо!');
  setTimeout(() => location.href = 'index.html', 1800);
}

/* Card masks */
function initCardMasks() {
  document.getElementById('cnum')?.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim().slice(0,19);
  });
  document.getElementById('cexp')?.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g,'').replace(/^(\d{2})(\d)/,'$1/$2').slice(0,5);
  });
  document.getElementById('ccvc')?.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g,'').slice(0,3);
  });
}

/* ══════════════════════════════════════
   ADMIN
══════════════════════════════════════ */
function adminLogin() {
  const l = document.getElementById('al')?.value;
  const p = document.getElementById('ap')?.value;
  if (l === 'admin' && p === 'admin') {
    document.getElementById('admin-login-sec').style.display = 'none';
    document.getElementById('admin-dash-sec').style.display  = 'flex';
    renderADash();
  } else toast('Неверный логин или пароль');
}

function adminLogout() {
  document.getElementById('admin-login-sec').style.display = 'flex';
  document.getElementById('admin-dash-sec').style.display  = 'none';
  if(document.getElementById('al')) document.getElementById('al').value = '';
  if(document.getElementById('ap')) document.getElementById('ap').value = '';
}

function aNav(sec, el) {
  document.querySelectorAll('.anav-i').forEach(i => i.classList.remove('on'));
  el.classList.add('on');
  document.querySelectorAll('.asec').forEach(s => s.classList.remove('on'));
  document.getElementById('asec-' + sec)?.classList.add('on');
  if (sec === 'dash')     renderADash();
  if (sec === 'products') renderAProds();
  if (sec === 'orders')   renderAOrders();
  if (sec === 'users')    renderAUsers();
}

function renderADash() {
  const p = DB.prods(), o = DB.orders(), u = DB.users();
  const rev = o.reduce((s, x) => s + (x.total||0), 0);
  const sg = document.getElementById('astat-grid');
  if (sg) sg.innerHTML = `
    <div class="astat"><div class="astat-v">${p.length}</div><div class="astat-l">Товаров</div></div>
    <div class="astat"><div class="astat-v">${o.length}</div><div class="astat-l">Заказов</div></div>
    <div class="astat"><div class="astat-v">${u.length}</div><div class="astat-l">Клиентов</div></div>
    <div class="astat"><div class="astat-v">${rev.toLocaleString('ru')} ₽</div><div class="astat-l">Выручка</div></div>`;
  const tb = document.getElementById('adash-orders');
  if (tb) tb.innerHTML = [...o].reverse().slice(0,6).map(x => `
    <tr><td>#${String(x.id).slice(-6)}</td><td>${x.name}</td><td>${fmt(x.total)}</td><td><span class="abadge">${x.status}</span></td><td>${x.date}</td></tr>`
  ).join('') || '<tr><td colspan="5" style="text-align:center;color:#aaa;padding:20px">Нет заказов</td></tr>';
}

function renderAProds() {
  const tb = document.getElementById('aprods-body');
  if (!tb) return;
  tb.innerHTML = DB.prods().map(p => `
    <tr>
      <td>${p.id}</td>
      <td><img src="${p.img}" style="width:44px;height:44px;object-fit:cover;border-radius:2px" onerror="this.style.background='#ccc'"></td>
      <td>${p.name}</td><td>${p.cat}</td><td>${fmt(p.price)}</td><td>${p.qty||'—'}</td>
      <td><button class="abtn-del" onclick="delProd(${p.id})">Удалить</button></td>
    </tr>`).join('') || '<tr><td colspan="7" style="text-align:center;color:#aaa;padding:20px">Нет товаров</td></tr>';
}

function addProd() {
  const n = document.getElementById('an')?.value.trim();
  const pr = parseInt(document.getElementById('apr')?.value);
  if (!n || !pr) { alert('Введите название и цену'); return; }
  const prods = DB.prods();
  const id = prods.length ? Math.max(...prods.map(x => x.id)) + 1 : 1;
  prods.push({
    id, name:n,
    sub:  document.getElementById('asub')?.value.trim()||'',
    price:pr,
    qty:  document.getElementById('aqty')?.value.trim()||'',
    cat:  document.getElementById('acat')?.value||'Букеты',
    img:  document.getElementById('aimg')?.value.trim()||'f2.png',
  });
  DB.setProds(prods);
  renderAProds();
  ['an','asub','apr','aqty','aimg'].forEach(i => { const el = document.getElementById(i); if(el) el.value=''; });
  toast('Товар добавлен!');
}

function delProd(id) {
  if (!confirm('Удалить товар?')) return;
  DB.setProds(DB.prods().filter(p => p.id !== id));
  renderAProds(); toast('Товар удалён');
}

function renderAOrders() {
  const tb = document.getElementById('aorders-body');
  if (!tb) return;
  tb.innerHTML = [...DB.orders()].reverse().map(o => `
    <tr><td>#${String(o.id).slice(-6)}</td><td>${o.name}</td><td>${o.phone||'—'}</td><td>${o.addr||'—'}</td>
    <td style="max-width:170px;font-size:10.5px">${o.items}</td><td>${fmt(o.total)}</td>
    <td><span class="abadge">${o.status}</span></td><td>${o.date}</td></tr>`
  ).join('') || '<tr><td colspan="8" style="text-align:center;color:#aaa;padding:20px">Нет заказов</td></tr>';
}

function renderAUsers() {
  const tb = document.getElementById('ausers-body');
  const orders = DB.orders();
  if (!tb) return;
  tb.innerHTML = DB.users().map(u => `
    <tr><td>${String(u.id).slice(-6)}</td><td>${u.name}</td><td>${u.sur||'—'}</td><td>${u.phone}</td>
    <td>${orders.filter(o => o.uid === u.id).length}</td><td>${u.reg}</td></tr>`
  ).join('') || '<tr><td colspan="6" style="text-align:center;color:#aaa;padding:20px">Нет пользователей</td></tr>';
}

/* ══════════════════════════════════════
   GLOBAL INIT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
});
