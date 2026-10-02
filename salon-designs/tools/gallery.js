// ギャラリーページ（index.html）を生成: node tools/gallery.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import hair from './hair.js';
import ester from './ester.js';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const card = (d, n) => `<a class="card" href="images/${d.id}.webp" target="_blank" rel="noopener"><span class="img"><img src="thumbs/${d.id}.webp" width="${d.w}" height="${d.h}" loading="lazy" alt="${d.title}"></span><span class="no">${String(n).padStart(2, '0')}</span><b>${d.title}</b><small>${d.usage}</small></a>`;
const sec = (id, en, jp, lead, list, start) => `<section id="${id}"><h2><span>${en}</span>${jp}</h2><p class="lead">${lead}</p><div class="grid">${list.map((d, i) => card(d, start + i)).join('')}</div></section>`;
const html = `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>美容室・エステサロン 広告デザイン50点｜YUJI SHIMONO</title><meta name="description" content="美容室25点・エステ脱毛サロン25点。ブロック玩具風のオリジナル広告デザイン集。Instagram・チラシ・料金表・LINE・求人に。">
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;700&family=Zen+Maru+Gothic:wght@500;700;900&display=swap" rel="stylesheet">
<style>*{box-sizing:border-box;margin:0}body{font-family:'Zen Maru Gothic',sans-serif;background:#fffaf0;color:#1b1b1f;-webkit-font-smoothing:antialiased}
header{background:#1d6fd6;color:#fff;padding:56px 5vw 64px;background-image:radial-gradient(circle at 20px 20px,rgba(255,255,255,.18) 0 9px,transparent 10px);background-size:48px 48px}
header a.back{color:#fff;font-weight:700;font-size:14px;letter-spacing:.1em;text-decoration:none;opacity:.85}
h1{font-size:clamp(34px,6vw,64px);font-weight:900;line-height:1.15;margin:20px 0 14px}
header p{max-width:760px;line-height:1.9;font-weight:500}
.nav{display:flex;gap:12px;margin-top:26px;flex-wrap:wrap}.nav a{background:#ffcf1f;color:#1b1b1f;font-weight:900;text-decoration:none;padding:12px 24px;border-radius:10px;box-shadow:0 5px 0 rgba(0,0,0,.2)}
main{padding:20px 5vw 80px;max-width:1500px;margin:0 auto}
section{padding-top:56px}h2{font-size:clamp(26px,4vw,40px);font-weight:900}h2 span{display:block;font-family:Jost,sans-serif;font-size:14px;letter-spacing:.4em;color:#e4372c;margin-bottom:6px}
.lead{margin:10px 0 28px;line-height:1.9;color:#555;max-width:760px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:22px;align-items:start}
.card{display:block;text-decoration:none;color:inherit;position:relative}.img{display:block;border-radius:14px;overflow:hidden;box-shadow:0 8px 0 rgba(0,0,0,.1);background:#eee;transition:transform .2s}.card:hover .img{transform:translateY(-4px)}
.img img{display:block;width:100%;height:auto}.no{position:absolute;top:8px;left:8px;background:#1b1b1f;color:#fff;font:700 12px Jost,sans-serif;padding:3px 9px;border-radius:99px;letter-spacing:.1em}
.card b{display:block;margin-top:14px;font-size:15px;font-weight:900;line-height:1.5}.card small{display:block;color:#777;font-size:12px;font-weight:500;margin-top:2px}
footer{padding:30px 5vw 50px;color:#777;font-size:13px;line-height:1.9;border-top:1px solid #eadfc7;max-width:1500px;margin:0 auto}</style></head><body>
<header><a class="back" href="../ad-design.html">← 広告デザインに戻る</a><h1>美容室・エステ脱毛サロン向け<br>広告デザイン 50点</h1><p>美容室25点、エステ・脱毛・美容サロン25点。Instagram投稿・ストーリーズ、チラシ、料金表、LINEリッチメニュー、求人ポスター、ショップカードまで、集客で使う場面をひと通りそろえました。スタッド付きブロックとドット絵で組んだ、オリジナルの「ブロック玩具風」デザインです。</p><div class="nav"><a href="#hair">美容室 25</a><a href="#esthe">エステ・脱毛 25</a></div></header>
<main>${sec('hair', 'HAIR SALON', '美容室・ヘアサロン', '原色ブロックの元気で親しみやすいトーン。初回クーポン、料金表、求人、LINEまで。', hair, 1)}${sec('esthe', 'ESTHETIC SALON', 'エステ・脱毛・美容サロン', 'パステルブロックのやさしい清潔感。広告の注意書き（個人差・医療行為ではない旨）も入れています。', ester, 26)}</main>
<footer>画像をクリックすると原寸で開きます。サロン名・価格・電話番号・住所はすべてサンプルです。実際の掲載内容に合わせて差し替えてください。脱毛・エステの広告は、効果の断定や誇大な表現を避け、施術例には費用・回数・リスクの表示が必要です。<br>© <span>2026</span> YUJI SHIMONO</footer></body></html>`;
fs.writeFileSync(path.join(root, 'index.html'), html);
console.log('index.html', hair.length + ester.length, 'designs');
