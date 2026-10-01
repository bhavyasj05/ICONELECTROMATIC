/**
 * Product Card Component — ICON ELECTROMATIC
 * Sleek Dark Card matching the Relay aesthetic with high-res photography and brief specs
 */

export function getProductDisplayImage(product) {
  const cat = (product.category || '').toLowerCase();
  const model = (product.model || '').toLowerCase();

  if (cat.includes('switch') || model.startsWith('sw') || model.startsWith('rc-') || model.startsWith('usb-')) {
    return '/images/rf-switch.jpg';
  }
  if (cat.includes('waveguide') || cat.includes('horn') || model.startsWith('wr-')) {
    return '/images/rf-waveguide.jpg';
  }
  if (cat.includes('attenuator') || cat.includes('termination') || cat.includes('adapter') || model.startsWith('vat-') || model.startsWith('bw-') || model.startsWith('an-')) {
    return '/images/rf-attenuator.jpg';
  }
  if (cat.includes('filter') || cat.includes('diplexer') || model.startsWith('vbf-') || model.startsWith('zbf-') || model.startsWith('hpf-')) {
    return '/images/rf-filter.webp';
  }
  if (cat.includes('mixer') || cat.includes('coupler') || cat.includes('splitter') || cat.includes('hybrid') || model.startsWith('sim-') || model.startsWith('zx05-') || model.startsWith('zdc-')) {
    return '/images/rf-mixer.jpg';
  }
  if (cat.includes('defense') || cat.includes('aerospace') || cat.includes('satcom')) {
    return '/images/defense-satcom.jpg';
  }
  return '/images/hero-amplifier.jpg';
}

export function renderProductCard(product, index = 0) {
  const displayImage = getProductDisplayImage(product);
  const freq = product.specs['Frequency Range'] || 'DC to 18 GHz';
  
  // Choose the single most informative technical specification
  const primarySpec = product.specs['Gain'] 
    ? `Gain: ${product.specs['Gain']}`
    : product.specs['Attenuation']
    ? `Atten: ${product.specs['Attenuation']}`
    : product.specs['Conversion Loss']
    ? `Loss: ${product.specs['Conversion Loss']}`
    : product.specs['Coupling']
    ? `Coupling: ${product.specs['Coupling']}`
    : product.specs['Isolation']
    ? `Iso: ${product.specs['Isolation']}`
    : product.specs['Bandwidth']
    ? `BW: ${product.specs['Bandwidth']}`
    : '50 Ω Matched';

  const packageType = product.specs['Package'] || product.specs['Connector'] || 'Coaxial / Surface';

  return `
    <div class="product-card-relay" data-route="/product/${product.id}">
      <div class="product-card-relay-img">
        <img src="${displayImage}" alt="${product.model}" loading="lazy" />
        <div class="relay-card-overlay"></div>
        ${product.isNew ? '<span class="relay-product-badge">New</span>' : ''}
        <span class="relay-stock-pill"><span class="pulse-dot"></span>In Stock</span>
      </div>
      <div class="product-card-relay-body">
        <div class="relay-card-header">
          <span class="relay-cat-label">${product.categoryName}</span>
          <h3 class="relay-product-title">${product.model}</h3>
        </div>
        
        <!-- Clean, Concise Spec Bar (No text paragraph clutter) -->
        <div class="relay-specs-brief">
          <div class="relay-spec-tag">
            <i class="fa-solid fa-wave-square" style="color:var(--logo-blue-light);font-size:0.7rem;margin-right:5px;"></i>
            <span>${freq}</span>
          </div>
          <div class="relay-spec-tag">
            <i class="fa-solid fa-microchip" style="color:var(--text-gray-400);font-size:0.7rem;margin-right:5px;"></i>
            <span>${primarySpec}</span>
          </div>
        </div>
        
        <div class="product-card-relay-footer">
          <span class="relay-package-label" title="${packageType}">
            <i class="fa-solid fa-plug" style="color:var(--text-gray-500);font-size:0.7rem;margin-right:4px;"></i>
            ${packageType}
          </span>
          <button class="relay-inquire-btn" data-route="/product/${product.id}">
            View Specs <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;margin-left:2px;"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

export function renderSkeletonCard() {
  return `
    <div class="product-card-relay skeleton-pulse">
      <div class="product-card-relay-img" style="background:#0F172A;aspect-ratio:16/10;"></div>
      <div class="product-card-relay-body" style="padding:16px;">
        <div style="height:10px;width:35%;background:#1E293B;border-radius:4px;margin-bottom:8px;"></div>
        <div style="height:18px;width:60%;background:#334155;border-radius:4px;margin-bottom:14px;"></div>
        <div style="display:flex;gap:6px;margin-bottom:16px;">
          <div style="height:22px;flex:1;background:#1E293B;border-radius:4px;"></div>
          <div style="height:22px;flex:1;background:#1E293B;border-radius:4px;"></div>
        </div>
        <div style="height:14px;width:40%;background:#1E293B;border-radius:4px;"></div>
      </div>
    </div>
  `;
}
