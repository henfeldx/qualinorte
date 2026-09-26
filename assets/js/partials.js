// Header, drawer and footer injected on every page
const LOGO_FULL = `<img src="assets/img/logo-header.png" alt="Qualinorte Móveis e Produtos Hospitalares" class="logo-full" width="237" height="90" loading="eager">`;

function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;
  el.innerHTML = `
  <div class="topbar">
    <div class="container">
      <span class="topbar-loc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>Avenida Tefé, 31 · Japiim · Manaus/AM</span>
      <span>Seg a Qui 7h30–17h30 · Sex 7h30–16h30 · <a href="tel:+559285329682">(92) 8532-9682</a></span>
    </div>
  </div>
  <div class="container header-inner">
    <a href="index.html" class="logo" aria-label="Qualinorte Início">
      ${LOGO_FULL}
    </a>
    <nav class="main-nav" aria-label="Navegação principal">
      <a href="index.html">Início</a>
      <a href="produtos.html">Catálogo</a>
      <a href="segmentos.html">Segmentos</a>
      <a href="servicos.html">Serviços</a>
      <a href="qualidade.html">Qualidade</a>
      <a href="sobre.html">Sobre</a>
      <a href="contato.html">Contato</a>
    </nav>
    <div class="header-actions">
      <a href="https://wa.me/559285329682?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento." target="_blank" rel="noopener" class="icon-btn" aria-label="WhatsApp" title="Falar no WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg>
      </a>
      <button id="menu-toggle" class="icon-btn menu-toggle" aria-label="Abrir menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
      </button>
    </div>
  </div>`;
}

function renderDrawer() { /* removido: consulta é individual por item */ }

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo footer-brand-logo" aria-label="Qualinorte">
          ${LOGO_FULL}
        </a>
        <p>Móveis e equipamentos hospitalares com certificação Anvisa, estoque em Manaus e entrega em todo o Norte do Brasil.</p>
        <div class="footer-social mt-2">
          <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
          <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
        </div>
      </div>
      <div>
        <h4>Catálogo</h4>
        <ul>
          <li><a href="produtos.html?cat=camas">Camas Hospitalares</a></li>
          <li><a href="produtos.html?cat=macas">Macas</a></li>
          <li><a href="produtos.html?cat=carrinhos">Carrinhos de Emergência</a></li>
          <li><a href="produtos.html?cat=armarios">Armários e Gaveteiros</a></li>
          <li><a href="produtos.html?cat=mesas">Mesas Cirúrgicas</a></li>
          <li><a href="produtos.html?cat=cadeiras">Cadeiras de Rodas</a></li>
        </ul>
      </div>
      <div>
        <h4>Institucional</h4>
        <ul>
          <li><a href="sobre.html">Sobre a Qualinorte</a></li>
          <li><a href="qualidade.html">Qualidade e Certificações</a></li>
          <li><a href="servicos.html">Serviços</a></li>
          <li><a href="segmentos.html">Segmentos atendidos</a></li>
          <li><a href="faq.html">Perguntas frequentes</a></li>
        </ul>
      </div>
      <div>
        <h4>Atendimento</h4>
        <ul class="footer-contact">
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7A2 2 0 0 1 22 16.9z"/></svg><span>(92) 8532-9682</span></li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg><span>WhatsApp (92) 8532-9682</span></li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg><span>Geral/Financeiro:<br><a href="mailto:qualinorte.am@gmail.com">qualinorte.am@gmail.com</a></span></li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2l1 4h12l-2 8H8L6 2z"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg><span>Compras:<br><a href="mailto:qualinorte.am@gmail.com">qualinorte.am@gmail.com</a></span></li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Avenida Tefé, 31 · Japiim<br/>Manaus – AM · CEP 69000-000</span></li>
          <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>Seg a Qui · 7h30–17h30<br/>Sex · 7h30–16h30</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2026 Qualinorte Produtos Hospitalares Ltda. · CNPJ 26.648.951/0001-65</div>
      <div>
        <a href="politica-privacidade.html">Política de privacidade</a> ·
        <a href="politica-privacidade.html">Termos de uso</a> ·
        <a href="politica-privacidade.html">LGPD</a>
      </div>
      <div class="fz-credit">Site desenvolvido por <a href="#" aria-label="Fz Corp."><img src="assets/img/fzcorp.png" alt="Fz Corp." width="28" height="28"><span>Fz Corp.</span></a></div>
    </div>
  </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderDrawer();
  renderFooter();
  // Mobile sticky bottom action bar (auto-hides ≥900px via CSS)
  if (!document.querySelector('.mobile-bottom-bar')) {
    const bar = document.createElement('div');
    bar.className = 'mobile-bottom-bar';
    bar.innerHTML = `
      <a class="mbb-btn" href="tel:+559285329682" aria-label="Ligar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.8 2z"/></svg>
        <span>Ligar</span>
      </a>
      <a class="mbb-btn mbb-primary" href="https://wa.me/559285329682?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento." target="_blank" rel="noopener">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg>
        <span>WhatsApp</span>
      </a>`;
    document.body.appendChild(bar);
  }
});
