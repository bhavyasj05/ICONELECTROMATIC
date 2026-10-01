/**
 * Header Component — ICON ELECTROMATIC
 * Sleek Minimalist Dark Header matching the Relay Framer reference
 */
import { getCurrentPath } from '../router.js';

export function renderHeader() {
  const currentRoute = getCurrentPath();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/partners', label: 'Partners' },
    { path: '/contact', label: 'Contact' },
  ];

  return `
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <a class="logo-container" data-route="/">
          <img src="/ICON ELECTROMATIC LOGO.jpeg" alt="ICON ELECTROMATIC" />
        </a>

        <nav class="main-nav" id="main-nav">
          ${navLinks.map(link => `
            <a class="nav-link ${currentRoute === link.path ? 'active' : ''}" data-route="${link.path}">
              ${link.label}
            </a>
          `).join('')}
        </nav>

        <div class="header-actions">
          <a class="btn-relay-border" data-route="/contact">
            Request Quote
          </a>
        </div>

        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
}

export function initHeader() {
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }
}
