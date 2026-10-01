/**
 * Contact Page — ICON ELECTROMATIC
 * Sleek Dark Aesthetic matching the Relay reference
 */

export function renderContactPage() {
  const hashParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const prefillModel = hashParams.get('model') || '';

  return `
    <div class="page-content" style="padding-top:calc(var(--header-height) + 24px);padding-bottom:var(--space-20);background:var(--bg-dark);min-height:100vh;">
      <div class="container">
        <!-- Breadcrumb -->
        <nav class="breadcrumb-dark">
          <a data-route="/">Home</a>
          <span class="sep"><i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i></span>
          <span style="color:var(--text-white);font-weight:600;">Contact &amp; RFQ</span>
        </nav>

        <!-- Unified Page Header -->
        <div class="page-header-unified">
          <div class="page-eyebrow-pill">
            <span class="hub-dot-pulse"></span>
            <span>CONNECT WITH ENGINEERING</span>
          </div>
          <h1 class="page-title-unified">
            Send Us a Message &amp; Request Fast Quotes
          </h1>
          <p class="page-lead-unified">
            Whether you require component data sheets, custom waveguide machining, or volume pricing, 
            our application engineering team in Bengaluru is ready to assist.
          </p>
        </div>

        <div class="contact-relay-grid">
          <!-- Left: Information & Location Cards -->
          <div class="contact-relay-info">
            <div class="contact-relay-card">
              <h3>Corporate Headquarters</h3>
              <p>
                ICON ELECTROMATIC PRIVATE LIMITED is headquartered in Bengaluru, India with established 
                representation and technical partners across Singapore, Israel, and the United States.
              </p>

              <div class="contact-meta-list">
                <div class="contact-meta-row">
                  <div class="contact-meta-icon"><i class="fa-solid fa-location-dot"></i></div>
                  <div class="contact-meta-text">
                    <h5>Registered Office</h5>
                    <p>Bengaluru, Karnataka 560001, India</p>
                  </div>
                </div>

                <div class="contact-meta-row">
                  <div class="contact-meta-icon"><i class="fa-solid fa-phone"></i></div>
                  <div class="contact-meta-text">
                    <h5>Telephone & Fast Support</h5>
                    <p>Sales: +91 80 4123 4567<br/>Technical Support: +91 98450 12345</p>
                  </div>
                </div>

                <div class="contact-meta-row">
                  <div class="contact-meta-icon"><i class="fa-solid fa-envelope"></i></div>
                  <div class="contact-meta-text">
                    <h5>Electronic Mail</h5>
                    <p>sales@iconelectromatic.com · info@iconelectromatic.com</p>
                  </div>
                </div>

                <div class="contact-meta-row">
                  <div class="contact-meta-icon"><i class="fa-solid fa-clock"></i></div>
                  <div class="contact-meta-text">
                    <h5>Business Operating Hours</h5>
                    <p>Monday – Friday: 9:00 AM – 6:00 PM IST<br/>Saturday: 9:30 AM – 1:30 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fast Requirement Presets -->
            <div class="contact-relay-card">
              <h4 style="font-size:1.05rem;font-weight:700;color:var(--text-white);margin-bottom:var(--space-2);display:flex;align-items:center;gap:8px;">
                <i class="fa-solid fa-bolt" style="color:var(--logo-red);"></i> Quick Requirement Presets
              </h4>
              <p style="font-size:0.85rem;color:var(--text-gray-400);margin-bottom:var(--space-3);">Click any preset to prefill your inquiry message:</p>
              <div style="display:flex;flex-wrap:wrap;gap:8px;">
                <button class="filter-chip-dark quick-preset" data-preset="We require official quotation and datasheets for RF Amplifiers (frequency range DC to 18 GHz).">RF Amplifiers RFQ</button>
                <button class="filter-chip-dark quick-preset" data-preset="Inquiring about high-Q cavity bandpass filters for aerospace radar systems.">Cavity Filters Radar</button>
                <button class="filter-chip-dark quick-preset" data-preset="Requesting stock availability and volume discounts for coaxial attenuators and terminations.">Attenuators Volume</button>
                <button class="filter-chip-dark quick-preset" data-preset="We have a custom frequency requirement and need bespoke RF component design support.">Bespoke Design</button>
              </div>
            </div>

            <!-- Quality Pledge -->
            <div class="contact-relay-card">
              <h4 style="font-size:1rem;font-weight:700;color:var(--text-white);margin-bottom:var(--space-3);display:flex;align-items:center;gap:8px;">
                <i class="fa-solid fa-shield-halved" style="color:var(--logo-blue-light);"></i> Guaranteed Assurance
              </h4>
              <ul style="display:flex;flex-direction:column;gap:8px;font-size:0.85rem;color:var(--text-gray-400);">
                <li style="display:flex;align-items:center;gap:8px;"><i class="fa-solid fa-check" style="color:var(--success);"></i> Guaranteed genuine OEM parts with trace certificate</li>
                <li style="display:flex;align-items:center;gap:8px;"><i class="fa-solid fa-check" style="color:var(--success);"></i> ISO 9001:2015 certified quality management</li>
                <li style="display:flex;align-items:center;gap:8px;"><i class="fa-solid fa-check" style="color:var(--success);"></i> Quotation turnaround within 24 business hours</li>
              </ul>
            </div>
          </div>

          <!-- Right: Send Us a Message Form -->
          <div class="contact-relay-form">
            <h3>Send Us a Message</h3>
            <p class="subtitle">Complete the form below. Technical responses provided within 24 hours.</p>

            <form id="contact-full-form">
              <div class="relay-form-row">
                <div class="relay-field">
                  <label for="c-fullname">Full Name *</label>
                  <input type="text" id="c-fullname" placeholder="Dr. Rajesh Kumar" required />
                </div>
                <div class="relay-field">
                  <label for="c-company">Company / Organization *</label>
                  <input type="text" id="c-company" placeholder="ISRO / DRDO / BEL / Private Lab" required />
                </div>
              </div>

              <div class="relay-form-row">
                <div class="relay-field">
                  <label for="c-email">Work Email *</label>
                  <input type="email" id="c-email" placeholder="name@organization.com" required />
                </div>
                <div class="relay-field">
                  <label for="c-phone">Phone / Mobile *</label>
                  <input type="tel" id="c-phone" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div class="relay-form-row">
                <div class="relay-field">
                  <label for="c-subject">Subject / Inquiry Type</label>
                  <select id="c-subject">
                    <option value="rfq">Formal Request for Quotation (RFQ)</option>
                    <option value="datasheet">Datasheet & Technical Documentation</option>
                    <option value="bespoke">Bespoke RF Component Engineering</option>
                    <option value="delivery">Lead Time & Logistics Verification</option>
                    <option value="general">General Corporate Inquiry</option>
                  </select>
                </div>
                <div class="relay-field">
                  <label for="c-model">Target Model / Frequency Band</label>
                  <input type="text" id="c-model" value="${prefillModel}" placeholder="e.g. ZX60-0433+ or 2.4 - 5.8 GHz" />
                </div>
              </div>

              <div class="relay-field">
                <label for="c-message">Technical Requirement / Message *</label>
                <textarea id="c-message" placeholder="Please specify your project specifications, required quantities, target frequency band, and timeline..." required>${prefillModel ? `Hello, I am requesting a formal quotation and datasheet for model ${prefillModel}.` : ''}</textarea>
              </div>

              <button type="submit" class="btn-relay-blue" style="width:100%;margin-top:var(--space-2);">
                <i class="fa-solid fa-paper-plane"></i> Send Message to Engineering Team
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initContactPage() {
  const form = document.getElementById('contact-full-form');
  const messageInput = document.getElementById('c-message');

  document.querySelectorAll('.quick-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-preset');
      if (messageInput) {
        messageInput.value = q;
        messageInput.focus();
      }
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('c-fullname').value;
      const refId = 'ICON-' + Math.floor(100000 + Math.random() * 900000);

      form.innerHTML = `
        <div style="text-align:center;padding:var(--space-10) var(--space-4);">
          <div style="width:68px;height:68px;border-radius:50%;background:rgba(37,99,235,0.15);color:var(--logo-blue-light);display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto var(--space-4);">
            <i class="fa-solid fa-check"></i>
          </div>
          <h3 style="font-size:1.5rem;font-weight:800;color:var(--text-white);margin-bottom:8px;">Thank You, ${name}!</h3>
          <p style="color:var(--text-gray-400);font-size:1rem;max-width:480px;margin:0 auto var(--space-6);line-height:1.6;">
            Your inquiry has been logged with ICON Electromatic Technical Dispatch. A specialized RF application engineer will review your specifications and contact you shortly.
          </p>
          <div style="display:inline-block;padding:10px 20px;background:rgba(255,255,255,0.05);border:1px solid var(--border-card);border-radius:var(--radius-md);font-family:var(--font-display);font-size:0.95rem;color:var(--text-white);">
            Inquiry Reference: <span style="color:var(--logo-red-light);">${refId}</span>
          </div>
        </div>
      `;
    });
  }
}
