(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;

  /* ---------- Header: スクロールで背景を不透明に ---------- */
  var header = document.querySelector('.site-header');
  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var closeBtn = menu.querySelector('.mobile-menu__close');
  var toggleLabel = toggle.querySelector('.visually-hidden');
  var main = document.getElementById('main');
  var footer = document.querySelector('.site-footer');
  var desktopQuery = window.matchMedia('(min-width: 1024px)');

  function focusables() {
    return Array.prototype.slice.call(
      menu.querySelectorAll('a[href], button:not([disabled])')
    );
  }

  function setBackgroundInert(state) {
    [main, footer, header].forEach(function (el) {
      if (state) {
        el.setAttribute('inert', '');
        el.setAttribute('aria-hidden', 'true');
      } else {
        el.removeAttribute('inert');
        el.removeAttribute('aria-hidden');
      }
    });
  }

  function openMenu() {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggleLabel.textContent = 'メニューを閉じる';
    body.classList.add('is-menu-open');
    setBackgroundInert(true);
    closeBtn.focus();
    document.addEventListener('keydown', onMenuKeydown);
  }

  function closeMenu(returnFocus) {
    if (menu.hidden) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggleLabel.textContent = 'メニューを開く';
    body.classList.remove('is-menu-open');
    setBackgroundInert(false);
    document.removeEventListener('keydown', onMenuKeydown);
    if (returnFocus !== false) toggle.focus();
  }

  function onMenuKeydown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
      return;
    }
    if (e.key !== 'Tab') return;
    // フォーカスをメニュー内に留める
    var items = focusables();
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  toggle.addEventListener('click', function () {
    if (menu.hidden) openMenu(); else closeMenu();
  });
  closeBtn.addEventListener('click', function () { closeMenu(); });

  // メニュー内リンク：閉じてから該当セクションへ移動し、見出しへフォーカス
  menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      closeMenu(false);
      target.scrollIntoView();
      history.pushState(null, '', link.getAttribute('href'));
      focusSection(target);
    });
  });

  // PC幅に広がったらメニューを閉じる
  function onDesktopChange(e) { if (e.matches) closeMenu(false); }
  if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', onDesktopChange);
  else if (desktopQuery.addListener) desktopQuery.addListener(onDesktopChange);

  /* ---------- ページ内リンク：移動先へフォーカスを移す ---------- */
  function focusSection(target) {
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
  document.querySelectorAll('a[href^="#"]:not(.mobile-menu a)').forEach(function (link) {
    link.addEventListener('click', function () {
      var id = link.getAttribute('href');
      if (id === '#top' || id === '#main') return;
      var target = document.querySelector(id);
      if (target) focusSection(target);
    });
  });

  /* ---------- お問い合わせ（連絡先確定まで準備中表示） ---------- */
  // TODO: 連絡先確定後、このボタンを mailto: リンクまたはフォームへの遷移に置き換える
  var contactBtn = document.querySelector('.contact__btn');
  var contactStatus = document.getElementById('contact-status');
  if (contactBtn && contactStatus) {
    contactBtn.addEventListener('click', function () {
      contactStatus.hidden = false;
      contactBtn.setAttribute('aria-expanded', 'true');
    });
  }

  /* ---------- 下層コンテンツの出現 ---------- */
  var reveals = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduceMotion) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- フッターの年号 ---------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  root.classList.add('is-ready');
})();
