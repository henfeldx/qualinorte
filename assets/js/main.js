// Qualinorte — main.js
// Consulta individual por item, sem carrinho.
const WHATSAPP = '559285329682';

function findProduct(slug) { return (window.HAUS_PRODUCTS || []).find(p => p.slug === slug); }

function whatsappUrl(product) {
  const msg = `Olá! Gostaria de mais informações sobre:\n\n*${product.name}*\nSKU ${product.sku}\nAnvisa nº ${product.anvisa}\n\nAguardo retorno. Obrigado.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function toast(msg) {
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(window._toastT);
  window._toastT = setTimeout(() => el.classList.remove('show'), 2200);
}

function productIcon(category) {
  const icons = {
    camas: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 40h52M6 40v10M58 40v10M10 40V26a4 4 0 0 1 4-4h12v18M26 30h32"/><circle cx="18" cy="26" r="3"/></svg>',
    macas: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 30h52M6 30v4M58 30v4M12 34l-4 20M52 34l4 20"/><circle cx="8" cy="54" r="3"/><circle cx="56" cy="54" r="3"/></svg>',
    carrinhos: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="10" width="36" height="42" rx="2"/><line x1="14" y1="22" x2="50" y2="22"/><line x1="14" y1="32" x2="50" y2="32"/><line x1="14" y1="42" x2="50" y2="42"/><circle cx="20" cy="56" r="3"/><circle cx="44" cy="56" r="3"/><path d="M32 4v6"/></svg>',
    armarios: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="12" y="6" width="40" height="52" rx="2"/><line x1="32" y1="6" x2="32" y2="58"/><circle cx="27" cy="32" r="1.5" fill="currentColor"/><circle cx="37" cy="32" r="1.5" fill="currentColor"/></svg>',
    mesas: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 28h52M14 28v22M50 28v22M20 20l6-6h12l6 6"/></svg>',
    cadeiras: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="26" cy="46" r="12"/><circle cx="26" cy="46" r="4"/><path d="M26 34V16h10l4 12"/><path d="M40 28h8"/><circle cx="52" cy="54" r="3"/></svg>',
    biombos: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12v40M22 8v48M42 8v48M56 12v40"/><path d="M8 12l14-4M22 8l20 4M42 12l14-4"/></svg>',
    suportes: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6v40M20 12h24M20 18h24M22 46l-6 10M42 46l6 10"/><circle cx="12" cy="58" r="3"/><circle cx="52" cy="58" r="3"/></svg>',
    escritorio: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 22h28v18H18z"/><path d="M22 40v14M42 40v14M18 22V14a6 6 0 0 1 6-6h16a6 6 0 0 1 6 6v8"/></svg>',
    epi: '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8c0-2 2-4 4-4s4 2 4 4v20"/><path d="M26 12c0-2 2-4 4-4s4 2 4 4v16"/><path d="M34 14c0-2 2-4 4-4s4 2 4 4v14"/><path d="M42 20c0-2 2-4 4-4s4 2 4 4v22c0 8-6 14-14 14H26c-6 0-10-4-10-10V22c0-2 1-4 2-4"/></svg>'
  };
  return icons[category] || icons.camas;
}

function productImageHTML(p, opts) {
  opts = opts || {};
  const cls = opts.class || '';
  if (p.image) {
    return `<img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" class="${cls}">`;
  }
  return productIcon(p.category);
}

const WA_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg>';

function productCardHTML(p) {
  const media = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async">`
    : productIcon(p.category);
  return `<article class="product-card">
    <a href="produto.html?p=${p.slug}" class="product-image${p.image ? ' product-image-photo' : ''}" aria-label="${p.name}">
      ${p.estoque ? '<span class="product-badge">Em estoque</span>' : ''}
      ${media}
    </a>
    <div class="product-body">
      <div class="product-cat">${p.categoryLabel}</div>
      <h3><a href="produto.html?p=${p.slug}" style="color:inherit">${p.name}</a></h3>
      <div class="product-sku">SKU ${p.sku}</div>
      <div class="product-meta">
        <span>${p.prazo}</span>
      </div>
      <div class="product-actions">
        <a href="produto.html?p=${p.slug}" class="btn btn-ghost btn-sm">Detalhes</a>
        <a class="btn btn-primary btn-sm" href="${whatsappUrl(p)}" target="_blank" rel="noopener">${WA_ICON} Consultar</a>
      </div>
    </div>
  </article>`;
}

function renderCatalog() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  const params = new URLSearchParams(location.search);
  const urlCat = params.get('cat');
  const seg = params.get('seg');
  const search = document.getElementById('search-input')?.value.toLowerCase().trim();
  const sortBy = document.getElementById('sort-select')?.value || 'relevance';
  const checked = sel => Array.from(document.querySelectorAll(sel + ':checked')).map(i => i.value);
  const cats = checked('input[name="cat"]');
  const materials = checked('input[name="material"]');
  const somenteEstoque = document.getElementById('filter-stock')?.checked;

  let list = window.HAUS_PRODUCTS.slice();
  if (urlCat) list = list.filter(p => p.category === urlCat);
  if (seg) list = list.filter(p => p.segment.includes(seg));
  if (cats.length) list = list.filter(p => cats.includes(p.category));
  if (search) list = list.filter(p => (p.name + ' ' + p.sku + ' ' + p.desc).toLowerCase().includes(search));
  if (materials.length) list = list.filter(p => materials.includes(p.material));
  if (somenteEstoque) list = list.filter(p => p.estoque);
  if (sortBy === 'name') list.sort((a,b) => a.name.localeCompare(b.name));
  else if (sortBy === 'prazo') list.sort((a,b) => (a.estoque === b.estoque ? 0 : a.estoque ? -1 : 1));

  const countEl = document.getElementById('result-count');
  if (countEl) countEl.textContent = list.length + (list.length === 1 ? ' produto' : ' produtos');

  grid.innerHTML = list.length
    ? list.map(productCardHTML).join('')
    : '<p style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--color-muted)">Nenhum produto encontrado com esses filtros.</p>';
}

function renderProductDetail() {
  const el = document.getElementById('product-detail');
  if (!el) return;
  const slug = new URLSearchParams(location.search).get('p');
  const p = findProduct(slug);
  if (!p) { el.innerHTML = '<p>Produto não encontrado.</p>'; return; }
  document.title = `${p.name} — Qualinorte`;
  document.getElementById('crumb-product').textContent = p.name;
  const specsHTML = Object.entries(p.specs).filter(([k]) => !/garantia/i.test(k)).map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');
  const gallery = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="eager" decoding="async">`
    : productIcon(p.category);
  el.innerHTML = `
    <div class="product-gallery${p.image ? ' product-gallery-photo' : ''}">${gallery}</div>
    <div class="product-info">
      <div class="product-cat">${p.categoryLabel}</div>
      <h1>${p.name}</h1>
      <div class="product-sku">SKU ${p.sku} · Anvisa nº ${p.anvisa}</div>
      <p style="margin:1rem 0;color:var(--color-ink);font-size:1rem">${p.desc}</p>
      <div class="tag-list">
        <span class="tag">${p.prazo}</span>
        ${p.estoque ? '<span class="tag" style="background:#d9edd9;color:#2e7d32">Em estoque</span>' : '<span class="tag">Sob encomenda</span>'}
      </div>
      <table class="spec-table">${specsHTML}</table>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap">
        <a class="btn btn-primary" href="${whatsappUrl(p)}" target="_blank" rel="noopener">${WA_ICON} Consultar por WhatsApp</a>
        <a class="btn btn-ghost" href="tel:+559285329682">Ligar (92) 8532-9682</a>
      </div>
    </div>`;
  const related = window.HAUS_PRODUCTS.filter(x => x.category === p.category && x.slug !== p.slug).slice(0,3);
  const rel = document.getElementById('related-grid');
  if (rel) rel.innerHTML = related.map(productCardHTML).join('');
}

function categoryPreviewImage(catSlug) {
  const p = (window.HAUS_PRODUCTS || []).find(x => x.category === catSlug && x.image);
  return p ? p.image : null;
}

function renderCategoryGrid(selector, limit) {
  const el = document.querySelector(selector);
  if (!el) return;
  const cats = (window.HAUS_CATEGORIES || []).slice(0, limit || 8);
  el.innerHTML = cats.map(c => {
    const img = categoryPreviewImage(c.slug);
    const visual = img
      ? `<div class="cat-icon cat-icon-photo"><img src="${img}" alt="" loading="lazy" decoding="async"></div>`
      : `<div class="cat-icon">${productIcon(c.slug)}</div>`;
    return `<a class="cat-card" href="produtos.html?cat=${c.slug}">
      ${visual}
      <h3>${c.label}</h3>
      <span>Ver produtos →</span>
    </a>`;
  }).join('');
}

function renderFeaturedProducts(selector, limit) {
  const el = document.querySelector(selector);
  if (!el) return;
  const list = window.HAUS_PRODUCTS.filter(p => p.estoque).slice(0, limit || 6);
  el.innerHTML = list.map(productCardHTML).join('');
}

function attachAccordion() {
  document.querySelectorAll('.acc-header').forEach(btn => {
    btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
  });
}

function attachMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    document.body.style.overflow = open ? 'hidden' : '';
    toggle.setAttribute('aria-expanded', open);
    let backdrop = document.getElementById('nav-backdrop');
    if (open) {
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'nav-backdrop';
        backdrop.className = 'nav-backdrop';
        backdrop.addEventListener('click', () => toggle.click());
        document.body.appendChild(backdrop);
      }
      requestAnimationFrame(() => backdrop.classList.add('show'));
    } else if (backdrop) {
      backdrop.classList.remove('show');
    }
  });
  // Close menu on link click
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (nav.classList.contains('open')) toggle.click();
  }));
}

function markActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
}

function attachScrollReveal() {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mark grid children as reveal + parent as reveal-group
  document.querySelectorAll('.cat-grid, .seg-grid, .diff-grid, .test-grid, .card-grid-2, .card-grid-3').forEach(g => {
    g.classList.add('reveal-group');
    Array.from(g.children).forEach(c => c.classList.add('reveal'));
  });
  document.querySelectorAll('.section-header, .numbers-band').forEach(el => el.classList.add('reveal'));

  if (reduceMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    return;
  }

  // Immediately reveal anything already in viewport (avoids blank first paint)
  const inViewport = el => {
    const r = el.getBoundingClientRect();
    return r.top < (window.innerHeight || document.documentElement.clientHeight) && r.bottom > 0;
  };
  document.querySelectorAll('.reveal').forEach(el => { if (inViewport(el)) el.classList.add('in'); });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -4% 0px' });

  document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));

  // Safety net: force reveal anything remaining after 1.2s
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
  }, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
  attachAccordion();
  attachMenu();
  markActiveNav();
  renderCatalog();
  renderProductDetail();
  renderCategoryGrid('[data-render="categories"]', 10);
  renderFeaturedProducts('[data-render="featured"]', 6);
  requestAnimationFrame(attachScrollReveal);

  ['change','input'].forEach(ev => {
    document.querySelectorAll('.filters input, .filters select, #sort-select, #search-input').forEach(el => {
      el.addEventListener(ev, renderCatalog);
    });
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      toast('Mensagem enviada! Retornaremos em até 24h úteis.');
      contactForm.reset();
    });
  }
});
