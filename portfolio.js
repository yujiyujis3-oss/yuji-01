(function () {
  'use strict';
  var data = window.PORTFOLIO;
  var gallery = document.getElementById('portfolio-gallery');
  if (!data || !gallery) return;
  var controls = document.getElementById('portfolio-controls');
  var folders = document.getElementById('collection-folders');
  var back = document.getElementById('collection-back');
  var title = document.getElementById('collection-title');
  var industryFilters = document.getElementById('industry-filters');
  var industrySelect = document.getElementById('industry-select');
  var search = document.getElementById('portfolio-search');
  var status = document.getElementById('portfolio-status');
  var style = 'all', industry = 'all', query = '', visible = [];
  var dialog = document.getElementById('artwork-dialog');
  var activeWork = null, returnFocus = null;

  function escape(value) {
    return String(value).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; });
  }
  function known(list, id) { return list.some(function (item) { return item.id === id; }); }
  function normalize(value) { return value.normalize('NFKC').toLocaleLowerCase('ja'); }
  var shapes = [{id:'portrait',label:'縦長'}, {id:'square',label:'正方形'}, {id:'landscape',label:'横長'}];
  function shape(work) {
    var ratio = work.width / work.height;
    return ratio < 0.98 ? 'portrait' : ratio > 1.02 ? 'landscape' : 'square';
  }
  function arrangedCards(works) {
    return ['standard', 'handdrawn'].map(function (visualStyle) {
      var grouped = works.filter(function (work) { return (work.visualStyle || 'standard') === visualStyle; });
      if (!grouped.length) return '';
      var heading = visualStyle === 'handdrawn' ? '<h4 class="portfolio-visual-label">手描き風</h4>' : '';
      return '<div class="portfolio-visual-group" data-visual-style="' + visualStyle + '">' + heading + shapes.map(function (format) {
        var items = grouped.filter(function (work) { return shape(work) === format.id; });
        if (!items.length) return '';
        visible = visible.concat(items);
        return '<div class="portfolio-shape" data-orientation="' + format.id + '"><p class="portfolio-shape-label">' + format.label + '</p><div class="portfolio-grid portfolio-grid--' + format.id + '">' + items.map(card).join('') + '</div></div>';
      }).join('') + '</div>';
    }).join('');
  }
  function card(work) {
    return '<article class="portfolio-card"><a href="' + escape(work.image) + '" data-artwork="' + escape(work.id) + '"><div class="portfolio-card-media"><img src="' + escape(work.thumbnail) + '" width="' + work.width + '" height="' + work.height + '" loading="lazy" decoding="async" alt="' + escape(work.title) + '"></div><span class="sample-caption">作品を大きく見る ↗</span></a></article>';
  }
  function button(item, count, selected) {
    return '<button class="filter-button" type="button" data-filter="' + item.id + '" aria-pressed="' + (item.id === selected) + '"' + (count === 0 ? ' disabled hidden' : '') + '>' + escape(item.label) + '<span>' + count + '</span></button>';
  }
  function readURL() {
    var params = new URLSearchParams(location.search);
    var selected = params.get('collection') || (params.get('style') === 'pixel' ? '8bit' : 'all');
    if (selected === 'original') selected = 'normal';
    style = known(data.collections, selected) ? selected : 'all';
    industry = known(data.industries, params.get('industry')) ? params.get('industry') : 'all';
    query = params.get('q') || '';
    search.value = query;
  }
  function writeURL(replace) {
    var url = new URL(location.href);
    ['style', 'collection', 'industry', 'q'].forEach(function (key) { url.searchParams.delete(key); });
    if (style !== 'all') url.searchParams.set('collection', style);
    if (industry !== 'all') url.searchParams.set('industry', industry);
    if (query) url.searchParams.set('q', query);
    if (url.href !== location.href) history[replace ? 'replaceState' : 'pushState'](null, '', url);
  }
  function renderFilters() {
    var eligible = data.works.filter(function (w) { return style === 'all' || w.collection === style; });
    industryFilters.innerHTML = button({id:'all',label:'すべての業種'}, eligible.length, industry) + data.industries.map(function (s) {
      return button(s, eligible.filter(function (w) { return w.industry === s.id; }).length, industry);
    }).join('');
    industrySelect.innerHTML = '<option value="all">すべての業種（' + eligible.length + '点）</option>' + data.industries.map(function (s) {
      var count = eligible.filter(function (w) { return w.industry === s.id; }).length;
      return count ? '<option value="' + s.id + '">' + escape(s.label) + '（' + count + '点）</option>' : '';
    }).join('');
    if (industry !== 'all' && !eligible.some(function (w) { return w.industry === industry; })) {
      industrySelect.innerHTML += '<option value="' + industry + '">' + escape(data.industries.find(function (s) { return s.id === industry; }).label) + '（0点）</option>';
    }
    industrySelect.value = industry;
  }
  function render() {
    var landing = style === 'all';
    folders.hidden = !landing;
    gallery.hidden = landing;
    controls.hidden = landing;
    back.hidden = landing;
    title.hidden = landing;
    title.textContent = landing ? '' : data.collections.find(function(c) { return c.id === style; }).label;
    if (landing) { visible = []; return; }

    var matched = data.works.filter(function (w) {
      var sector = data.industries.find(function (i) { return i.id === w.industry; });
      return (style === 'all' || w.collection === style) && (industry === 'all' || industry === w.industry) && (!query || normalize(w.title + ' ' + sector.label).includes(normalize(query)));
    });
    var groups = style === 'all' ? data.collections : data.collections.filter(function (s) { return s.id === style; });
    visible = [];
    gallery.innerHTML = groups.map(function (s) {
      var entries = matched.filter(function (w) { return style !== 'all' || w.collection === s.id; });
      if (!entries.length) return '';
      return '<section class="portfolio-style" aria-labelledby="heading-' + s.id + '"><div class="portfolio-style-head"><h2 id="heading-' + s.id + '">' + escape(s.label) + '</h2><p>' + escape(s.description) + '</p></div>' + data.industries.map(function (i) {
        var works = entries.filter(function (w) { return w.industry === i.id; });
        if (!works.length) return '';
        return '<section class="portfolio-industry" aria-labelledby="heading-' + s.id + '-' + i.id + '"><h3 id="heading-' + s.id + '-' + i.id + '">' + escape(i.label) + '<span>' + works.length + '点</span></h3>' + arrangedCards(works) + '</section>';
      }).join('') + '</section>';
    }).join('') || '<p class="portfolio-empty">作品は準備中です。</p>';
    status.textContent = matched.length + '点を表示 ／ この作品集 ' + data.works.filter(function(w) { return w.collection === style; }).length + '点';
  }
  industryFilters.addEventListener('click', function (event) {
    var target = event.target.closest('button'); if (!target || target.disabled) return;
    industry = target.dataset.filter;
    renderFilters(); render(); writeURL(false);
    industryFilters.querySelector('[aria-pressed="true"]').focus({preventScroll:true});
  });
  search.addEventListener('input', function () { query = search.value.trim(); render(); writeURL(true); });
  industrySelect.addEventListener('change', function () { industry = industrySelect.value; renderFilters(); render(); writeURL(false); });
  window.addEventListener('popstate', function () { if (dialog.open) dialog.close(); readURL(); renderFilters(); render(); });

  function showWork(work) {
    activeWork = work;
    document.getElementById('artwork-title').textContent = '作品';
    document.getElementById('artwork-title').hidden = true;
    var img = document.getElementById('artwork-image');
    img.src = work.image; img.alt = work.title; img.width = work.width; img.height = work.height;
    document.getElementById('artwork-original').href = work.image;
    var index = visible.findIndex(function (w) { return w.id === work.id; });
    document.getElementById('artwork-position').textContent = (index + 1) + ' / ' + visible.length;
    document.getElementById('artwork-prev').disabled = index <= 0;
    document.getElementById('artwork-next').disabled = index >= visible.length - 1;
  }
  function move(delta) {
    var index = visible.findIndex(function (w) { return w.id === activeWork.id; });
    if (visible[index + delta]) showWork(visible[index + delta]);
  }
  gallery.addEventListener('click', function (event) {
    var link = event.target.closest('[data-artwork]');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !dialog.showModal) return;
    var work = data.works.find(function (w) { return w.id === link.dataset.artwork; });
    if (!work) return;
    event.preventDefault(); returnFocus = link; showWork(work); dialog.showModal(); document.body.classList.add('artwork-open');
  });
  document.getElementById('artwork-close').addEventListener('click', function () { dialog.close(); });
  document.getElementById('artwork-prev').addEventListener('click', function () { move(-1); });
  document.getElementById('artwork-next').addEventListener('click', function () { move(1); });
  dialog.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  });
  dialog.addEventListener('close', function () {
    document.body.classList.remove('artwork-open'); document.getElementById('artwork-image').removeAttribute('src');
    if (returnFocus && returnFocus.isConnected) returnFocus.focus({preventScroll:true});
  });
  dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
  readURL(); renderFilters(); render();
})();
