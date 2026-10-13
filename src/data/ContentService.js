import { CATALOG } from './catalogData.js';
import { OEM_BLOGS } from './blogData.js';

// ─── Version key: bump this to force-reset stale localStorage data ───────────
const CMS_VERSION = 'v4';

const INITIAL_CONTENT = {
  header: {
    logoUrl: '/icon-logo-transparent.png',
    ctaLabel: 'Request Quote',
    ctaLink: '/contact',
    navHome: 'Home',
    navAbout: 'About Us',
    navPartners: 'Partners',
    navProducts: 'Products',
    navServices: 'Services',
    navBlogs: 'Blogs',
    navContact: 'Contact',
  },
  footer: {
    tagline: 'Delivering advanced RF, Microwave, and High-Rel electronic components from DC to 86 GHz for aerospace, defense, SATCOM, and telecommunications.',
    copyrightText: '© 2026 ICON ELECTROMATIC PRIVATE LIMITED. All rights reserved.',
    // India Office
    indiaOfficeName: 'Icon Electromatic Pvt. Ltd. (India)',
    indiaAddress: '#303/2, 5th A Cross, HRBR Layout, III Block, Kalyan Nagar, Bengaluru – 560043',
    indiaPhone: '+91 80 2542 9452',
    indiaEmail: 'salesiepl@iconelectromatic.com',
    // Singapore Office
    singaporeOfficeName: 'Icon Electromatic Singapore Pte Ltd',
    singaporeAddress: '204D Compassvale Drive #08-409, Singapore 544204',
    singaporeEmail: 'IESing@iconelectromatic.com',
    // USA Office
    usaOfficeName: 'Icon Electromatic LLC (USA)',
    usaAddress: '15412 Meadow Vista Dr, Edmond, Oklahoma 73013, USA',
    usaPhone: '+1 405 593 5176',
    usaEmail: 'salesiellc@iconelectromatic.com',
    // Social
    linkedinUrl: 'https://www.linkedin.com/company/icon-electromatic/',
    youtubeUrl: '#',
  },
  home: {
    heroTitle: 'ICON ELECTROMATIC turns complex high-frequency requirements into mission-ready hardware.',
    heroSubtitle: 'Delivering precision RF, microwave, and electronic components for defense, aerospace, SATCOM, and telecommunications.',
    ctaExploreText: 'Explore Products',
    ctaQuoteText: 'Request a Quote',
    stat1Value: '4,000+',
    stat1Label: 'PRODUCTS AVAILABLE',
    stat2Value: '24+',
    stat2Label: 'COMPONENT LINES',
    stat3Value: '86 GHz',
    stat3Label: 'MAX FREQUENCY',
    stat4Value: '100%',
    stat4Label: 'RoHS & ISO 9001',
    coreCapabilitiesTitle: 'Core Capabilities',
    coreCapabilitiesSubtitle: 'Engineered for extreme performance.',
    coreCapabilitiesLead: 'From millimeter-wave defense radar to satellite ground infrastructure, we provide the verified hardware engineers depend on.',
    cap1Title: 'RF & Microwave Active',
    cap1Desc: 'High-linearity power amplifiers, ultra-low noise LNAs, active frequency mixers, and voltage-controlled oscillators.',
    cap2Title: 'Passive & Waveguides',
    cap2Desc: 'High-Q cavity bandpass filters, low-loss waveguide transitions, directional couplers, and coaxial terminations.',
    cap3Title: 'Defense & Aerospace',
    cap3Desc: 'Mil-Spec screening, extreme-temperature reliability, and radiation-tolerant solutions for tactical EW and SATCOM.',
    cap4Title: 'Test & Measurement',
    cap4Desc: 'Precision calibration adapters, armored low-loss RF test cables, and laboratory attenuator modules up to 86 GHz.',
  },
  about: {
    heroEyebrow: 'ABOUT ICON ELECTROMATIC',
    heroTitle: 'About Us',
    heroLead: 'Driven by decades of engineering expertise and global collaborations, Icon Electromatic Private Limited delivers advanced components and tailored solutions that transform design ambitions into reality.',
    badge1: 'Multi-Decade Pedigree',
    badge2: 'Defense & Telecom Solutions',
    badge3: 'Global OEM Representation',
    coreCapabilitiesTitle: 'Core Capabilities',
    coreCapabilitiesSubtitle: 'Fulfillment partners for your electronic ambitions',
    companyDesc: 'Icon Electromatic Private Limited (IEPL) was established to represent globally renowned technology companies. It was founded by professionals with decades of experience in the Indian defence and aerospace segment.',
  },
  services: {
    heroEyebrow: 'CAPABILITIES & SERVICES',
    heroTitle: 'Engineering Services & Global Representation',
    heroLead: 'We represent major RF, Microwave, mmWave, Semiconductors, Components, Subsystems and Power supplies manufacturers around the world, providing unparalleled support to electronic designers, manufacturers, engineers and researchers.',
    service1Title: 'Representation of Global Leaders',
    service1Subtitle: 'Global Distribution & Sourcing',
    service1Desc: 'We represent major RF and Microwave components, mmWave, Semiconductors, Components, Subsystems and Power supplies manufacturers around the world, providing unparalleled support to electronic designers, manufacturers, engineers and researchers.',
    service2Title: 'Indian Government Tender Portals',
    service2Subtitle: 'GeM & CPPP Registration & Support',
    service2Desc: 'We have registered companies on GeM and CPPP portals to enable easy procurement from Indian Government entities.',
    service3Title: 'Bespoke Solutions',
    service3Subtitle: 'Custom Engineering',
    service3Desc: 'We work with our OEM partners to provide customized and bespoke solutions to meet specific customer needs.',
    service4Title: 'Supply Chain Management',
    service4Subtitle: 'End-to-End Delivery',
    service4Desc: 'We manage the complete supply chain — from quotation to delivery — coordinating with global OEMs to ensure on-time, compliant component delivery.',
  },
  contact: {
    heroTitle: 'Contact & RFQ',
    heroLead: 'Reach out to our engineering team for technical consultation, Request for Quotations (RFQ), or partnership inquiries.',
    indiaOfficeName: 'Icon Electromatic Pvt. Ltd.',
    indiaAddress: '#303/2, 5th A Cross, HRBR Layout, III Block, Kalyan Nagar, Bengaluru – 560043',
    indiaPhone: '+91 80 2542 9452',
    indiaEmail: 'salesiepl@iconelectromatic.com',
    singaporeOfficeName: 'Icon Electromatic Singapore Pte Ltd',
    singaporeAddress: '204D Compassvale Drive #08-409, Singapore 544204',
    singaporeEmail: 'IESing@iconelectromatic.com',
    usaOfficeName: 'Icon Electromatic LLC (USA)',
    usaAddress: '15412 Meadow Vista Dr, Edmond, Oklahoma 73013, USA',
    usaPhone: '+1 405 593 5176',
    usaEmail: 'salesiellc@iconelectromatic.com',
  },
  seo: {
    siteTitle: 'Icon Electromatic – RF, Microwave & Electronic Components',
    metaDescription: 'Icon Electromatic is an authorized distributor of premium RF, Microwave, and electromechanical components for defense, aerospace, SATCOM, and telecommunications.',
    metaKeywords: 'RF components, Microwave components, mmWave, defense electronics, SATCOM, Rogers Corporation, Mini-Circuits, Qorvo',
    ogTitle: 'Icon Electromatic – Your Ultimate Source for Electromechanical Components',
    ogDescription: 'Premium authorized OEM distribution for global defense and aerospace electronics.',
    ogImage: '/icon-logo-transparent.png',
  },
};

export const ContentService = {
  getData(pageKey) {
    // Check version; if stale, wipe and re-seed
    const storedVersion = localStorage.getItem('cms_version');
    if (storedVersion !== CMS_VERSION) {
      // Clear all old cms_ keys
      Object.keys(localStorage).forEach(k => {
        if (k.startsWith('cms_')) localStorage.removeItem(k);
      });
      localStorage.setItem('cms_version', CMS_VERSION);
    }

    const local = localStorage.getItem(`cms_${pageKey}`);
    if (local) return JSON.parse(local);

    // Seed products & blogs from real data files
    if (pageKey === 'products') {
      const initial = CATALOG.map(oem => ({
        id: oem.id,
        name: oem.name,
        specialty: oem.specialty,
        tagline: oem.tagline,
        description: oem.description,
        website: oem.website,
        logoImg: oem.logoImg,
        category: oem.specialty,
      }));
      localStorage.setItem('cms_products', JSON.stringify(initial));
      return initial;
    }
    if (pageKey === 'partners') {
      // Seed from Partners.js data (hardcoded here since we can't import easily)
      const initial = [
        { id: 'rogers', name: 'Rogers Corporation', domain: 'High-Frequency Laminates & Prepregs', logoImg: '/images/oem-logos/Rogers_Logo_no_bg.png', description: 'A global leader in engineered materials, Rogers provides high-frequency laminates and prepregs widely used in radar, aerospace, defence, and high-speed communication systems.', website: 'https://www.rogerscorp.com' },
        { id: 'mini-circuits', name: 'Mini-Circuits', domain: 'RF & Microwave Components', logoImg: '/images/oem-logos/mini-circuits-seeklogo.png', description: 'Mini-Circuits offers an extensive portfolio of RF and microwave components supporting design, prototyping, and production across defence, SATCOM, and communications.', website: 'https://www.minicircuits.com' },
        { id: 'qorvo', name: 'Qorvo', domain: 'RF, mmWave & Active Antenna Solutions', logoImg: '/images/oem-logos/Qorvo_logo_wb.png', description: 'Qorvo develops advanced RF and mmWave technologies including RFICs, Power amplifiers, Switches, Converters, and Active antenna ASICs.', website: 'https://www.qorvo.com' },
        { id: 'tecdia', name: 'Tecdia', domain: 'Precision Capacitors & Thin-Film Components', logoImg: '/images/oem-logos/Tecdia_cropped.png', description: 'Tecdia manufactures single-layer capacitors, thin-film chip resistors, mmWave varactors, and ground blocks for aerospace and RF applications.', website: 'https://www.tecdia.com' },
        { id: 'tri-teq', name: 'Tri-TeQ', domain: 'Tunable Filters & RF Assemblies', logoImg: '/images/oem-logos/TriTeq_logo_wb.png', description: 'Tri-TeQ is a leader in harmonic switch filter banks, high/low and tunable band-pass filters, and multifunction RF assemblies.', website: 'https://www.tri-teq.com' },
        { id: 'rfuw', name: 'RFuW Engineering', domain: 'High-Performance RF Switches & Modules', logoImg: '/images/oem-logos/RFuW_Logo.png', description: 'RFuW Engineering specialises in rugged RF switches, limiters, and integrated microwave modules for aerospace and defence.', website: 'https://www.rfuw.com' },
        { id: 'yttek', name: 'YTTEK', domain: 'Software-Defined Radio (SDR) Platforms', logoImg: '/images/oem-logos/YTTEK_Logo_wb.png', description: 'YTTEK builds flexible and reconfigurable software-defined radio platforms supporting research, defence, and advanced wireless communication.', website: 'https://www.yttek.com' },
        { id: 'fortify', name: 'Fortify', domain: 'Dielectric 3D Printing for RF & Microwave', logoImg: '/images/oem-logos/Fortify_Logo_Black_Bg.png', description: 'Fortify enables advanced dielectric 3D printing materials for RF and microwave components.', website: 'https://www.fortify3d.com' },
      ];
      localStorage.setItem('cms_partners', JSON.stringify(initial));
      return initial;
    }
    if (pageKey === 'blogs') {
      localStorage.setItem('cms_blogs', JSON.stringify(OEM_BLOGS || []));
      return OEM_BLOGS || [];
    }

    const initial = INITIAL_CONTENT[pageKey] || {};
    localStorage.setItem(`cms_${pageKey}`, JSON.stringify(initial));
    return initial;
  },

  saveData(pageKey, data) {
    localStorage.setItem(`cms_${pageKey}`, JSON.stringify(data));
  },

  resetData(pageKey) {
    localStorage.removeItem(`cms_${pageKey}`);
  }
};
