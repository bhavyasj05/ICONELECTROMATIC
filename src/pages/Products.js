/**
 * Products Listing Page — ICON ELECTROMATIC
 * Clean, Uncluttered, Professional Layout (UI Only)
 */
import { CATEGORIES, getProducts, getProductsByCategory, searchProducts } from '../data/products.js';
import { renderProductCard, renderSkeletonCard } from '../components/ProductCard.js';

const ITEMS_PER_PAGE = 24;
let currentPage = 1;
let currentCategory = '';
let currentSearch = '';
let currentSort = 'name-asc';
let filteredProducts = [];

// Curated prominent categories for quick one-click pills
const PRIMARY_CATEGORY_PILLS = [
  { id: '', name: 'All Products' },
  { id: 'amplifiers', name: 'Amplifiers' },
  { id: 'filters', name: 'Filters' },
  { id: 'mixers', name: 'Mixers' },
  { id: 'attenuators', name: 'Attenuators' },
  { id: 'waveguides', name: 'Waveguides' },
  { id: 'switches', name: 'RF Switches' },
  { id: 'couplers', name: 'Couplers' },
  { id: 'oscillators', name: 'Oscillators' },
];

export function renderProductsPage() {
  const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
  currentCategory = params.get('category') || '';
  currentSearch = params.get('search') || '';
  currentPage = 1;

  const categoryName = currentCategory
    ? CATEGORIES.find(c => c.id === currentCategory)?.name || 'Products'
    : 'All Products';

  return `
    <div class="page-content" style="padding-top:calc(var(--header-height) + 24px);padding-bottom:var(--space-24);background:var(--bg-dark);min-height:100vh;">
      <div class="container">
        
        <!-- Minimal Breadcrumb -->
        <nav class="breadcrumb-dark">
          <a data-route="/">Home</a>
          <span class="sep"><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></span>
          <a data-route="/products" style="color:${currentCategory ? 'var(--text-gray-400)' : 'var(--text-white)'};">Products</a>
          ${currentCategory ? `
            <span class="sep"><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></span>
            <span style="color:var(--logo-red-light);font-weight:600;">${categoryName}</span>
          ` : ''}
        </nav>

        <!-- Unified Page Header -->
        <div class="page-header-unified" style="display:flex;align-items:flex-end;justify-content:space-between;gap:var(--space-6);flex-wrap:wrap;max-width:100%;">
          <div style="max-width:820px;">
            <div class="page-eyebrow-pill">
              <span class="hub-dot-pulse"></span>
              <span>PRECISION COMPONENT CATALOG</span>
            </div>
            <h1 class="page-title-unified">${categoryName}</h1>
            <p class="page-lead-unified">
              Over 4,000+ precision RF, microwave, and millimeter-wave catalog components from DC to 86 GHz.
            </p>
          </div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:8px 14px;font-size:0.8rem;color:var(--text-gray-300);display:flex;align-items:center;gap:6px;">
              <i class="fa-solid fa-certificate" style="color:var(--logo-blue-light);"></i> ISO 9001:2015
            </div>
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:8px 14px;font-size:0.8rem;color:var(--text-gray-300);display:flex;align-items:center;gap:6px;">
              <i class="fa-solid fa-bolt" style="color:var(--logo-red-light);"></i> Rapid RFQ Quote
            </div>
          </div>
        </div>

        <!-- Sleek Unified Control Bar -->
        <div style="background:#090E1A;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:16px 20px;margin-bottom:var(--space-6);box-shadow:0 12px 32px -10px rgba(0,0,0,0.5);">
          
          <!-- Top Row: Search & Filters Dropdown -->
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:14px;">
            
            <!-- Sleek Search Input -->
            <div style="position:relative;flex:1;min-width:260px;">
              <i class="fa-solid fa-magnifying-glass" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#64748B;font-size:0.85rem;"></i>
              <input type="text" id="product-search-input" value="${currentSearch}" 
                     placeholder="Search model (e.g. ZX60, VAT), frequency, or keyword..." 
                     style="width:100%;padding:9px 36px 9px 38px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;color:#FFFFFF;font-size:0.875rem;outline:none;transition:border-color 0.2s;" />
              <button id="clear-search-btn" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:#64748B;cursor:pointer;display:${currentSearch ? 'block' : 'none'};padding:2px;" title="Clear search">
                <i class="fa-solid fa-circle-xmark"></i>
              </button>
            </div>

            <!-- Full Categories Custom Dropdown -->
            <div class="relay-custom-dropdown" id="category-dropdown-wrapper" style="min-width:220px;">
              <div class="relay-dropdown-trigger" id="category-dropdown-trigger" role="button" aria-haspopup="listbox" aria-expanded="false">
                <div style="display:flex;align-items:center;gap:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                  <i class="fa-solid fa-layer-group" style="color:var(--logo-blue-light);font-size:0.85rem;flex-shrink:0;"></i>
                  <span id="category-dropdown-label" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                    ${currentCategory ? (CATEGORIES.find(c => c.id === currentCategory)?.name || 'All 24 Categories') : 'All 24 Categories'}
                  </span>
                </div>
                <i class="fa-solid fa-chevron-down dropdown-chevron" style="font-size:0.75rem;color:#94A3B8;flex-shrink:0;"></i>
              </div>
              <div class="relay-dropdown-menu" id="category-dropdown-menu" role="listbox">
                <div class="relay-dropdown-item ${!currentCategory ? 'selected' : ''}" data-value="">
                  <span>All 24 Categories</span>
                  ${!currentCategory ? '<i class="fa-solid fa-check" style="color:var(--logo-red);font-size:0.75rem;"></i>' : ''}
                </div>
                ${CATEGORIES.map(cat => `
                  <div class="relay-dropdown-item ${currentCategory === cat.id ? 'selected' : ''}" data-value="${cat.id}">
                    <span>${cat.name}</span>
                    ${currentCategory === cat.id ? '<i class="fa-solid fa-check" style="color:var(--logo-red);font-size:0.75rem;"></i>' : ''}
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Sort Selector Custom Dropdown -->
            <div class="relay-custom-dropdown" id="sort-dropdown-wrapper" style="min-width:185px;">
              <div class="relay-dropdown-trigger" id="sort-dropdown-trigger" role="button" aria-haspopup="listbox" aria-expanded="false">
                <div style="display:flex;align-items:center;gap:8px;">
                  <i class="fa-solid fa-arrow-down-short-wide" style="color:var(--logo-red-light);font-size:0.85rem;flex-shrink:0;"></i>
                  <span id="sort-dropdown-label">Model (A–Z)</span>
                </div>
                <i class="fa-solid fa-chevron-down dropdown-chevron" style="font-size:0.75rem;color:#94A3B8;flex-shrink:0;"></i>
              </div>
              <div class="relay-dropdown-menu" id="sort-dropdown-menu" style="right:0;left:auto;" role="listbox">
                <div class="relay-dropdown-item ${currentSort === 'name-asc' ? 'selected' : ''}" data-value="name-asc">
                  <span>Model (A–Z)</span>
                  ${currentSort === 'name-asc' ? '<i class="fa-solid fa-check" style="color:var(--logo-red);font-size:0.75rem;"></i>' : ''}
                </div>
                <div class="relay-dropdown-item ${currentSort === 'name-desc' ? 'selected' : ''}" data-value="name-desc">
                  <span>Model (Z–A)</span>
                  ${currentSort === 'name-desc' ? '<i class="fa-solid fa-check" style="color:var(--logo-red);font-size:0.75rem;"></i>' : ''}
                </div>
                <div class="relay-dropdown-item ${currentSort === 'category' ? 'selected' : ''}" data-value="category">
                  <span>By Category</span>
                  ${currentSort === 'category' ? '<i class="fa-solid fa-check" style="color:var(--logo-red);font-size:0.75rem;"></i>' : ''}
                </div>
                <div class="relay-dropdown-item ${currentSort === 'newest' ? 'selected' : ''}" data-value="newest">
                  <span>New Releases</span>
                  ${currentSort === 'newest' ? '<i class="fa-solid fa-check" style="color:var(--logo-red);font-size:0.75rem;"></i>' : ''}
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Category Pills Row -->
          <div class="products-nav-bar" id="products-category-pills" style="margin-bottom:0;padding-top:4px;border-top:1px solid rgba(255,255,255,0.05);">
            ${PRIMARY_CATEGORY_PILLS.map(cat => `
              <button class="filter-chip-dark ${currentCategory === cat.id ? 'active' : ''}" data-cat-id="${cat.id}">
                ${cat.name}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Clean Status & Active Filter Strip -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-6);font-size:0.85rem;color:var(--text-gray-400);flex-wrap:wrap;gap:8px;">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <div id="results-count" style="font-weight:600;color:var(--text-white);">
              Loading catalog...
            </div>
            
            <!-- Active filter chips -->
            <div id="active-filter-chips" style="display:flex;gap:6px;align-items:center;"></div>
          </div>

          <div style="display:flex;align-items:center;gap:6px;font-size:0.78rem;color:var(--text-gray-400);">
            <span class="pulse-dot"></span>
            <span>All models available for prototype and volume order</span>
          </div>
        </div>

        <!-- Spacious, Uncluttered Products Grid -->
        <div class="products-grid-dark" id="products-grid">
          ${Array(8).fill(renderSkeletonCard()).join('')}
        </div>

        <!-- Clean Pagination -->
        <div id="pagination" style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:var(--space-12);"></div>
      </div>
    </div>
  `;
}

export function initProductsPage() {
  setTimeout(() => {
    applyFiltersAndRender();
  }, 50);

  // Search input with debounce
  const searchInput = document.getElementById('product-search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', () => {
      if (clearBtn) clearBtn.style.display = searchInput.value ? 'block' : 'none';
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        currentSearch = searchInput.value.trim();
        currentPage = 1;
        applyFiltersAndRender();
      }, 200);
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      clearBtn.style.display = 'none';
      currentPage = 1;
      applyFiltersAndRender();
    });
  }

  // Helper to initialize custom Relay dropdowns
  function setupRelayDropdown(wrapperId, triggerId, menuId, labelId, onSelect) {
    const wrapper = document.getElementById(wrapperId);
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);
    const label = document.getElementById(labelId);

    if (!wrapper || !trigger || !menu) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = wrapper.classList.contains('open');
      // Close any other open dropdowns
      document.querySelectorAll('.relay-custom-dropdown').forEach(d => {
        d.classList.remove('open');
        d.querySelector('.relay-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        wrapper.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    menu.querySelectorAll('.relay-dropdown-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const val = item.getAttribute('data-value');
        const text = item.querySelector('span')?.textContent || val;

        menu.querySelectorAll('.relay-dropdown-item').forEach(i => {
          i.classList.remove('selected');
          const check = i.querySelector('.fa-check');
          if (check) check.remove();
        });

        item.classList.add('selected');
        item.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-check" style="color:var(--logo-red);font-size:0.75rem;"></i>');

        if (label) label.textContent = text;
        wrapper.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');

        onSelect(val);
      });
    });
  }

  // Initialize Category custom dropdown
  setupRelayDropdown('category-dropdown-wrapper', 'category-dropdown-trigger', 'category-dropdown-menu', 'category-dropdown-label', (catId) => {
    currentCategory = catId;
    currentPage = 1;

    // Sync pills
    document.querySelectorAll('#products-category-pills button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cat-id') === currentCategory);
    });

    applyFiltersAndRender();
  });

  // Initialize Sort custom dropdown
  setupRelayDropdown('sort-dropdown-wrapper', 'sort-dropdown-trigger', 'sort-dropdown-menu', 'sort-dropdown-label', (sortVal) => {
    currentSort = sortVal;
    currentPage = 1;
    applyFiltersAndRender();
  });

  // Quick category pills
  document.querySelectorAll('#products-category-pills button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#products-category-pills button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const catId = btn.getAttribute('data-cat-id');
      currentCategory = catId;
      currentPage = 1;

      // Sync custom category dropdown
      const catLabel = document.getElementById('category-dropdown-label');
      const catMenu = document.getElementById('category-dropdown-menu');
      if (catMenu) {
        catMenu.querySelectorAll('.relay-dropdown-item').forEach(item => {
          const isMatch = item.getAttribute('data-value') === currentCategory;
          item.classList.toggle('selected', isMatch);
          const check = item.querySelector('.fa-check');
          if (check) check.remove();
          if (isMatch) {
            item.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-check" style="color:var(--logo-red);font-size:0.75rem;"></i>');
            if (catLabel) catLabel.textContent = item.querySelector('span')?.textContent || 'All 24 Categories';
          }
        });
      }

      applyFiltersAndRender();
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.relay-custom-dropdown')) {
      document.querySelectorAll('.relay-custom-dropdown').forEach(d => {
        d.classList.remove('open');
        d.querySelector('.relay-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close dropdowns on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.relay-custom-dropdown').forEach(d => {
        d.classList.remove('open');
        d.querySelector('.relay-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

function applyFiltersAndRender() {
  let products;
  if (currentSearch) {
    products = searchProducts(currentSearch);
    if (currentCategory) {
      products = products.filter(p => p.category === currentCategory);
    }
  } else if (currentCategory) {
    products = getProductsByCategory(currentCategory);
  } else {
    products = getProducts();
  }

  // Apply sorting
  products = sortProducts(products, currentSort);
  filteredProducts = products;

  renderProductsGrid();
  renderPagination();
  updateResultsCountAndFilterChips();
}

function sortProducts(products, sort) {
  const sorted = [...products];
  switch (sort) {
    case 'name-asc':
      sorted.sort((a, b) => a.model.localeCompare(b.model));
      break;
    case 'name-desc':
      sorted.sort((a, b) => b.model.localeCompare(a.model));
      break;
    case 'category':
      sorted.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
      break;
    case 'newest':
      sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
  }
  return sorted;
}

function renderProductsGrid() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageProducts = filteredProducts.slice(start, end);

  if (pageProducts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding:var(--space-16) var(--space-6); background:#080D1A; border-radius:16px; border:1px solid rgba(255,255,255,0.08);">
        <i class="fa-solid fa-magnifying-glass" style="font-size:2.2rem; color:var(--text-gray-500); margin-bottom:var(--space-4); display:block;"></i>
        <h3 style="color:var(--text-white); font-size:1.25rem; font-weight:700; margin-bottom:var(--space-2);">No matching components found</h3>
        <p style="color:var(--text-gray-400); font-size:0.9rem; margin-bottom:var(--space-5);">Try searching by partial model number or resetting your category filter.</p>
        <button class="btn-relay-blue" id="reset-filter-btn" style="padding:8px 20px; font-size:0.85rem;">
          Reset Catalog Filters
        </button>
      </div>
    `;

    document.getElementById('reset-filter-btn')?.addEventListener('click', resetAllFilters);
    return;
  }

  grid.innerHTML = pageProducts.map((product, i) => renderProductCard(product, i)).join('');
}

function resetAllFilters() {
  currentSearch = '';
  currentCategory = '';
  const searchInput = document.getElementById('product-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const catSelect = document.getElementById('all-categories-select');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  if (catSelect) catSelect.value = '';
  document.querySelectorAll('#products-category-pills button').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-cat-id') === '');
  });
  currentPage = 1;
  applyFiltersAndRender();
}

function updateResultsCountAndFilterChips() {
  const el = document.getElementById('results-count');
  const chipsContainer = document.getElementById('active-filter-chips');
  if (!el) return;

  const total = filteredProducts.length;
  if (total === 0) {
    el.textContent = '0 components match filter';
  } else {
    const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const end = Math.min(currentPage * ITEMS_PER_PAGE, total);
    el.innerHTML = `Showing <span style="color:var(--text-white);font-weight:700;">${start}–${end}</span> of <span style="color:var(--text-white);font-weight:700;">${total}</span> components`;
  }

  if (chipsContainer) {
    let chips = [];
    if (currentCategory) {
      const catObj = CATEGORIES.find(c => c.id === currentCategory);
      chips.push(`
        <button id="chip-remove-cat" style="background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.35);color:#93C5FD;border-radius:20px;padding:3px 10px;font-size:0.72rem;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
          <span>Category: ${catObj ? catObj.name : currentCategory}</span>
          <i class="fa-solid fa-xmark"></i>
        </button>
      `);
    }
    if (currentSearch) {
      chips.push(`
        <button id="chip-remove-search" style="background:rgba(225,29,72,0.15);border:1px solid rgba(225,29,72,0.35);color:#FDA4AF;border-radius:20px;padding:3px 10px;font-size:0.72rem;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
          <span>Search: "${currentSearch}"</span>
          <i class="fa-solid fa-xmark"></i>
        </button>
      `);
    }

    if (chips.length > 0) {
      chips.push(`
        <button id="chip-clear-all" style="background:none;border:none;color:var(--text-gray-400);font-size:0.72rem;cursor:pointer;text-decoration:underline;padding:2px 4px;">
          Clear all
        </button>
      `);
    }

    chipsContainer.innerHTML = chips.join('');

    document.getElementById('chip-remove-cat')?.addEventListener('click', () => {
      currentCategory = '';
      const catSelect = document.getElementById('all-categories-select');
      if (catSelect) catSelect.value = '';
      document.querySelectorAll('#products-category-pills button').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-cat-id') === '');
      });
      currentPage = 1;
      applyFiltersAndRender();
    });

    document.getElementById('chip-remove-search')?.addEventListener('click', () => {
      currentSearch = '';
      const searchInput = document.getElementById('product-search-input');
      const clearBtn = document.getElementById('clear-search-btn');
      if (searchInput) searchInput.value = '';
      if (clearBtn) clearBtn.style.display = 'none';
      currentPage = 1;
      applyFiltersAndRender();
    });

    document.getElementById('chip-clear-all')?.addEventListener('click', resetAllFilters);
  }
}

function renderPagination() {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  let html = '';

  // Previous button
  if (currentPage > 1) {
    html += `<button class="filter-chip-dark" id="prev-page"><i class="fa-solid fa-chevron-left"></i> Previous</button>`;
  }

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      html += `
        <button class="filter-chip-dark ${i === currentPage ? 'active' : ''}" data-page="${i}">
          ${i}
        </button>
      `;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      html += `<span style="color:var(--text-gray-500);padding:0 4px;">…</span>`;
    }
  }

  // Next button
  if (currentPage < totalPages) {
    html += `<button class="filter-chip-dark" id="next-page">Next <i class="fa-solid fa-chevron-right"></i></button>`;
  }

  pagination.innerHTML = html;

  // Pagination event listeners
  pagination.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPage = parseInt(btn.getAttribute('data-page'));
      renderProductsGrid();
      renderPagination();
      updateResultsCountAndFilterChips();
      window.scrollTo({ top: 150, behavior: 'smooth' });
    });
  });

  document.getElementById('prev-page')?.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderProductsGrid();
      renderPagination();
      updateResultsCountAndFilterChips();
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  });

  document.getElementById('next-page')?.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderProductsGrid();
      renderPagination();
      updateResultsCountAndFilterChips();
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  });
}
