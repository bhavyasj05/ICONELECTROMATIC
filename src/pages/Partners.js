/**
 * Partners Page — ICON ELECTROMATIC
 * High-End Dark Relay-styled layout matching authentic Icon Electromatic partners.
 * Features alternating animated multi-row streams (Row 1 right, Row 2 left, Row 3 right, Row 4 left).
 * Completely clean cards showcasing authorized OEM partnerships without clutter.
 */

const PARTNERS = [
  {
    id: 'rogers',
    name: 'Rogers Corporation',
    domain: 'High-Frequency Laminates & Prepregs',
    category: 'materials',
    accentColor: 'red',
    glowColor: 'rgba(204, 0, 0, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 200 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="38" rx="8" fill="#CC0000"/>
        <path d="M14 11h9c4 0 6.5 2 6.5 5.2 0 2.5-1.5 4.3-4 4.9l4.8 9.9h-4.8l-4.2-9h-2.5V31H14V11zm4 7.8h4.3c1.8 0 2.8-.9 2.8-2.2 0-1.3-1-2.2-2.8-2.2H18v4.4z" fill="#FFFFFF"/>
        <text x="49" y="23" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="17" letter-spacing="1.5">ROGERS</text>
        <text x="50" y="34" fill="#94A3B8" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="700" font-size="8" letter-spacing="2.2">CORPORATION</text>
      </svg>
    `,
    description: 'A global leader in engineered materials, Rogers provides high-frequency laminates and prepregs widely used in radar, aerospace, defence, and high-speed communication systems where signal integrity and reliability are critical.',
  },
  {
    id: 'mini-circuits',
    name: 'Mini-Circuits',
    domain: 'RF & Microwave Components',
    category: 'components',
    accentColor: 'red',
    glowColor: 'rgba(225, 29, 72, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 215 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="38" rx="9" fill="#E11D48"/>
        <path d="M7 21c2.8-6.5 5.6-6.5 8.4 0s5.6 6.5 8.4 0s5.6-6.5 8.4 0" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" class="anim-wave"/>
        <text x="48" y="27" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="800" font-size="18" letter-spacing="-0.4">Mini-Circuits</text>
        <circle cx="204" cy="16" r="2.8" fill="#E11D48"/>
        <text x="202" y="18" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="4">®</text>
      </svg>
    `,
    description: 'Mini-Circuits offers an extensive portfolio of RF and microwave components supporting design, prototyping, and production across defence, SATCOM, test & measurement, and advanced communication platforms.',
  },
  {
    id: 'qorvo',
    name: 'Qorvo',
    domain: 'RF, mmWave & Active Antenna Solutions',
    category: 'semiconductors',
    accentColor: 'blue',
    glowColor: 'rgba(0, 200, 83, 0.4)',
    logoSvg: `
      <svg viewBox="0 0 175 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="29" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="28" letter-spacing="-1.2">qorvo</text>
        <circle cx="21" cy="9" r="3.8" fill="#00C853" class="anim-dot-pulse"/>
        <circle cx="100" cy="29" r="3.2" fill="#00C853" class="anim-dot-pulse"/>
      </svg>
    `,
    description: 'Qorvo develops advanced RF and mmWave technologies including RFICs, Power amplifiers, Switches, Converters, and Active antenna ASICs, enabling high-performance Radar, SATCOM, and next-generation Wireless systems.',
  },
  {
    id: 'rfuw',
    name: 'RFuW Engineering',
    domain: 'High-Performance RF Switches & Modules',
    category: 'components',
    accentColor: 'red',
    glowColor: 'rgba(225, 29, 72, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 200 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="38" rx="9" fill="rgba(225,29,72,0.18)" stroke="#E11D48" stroke-width="1.8"/>
        <path d="M10 21h5l3-8 4.5 16 3-8h5.5" stroke="#E11D48" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" class="anim-wave"/>
        <text x="48" y="23" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="17" letter-spacing="1">RFuW</text>
        <text x="49" y="34" fill="#FB7185" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="800" font-size="8.5" letter-spacing="2">ENGINEERING</text>
      </svg>
    `,
    description: 'RFuW Engineering specialises in rugged RF switches, limiters, and integrated microwave modules designed for high-power, wideband, and mission-critical aerospace and defence applications.',
  },
  {
    id: 'quantic-ohmega',
    name: 'Quantic Ohmega-Ticer',
    domain: 'Embedded Thin-Film Resistive Materials',
    category: 'materials',
    accentColor: 'blue',
    glowColor: 'rgba(59, 130, 246, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 220 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="38" rx="9" fill="rgba(37,99,235,0.2)" stroke="#2563EB" stroke-width="1.8"/>
        <path d="M21 9l9 5.2v10.6l-9 5.2-9-5.2V14.2l9-5.2z" stroke="#60A5FA" stroke-width="2.2" fill="none"/>
        <circle cx="21" cy="20" r="3.2" fill="#3B82F6"/>
        <text x="48" y="20" fill="#93C5FD" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="800" font-size="10" letter-spacing="1.4">QUANTIC</text>
        <text x="48" y="34" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="14.5" letter-spacing="-0.2">Ohmega-Ticer</text>
      </svg>
    `,
    description: 'Ohmega-Ticer provides embedded thin-film resistive copper foils that enable compact, high-performance digital and RF PCB designs for defence, aerospace, and advanced electronics.',
  },
  {
    id: 'tecdia',
    name: 'Tecdia',
    domain: 'Precision Capacitors & Thin-Film Components',
    category: 'components',
    accentColor: 'blue',
    glowColor: 'rgba(2, 132, 199, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 180 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 5)">
          <path d="M16 4l12 6.5-12 6.5-12-6.5L16 4z" fill="#38BDF8"/>
          <path d="M4 10.5l12 6.5v13L4 23.5v-13z" fill="#0284C7"/>
          <path d="M28 10.5l-12 6.5v13l12-6.5v-13z" fill="#0369A1"/>
        </g>
        <text x="44" y="28" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="20" letter-spacing="2">TECDIA</text>
      </svg>
    `,
    description: 'Tecdia manufactures single-layer capacitors, thin-film chip resistors, mmWave varactors, and ground blocks for demanding aerospace, defence, medical, and RF applications.',
  },
  {
    id: 'fortify',
    name: 'Fortify',
    domain: 'Dielectric 3D Printing for RF & Microwave Devices',
    category: 'materials',
    accentColor: 'blue',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 185 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="38" rx="9" fill="rgba(6,182,212,0.2)" stroke="#06B6D4" stroke-width="1.8"/>
        <path d="M13 11h14v5h-9v4h7v5h-7v7H13V11z" fill="#22D3EE"/>
        <circle cx="26" cy="27" r="2.8" fill="#38BDF8"/>
        <text x="48" y="27" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="18" letter-spacing="1.5">FORTIFY</text>
      </svg>
    `,
    description: 'Fortify enables advanced dielectric 3D printing materials for RF and microwave components, supporting complex geometries, rapid prototyping, and next-generation device development.',
  },
  {
    id: 'quantic-eulex',
    name: 'Quantic Eulex',
    domain: 'Advanced Ceramic Microwave Components',
    category: 'components',
    accentColor: 'blue',
    glowColor: 'rgba(59, 130, 246, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 200 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="38" rx="9" fill="rgba(37,99,235,0.2)" stroke="#3B82F6" stroke-width="1.8"/>
        <path d="M13 20h5m0-8v16m8-16v16m0-8h5" stroke="#60A5FA" stroke-width="2.5" stroke-linecap="round"/>
        <text x="48" y="20" fill="#93C5FD" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="800" font-size="10" letter-spacing="1.4">QUANTIC</text>
        <text x="48" y="34" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="15" letter-spacing="0.8">EULEX</text>
      </svg>
    `,
    description: 'Quantic Eulex develops ceramic capacitors engineered for high-frequency microwave, millimetre-wave, and 5G applications, supporting radar, SATCOM, and space systems.',
  },
  {
    id: 'tri-teq',
    name: 'Tri-TeQ',
    domain: 'Tunable Filters & RF Assemblies',
    category: 'components',
    accentColor: 'red',
    glowColor: 'rgba(244, 63, 94, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 190 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="38" rx="9" fill="rgba(244,63,94,0.18)" stroke="#F43F5E" stroke-width="1.8"/>
        <path d="M21 9l10 18H11l10-18z" stroke="#FB7185" stroke-width="2.4" fill="none"/>
        <circle cx="21" cy="20" r="2.8" fill="#F43F5E"/>
        <text x="48" y="23" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="17" letter-spacing="1">TRI-TEQ</text>
        <text x="49" y="34" fill="#FB7185" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="800" font-size="8" letter-spacing="2">MICROWAVE</text>
      </svg>
    `,
    description: 'Tri-TeQ is a leader in harmonic switch filter banks, high/low and tunable band-pass filters, and multifunction RF assemblies used in defence, SATCOM, and electronic warfare systems.',
  },
  {
    id: 'yttek',
    name: 'YTTEK',
    domain: 'Software-Defined Radio (SDR) Platforms',
    category: 'semiconductors',
    accentColor: 'blue',
    glowColor: 'rgba(37, 99, 235, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 190 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="38" rx="9" fill="rgba(37,99,235,0.2)" stroke="#2563EB" stroke-width="1.8"/>
        <path d="M12 12l9 8v10m0-10l9-8" stroke="#60A5FA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="48" y="24" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="18" letter-spacing="1.2">YTTEK</text>
        <text x="49" y="34" fill="#93C5FD" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="800" font-size="8" letter-spacing="1.5">SDR PLATFORMS</text>
      </svg>
    `,
    description: 'YTTEK builds flexible and reconfigurable software-defined radio platforms supporting research, defence, and advanced wireless communication applications.',
  },
  {
    id: 'thermosen',
    name: 'Thermosen Technologies',
    domain: 'Temperature Sensors for Hi-Rel Applications',
    category: 'sensors',
    accentColor: 'blue',
    glowColor: 'rgba(245, 158, 11, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 210 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="38" rx="9" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="1.8"/>
        <circle cx="21" cy="25" r="5.5" stroke="#FBBF24" stroke-width="2.2" fill="#F59E0B"/>
        <path d="M21 10v10" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"/>
        <text x="48" y="23" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="15" letter-spacing="0.8">THERMOSEN</text>
        <text x="49" y="34" fill="#FBBF24" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="800" font-size="8" letter-spacing="1.5">TECHNOLOGIES</text>
      </svg>
    `,
    description: 'Thermosen develops temperature sensing solutions focused on Hi-Rel, aerospace, and defence sectors, ensuring accurate thermal monitoring in extreme environments.',
  },
  {
    id: 'nee',
    name: 'NEE International (New Era Electronics)',
    domain: 'Application PCBs for Microwave & Satellite Communication',
    category: 'sensors',
    accentColor: 'red',
    glowColor: 'rgba(16, 185, 129, 0.45)',
    logoSvg: `
      <svg viewBox="0 0 210 42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="38" height="38" rx="9" fill="rgba(16,185,129,0.2)" stroke="#10B981" stroke-width="1.8"/>
        <path d="M12 29V13h5l5.5 8V13H28v16h-5l-5.5-8v8H12z" fill="#34D399"/>
        <text x="48" y="23" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="900" font-size="16" letter-spacing="1">NEE INTL</text>
        <text x="49" y="34" fill="#34D399" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-weight="800" font-size="7.5" letter-spacing="1.5">NEW ERA ELECTRONICS</text>
      </svg>
    `,
    description: 'NEE International is a leading fabricator of microwave and satellite communication PCBs, supporting high-frequency and space-grade electronic applications.',
  },
];

// Clean Card Component (Showcases only the authentic partner association without badges)
function renderPartnerCardMarkup(partner) {
  const isRed = partner.accentColor === 'red';
  const accentClass = isRed ? 'accent-red' : '';

  return `
    <div class="partner-stream-card ${accentClass}" data-partner-id="${partner.id}" data-category="${partner.category}" title="${partner.name}">
      <!-- Card Top: Centered Brand Logo Box -->
      <div class="partner-stream-card-top" style="justify-content:center;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,0.07);">
        <div class="partner-stream-card-logo-box" style="width:100%;display:flex;justify-content:center;">
          ${partner.logoSvg}
        </div>
      </div>

      <!-- Partner Name & Domain -->
      <h3 class="partner-stream-card-name">${partner.name}</h3>
      <div class="partner-stream-card-domain">${partner.domain}</div>

      <!-- Description of the Partner Association -->
      <p class="partner-stream-card-desc" style="margin-bottom:0;">${partner.description}</p>
    </div>
  `;
}

// Generate continuous stream track containing repetitions of the 3 cards
function renderStreamTrack(cards, direction) {
  // 4 repetitions of the 3 cards = 12 cards total in track for seamless 50% loop
  const repeatedCards = [...cards, ...cards, ...cards, ...cards]
    .map(p => renderPartnerCardMarkup(p))
    .join('');

  return `
    <div class="partner-stream-row" data-direction="${direction}">
      <div class="partner-stream-track ${direction === 'right' ? 'move-right' : 'move-left'}">
        ${repeatedCards}
      </div>
    </div>
  `;
}

export function renderPartnersPage() {
  // Exactly 3 cards per row:
  const row1Cards = PARTNERS.slice(0, 3);   // Rogers, Mini-Circuits, Qorvo
  const row2Cards = PARTNERS.slice(3, 6);   // RFuW, Quantic Ohmega, Tecdia
  const row3Cards = PARTNERS.slice(6, 9);   // Fortify, Quantic Eulex, Tri-TeQ
  const row4Cards = PARTNERS.slice(9, 12);  // YTTEK, Thermosen, NEE

  return `
    <div class="page-content partners-page" style="padding-top:calc(var(--header-height) + 24px);padding-bottom:var(--space-24);background:var(--bg-dark);min-height:100vh;">
      <div class="container">
        
        <!-- Breadcrumb -->
        <nav class="breadcrumb-dark">
          <a data-route="/">Home</a>
          <span class="sep"><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></span>
          <span style="color:var(--text-white);font-weight:600;">Partners</span>
        </nav>

        <!-- Unified Page Header -->
        <div class="page-header-unified">
          <div class="page-eyebrow-pill">
            <span class="hub-dot-pulse"></span>
            <span>GLOBAL TECHNOLOGY ECOSYSTEM</span>
          </div>
          <h1 class="page-title-unified">
            Authorized Technology Partners
          </h1>
          <p class="page-lead-unified">
            Icon Electromatic collaborates with a select group of globally recognised technology principals to deliver advanced RF, microwave, mmWave, semiconductor, and Hi-Rel solutions across India's mission-critical aerospace, defence, and space platforms.
          </p>

          <!-- Ecosystem Trust Highlights -->
          <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:24px;">
            <div style="display:flex;align-items:center;gap:8px;padding:8px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;font-size:0.85rem;color:var(--text-gray-200);">
              <i class="fa-solid fa-handshake-angle" style="color:var(--logo-blue-light);"></i>
              <span style="font-weight:600;">12+ Global Technology Partners</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;font-size:0.85rem;color:var(--text-gray-200);">
              <i class="fa-solid fa-shield-halved" style="color:var(--logo-red-light);"></i>
              <span style="font-weight:600;">Direct Factory Warranties &amp; CoCs</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;font-size:0.85rem;color:var(--text-gray-200);">
              <i class="fa-solid fa-certificate" style="color:#F59E0B;"></i>
              <span style="font-weight:600;">Space &amp; Mil-Spec Screening Support</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;padding:8px 16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;font-size:0.85rem;color:var(--text-gray-200);">
              <i class="fa-solid fa-location-dot" style="color:#10B981;"></i>
              <span style="font-weight:600;">India Distribution Hub (Bengaluru)</span>
            </div>
          </div>
        </div>

        <!-- Filter & Animation Navigation Bar -->
        <div class="partners-filter-bar" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:var(--space-8);padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,0.07);">
          <div style="display:flex;flex-wrap:wrap;gap:8px;" id="partner-filter-pills">
            <button class="filter-pill active" data-filter="all">
              <i class="fa-solid fa-film" style="margin-right:5px;font-size:0.75rem;"></i>
              All Partners Flow (12)
            </button>
            <button class="filter-pill" data-filter="components">RF &amp; Microwave</button>
            <button class="filter-pill" data-filter="semiconductors">Semiconductors &amp; SDR</button>
            <button class="filter-pill" data-filter="materials">Materials &amp; 3D Printing</button>
            <button class="filter-pill" data-filter="sensors">Sensors &amp; PCBs</button>
          </div>
          <div style="display:flex;align-items:center;gap:10px;font-size:0.85rem;color:var(--text-gray-400);">
            <span style="display:inline-flex;align-items:center;gap:6px;font-size:0.8rem;color:var(--text-gray-400);">
              <i class="fa-solid fa-hand-pointer" style="color:var(--logo-blue-light);"></i> Hover any card to pause flow
            </span>
          </div>
        </div>

      </div>

      <!-- Alternating Multi-Row Animated Showcase (Row 1 Right, Row 2 Left, Row 3 Right, Row 4 Left) -->
      <div id="partners-stream-view" class="partners-page-stream-container">
        <!-- Row 1: 3 cards moving towards the RIGHT -->
        ${renderStreamTrack(row1Cards, 'right')}

        <!-- Row 2: 3 cards moving towards the LEFT -->
        ${renderStreamTrack(row2Cards, 'left')}

        <!-- Row 3: 3 cards moving towards the RIGHT -->
        ${renderStreamTrack(row3Cards, 'right')}

        <!-- Row 4: 3 cards moving towards the LEFT -->
        ${renderStreamTrack(row4Cards, 'left')}
      </div>

      <!-- Filtered Grid View (Only shown when a specific category filter pill is clicked) -->
      <div class="container" id="partners-filtered-container" style="display:none;margin-top:var(--space-6);">
        <div id="partners-filtered-grid" class="partners-filtered-grid">
          ${PARTNERS.map(p => renderPartnerCardMarkup(p)).join('')}
        </div>
      </div>

      <div class="container">
        <!-- Partnership CTA Section -->
        <div class="partners-cta-section" style="margin-top:var(--space-16);background:linear-gradient(135deg, rgba(8,13,26,0.95), rgba(15,23,42,0.95));border:1px solid rgba(37,99,235,0.25);border-radius:20px;padding:48px 40px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:32px;position:relative;overflow:hidden;">
          <div class="partners-cta-orb" style="position:absolute;top:-80px;right:-80px;width:240px;height:240px;background:radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%);border-radius:50%;pointer-events:none;"></div>
          <div style="max-width:620px;position:relative;z-index:2;">
            <div class="partners-cta-eyebrow" style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;font-weight:700;color:var(--logo-red-light);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">
              <i class="fa-solid fa-handshake-angle"></i>
              Collaborate With Us
            </div>
            <h2 class="partners-cta-title" style="font-family:var(--font-display);font-size:clamp(1.6rem, 2.5vw, 2.2rem);font-weight:800;color:#FFFFFF;letter-spacing:-0.02em;margin-bottom:12px;line-height:1.2;">
              Looking to Distribute Your RF &amp; Hi-Rel Technologies in India?
            </h2>
            <p class="partners-cta-desc" style="font-size:0.95rem;color:var(--text-gray-300);line-height:1.65;margin:0;">
              Icon Electromatic provides world-class market entry, design-in engineering support, defense sector compliance, and nationwide distribution for global technology principals.
            </p>
          </div>
          <div class="partners-cta-buttons" style="display:flex;flex-wrap:wrap;gap:12px;position:relative;z-index:2;">
            <a data-route="/contact?subject=partnership" class="btn-relay btn-relay-primary" style="padding:12px 24px;">
              Become a Technology Partner &rarr;
            </a>
            <a data-route="/products" class="btn-relay btn-relay-secondary" style="padding:12px 24px;">
              Explore Products Catalog
            </a>
          </div>
        </div>
      </div>

    </div>
  `;
}

export function initPartnersPage() {
  const pills = document.querySelectorAll('#partner-filter-pills button');
  const streamView = document.getElementById('partners-stream-view');
  const filteredContainer = document.getElementById('partners-filtered-container');
  const filteredGrid = document.getElementById('partners-filtered-grid');

  if (pills.length) {
    pills.forEach(btn => {
      btn.addEventListener('click', () => {
        pills.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        if (filter === 'all') {
          if (streamView) streamView.style.display = 'flex';
          if (filteredContainer) filteredContainer.style.display = 'none';
        } else {
          if (streamView) streamView.style.display = 'none';
          if (filteredContainer) filteredContainer.style.display = 'block';

          if (filteredGrid) {
            const cards = filteredGrid.querySelectorAll('.partner-stream-card');
            cards.forEach(card => {
              const cardCat = card.getAttribute('data-category');
              const isMatch = cardCat === filter || 
                              (filter === 'sensors' && (cardCat === 'sensors' || cardCat === 'pcb')) ||
                              (filter === 'semiconductors' && cardCat === 'semiconductors');

              card.style.display = isMatch ? 'flex' : 'none';
            });
          }
        }
      });
    });
  }

  // Interactive click on any partner card to explore related OEM blogs or catalog
  document.querySelectorAll('.partner-stream-card').forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-partner-id');
      if (pid) {
        window.location.hash = `#/blogs?oem=${pid === 'rogers' ? 'rogers-corporation' : pid}`;
      }
    });
  });
}
