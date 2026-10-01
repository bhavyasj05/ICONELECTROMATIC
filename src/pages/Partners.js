/**
 * Partners Page — ICON ELECTROMATIC
 * High-End Dark Relay-styled layout matching the authentic Icon Electromatic partners
 * Source: https://iconelectromatic2.lbimedia.in/partners
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
    offerings: ['RO4000® Series', 'RT/duroid®', 'High-Dk Ceramics', 'Sub-THz Bondplies'],
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
    offerings: ['Amplifiers', 'Cavity Filters', 'Mixers', 'Attenuators', 'Couplers'],
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
    offerings: ['GaN Power Amplifiers', 'Beamforming ASICs', 'Front-End Modules', 'RF Converters'],
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
    offerings: ['Coaxial PIN Switches', 'Receiver Protectors', 'High-Power Limiters', 'Custom Modules'],
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
    offerings: ['OhmegaPly® Resistor Foils', 'TCR® Thin-Film', 'Embedded Passives', 'High-Density Interconnect'],
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
    offerings: ['Single-Layer Capacitors', 'Thin-Film Chip Resistors', 'mmWave Varactors', 'Ground Blocks'],
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
    offerings: ['DLP 3D-Printed RF Lenses', 'GRIN Antennas', 'Low-Loss Radomes', 'Dielectric Resonators'],
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
    offerings: ['Broadband Ceramic Capacitors', 'High-Q Dielectric Chips', 'Mil-PRF Rated Caps', 'Space-Grade Passives'],
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
    offerings: ['Switch Filter Banks', 'Tunable Bandpass Filters', 'Multifunction RF Assemblies', 'EW Subsystems'],
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
    offerings: ['Wideband SDR Transceivers', 'FPGA Signal Processing', 'Reconfigurable Radios', 'Wireless Test Beds'],
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
    offerings: ['Hi-Rel NTC/PTC Thermistors', 'Cryogenic Thermal Probes', 'Extreme-Temp Sensors', 'Defense Sensors'],
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
    offerings: ['Space-Grade PTFE PCBs', 'Rigid-Flex Interconnects', 'mmWave High-Frequency Boards', 'Multi-Layer Backplanes'],
  },
];

export function renderPartnersPage() {
  return `
    <div class="page-content" style="padding-top:calc(var(--header-height) + 24px);padding-bottom:var(--space-24);background:var(--bg-dark);min-height:100vh;">
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
            Icon Electromatic collaborates with a select group of globally recognised technology partners to deliver advanced RF, microwave, mmWave, semiconductor, and Hi-Rel solutions. Together, these partnerships enable reliable access to cutting-edge components, materials, and systems for mission-critical aerospace, defence, space, SATCOM, and next-generation communication applications.
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

        <!-- Filter Navigation Pills -->
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:var(--space-8);padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,0.07);">
          <div style="display:flex;flex-wrap:wrap;gap:8px;" id="partner-filter-pills">
            <button class="filter-pill active" data-filter="all">All Partners (12)</button>
            <button class="filter-pill" data-filter="components">RF & Microwave</button>
            <button class="filter-pill" data-filter="semiconductors">Semiconductors & SDR</button>
            <button class="filter-pill" data-filter="materials">Materials & 3D Printing</button>
            <button class="filter-pill" data-filter="sensors">Sensors & PCBs</button>
          </div>
          <div style="font-size:0.85rem;color:var(--text-gray-400);">
            Showing <strong id="partner-count" style="color:#FFFFFF;">12</strong> Technology Partners
          </div>
        </div>

        <!-- Partners Cards Grid -->
        <div id="partners-grid" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(360px, 1fr));gap:24px;">
          ${PARTNERS.map(partner => renderPartnerCard(partner)).join('')}
        </div>

        <!-- Partnership CTA Section -->
        <div style="margin-top:var(--space-16);background:linear-gradient(135deg, rgba(8,13,26,0.95), rgba(15,23,42,0.95));border:1px solid rgba(37,99,235,0.25);border-radius:20px;padding:48px 40px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:32px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:-80px;right:-80px;width:240px;height:240px;background:radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%);border-radius:50%;pointer-events:none;"></div>
          <div style="max-width:620px;position:relative;z-index:2;">
            <div style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;font-weight:700;color:var(--logo-red-light);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">
              <i class="fa-solid fa-handshake-angle"></i>
              Collaborate With Us
            </div>
            <h2 style="font-family:var(--font-display);font-size:clamp(1.6rem, 2.5vw, 2.2rem);font-weight:800;color:#FFFFFF;letter-spacing:-0.02em;margin-bottom:12px;line-height:1.2;">
              Looking to Distribute Your RF & Hi-Rel Technologies in India?
            </h2>
            <p style="font-size:0.95rem;color:var(--text-gray-300);line-height:1.65;margin:0;">
              Icon Electromatic provides world-class market entry, design-in engineering support, defense sector compliance, and nationwide distribution for global technology principals.
            </p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:12px;position:relative;z-index:2;">
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

function renderPartnerCard(partner) {
  const isRed = partner.accentColor === 'red';
  const badgeBg = isRed ? 'rgba(225,29,72,0.12)' : 'rgba(37,99,235,0.12)';
  const badgeBorder = isRed ? 'rgba(225,29,72,0.3)' : 'rgba(37,99,235,0.3)';
  const badgeColor = isRed ? 'var(--logo-red-light)' : 'var(--logo-blue-light)';
  const accentClass = isRed ? 'accent-red' : '';

  return `
    <div class="product-card-relay partner-card-item ${accentClass}" data-category="${partner.category}" style="display:flex;flex-direction:column;padding:26px;border-radius:18px;">
      <!-- Card Top Header: Prominent Company Brand Logo Showcase & Category Tag -->
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,0.07);">
        <!-- Authentic Corporate Company Logo Hero with Ambient Glow and Shimmer -->
        <div class="partner-logo-box" title="${partner.name}">
          <div class="partner-logo-glow" style="background:${partner.glowColor};"></div>
          ${partner.logoSvg}
        </div>
        <span style="display:inline-block;font-size:0.7rem;font-weight:700;color:${badgeColor};background:${badgeBg};border:1px solid ${badgeBorder};padding:5px 12px;border-radius:20px;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;flex-shrink:0;">
          ${partner.category.toUpperCase()}
        </span>
      </div>

      <!-- Partner Name & Domain -->
      <h3 style="font-family:var(--font-display);font-size:1.35rem;font-weight:800;color:#FFFFFF;letter-spacing:-0.02em;margin-bottom:4px;line-height:1.25;">
        ${partner.name}
      </h3>
      <div style="font-size:0.8rem;color:var(--text-gray-400);font-weight:600;margin-bottom:14px;">
        ${partner.domain}
      </div>

      <!-- Description -->
      <p style="font-size:0.875rem;color:var(--text-gray-300);line-height:1.65;margin-bottom:18px;flex:1;">
        ${partner.description}
      </p>

      <!-- Key Technology Offerings -->
      <div style="margin-bottom:18px;">
        <div style="font-size:0.7rem;font-weight:700;color:var(--text-gray-400);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">
          Key Specializations:
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${partner.offerings.map(item => `
            <span style="font-size:0.72rem;color:#CBD5E1;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);padding:3px 8px;border-radius:4px;">
              ${item}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Card Action Footer -->
      <div style="display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid rgba(255,255,255,0.06);margin-top:auto;">
        <span style="font-size:0.75rem;color:#64748B;">
          <i class="fa-solid fa-circle-check" style="color:var(--success);margin-right:4px;"></i>Direct Supply
        </span>
        <button class="relay-inquire-btn" data-route="/contact?partner=${encodeURIComponent(partner.name)}">
          Inquire Solutions &rarr;
        </button>
      </div>
    </div>
  `;
}

export function initPartnersPage() {
  const pills = document.querySelectorAll('#partner-filter-pills button');
  const countEl = document.getElementById('partner-count');

  if (pills.length) {
    pills.forEach(btn => {
      btn.addEventListener('click', () => {
        pills.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const cards = document.querySelectorAll('.partner-card-item');
        let visibleCount = 0;

        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          const isMatch = filter === 'all' || 
                          cardCat === filter || 
                          (filter === 'sensors' && (cardCat === 'sensors' || cardCat === 'pcb')) ||
                          (filter === 'semiconductors' && cardCat === 'semiconductors');

          if (isMatch) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (countEl) {
          countEl.textContent = visibleCount;
        }
      });
    });
  }
}
