import './admin.css';
import { ContentService } from '../data/ContentService.js';
import { CATALOG } from '../data/catalogData.js';

// ─── State ─────────────────────────────────────────────────────────────────
let isAuthenticated = localStorage.getItem('admin_auth') === 'true';
let currentTab = 'dashboard';
let editingProductId = null;
let partnerEditId = null;

// ─── Sidebar navigation config ──────────────────────────────────────────────
const NAV = [
  { section: 'OVERVIEW' },
  { id: 'dashboard',  icon: 'fa-solid fa-gauge',          label: 'Dashboard' },
  { section: 'PAGES' },
  { id: 'home',       icon: 'fa-solid fa-house',           label: 'Home Page' },
  { id: 'about',      icon: 'fa-solid fa-building',        label: 'About Us' },
  { id: 'services',   icon: 'fa-solid fa-cog',             label: 'Services' },
  { id: 'contact',    icon: 'fa-solid fa-phone',           label: 'Contact' },
  { section: 'CONTENT' },
  { id: 'products',   icon: 'fa-solid fa-microchip',       label: 'Products / OEMs' },
  { id: 'partners',   icon: 'fa-solid fa-handshake',       label: 'Partners' },
  { id: 'blogs',      icon: 'fa-solid fa-newspaper',       label: 'Blogs' },
  { section: 'GLOBAL' },
  { id: 'header',     icon: 'fa-solid fa-bars',            label: 'Header & Nav' },
  { id: 'footer',     icon: 'fa-solid fa-shoe-prints',     label: 'Footer & Contact' },
  { id: 'seo',        icon: 'fa-solid fa-magnifying-glass',label: 'SEO Settings' },
];

// ─── Entry Points ────────────────────────────────────────────────────────────
export function renderAdminPage() {
  if (!isAuthenticated) return renderLogin();
  return renderShell();
}

export function initAdminPage() {
  if (!isAuthenticated) {
    bindLoginForm();
  } else {
    bindShell();
  }
}

// ─── Login ───────────────────────────────────────────────────────────────────
function renderLogin() {
  return `
    <div class="a-login-page">
      <div class="a-login-box">
        <div class="a-login-logo">
          <img src="/icon-logo-transparent.png" alt="Icon Electromatic" onerror="this.style.display='none'">
        </div>
        <h2>Admin CMS</h2>
        <p>Icon Electromatic Content Portal</p>
        <form class="a-login-form" id="a-login-form">
          <div class="a-field">
            <label>Email</label>
            <input class="a-input" type="email" id="a-email" value="admin@iconelectromatic.com" required>
          </div>
          <div class="a-field">
            <label>Password</label>
            <input class="a-input" type="password" id="a-password" value="admin123" required>
          </div>
          <button type="submit" class="a-btn a-btn-primary">Sign In <i class="fa-solid fa-arrow-right"></i></button>
        </form>
        <div class="a-login-demo-note">
          <i class="fa-solid fa-flask"></i>&nbsp; Demo mode – credentials are prefilled above
        </div>
        <div style="margin-top: 16px; text-align: center;">
          <a href="#/" class="a-btn a-btn-outline a-btn-sm" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none;">
            <i class="fa-solid fa-arrow-left"></i> Return to Website
          </a>
        </div>
      </div>
    </div>
  `;
}

function bindLoginForm() {
  document.getElementById('a-login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('a-email').value;
    const pass  = document.getElementById('a-password').value;
    if (email === 'admin@iconelectromatic.com' && pass === 'admin123') {
      localStorage.setItem('admin_auth', 'true');
      isAuthenticated = true;
      rerender();
    } else {
      alert('Invalid credentials.');
    }
  });
}

// ─── Shell ───────────────────────────────────────────────────────────────────
function renderShell() {
  const sidebarItems = NAV.map(item => {
    if (item.section) {
      return `<div class="a-nav-section">${item.section}</div>`;
    }
    return `
      <button class="a-nav-item ${currentTab === item.id ? 'active' : ''}" data-tab="${item.id}">
        <i class="${item.icon}"></i> ${item.label}
      </button>`;
  }).join('');

  const tab = NAV.find(n => n.id === currentTab);
  const pageTitle = tab ? tab.label : 'Dashboard';

  return `
    <div class="admin-wrap">
      <aside class="a-sidebar">
        <div class="a-sidebar-brand">
          <h1>ICON Admin</h1>
          <small>Content Portal</small>
        </div>
        <nav class="a-nav">${sidebarItems}</nav>
      </aside>

      <div class="a-main">
        <div class="a-topbar">
          <div class="a-topbar-left">
            <h2>${pageTitle}</h2>
            <p>Website-mapped CMS · Local demo mode (localStorage)</p>
          </div>
          <div class="a-topbar-right">
            <a href="#/" class="a-btn a-btn-outline a-btn-sm" style="text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-globe"></i> View Site
            </a>
            <button class="a-btn a-btn-outline a-btn-sm" id="a-reset-btn">
              <i class="fa-solid fa-rotate-left"></i> Reset Section
            </button>
            <button class="a-btn a-btn-danger a-btn-sm" id="a-logout-btn">
              Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        </div>

        <div class="a-content">
          <div class="a-notice">
            <i class="fa-solid fa-flask"></i>
            <span><strong>Frontend Demo Mode:</strong> Changes are saved to your browser's localStorage. They will reflect on this local site only and are not published to all visitors. Your friend's backend will replace this layer.</span>
          </div>
          ${renderTabContent()}
        </div>
      </div>
    </div>
  `;
}

function bindShell() {
  // Navigation
  document.querySelectorAll('.a-nav-item[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentTab = btn.getAttribute('data-tab');
      editingProductId = null;
      partnerEditId = null;
      rerender();
    });
  });

  // Logout
  document.getElementById('a-logout-btn')?.addEventListener('click', () => {
    localStorage.removeItem('admin_auth');
    isAuthenticated = false;
    rerender();
  });

  // Reset section
  document.getElementById('a-reset-btn')?.addEventListener('click', () => {
    if (confirm(`Reset "${currentTab}" to default content? This cannot be undone.`)) {
      ContentService.resetData(currentTab);
      rerender();
      showToast('Section reset to defaults.', 'success');
    }
  });

  // Generic save form
  const form = document.getElementById('a-page-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {};
      new FormData(form).forEach((v, k) => { data[k] = v; });
      ContentService.saveData(currentTab, data);
      showToast('Changes saved!', 'success');
    });
  }

  // Product-specific bindings
  bindProductTab();
  // Partner-specific bindings
  bindPartnerTab();
}

function rerender() {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = renderAdminPage();
    initAdminPage();
  }
}

function showToast(msg, type = '') {
  const existing = document.getElementById('a-toast');
  if (existing) existing.remove();

  const t = document.createElement('div');
  t.id = 'a-toast';
  t.className = `a-toast ${type}`;
  t.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ─── Tab Content Router ──────────────────────────────────────────────────────
function renderTabContent() {
  switch (currentTab) {
    case 'dashboard':  return renderDashboard();
    case 'home':       return renderPageEditor('home');
    case 'about':      return renderPageEditor('about');
    case 'services':   return renderPageEditor('services');
    case 'contact':    return renderPageEditor('contact');
    case 'header':     return renderPageEditor('header');
    case 'footer':     return renderPageEditor('footer');
    case 'seo':        return renderPageEditor('seo');
    case 'products':   return renderProductsTab();
    case 'partners':   return renderPartnersTab();
    case 'blogs':      return renderBlogsTab();
    default:           return `<p>Section not yet implemented.</p>`;
  }
}

// ─── Dashboard ───────────────────────────────────────────────────────────────
function renderDashboard() {
  const products = ContentService.getData('products');
  const partners = ContentService.getData('partners');
  const blogs = ContentService.getData('blogs');

  return `
    <div class="a-stats-row">
      <div class="a-stat-card">
        <h3>${products.length}</h3>
        <p>Products / OEMs</p>
      </div>
      <div class="a-stat-card red">
        <h3>${partners.length}</h3>
        <p>Partners</p>
      </div>
      <div class="a-stat-card">
        <h3>${blogs.length}</h3>
        <p>Blog Entries</p>
      </div>
      <div class="a-stat-card red">
        <h3>7</h3>
        <p>Editable Pages</p>
      </div>
    </div>

    <div class="a-card">
      <div class="a-card-header">
        <div><h3>Website Sections Overview</h3><p>All sections mapped from actual source code</p></div>
      </div>
      <div class="a-table-wrap">
        <table class="a-table">
          <thead><tr><th>Section</th><th>Status</th><th>Fields</th></tr></thead>
          <tbody>
            <tr><td>Home Page – Hero & Stats</td><td><span class="a-badge a-badge-green">Connected</span></td><td>Title, Subtitle, CTAs, Stats (×4), Capabilities (×4)</td></tr>
            <tr><td>About Us Page</td><td><span class="a-badge a-badge-green">Connected</span></td><td>Hero, Lead, Badges, Description</td></tr>
            <tr><td>Services Page</td><td><span class="a-badge a-badge-green">Connected</span></td><td>Hero, 4 Services with titles & descriptions</td></tr>
            <tr><td>Contact Page</td><td><span class="a-badge a-badge-green">Connected</span></td><td>3 Office addresses, phones, emails</td></tr>
            <tr><td>Header & Navigation</td><td><span class="a-badge a-badge-green">Connected</span></td><td>Logo, all nav labels, CTA button</td></tr>
            <tr><td>Footer</td><td><span class="a-badge a-badge-green">Connected</span></td><td>Tagline, 3 offices, socials, copyright</td></tr>
            <tr><td>SEO Settings</td><td><span class="a-badge a-badge-blue">Editor Ready</span></td><td>Meta title, description, keywords, OG tags</td></tr>
            <tr><td>Products / OEMs</td><td><span class="a-badge a-badge-green">Full CRUD</span></td><td>Add, Edit, Delete · Name, specialty, description, logo</td></tr>
            <tr><td>Partners</td><td><span class="a-badge a-badge-green">Full CRUD</span></td><td>Add, Edit, Delete · Name, domain, description, logo</td></tr>
            <tr><td>Blogs</td><td><span class="a-badge a-badge-blue">View Only</span></td><td>Seeded from real blogData.js</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ─── Generic Page Editor ─────────────────────────────────────────────────────
const PAGE_SCHEMAS = {
  home: [
    { div: 'Hero Section' },
    { key: 'heroTitle',           label: 'Main Heading',         ctx: 'Home → Hero',        textarea: true },
    { key: 'heroSubtitle',        label: 'Sub-description',      ctx: 'Home → Hero',        textarea: true },
    { key: 'ctaExploreText',      label: 'Primary CTA Label',    ctx: 'Home → Hero Button' },
    { key: 'ctaQuoteText',        label: 'Secondary CTA Label',  ctx: 'Home → Hero Button' },
    { div: 'Stats Bar (4 figures)' },
    { key: 'stat1Value',  label: 'Stat 1 Value', ctx: 'e.g. 4,000+' },
    { key: 'stat1Label',  label: 'Stat 1 Label', ctx: 'e.g. PRODUCTS AVAILABLE' },
    { key: 'stat2Value',  label: 'Stat 2 Value', ctx: 'e.g. 24+' },
    { key: 'stat2Label',  label: 'Stat 2 Label', ctx: 'e.g. COMPONENT LINES' },
    { key: 'stat3Value',  label: 'Stat 3 Value', ctx: 'e.g. 86 GHz' },
    { key: 'stat3Label',  label: 'Stat 3 Label', ctx: 'e.g. MAX FREQUENCY' },
    { key: 'stat4Value',  label: 'Stat 4 Value', ctx: 'e.g. 100%' },
    { key: 'stat4Label',  label: 'Stat 4 Label', ctx: 'e.g. RoHS & ISO 9001' },
    { div: 'Core Capabilities Section' },
    { key: 'coreCapabilitiesTitle',    label: 'Section Title',       ctx: 'Home → Core Capabilities' },
    { key: 'coreCapabilitiesSubtitle', label: 'Section Subtitle',    ctx: 'Home → Core Capabilities' },
    { key: 'coreCapabilitiesLead',     label: 'Section Description', ctx: 'Home → Core Capabilities', textarea: true },
    { key: 'cap1Title',  label: 'Capability 1 Title',       ctx: 'e.g. RF & Microwave Active' },
    { key: 'cap1Desc',   label: 'Capability 1 Description', ctx: 'Home → Capability Card 1',  textarea: true },
    { key: 'cap2Title',  label: 'Capability 2 Title',       ctx: 'e.g. Passive & Waveguides' },
    { key: 'cap2Desc',   label: 'Capability 2 Description', ctx: 'Home → Capability Card 2',  textarea: true },
    { key: 'cap3Title',  label: 'Capability 3 Title',       ctx: 'e.g. Defense & Aerospace' },
    { key: 'cap3Desc',   label: 'Capability 3 Description', ctx: 'Home → Capability Card 3',  textarea: true },
    { key: 'cap4Title',  label: 'Capability 4 Title',       ctx: 'e.g. Test & Measurement' },
    { key: 'cap4Desc',   label: 'Capability 4 Description', ctx: 'Home → Capability Card 4',  textarea: true },
  ],
  about: [
    { div: 'Hero Banner' },
    { key: 'heroEyebrow', label: 'Eyebrow Tag',   ctx: 'About → Hero' },
    { key: 'heroTitle',   label: 'Page Title',    ctx: 'About → Hero' },
    { key: 'heroLead',    label: 'Lead Paragraph',ctx: 'About → Hero', textarea: true },
    { div: 'Trust Badges' },
    { key: 'badge1', label: 'Badge 1 Text', ctx: 'About → Highlights Strip' },
    { key: 'badge2', label: 'Badge 2 Text', ctx: 'About → Highlights Strip' },
    { key: 'badge3', label: 'Badge 3 Text', ctx: 'About → Highlights Strip' },
    { div: 'Company Introduction' },
    { key: 'coreCapabilitiesTitle',    label: 'Section Title',    ctx: 'About → Core Capabilities' },
    { key: 'coreCapabilitiesSubtitle', label: 'Section Subtitle', ctx: 'About → Core Capabilities' },
    { key: 'companyDesc', label: 'Company Description', ctx: 'About → Introduction', textarea: true },
  ],
  services: [
    { div: 'Hero Banner' },
    { key: 'heroEyebrow', label: 'Eyebrow Tag',    ctx: 'Services → Hero' },
    { key: 'heroTitle',   label: 'Page Title',     ctx: 'Services → Hero' },
    { key: 'heroLead',    label: 'Lead Paragraph', ctx: 'Services → Hero', textarea: true },
    { div: 'Service 1 – Global Representation' },
    { key: 'service1Title',    label: 'Title',    ctx: 'Services → Block 1' },
    { key: 'service1Subtitle', label: 'Subtitle', ctx: 'Services → Block 1' },
    { key: 'service1Desc',     label: 'Description', ctx: 'Services → Block 1', textarea: true },
    { div: 'Service 2 – Government Portals' },
    { key: 'service2Title',    label: 'Title',    ctx: 'Services → Block 2' },
    { key: 'service2Subtitle', label: 'Subtitle', ctx: 'Services → Block 2' },
    { key: 'service2Desc',     label: 'Description', ctx: 'Services → Block 2', textarea: true },
    { div: 'Service 3 – Bespoke Solutions' },
    { key: 'service3Title',    label: 'Title',    ctx: 'Services → Block 3' },
    { key: 'service3Subtitle', label: 'Subtitle', ctx: 'Services → Block 3' },
    { key: 'service3Desc',     label: 'Description', ctx: 'Services → Block 3', textarea: true },
    { div: 'Service 4 – Supply Chain' },
    { key: 'service4Title',    label: 'Title',    ctx: 'Services → Block 4' },
    { key: 'service4Subtitle', label: 'Subtitle', ctx: 'Services → Block 4' },
    { key: 'service4Desc',     label: 'Description', ctx: 'Services → Block 4', textarea: true },
  ],
  contact: [
    { div: 'Page Hero' },
    { key: 'heroTitle', label: 'Page Title', ctx: 'Contact → Hero' },
    { key: 'heroLead',  label: 'Lead Text',  ctx: 'Contact → Hero', textarea: true },
    { div: 'India Office' },
    { key: 'indiaOfficeName', label: 'Office Name',    ctx: 'Contact → India' },
    { key: 'indiaAddress',    label: 'Full Address',   ctx: 'Contact → India', textarea: true },
    { key: 'indiaPhone',      label: 'Phone',          ctx: 'Contact → India' },
    { key: 'indiaEmail',      label: 'Email',          ctx: 'Contact → India' },
    { div: 'Singapore Office' },
    { key: 'singaporeOfficeName', label: 'Office Name',  ctx: 'Contact → Singapore' },
    { key: 'singaporeAddress',    label: 'Full Address',  ctx: 'Contact → Singapore', textarea: true },
    { key: 'singaporeEmail',      label: 'Email',         ctx: 'Contact → Singapore' },
    { div: 'USA Office' },
    { key: 'usaOfficeName', label: 'Office Name',   ctx: 'Contact → USA' },
    { key: 'usaAddress',    label: 'Full Address',  ctx: 'Contact → USA', textarea: true },
    { key: 'usaPhone',      label: 'Phone',         ctx: 'Contact → USA' },
    { key: 'usaEmail',      label: 'Email',         ctx: 'Contact → USA' },
  ],
  header: [
    { div: 'Logo & Branding' },
    { key: 'logoUrl',    label: 'Logo Image URL', ctx: 'Header → Logo (path or URL)' },
    { div: 'CTA Button' },
    { key: 'ctaLabel',   label: 'CTA Button Text', ctx: 'Header → Top-right button' },
    { key: 'ctaLink',    label: 'CTA Button Link', ctx: 'e.g. /contact' },
    { div: 'Navigation Labels' },
    { key: 'navHome',     label: 'Home Label',     ctx: 'Header → Nav' },
    { key: 'navAbout',    label: 'About Us Label', ctx: 'Header → Nav' },
    { key: 'navPartners', label: 'Partners Label', ctx: 'Header → Nav' },
    { key: 'navProducts', label: 'Products Label', ctx: 'Header → Nav' },
    { key: 'navServices', label: 'Services Label', ctx: 'Header → Nav' },
    { key: 'navBlogs',    label: 'Blogs Label',    ctx: 'Header → Nav' },
    { key: 'navContact',  label: 'Contact Label',  ctx: 'Header → Nav' },
  ],
  footer: [
    { div: 'Company Tagline' },
    { key: 'tagline',       label: 'Company Tagline', ctx: 'Footer → Brand column', textarea: true },
    { div: 'India Office' },
    { key: 'indiaOfficeName', label: 'Office Name', ctx: 'Footer → India' },
    { key: 'indiaAddress',    label: 'Full Address', ctx: 'Footer → India', textarea: true },
    { key: 'indiaPhone',      label: 'Phone',        ctx: 'Footer → India' },
    { key: 'indiaEmail',      label: 'Email',        ctx: 'Footer → India' },
    { div: 'Singapore Office' },
    { key: 'singaporeOfficeName', label: 'Office Name', ctx: 'Footer → Singapore' },
    { key: 'singaporeAddress',    label: 'Full Address', ctx: 'Footer → Singapore', textarea: true },
    { key: 'singaporeEmail',      label: 'Email',        ctx: 'Footer → Singapore' },
    { div: 'USA Office' },
    { key: 'usaOfficeName', label: 'Office Name', ctx: 'Footer → USA' },
    { key: 'usaAddress',    label: 'Full Address', ctx: 'Footer → USA', textarea: true },
    { key: 'usaPhone',      label: 'Phone',        ctx: 'Footer → USA' },
    { key: 'usaEmail',      label: 'Email',        ctx: 'Footer → USA' },
    { div: 'Social Links' },
    { key: 'linkedinUrl', label: 'LinkedIn URL', ctx: 'Footer → Socials' },
    { key: 'youtubeUrl',  label: 'YouTube URL',  ctx: 'Footer → Socials' },
    { div: 'Legal' },
    { key: 'copyrightText', label: 'Copyright Text', ctx: 'Footer → Bottom bar', textarea: false },
  ],
  seo: [
    { div: 'Page Meta Tags' },
    { key: 'siteTitle',       label: 'Site Title',              ctx: '<title> tag' },
    { key: 'metaDescription', label: 'Meta Description',        ctx: 'SEO description', textarea: true },
    { key: 'metaKeywords',    label: 'Meta Keywords',           ctx: 'Comma-separated' },
    { div: 'Open Graph (Social Sharing)' },
    { key: 'ogTitle',         label: 'OG Title',                ctx: 'Facebook / LinkedIn share title' },
    { key: 'ogDescription',   label: 'OG Description',          ctx: 'Share preview description', textarea: true },
    { key: 'ogImage',         label: 'OG Image URL',            ctx: 'Social share image path' },
  ],
};

function renderPageEditor(pageKey) {
  const schema = PAGE_SCHEMAS[pageKey];
  if (!schema) return `<p>No schema defined for <strong>${pageKey}</strong>.</p>`;

  const data = ContentService.getData(pageKey);

  const fields = schema.map(item => {
    if (item.div) {
      return `<div class="a-section-divider span2">${item.div}</div>`;
    }
    const val = (data[item.key] || '').replace(/"/g, '&quot;');
    const labelHtml = `<label class="a-label">${item.label} <span class="a-label-ctx">${item.ctx || ''}</span></label>`;
    const inputHtml = item.textarea
      ? `<textarea class="a-textarea" name="${item.key}">${data[item.key] || ''}</textarea>`
      : `<input class="a-input" type="text" name="${item.key}" value="${val}">`;
    return `<div class="a-field ${item.textarea ? 'span2' : ''}">${labelHtml}${inputHtml}</div>`;
  }).join('');

  return `
    <form id="a-page-form">
      <div class="a-card">
        <div class="a-card-header">
          <div>
            <h3>Edit Content</h3>
            <p>Each field label shows its exact location on the public website</p>
          </div>
        </div>
        <div class="a-form-grid">${fields}</div>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:10px;">
        <button type="button" class="a-btn a-btn-outline" onclick="this.closest('form').reset()">Reset</button>
        <button type="submit" class="a-btn a-btn-primary" id="a-save-btn">
          <i class="fa-solid fa-floppy-disk"></i> Save Changes
        </button>
      </div>
    </form>
  `;
}

// ─── Products Tab ────────────────────────────────────────────────────────────
function renderProductsTab() {
  const products = ContentService.getData('products');
  const editing = editingProductId ? products.find(p => p.id === editingProductId) : null;

  const rows = products.map(p => `
    <tr>
      <td>
        ${p.logoImg ? `<img src="${p.logoImg}" class="a-img-preview" alt="${p.name}">` : '<span style="color:#94a3b8; font-size:0.75rem;">No logo</span>'}
      </td>
      <td><strong>${p.name}</strong></td>
      <td style="color:var(--a-muted); font-size:0.8rem;">${p.specialty || p.category || '—'}</td>
      <td>
        <button class="a-btn a-btn-outline a-btn-sm prod-edit-btn" data-id="${p.id}" style="margin-right:6px;">
          <i class="fa-solid fa-pen"></i> Edit
        </button>
        <button class="a-btn a-btn-danger a-btn-sm prod-del-btn" data-id="${p.id}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');

  const formTitle = editing ? `Editing: ${editing.name}` : 'Add New OEM / Product';

  return `
    <div class="a-card" style="margin-bottom:20px;">
      <div class="a-card-header">
        <div>
          <h3 id="prod-form-heading">${formTitle}</h3>
          <p>Fill in the details and click Save</p>
        </div>
      </div>
      <form id="a-page-form" style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        <input type="hidden" name="id" value="${editing?.id || ''}">
        <div class="a-field"><label class="a-label">OEM / Product Name <span class="a-label-ctx">Products → Name</span></label>
          <input class="a-input" type="text" name="name" value="${editing?.name || ''}" required></div>
        <div class="a-field"><label class="a-label">Specialty / Category <span class="a-label-ctx">Products → Category</span></label>
          <input class="a-input" type="text" name="specialty" value="${editing?.specialty || editing?.category || ''}"></div>
        <div class="a-field"><label class="a-label">Logo Image URL <span class="a-label-ctx">Products → Logo path</span></label>
          <input class="a-input" type="text" name="logoImg" id="prod-logo-input" value="${editing?.logoImg || ''}" placeholder="/images/oem-logos/..."></div>
        <div class="a-field"><label class="a-label">Website URL <span class="a-label-ctx">Products → External link</span></label>
          <input class="a-input" type="text" name="website" value="${editing?.website || ''}"></div>
        <div class="a-field" style="grid-column:span 2"><label class="a-label">Tagline <span class="a-label-ctx">Products → Short tagline</span></label>
          <input class="a-input" type="text" name="tagline" value="${editing?.tagline || ''}"></div>
        <div class="a-field" style="grid-column:span 2"><label class="a-label">Description <span class="a-label-ctx">Products → Full description</span></label>
          <textarea class="a-textarea" name="description">${editing?.description || ''}</textarea></div>
        <div style="grid-column:span 2; display:flex; gap:10px; justify-content:flex-end;">
          ${editing ? `<button type="button" class="a-btn a-btn-outline" id="prod-cancel-btn">Cancel Edit</button>` : ''}
          <button type="submit" class="a-btn a-btn-primary">
            <i class="fa-solid fa-floppy-disk"></i> ${editing ? 'Update Product' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>

    <div class="a-card">
      <div class="a-card-header">
        <div><h3>All OEMs / Products</h3><p>${products.length} entries</p></div>
      </div>
      <div class="a-table-wrap">
        <table class="a-table">
          <thead><tr><th>Logo</th><th>Name</th><th>Specialty</th><th>Actions</th></tr></thead>
          <tbody>${rows || '<tr><td colspan="4">No products. Add one above.</td></tr>'}</tbody>
        </table>
      </div>
    </div>
  `;
}

function bindProductTab() {
  const form = document.getElementById('a-page-form');
  if (!form || currentTab !== 'products') return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const prod = { id: fd.get('id') || ('oem-' + Date.now()), name: fd.get('name'), specialty: fd.get('specialty'), category: fd.get('specialty'), logoImg: fd.get('logoImg'), website: fd.get('website'), tagline: fd.get('tagline'), description: fd.get('description') };

    let products = ContentService.getData('products');
    const idx = products.findIndex(p => p.id === prod.id);
    if (idx >= 0) { products[idx] = { ...products[idx], ...prod }; }
    else { products.unshift(prod); }
    ContentService.saveData('products', products);
    editingProductId = null;
    rerender();
    showToast('Product saved!', 'success');
  });

  document.querySelectorAll('.prod-edit-btn').forEach(btn => {
    btn.addEventListener('click', () => { editingProductId = btn.getAttribute('data-id'); rerender(); });
  });

  document.querySelectorAll('.prod-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!confirm('Delete this product?')) return;
      let products = ContentService.getData('products');
      ContentService.saveData('products', products.filter(p => p.id !== btn.getAttribute('data-id')));
      rerender();
      showToast('Product deleted.', '');
    });
  });

  document.getElementById('prod-cancel-btn')?.addEventListener('click', () => { editingProductId = null; rerender(); });
}

// ─── Partners Tab ────────────────────────────────────────────────────────────
function renderPartnersTab() {
  const partners = ContentService.getData('partners');
  const editing = partnerEditId ? partners.find(p => p.id === partnerEditId) : null;

  const rows = partners.map(p => `
    <tr>
      <td>${p.logoImg ? `<img src="${p.logoImg}" class="a-img-preview" alt="${p.name}">` : '<span style="color:#94a3b8;font-size:0.75rem;">No logo</span>'}</td>
      <td><strong>${p.name}</strong></td>
      <td style="color:var(--a-muted);font-size:0.8rem;">${p.domain || '—'}</td>
      <td>
        <button class="a-btn a-btn-outline a-btn-sm partner-edit-btn" data-id="${p.id}" style="margin-right:6px;"><i class="fa-solid fa-pen"></i> Edit</button>
        <button class="a-btn a-btn-danger a-btn-sm partner-del-btn" data-id="${p.id}"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join('');

  return `
    <div class="a-card" style="margin-bottom:20px;">
      <div class="a-card-header">
        <div><h3>${editing ? 'Editing: ' + editing.name : 'Add New Partner'}</h3></div>
      </div>
      <form id="a-page-form" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <input type="hidden" name="id" value="${editing?.id || ''}">
        <div class="a-field"><label class="a-label">Partner Name</label><input class="a-input" name="name" value="${editing?.name || ''}" required></div>
        <div class="a-field"><label class="a-label">Domain / Specialty</label><input class="a-input" name="domain" value="${editing?.domain || ''}"></div>
        <div class="a-field"><label class="a-label">Logo URL</label><input class="a-input" name="logoImg" value="${editing?.logoImg || ''}"></div>
        <div class="a-field"><label class="a-label">Website URL</label><input class="a-input" name="website" value="${editing?.website || ''}"></div>
        <div class="a-field" style="grid-column:span 2"><label class="a-label">Description</label><textarea class="a-textarea" name="description">${editing?.description || ''}</textarea></div>
        <div style="grid-column:span 2;display:flex;gap:10px;justify-content:flex-end;">
          ${editing ? `<button type="button" class="a-btn a-btn-outline" id="partner-cancel-btn">Cancel</button>` : ''}
          <button type="submit" class="a-btn a-btn-primary"><i class="fa-solid fa-floppy-disk"></i> ${editing ? 'Update Partner' : 'Add Partner'}</button>
        </div>
      </form>
    </div>
    <div class="a-card">
      <div class="a-card-header"><div><h3>All Partners</h3><p>${partners.length} entries</p></div></div>
      <div class="a-table-wrap"><table class="a-table"><thead><tr><th>Logo</th><th>Name</th><th>Domain</th><th>Actions</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>
  `;
}

function bindPartnerTab() {
  const form = document.getElementById('a-page-form');
  if (!form || currentTab !== 'partners') return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const p = { id: fd.get('id') || ('partner-' + Date.now()), name: fd.get('name'), domain: fd.get('domain'), logoImg: fd.get('logoImg'), website: fd.get('website'), description: fd.get('description') };
    let partners = ContentService.getData('partners');
    const idx = partners.findIndex(x => x.id === p.id);
    if (idx >= 0) partners[idx] = { ...partners[idx], ...p };
    else partners.unshift(p);
    ContentService.saveData('partners', partners);
    partnerEditId = null;
    rerender();
    showToast('Partner saved!', 'success');
  });

  document.querySelectorAll('.partner-edit-btn').forEach(btn => {
    btn.addEventListener('click', () => { partnerEditId = btn.getAttribute('data-id'); rerender(); });
  });
  document.querySelectorAll('.partner-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!confirm('Delete this partner?')) return;
      ContentService.saveData('partners', ContentService.getData('partners').filter(p => p.id !== btn.getAttribute('data-id')));
      rerender();
      showToast('Partner deleted.', '');
    });
  });
  document.getElementById('partner-cancel-btn')?.addEventListener('click', () => { partnerEditId = null; rerender(); });
}

// ─── Blogs Tab ───────────────────────────────────────────────────────────────
function renderBlogsTab() {
  const blogs = ContentService.getData('blogs');
  const rows = blogs.slice(0, 20).map(b => `
    <tr>
      <td><strong>${b.oemId || b.id || '—'}</strong></td>
      <td style="font-size:0.82rem;">${b.headline || b.title || '—'}</td>
      <td><a href="${b.officialWebsite || '#'}" target="_blank" style="font-size:0.78rem;color:var(--a-blue);">${b.portalName || 'View'}</a></td>
    </tr>
  `).join('');

  return `
    <div class="a-card">
      <div class="a-card-header"><div><h3>Blog & OEM Resources</h3><p>Seeded from blogData.js — ${blogs.length} entries. Full CRUD requires backend integration.</p></div></div>
      <div class="a-table-wrap"><table class="a-table"><thead><tr><th>OEM ID</th><th>Headline</th><th>Portal</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>
  `;
}
