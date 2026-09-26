(function () {
  'use strict';
  document.querySelectorAll('[data-back]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      try {
        var previous = new URL(document.referrer);
        if (previous.origin === location.origin && previous.pathname.startsWith(location.pathname.slice(0, location.pathname.lastIndexOf('/') + 1)) && history.length > 1) {
          event.preventDefault(); history.back();
        }
      } catch (_) { /* Direct visits use the link's home fallback. */ }
    });
  });
  document.querySelector('[data-year]').textContent = new Date().getFullYear();
})();
