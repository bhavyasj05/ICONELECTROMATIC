/**
 * Footer Component — ICON ELECTROMATIC
 * Sleek Minimalist Dark Footer matching the Relay Framer reference
 */

export function renderFooter() {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer-relay">
      <div class="container">
        <div class="footer-relay-inner">
          <div class="footer-relay-brand">
            <img src="/ICON ELECTROMATIC LOGO.jpeg" alt="ICON ELECTROMATIC" />
            <p>
              Delivering advanced RF, Microwave, and Hi-Rel electronic components from DC to 86 GHz 
              for aerospace, defense, SATCOM, and telecommunications.
            </p>
          </div>

          <div class="footer-relay-col">
            <h4>Products</h4>
            <ul>
              <li><a data-route="/products?category=amplifiers">RF Amplifiers</a></li>
              <li><a data-route="/products?category=filters">Cavity Filters</a></li>
              <li><a data-route="/products?category=mixers">Frequency Mixers</a></li>
              <li><a data-route="/products?category=waveguides">Waveguides</a></li>
              <li><a data-route="/products">Browse All 4,000+</a></li>
            </ul>
          </div>

          <div class="footer-relay-col">
            <h4>Capabilities</h4>
            <ul>
              <li><a data-route="/about">Defense & Aerospace</a></li>
              <li><a data-route="/about">SATCOM & 5G</a></li>
              <li><a data-route="/about">Test & Measurement</a></li>
              <li><a data-route="/about">Bespoke RF Design</a></li>
            </ul>
          </div>

          <div class="footer-relay-col">
            <h4>Company</h4>
            <ul>
              <li><a data-route="/about">About Us</a></li>
              <li><a data-route="/services">Services</a></li>
              <li><a data-route="/partners">Partners</a></li>
              <li><a data-route="/contact">Contact & Support</a></li>
              <li><a data-route="/contact">Request a Quote</a></li>
              <li><a href="mailto:sales@iconelectromatic.com">sales@iconelectromatic.com</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom-relay">
          <p>&copy; ${year} ICON ELECTROMATIC PRIVATE LIMITED. All rights reserved.</p>
          <div style="display:flex;gap:var(--space-6);">
            <span style="color:var(--text-gray-500);"><i class="fa-solid fa-shield-check" style="color:var(--logo-red);"></i> ISO 9001:2015</span>
            <span style="color:var(--text-gray-500);"><i class="fa-solid fa-leaf" style="color:var(--success);"></i> RoHS Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
