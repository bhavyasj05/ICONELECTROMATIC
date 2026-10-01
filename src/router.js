/**
 * Simple SPA Router for ICON ELECTROMATIC
 */

const routes = {};
let currentPath = '';

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.history.pushState({}, '', path);
  handleRoute();
}

export function handleRoute() {
  const path = window.location.pathname || '/';
  const hash = window.location.hash.slice(1) || '/';
  const [route, queryStr] = hash.split('?');
  const queryParams = new URLSearchParams(queryStr || '');

  // Extract base route and params
  const parts = (route || '/').split('/').filter(Boolean);
  let matchedHandler = null;
  let params = { _query: queryParams };

  // Try exact match first
  if (routes[route]) {
    matchedHandler = routes[route];
  }
  // Try pattern matching
  else {
    for (const [pattern, handler] of Object.entries(routes)) {
      const patternParts = pattern.split('/').filter(Boolean);
      if (patternParts.length !== parts.length) continue;

      let match = true;
      const extractedParams = {};
      for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) {
          extractedParams[patternParts[i].slice(1)] = parts[i];
        } else if (patternParts[i] !== parts[i]) {
          match = false;
          break;
        }
      }

      if (match) {
        matchedHandler = handler;
        params = extractedParams;
        break;
      }
    }
  }

  if (matchedHandler) {
    currentPath = route;
    matchedHandler(params);
  } else if (routes['/']) {
    currentPath = '/';
    routes['/'](params);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export function getCurrentPath() {
  const hash = window.location.hash.slice(1) || '/';
  const [route] = hash.split('?');
  return currentPath || route || '/';
}

export function initRouter() {
  window.addEventListener('popstate', handleRoute);

  // Handle link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-route]');
    if (link) {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      window.location.hash = route;
    }
  });

  window.addEventListener('hashchange', handleRoute);

  // Initial route
  if (!window.location.hash) {
    window.location.hash = '/';
  } else {
    handleRoute();
  }
}
