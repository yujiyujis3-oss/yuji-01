"""Rebuild the no-JavaScript gallery and homepage entry cards from portfolio-data.js."""
import json
from pathlib import Path
from html import escape

root = Path(__file__).resolve().parents[1]
data = json.loads((root/'portfolio-data.js').read_text().removeprefix('window.PORTFOLIO = ').rstrip(';\n'))
works = data['works']
assert len({w['id'] for w in works}) == len(works)

def card(w):
    return f'''<article class="portfolio-card"><a href="{escape(w['image'])}" data-artwork="{w['id']}"><div class="portfolio-card-media"><img src="{escape(w['thumbnail'])}" width="{w['width']}" height="{w['height']}" loading="lazy" decoding="async" alt="{escape(w['title'])}"></div><h4>{escape(w['title'])}</h4><span class="sample-caption">作品を大きく見る ↗</span></a></article>'''

groups=[]
for s in data['styles']:
    sections=[]
    for i in data['industries']:
        items=[w for w in works if w['primaryStyle']==s['id'] and w['industry']==i['id']]
        if not items:continue
        sections.append(f'''<section class="portfolio-industry" aria-labelledby="heading-{s['id']}-{i['id']}"><h3 id="heading-{s['id']}-{i['id']}">{i['label']}<span>{len(items)}点</span></h3><div class="portfolio-grid">{''.join(card(w) for w in items)}</div></section>''')
    if sections:
        groups.append(f'''<section class="portfolio-style" aria-labelledby="heading-{s['id']}"><div class="portfolio-style-head"><h2 id="heading-{s['id']}">{s['label']}</h2><p>{s['description']}</p></div>{''.join(sections)}</section>''')

html=f'''<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>今までの作品・広告デザイン｜YUJI SHIMONO</title>
  <meta name="description" content="レゴ風、人物・写真テイスト、かわいい系、きれい系など、雰囲気から選べる広告作品集。美容室、飲食店、エステ、ネイル、整体、介護施設のデザインをご覧いただけます。">
  <meta name="theme-color" content="#101416">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css__style.css">
  <link rel="stylesheet" href="portfolio.css">
</head>
<body class="detail-page portfolio-page">
  <a class="skip-link" href="#main">本文へスキップ</a>
  <header class="detail-header"><div class="container"><a class="logo" href="index.html">YUJI SHIMONO</a><a href="index.html#works">ホームに戻る ↗</a></div></header>
  <main class="container detail-main" id="main">
    <nav class="page-actions" aria-label="ページ移動"><a class="btn btn--ghost" href="index.html#works">ホームの作品欄に戻る</a></nav>
    <div class="portfolio-intro" id="samples">
      <p class="section-label label">AD DESIGN / PORTFOLIO</p>
      <h1 class="section-title">今までの作品</h1>
      <p class="detail-lead">まずは、好きな雰囲気から。<br>その中で業種を選び、ご希望に近いデザインをご覧ください。</p>
      <p class="portfolio-note">広告・ポスター・バナーのサンプル作品。画像を選ぶと全体を大きく表示します。</p>
    </div>
    <div class="portfolio-controls" id="portfolio-controls" hidden>
      <span class="filter-label" id="style-label">01　雰囲気を選ぶ</span>
      <div class="filter-row" id="style-filters" role="group" aria-labelledby="style-label"></div>
      <span class="filter-label" id="industry-label">02　その中から業種を選ぶ</span>
      <div class="filter-row" id="industry-filters" role="group" aria-labelledby="industry-label"></div>
      <select class="industry-select" id="industry-select" aria-labelledby="industry-label"></select>
      <div class="portfolio-toolbar">
        <p class="portfolio-status" id="portfolio-status" role="status" aria-live="polite">全{len(works)}点</p>
        <label class="portfolio-search" for="portfolio-search">作品名・キーワードで探す<input type="search" id="portfolio-search" placeholder="例：ネイル、募集、コーヒー" autocomplete="off"></label>
      </div>
    </div>
    <noscript><p class="detail-lead">全{len(works)}点を雰囲気別・業種別に掲載しています。画像を選ぶと大きく開きます。</p></noscript>
    <div id="portfolio-gallery">{''.join(groups)}</div>
    <div class="detail-contact"><a class="btn btn--light" href="mailto:yujiyuji.s3@gmail.com?subject=%E5%88%B6%E4%BD%9C%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87">この雰囲気で制作を相談する ↗</a></div>
    <nav class="page-actions" aria-label="ページ移動"><a class="btn btn--ghost" href="index.html#works">ホームの作品欄に戻る</a><a class="btn btn--ghost" href="#samples">作品の先頭へ戻る ↑</a></nav>
  </main>
  <dialog class="artwork-dialog" id="artwork-dialog" aria-labelledby="artwork-title">
    <div class="artwork-dialog-head"><h2 id="artwork-title">作品</h2><button class="artwork-close" id="artwork-close" type="button" autofocus>閉じる ×</button></div>
    <div class="artwork-stage"><img id="artwork-image" alt=""></div>
    <div class="artwork-dialog-foot"><a class="text-link" id="artwork-original" target="_blank" rel="noopener">元のサイズで開く ↗</a><span id="artwork-position" aria-live="polite"></span><div class="artwork-navigation"><button type="button" class="filter-button" id="artwork-prev" aria-label="前の作品">← 前へ</button><button type="button" class="filter-button" id="artwork-next" aria-label="次の作品">次へ →</button></div></div>
  </dialog>
  <footer class="site-footer"><div class="container"><p class="copyright">© <span data-year>2026</span> YUJI SHIMONO</p></div></footer>
  <script src="portfolio-data.js" defer></script>
  <script src="portfolio.js" defer></script>
  <script src="js__detail.js" defer></script>
</body>
</html>
'''
(root/'ad-design.html').write_text(html)

links=[]
for s in data['styles']:
    cover=next(w for w in works if w['id']==s['cover'])
    count=sum(s['id'] in w['styles'] for w in works)
    links.append(f'''<a class="style-link" href="ad-design.html?style={s['id']}#samples"><img src="{cover['thumbnail']}" width="{cover['width']}" height="{cover['height']}" loading="lazy" decoding="async" alt="{escape(cover['title'])}"><h3>{s['label']} ↗</h3><p>{count}点の作品を見る</p></a>''')
entry=f'''<!-- PORTFOLIO ENTRY START -->
        <div class="portfolio-style-links">{''.join(links)}</div>
        <a class="btn btn--ghost" href="ad-design.html">広告作品をすべて見る（{len(works)}点）<span class="btn__icon" aria-hidden="true">↗</span></a>
        <h3 class="portfolio-home-heading">Web・ビジュアルの制作イメージ</h3>
        <!-- PORTFOLIO ENTRY END -->'''
home=(root/'index.html').read_text()
if 'portfolio.css' not in home:home=home.replace('<link rel="stylesheet" href="css__style.css">','<link rel="stylesheet" href="css__style.css">\n  <link rel="stylesheet" href="portfolio.css">')
home=home.replace('href="#works">制作イメージ</a>', 'href="#works">今までの作品</a>')
home=home.replace('<span class="mono">02</span>制作イメージ', '<span class="mono">02</span>今までの作品')
home=home.replace('id="works-title">制作イメージ', 'id="works-title">今までの作品')
home=home.replace('<span class="accent">CONCEPT</span> / 自主制作イメージ', '<span class="accent">WORKS</span> / PORTFOLIO')
home=home.replace('テクノロジーと美意識が出会うと、こんな表現も生まれます。<br class="br-pc">\n            掲載しているのは、表現の方向性を示す自主制作のコンセプトイメージです。','広告・ポスター・バナーを、雰囲気から探せます。<br class="br-pc">\n            気になるテイストを選ぶと、その中で業種別に作品をご覧いただけます。')
if '<!-- PORTFOLIO ENTRY START -->' in home:
    start=home.index('<!-- PORTFOLIO ENTRY START -->');end=home.index('<!-- PORTFOLIO ENTRY END -->')+len('<!-- PORTFOLIO ENTRY END -->')
    home=home[:start]+entry+home[end:]
else:home=home.replace('<div class="work-grid">',entry+'\n        <div class="work-grid">')
(root/'index.html').write_text(home, newline='\r\n')
print(f'Built gallery with {len(works)} unique works and {len(links)} style entry cards.')
