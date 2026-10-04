/**
 * Home Page — ICON ELECTROMATIC
 * Sleek Cinematic Dark Aesthetic directly modeled after the Relay Framer reference
 */
import { getPopularProducts } from '../data/catalogData.js';
import { renderProductCard } from '../components/ProductCard.js';

export function renderHomePage() {
  const popular = getPopularProducts();

  return `
    <!-- RELAY CINEMATIC HERO -->
    <section class="hero-relay">
      <!-- Background Video with dark vignette -->
      <div class="hero-relay-bg">
        <video 
          id="hero-bg-video"
          autoplay 
          loop 
          muted 
          playsinline 
          preload="auto"
          poster="/images/hero-amplifier.jpg">
          <source src="/jbhd-tjzps.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <!-- Fallback image -->
          <img src="/images/hero-amplifier.jpg" alt="RF Microwave Hardware" />
        </video>
        <div class="hero-relay-vignette"></div>
      </div>

      <div class="container" style="position:relative;z-index:3;width:100%;">
        <div class="hero-relay-content">
          <div class="page-eyebrow-pill" style="margin-bottom: var(--space-6);">
            <span class="hub-dot-pulse"></span>
            <span>ICON ELECTROMATIC</span>
            <span style="color:var(--logo-red);margin:0 4px;font-weight:700;">/</span>
            <span>RF &amp; MICROWAVE OPERATIONS</span>
          </div>

          <h1 class="hero-title-giant">
            Precision that moves <br/>
            mission-critical systems <span class="accent-red">forward.</span>
          </h1>

          <p class="hero-description-clean">
            ICON ELECTROMATIC turns complex high-frequency requirements into mission-ready hardware. 
            Delivering 4,000+ precision RF, microwave, and electronic components from DC to 86 GHz for 
            defense, aerospace, SATCOM, and telecommunications.
          </p>

          <div class="hero-actions-row">
            <a class="btn-relay-blue" data-route="/products">
              Explore Products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a class="btn-relay-dark" data-route="/contact">
              Request a Quote
            </a>
          </div>

          <!-- Relay-style Stats Strip -->
          <div class="hero-stats-strip">
            <div class="stat-block">
              <h4>4,000<span>+</span></h4>
              <p>Products Available</p>
            </div>
            <div class="stat-block">
              <h4>24<span>+</span></h4>
              <p>Component Lines</p>
            </div>
            <div class="stat-block">
              <h4>86<span> GHz</span></h4>
              <p>Max Frequency</p>
            </div>
            <div class="stat-block">
              <h4>100<span>%</span></h4>
              <p>RoHS & ISO 9001</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE CAPABILITIES (Relay Dark Minimal Cards) -->
    <section class="section-dark">
      <div class="container">
        <div class="section-head-minimal">
          <span class="section-tag-mono">CORE CAPABILITIES</span>
          <h2 class="section-h2">Engineered for extreme performance.</h2>
          <p class="section-lead">
            From millimeter-wave defense radar to satellite ground infrastructure, we provide the verified hardware engineers depend on.
          </p>
        </div>

        <div class="capabilities-grid-dark">
          <div class="capability-card-dark">
            <div class="capability-icon-box"><i class="fa-solid fa-wave-square"></i></div>
            <h3>RF & Microwave Active</h3>
            <p>High-linearity power amplifiers, ultra-low noise LNAs, active frequency mixers, and voltage-controlled oscillators.</p>
            <a data-route="/products?category=amplifiers">Explore Amplifiers &rarr;</a>
          </div>

          <div class="capability-card-dark">
            <div class="capability-icon-box"><i class="fa-solid fa-filter"></i></div>
            <h3>Passive & Waveguides</h3>
            <p>High-Q cavity bandpass filters, low-loss waveguide transitions, directional couplers, and coaxial terminations.</p>
            <a data-route="/products?category=filters">Explore Filters &rarr;</a>
          </div>

          <div class="capability-card-dark">
            <div class="capability-icon-box"><i class="fa-solid fa-shield-halved"></i></div>
            <h3>Defense & Aerospace</h3>
            <p>Mil-Spec screening, extreme-temperature reliability, and radiation-tolerant solutions for tactical EW and SATCOM.</p>
            <a data-route="/about">Learn More &rarr;</a>
          </div>

          <div class="capability-card-dark">
            <div class="capability-icon-box"><i class="fa-solid fa-flask-vial"></i></div>
            <h3>Test & Measurement</h3>
            <p>Precision calibration adapters, armored low-loss RF test cables, and laboratory attenuator modules up to 86 GHz.</p>
            <a data-route="/products?category=test-solutions">Explore Solutions &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- POPULAR PRODUCTS SECTION -->
    <section class="products-dark-section">
      <div class="container">
        <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:var(--space-8);flex-wrap:wrap;gap:var(--space-4);">
          <div>
            <div class="page-eyebrow-pill" style="margin-bottom:8px;">
              <span class="hub-dot-pulse"></span>
              <span>POPULAR HARDWARE &amp; MATERIALS</span>
            </div>
            <h2 class="section-h2">Popular Products &amp; Components</h2>
            <p class="section-lead">
              High-frequency laminates, precision GaN semiconductors, 3D metamaterial optics, and microwave modules from our global OEM partners.
            </p>
          </div>
          <div>
            <a class="btn-relay-dark" data-route="/products">
              Explore Full Catalog (15 OEMs) &rarr;
            </a>
          </div>
        </div>

        <!-- Filter Chips -->
        <div class="products-nav-bar" id="home-category-tabs" style="margin-bottom:var(--space-8);">
          <button class="filter-chip-dark active" data-filter="all">All Popular (${popular.length})</button>
          <button class="filter-chip-dark" data-filter="rogers">Rogers Laminates</button>
          <button class="filter-chip-dark" data-filter="qorvo">Qorvo GaN &amp; ICs</button>
          <button class="filter-chip-dark" data-filter="ohmega">Ohmega-Ticer</button>
          <button class="filter-chip-dark" data-filter="fortify">Fortify 3D Optics</button>
          <button class="filter-chip-dark" data-filter="components">Mini-Circuits &amp; RFuW</button>
          <button class="filter-chip-dark" data-filter="sensors">Sensors &amp; PCB</button>
        </div>

        <!-- Product Cards Grid -->
        <div class="products-grid-dark" id="home-products-grid">
          ${popular.map((p, i) => renderProductCard(p, i)).join('')}
        </div>
      </div>
    </section>

    <!-- TRUSTED BY INDUSTRY LEADERS: What Our Customers Say -->
    <section class="testimonials-dark-section">
      <div class="container">
        <div class="section-head-minimal" style="text-align:center;max-width:700px;margin-left:auto;margin-right:auto;margin-bottom:var(--space-12);">
          <span class="section-tag-mono" style="color:var(--logo-red-light);">TRUSTED BY INDUSTRY LEADERS</span>
          <h2 class="section-h2">What Our Customers Say</h2>
          <p class="section-lead" style="margin-left:auto;margin-right:auto;">
            Over 14+ years providing mission-critical RF passives and active systems to premier defense laboratories, aerospace contractors, and telecom pioneers.
          </p>
        </div>

        <div class="testimonials-grid-dark">
          <!-- Testimonial 1 -->
          <div class="testimonial-card-relay">
            <div class="testimonial-stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="testimonial-quote">
              "Icon Electromatic delivered critical Ku-band low-noise amplifiers and coaxial attenuators within record lead times. Their technical team in Bengaluru verified all S-parameter test reports, ensuring flawless payload integration."
            </p>
            <div class="testimonial-author-block">
              <div class="testimonial-avatar" style="border-color:rgba(37,99,235,0.4);color:#60A5FA;">AV</div>
              <div class="testimonial-author-details">
                <h4>Dr. Anand Venkat</h4>
                <p>Head of RF Payload Systems · Defense Aerospace Lab</p>
                <span class="testimonial-industry-tag">Aerospace & Defense</span>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="testimonial-card-relay">
            <div class="testimonial-stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="testimonial-quote">
              "Component phase accuracy and batch-to-batch consistency have been exemplary. Their custom cavity bandpass filters solved our stringent out-of-band rejection requirements without any thermal drift."
            </p>
            <div class="testimonial-author-block">
              <div class="testimonial-avatar" style="border-color:rgba(225,29,72,0.4);color:#FDA4AF;">MS</div>
              <div class="testimonial-author-details">
                <h4>Marcus Sterling</h4>
                <p>VP of Hardware Engineering · NextGen SATCOM Networks</p>
                <span class="testimonial-industry-tag">Satellite Communications</span>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="testimonial-card-relay">
            <div class="testimonial-stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="testimonial-quote">
              "Having direct access to ISO 9001 certified components and verified engineering support in Bengaluru has accelerated our 5G millimeter-wave prototype test bench iterations by weeks."
            </p>
            <div class="testimonial-author-block">
              <div class="testimonial-avatar" style="border-color:rgba(37,99,235,0.4);color:#60A5FA;">KR</div>
              <div class="testimonial-author-details">
                <h4>K. Ramanathan</h4>
                <p>Director of Test & Measurement · Telemetry Systems</p>
                <span class="testimonial-industry-tag">Test & Telecom</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Industry Verification Trust Strip -->
        <div class="industry-partners-strip">
          <div class="partner-logo-item">
            <i class="fa-solid fa-satellite"></i>
            <span>AEROSPACE & SATCOM</span>
          </div>
          <div class="partner-logo-item">
            <i class="fa-solid fa-shield-halved" style="color:var(--logo-red);"></i>
            <span>DEFENSE R&D LABS</span>
          </div>
          <div class="partner-logo-item">
            <i class="fa-solid fa-tower-cell"></i>
            <span>5G / 6G TELECOM</span>
          </div>
          <div class="partner-logo-item">
            <i class="fa-solid fa-microchip"></i>
            <span>SEMICONDUCTOR LABS</span>
          </div>
        </div>
      </div>
    </section>

    <!-- INSIGHTS: Latest Blogs -->
    <section class="insights-dark-section">
      <div class="container">
        <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:var(--space-10);flex-wrap:wrap;gap:var(--space-4);">
          <div>
            <span class="section-tag-mono">INSIGHTS</span>
            <h2 class="section-h2">Latest Blogs</h2>
            <p class="section-lead">
              Engineering articles, application notes, and microwave design breakthroughs from our technical team.
            </p>
          </div>
          <div>
            <a class="btn-relay-dark" data-route="/about">
              Explore Research & About Us &rarr;
            </a>
          </div>
        </div>

        <div class="insights-grid-dark">
          <!-- Blog Card 1 -->
          <article class="blog-card-relay" data-route="/products?category=amplifiers">
            <div class="blog-card-relay-img">
              <img src="/images/hero-amplifier.jpg" alt="GaN Amplifiers" loading="lazy" />
              <span class="blog-badge-tag">GaN Amplifiers</span>
              <span class="blog-read-time"><i class="fa-regular fa-clock" style="margin-right:4px;"></i>5 min</span>
            </div>
            <div class="blog-card-relay-body">
              <div class="blog-date-meta">
                <i class="fa-regular fa-calendar"></i>
                <span>October 2026 · Technical Whitepaper</span>
              </div>
              <h3 class="blog-card-title">
                High-Efficiency GaN Solid-State Power Amplifiers in Next-Gen AESA Radar
              </h3>
              <p class="blog-card-excerpt">
                A technical analysis of thermal dissipation techniques, harmonic suppression, and pulse droop mitigation across multi-kilowatt phased array radar systems.
              </p>
              <div class="blog-card-footer">
                <div class="blog-author-info">
                  <div class="blog-author-avatar">VN</div>
                  <span class="blog-author-name">Dr. Vikram Nair</span>
                </div>
                <span class="blog-read-link">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          </article>

          <!-- Blog Card 2 -->
          <article class="blog-card-relay" data-route="/products?category=filters">
            <div class="blog-card-relay-img">
              <img src="/images/rf-filter.webp" alt="Cavity Filters" loading="lazy" />
              <span class="blog-badge-tag">Cavity Filters</span>
              <span class="blog-read-time"><i class="fa-regular fa-clock" style="margin-right:4px;"></i>4 min</span>
            </div>
            <div class="blog-card-relay-body">
              <div class="blog-date-meta">
                <i class="fa-regular fa-calendar"></i>
                <span>September 2026 · Design Guide</span>
              </div>
              <h3 class="blog-card-title">
                Mitigating Insertion Loss in Sub-40 GHz Waveguide & Cavity Bandpass Filters
              </h3>
              <p class="blog-card-excerpt">
                Practical strategies for maintaining high loaded Q-factors, thermal stability, and steep out-of-band rejection in aerospace satellite transponders.
              </p>
              <div class="blog-card-footer">
                <div class="blog-author-info">
                  <div class="blog-author-avatar" style="background:rgba(225,29,72,0.2);border-color:rgba(225,29,72,0.4);color:#FDA4AF;">SR</div>
                  <span class="blog-author-name">Siddharth Rao</span>
                </div>
                <span class="blog-read-link">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          </article>

          <!-- Blog Card 3 -->
          <article class="blog-card-relay" data-route="/products?category=attenuators">
            <div class="blog-card-relay-img">
              <img src="/images/rf-switch.jpg" alt="Coaxial Components" loading="lazy" />
              <span class="blog-badge-tag">Test & Measurement</span>
              <span class="blog-read-time"><i class="fa-regular fa-clock" style="margin-right:4px;"></i>6 min</span>
            </div>
            <div class="blog-card-relay-body">
              <div class="blog-date-meta">
                <i class="fa-regular fa-calendar"></i>
                <span>August 2026 · Industry Standards</span>
              </div>
              <h3 class="blog-card-title">
                Sub-THz Coaxial Transitions and Repeatability in Precision RF Test Benches
              </h3>
              <p class="blog-card-excerpt">
                Calibration best practices, VSWR measurement tolerances, and mechanical longevity when selecting precision gold SMA & 2.92mm terminations.
              </p>
              <div class="blog-card-footer">
                <div class="blog-author-info">
                  <div class="blog-author-avatar">PS</div>
                  <span class="blog-author-name">Priya Swaminathan</span>
                </div>
                <span class="blog-read-link">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- RELAY CONTACT & FAST QUERY -->
    <section class="contact-relay-section">
      <div class="container">
        <div class="section-head-minimal">
          <span class="section-tag-mono">CONNECT WITH ENGINEERING</span>
          <h2 class="section-h2">Initiate an inquiry or request pricing.</h2>
          <p class="section-lead">
            Direct access to our senior RF applications team in Bengaluru. Fast turnarounds on quotations and custom requirements.
          </p>
        </div>

        <div class="contact-relay-grid">
          <div class="contact-relay-info">
            <div class="contact-relay-card">
              <h3>Direct Engineering Reach</h3>
              <p>
                Founded in 2009 in Bengaluru with expanded presence across Singapore, Israel, and the United States.
              </p>

              <div class="contact-meta-list">
                <div class="contact-meta-row">
                  <div class="contact-meta-icon"><i class="fa-solid fa-location-dot"></i></div>
                  <div class="contact-meta-text">
                    <h5>Registered Headquarters</h5>
                    <p>Bengaluru, Karnataka 560001, India</p>
                  </div>
                </div>

                <div class="contact-meta-row">
                  <div class="contact-meta-icon"><i class="fa-solid fa-phone"></i></div>
                  <div class="contact-meta-text">
                    <h5>Telephone</h5>
                    <p>+91 80 4123 4567 / +91 98450 12345</p>
                  </div>
                </div>

                <div class="contact-meta-row">
                  <div class="contact-meta-icon"><i class="fa-solid fa-envelope"></i></div>
                  <div class="contact-meta-text">
                    <h5>Official Communications</h5>
                    <p>sales@iconelectromatic.com · support@iconelectromatic.com</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Requirement Presets -->
            <div class="contact-relay-card">
              <h4 style="font-size:1.05rem;font-weight:700;color:var(--text-white);margin-bottom:var(--space-2);display:flex;align-items:center;gap:8px;">
                <i class="fa-solid fa-bolt" style="color:var(--logo-red);"></i> Quick Requirement Presets
              </h4>
              <p style="font-size:0.85rem;color:var(--text-gray-400);margin-bottom:var(--space-3);">Click any preset to prefill your inquiry message:</p>
              <div style="display:flex;flex-wrap:wrap;gap:8px;">
                <button class="filter-chip-dark quick-preset" data-preset="Request quotation and datasheets for Wideband Power Amplifiers (DC to 18 GHz).">RF Amplifiers RFQ</button>
                <button class="filter-chip-dark quick-preset" data-preset="Inquiring about high-Q cavity bandpass filters for aerospace radar systems.">Cavity Filters Radar</button>
                <button class="filter-chip-dark quick-preset" data-preset="Requesting volume availability and lead times for 50-ohm attenuators.">Attenuators Stock</button>
                <button class="filter-chip-dark quick-preset" data-preset="We have a custom frequency requirement and need bespoke RF design services.">Bespoke RF Design</button>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-relay-form">
            <h3>Send Us a Message</h3>
            <p class="subtitle">Complete the form below. Technical responses provided within 24 hours.</p>

            <form id="home-contact-form">
              <div class="relay-form-row">
                <div class="relay-field">
                  <label for="h-name">Full Name *</label>
                  <input type="text" id="h-name" placeholder="Dr. Rajesh Kumar" required />
                </div>
                <div class="relay-field">
                  <label for="h-company">Organization / Company *</label>
                  <input type="text" id="h-company" placeholder="Defense Lab / R&D Institute" required />
                </div>
              </div>

              <div class="relay-form-row">
                <div class="relay-field">
                  <label for="h-email">Work Email *</label>
                  <input type="email" id="h-email" placeholder="name@organization.com" required />
                </div>
                <div class="relay-field">
                  <label for="h-phone">Phone Number *</label>
                  <input type="tel" id="h-phone" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div class="relay-field">
                <label for="h-topic">Inquiry Type</label>
                <select id="h-topic">
                  <option value="quote">Formal Request for Quotation (RFQ)</option>
                  <option value="technical">Technical Support & Datasheet Request</option>
                  <option value="bespoke">Bespoke RF Design & Custom Sourcing</option>
                  <option value="general">General Corporate Inquiry</option>
                </select>
              </div>

              <div class="relay-field">
                <label for="h-message">Message / Technical Requirement *</label>
                <textarea id="h-message" placeholder="Please specify frequency range, model numbers, quantities, or target application..." required></textarea>
              </div>

              <button type="submit" class="btn-relay-blue" style="width:100%;margin-top:var(--space-2);">
                <i class="fa-solid fa-paper-plane"></i> Submit Inquiry to Engineering Team
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHomePage() {
  // Ensure background video plays smoothly & muted
  const video = document.getElementById('hero-bg-video');
  if (video) {
    video.muted = true;
    video.defaultMuted = true;
    const attemptPlay = () => {
      if (video.paused) {
        video.muted = true;
        video.play().catch(() => {});
      }
    };
    attemptPlay();
    // Re-verify after a short tick in case DOM insertion was immediate
    setTimeout(attemptPlay, 100);
    setTimeout(attemptPlay, 400);

    // Fallback if browser requires interaction
    window.addEventListener('click', attemptPlay, { once: true });
    window.addEventListener('scroll', attemptPlay, { once: true, passive: true });
  }

  // Category tabs on home page
  const tabButtons = document.querySelectorAll('#home-category-tabs .filter-chip-dark');
  const productsGrid = document.getElementById('home-products-grid');

  if (tabButtons.length && productsGrid) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter') || 'all';
        const allPopular = getPopularProducts();
        
        let filtered = allPopular;
        if (filter === 'rogers') {
          filtered = allPopular.filter(p => p.oemId === 'rogers-corporation');
        } else if (filter === 'qorvo') {
          filtered = allPopular.filter(p => p.oemId === 'qorvo');
        } else if (filter === 'ohmega') {
          filtered = allPopular.filter(p => p.oemId === 'ohmega-ticer');
        } else if (filter === 'fortify') {
          filtered = allPopular.filter(p => p.oemId === 'fortify');
        } else if (filter === 'components') {
          filtered = allPopular.filter(p => p.oemId === 'minicircuits' || p.oemId === 'rfuw-engineering' || p.oemId === 'triteq');
        } else if (filter === 'sensors') {
          filtered = allPopular.filter(p => p.oemId === 'spellman' || p.oemId === 'thermosen' || p.oemId === 'nee' || p.oemId === 'transline-technology');
        }

        if (filtered.length === 0) {
          productsGrid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:var(--space-8);color:var(--text-gray-500);">
              No popular items currently in this view. <a data-route="/products" style="color:var(--logo-blue-light);font-weight:600;">View full catalog &rarr;</a>
            </div>
          `;
        } else {
          productsGrid.innerHTML = filtered.map((p, i) => renderProductCard(p, i)).join('');
        }
      });
    });
  }

  // Quick preset pills
  const presets = document.querySelectorAll('.quick-preset');
  const messageInput = document.getElementById('h-message');
  if (presets.length && messageInput) {
    presets.forEach(p => {
      p.addEventListener('click', () => {
        messageInput.value = p.getAttribute('data-preset');
        messageInput.focus();
      });
    });
  }

  // Contact form submission
  const form = document.getElementById('home-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('h-name').value;
      const refId = 'ICON-' + Math.floor(100000 + Math.random() * 900000);

      form.innerHTML = `
        <div style="text-align:center;padding:var(--space-8) var(--space-4);">
          <div style="width:60px;height:60px;border-radius:50%;background:rgba(37,99,235,0.15);color:var(--logo-blue-light);display:flex;align-items:center;justify-content:center;font-size:1.8rem;margin:0 auto var(--space-4);">
            <i class="fa-solid fa-check"></i>
          </div>
          <h3 style="font-size:1.4rem;font-weight:800;color:var(--text-white);margin-bottom:8px;">Thank You, ${name}!</h3>
          <p style="color:var(--text-gray-400);font-size:0.95rem;margin-bottom:var(--space-4);">
            Your message has been logged. A specialized RF application engineer will review your inquiry and contact you within 24 hours.
          </p>
          <div style="display:inline-block;padding:8px 16px;background:rgba(255,255,255,0.05);border:1px solid var(--border-card);border-radius:var(--radius-md);font-family:var(--font-display);font-size:0.85rem;color:var(--text-white);">
            Inquiry Tracking Ref: <strong style="color:var(--logo-red-light);">${refId}</strong>
          </div>
        </div>
      `;
    });
  }
}
