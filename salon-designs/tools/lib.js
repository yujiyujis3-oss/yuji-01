// ブロック玩具風デザインの共通部品（オリジナル表現。特定の商品名・ロゴ・公式形状は使用しません）
export const rng = (seed) => {
  let s = (seed * 2654435761) >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
};

// ── 色
const h2r = (h) => { h = h.replace('#', ''); if (h.length === 3) h = [...h].map((c) => c + c).join(''); return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)); };
const r2h = (r) => '#' + r.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
export const mix = (a, b, t) => { const A = h2r(a), B = h2r(b); return r2h(A.map((v, i) => v + (B[i] - v) * t)); };
export const lite = (c, t = .18) => mix(c, '#ffffff', t);
export const dark = (c, t = .18) => mix(c, '#000000', t);

export const P = { // 色パレット
  red: '#e4372c', yellow: '#ffcf1f', blue: '#1d6fd6', green: '#25a34b', orange: '#ff8a1f', navy: '#14264d', white: '#ffffff', ink: '#1b1b1f', sky: '#7cc4ee', lime: '#a6d93a', pink: '#ff7fa8', purple: '#7b4fd1', skin: '#f4c7a1', brown: '#6a3f2a', gray: '#d9dbe0',
  // パステル（エステ向け）
  pPink: '#f7bfd0', pPeach: '#ffd4b8', pLilac: '#d3c1f2', pMint: '#bfe9d6', pSky: '#bcdff6', pButter: '#fff0a8', pRose: '#e98aa6', plum: '#5a2f4d', cream: '#fff7ee', sand: '#f1e3d3',
};

// ── ラスタライズ用の図形（セル座標）
export const S = {
  circ: (cx, cy, r) => (x, y) => (x - cx) ** 2 + (y - cy) ** 2 <= r * r,
  ell: (cx, cy, rx, ry) => (x, y) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1,
  rect: (x0, y0, x1, y1) => (x, y) => x >= x0 && x < x1 && y >= y0 && y < y1,
  ring: (cx, cy, r, t) => (x, y) => { const d = Math.hypot(x - cx, y - cy); return d <= r && d >= r - t; },
  line: (x0, y0, x1, y1, t) => (x, y) => {
    const dx = x1 - x0, dy = y1 - y0, l2 = dx * dx + dy * dy;
    let u = ((x - x0) * dx + (y - y0) * dy) / l2; u = Math.max(0, Math.min(1, u));
    return Math.hypot(x - (x0 + u * dx), y - (y0 + u * dy)) <= t / 2;
  },
  poly: (pts) => (x, y) => { let c = false; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { const [xi, yi] = pts[i], [xj, yj] = pts[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c; } return c; },
  or: (...f) => (x, y) => f.some((g) => g(x, y)),
  and: (...f) => (x, y) => f.every((g) => g(x, y)),
  not: (a, b) => (x, y) => a(x, y) && !b(x, y),
  heart: (cx, cy, s) => (x, y) => { const X = (x - cx) / s, Y = -(y - cy) / s; return (X * X + Y * Y - 1) ** 3 - X * X * Y ** 3 <= 0; },
  star4: (cx, cy, r, k = .55) => (x, y) => (Math.abs(x - cx) / r) ** k + (Math.abs(y - cy) / r) ** k <= 1,
  star5: (cx, cy, R, r) => { const p = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, q = i % 2 ? r : R; p.push([cx + Math.cos(a) * q, cy + Math.sin(a) * q]); } return S.poly(p); },
  wave: (x0, x1, cy, amp, per, t) => (x, y) => x >= x0 && x <= x1 && Math.abs(y - (cy + amp * Math.sin(((x - x0) / per) * Math.PI * 2))) <= t / 2,
};

// ── スプライト（24×24、ブロックで組んだ絵柄）。引数はレイヤー配列 [[fn, color], ...]
export const spr = {
  scissors: (a = P.blue, b = P.red) => [[S.line(7, 17, 20, 3, 2.4), P.gray], [S.line(17, 17, 4, 3, 2.4), '#b9bdc7'], [S.ring(6, 18, 4.4, 1.9), b], [S.ring(18, 18, 4.4, 1.9), b], [S.circ(12, 10.4, 1.4), a]],
  dryer: (a = P.red) => [[S.ell(10, 8, 8.2, 5, 1), a], [S.rect(16, 4, 22, 12), P.ink], [S.poly([[7, 11], [13, 11], [12, 22], [6, 22]]), P.ink], [S.rect(3, 7, 5, 10), lite(a, .35)], [S.circ(10, 8, 2), P.yellow]],
  comb: (a = P.yellow) => [[S.rect(2, 6, 22, 12), a], ...Array.from({ length: 10 }, (_, i) => [S.rect(3 + i * 2, 12, 4 + i * 2, 20), a]), [S.rect(2, 6, 22, 8), lite(a, .3)]],
  drop: (a = P.sky) => [[S.or(S.circ(12, 15, 7), S.poly([[12, 1], [5.2, 13], [18.8, 13]])), a], [S.ell(9.5, 15, 1.6, 3), lite(a, .6)]],
  heart: (a = P.red) => [[S.heart(12, 11, 7.6), a], [S.circ(7.6, 8.4, 1.5), lite(a, .5)]],
  spark: (a = P.yellow) => [[S.star4(12, 12, 11, .5), a], [S.star4(19.5, 4.5, 4.5, .5), lite(a, .4)], [S.star4(5, 19, 3.6, .5), lite(a, .4)]],
  star: (a = P.yellow) => [[S.star5(12, 12.5, 11, 4.6), a]],
  flower: (a = P.pink, c = P.yellow) => [...[[12, 5], [19, 10], [16.5, 18], [7.5, 18], [5, 10]].map((p) => [S.circ(p[0], p[1], 4.4), a]), [S.circ(12, 12.5, 3.6), c]],
  leaf: (a = P.green) => [[S.and(S.circ(8, 16, 14), S.circ(16, 8, 14)), a], [S.line(5, 19, 17, 7, 1), lite(a, .5)]],
  sun: (a = P.yellow) => [[S.circ(12, 12, 6), a], ...Array.from({ length: 8 }, (_, i) => { const t = (i * Math.PI) / 4; return [S.line(12 + Math.cos(t) * 8.5, 12 + Math.sin(t) * 8.5, 12 + Math.cos(t) * 11.5, 12 + Math.sin(t) * 11.5, 2), a]; })],
  mirror: (a = P.pink) => [[S.circ(12, 9, 8), a], [S.circ(12, 9, 5.6), '#e9f6ff'], [S.rect(10.6, 16, 13.4, 23), a], [S.ell(9.5, 7, 1.6, 2.6), '#fff']],
  bottle: (a = P.blue, c = P.ink) => [[S.rect(7, 9, 17, 22.5), a], [S.rect(10, 4.5, 14, 9), c], [S.rect(9, 2, 17, 4.5), c], [S.rect(8, 13, 16, 18), '#fff'], [S.rect(8.6, 10, 9.8, 21), lite(a, .4)]],
  cloud: (a = P.sky) => [[S.or(S.circ(8, 14, 5), S.circ(14, 11, 6), S.circ(18, 15, 4.4), S.rect(8, 14, 18, 19.4)), a]],
  crown: (a = P.yellow) => [[S.poly([[3, 19], [3, 7], [8, 12], [12, 4], [16, 12], [21, 7], [21, 19]]), a], [S.rect(3, 17, 21, 20), dark(a, .12)], [S.circ(12, 14, 1.4), P.red]],
  check: (a = P.green) => [[S.line(4, 13, 9.5, 18.5, 3.4), a], [S.line(9.5, 18.5, 20, 6, 3.4), a]],
  lips: (a = P.red) => [[S.or(S.ell(8, 10, 6.5, 3.8), S.ell(16, 10, 6.5, 3.8), S.ell(12, 14, 9.4, 4.8)), a], [S.rect(4, 11.6, 20, 12.6), dark(a, .35)]],
  drops3: (a = P.sky) => [[S.circ(8, 15, 4.5), a], [S.circ(17, 9, 3.5), lite(a, .3)], [S.circ(15, 18, 2.4), lite(a, .5)]],
  // 後ろ姿のボブ
  bob: (h = P.brown, skin = P.skin, top = P.white) => [[S.ell(12, 25, 11, 5.4), top], [S.rect(9.6, 14, 14.4, 21), skin], [S.or(S.circ(12, 9, 7.8), S.rect(4.2, 9, 19.8, 16.6), S.poly([[4.2, 16], [5.4, 18.4], [9.6, 18.6], [14.4, 18.6], [18.6, 18.4], [19.8, 16]])), h], [S.rect(9.4, 16.4, 14.6, 19), skin], [S.line(12, 1.6, 12, 9.5, .7), dark(h, .4)], [S.ell(8.8, 7.4, 1.2, 3.2), lite(h, .32)], [S.ell(15.6, 12, .9, 3), dark(h, .12)]],
  longhair: (h = P.brown, skin = P.skin) => [[S.rect(10, 17, 14, 24), skin], [S.or(S.circ(12, 8.5, 7), S.rect(5, 8.5, 19, 22), S.poly([[5, 22], [19, 22], [20, 24], [4, 24]])), h], [S.rect(9.6, 18, 14.4, 24), skin], [S.line(12, 2, 12, 10, .8), dark(h, .35)], [S.ell(8.6, 9, 1.2, 4.6), lite(h, .3)]],
  shorthair: (h = P.ink, skin = P.skin) => [[S.rect(10, 17, 14, 24), skin], [S.ell(12, 13.6, 6.2, 7.6), skin], [S.and(S.ell(12, 9.6, 7.8, 6.8), S.rect(0, 0, 24, 11.6)), h], [S.rect(4.4, 8, 6.2, 13.6), h], [S.rect(17.8, 8, 19.6, 13.6), h], [S.circ(9.4, 14.2, .8), P.ink], [S.circ(14.6, 14.2, .8), P.ink], [S.rect(10.6, 18.2, 13.4, 19), P.red], [S.ell(12, 25, 11, 4.4), P.red]],
  face: (skin = P.skin, h = P.brown, top = P.pRose) => [[S.ell(12, 25, 10, 4.6), top], [S.rect(10, 17, 14, 22), skin], [S.ell(12, 12.6, 7, 8.2), skin], [S.and(S.ell(12, 8.4, 8.2, 7.2), S.rect(0, 0, 24, 10.8)), h], [S.rect(3.8, 7.5, 6, 19), h], [S.rect(18, 7.5, 20.2, 19), h], [S.circ(9.4, 13.2, .85), P.ink], [S.circ(14.6, 13.2, .85), P.ink], [S.ell(12, 17.4, 1.8, .9), P.red]],
  towel: (a = P.pMint) => [[S.rect(3, 5, 21, 19), a], ...[0, 1, 2].map((i) => [S.rect(3, 8 + i * 4, 21, 9 + i * 4), lite(a, .5)]), [S.rect(3, 19, 21, 21), dark(a, .1)]],
  candle: (a = P.pPink) => [[S.rect(8, 10, 16, 22), a], [S.ell(12, 5.5, 2, 3.2), P.yellow], [S.rect(11.4, 8, 12.6, 10), P.ink], [S.rect(8, 10, 16, 12), lite(a, .5)]],
  calendar: (a = P.red) => [[S.rect(2.5, 4.5, 21.5, 22), '#fff'], [S.rect(2.5, 4.5, 21.5, 10), a], [S.rect(6.4, 1.6, 8.4, 7), P.ink], [S.rect(15.6, 1.6, 17.6, 7), P.ink], ...[0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => [S.rect(5.6 + c * 5.4, 12.2 + r * 3.2, 8.6 + c * 5.4, 14.4 + r * 3.2), r === 1 && c === 1 ? a : '#d8dbe3']))],
  pin: (a = P.red) => [[S.or(S.circ(12, 9, 7.4), S.poly([[5.2, 12], [18.8, 12], [12, 23]])), a], [S.circ(12, 9, 3), '#fff']],
  chat: (a = P.green) => [[S.rect(2, 3, 22, 16.5), a], [S.poly([[6, 16], [12, 16], [6, 22]]), a], [S.circ(8, 9.8, 1.4), dark(a, .45)], [S.circ(12, 9.8, 1.4), dark(a, .45)], [S.circ(16, 9.8, 1.4), dark(a, .45)]],
  tag: (a = P.orange) => [[S.poly([[2, 2], [13, 2], [22, 11], [13, 20.5], [2, 11]]), a], [S.circ(7, 7, 1.9), '#fff']],
  menu: (a = P.blue) => [[S.rect(4, 2, 20, 22.5), '#fff'], [S.rect(4, 2, 20, 5.6), a], ...[0, 1, 2, 3].map((i) => [S.rect(7, 8.4 + i * 3.6, 17, 9.6 + i * 3.6), '#c9cdd6'])],
  arrowUp: (a = P.pRose) => [[S.poly([[12, 2], [22, 12.5], [15, 12.5], [15, 22], [9, 22], [9, 12.5], [2, 12.5]]), a], [S.rect(9.6, 13, 11, 21), lite(a, .4)]],
  lotus: (a = P.pPink) => [[S.ell(12, 14, 3, 7), a], [S.ell(7.5, 15, 3, 6.4), lite(a, .25)], [S.ell(16.5, 15, 3, 6.4), lite(a, .25)], [S.ell(4, 17, 2.4, 4.6), lite(a, .5)], [S.ell(20, 17, 2.4, 4.6), lite(a, .5)], [S.rect(2, 19.6, 22, 21.6), P.pMint]],
};

// ── ラスタ→スタッド付きブロックの絵（上から見たモザイク）
export function mosaic({ x, y, u, layers, cols = 24, rows = 24, bgColor = null, gap = 0, fuzz = null }) {
  const fr = rng(fuzz ? fuzz.seed || 1 : 1);
  let g = `<g transform="translate(${x} ${y})">`;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    let c = bgColor; const k = cols / 24, cx = (i + .5) / k, cy = (j + .5) / k;
    for (const [fn, col] of layers) if (fn(cx, cy)) c = col;
    if (fuzz && c === fuzz.from && fr() < fuzz.p) c = fuzz.to[Math.floor(fr() * fuzz.to.length)];
    if (!c) continue;
    g += stud(i * u, j * u, u, c, gap);
  }
  return g + '</g>';
}
// 1ピース（上から見たスタッド）
// ツルツルの平らなタイル（スタッドなし）
export function tiles({ x = 0, y = 0, w, h, u, color, alt = null, seed = 0 }) {
  const r = rng(seed + 1); let s = `<g transform="translate(${x} ${y})">`;
  for (let j = 0; j < Math.ceil(h / u); j++) for (let i = 0; i < Math.ceil(w / u); i++) { const c = alt && r() < .1 ? alt : color; s += `<rect x="${i * u + 1}" y="${j * u + 1}" width="${u - 2}" height="${u - 2}" rx="4" fill="${c}"/><rect x="${i * u + 1}" y="${j * u + 1}" width="${u - 2}" height="${u * .34}" rx="4" fill="#fff" opacity=".18"/>`; }
  return s + '</g>';
}
export const stud = (x, y, u, c, gap = 0) => `<rect x="${(x + gap / 2).toFixed(1)}" y="${(y + gap / 2).toFixed(1)}" width="${(u - gap).toFixed(1)}" height="${(u - gap).toFixed(1)}" fill="${c}"/><circle cx="${(x + u / 2 + u * .03).toFixed(1)}" cy="${(y + u / 2 + u * .05).toFixed(1)}" r="${(u * .35).toFixed(1)}" fill="${dark(c, .16)}"/><circle cx="${(x + u / 2).toFixed(1)}" cy="${(y + u / 2).toFixed(1)}" r="${(u * .33).toFixed(1)}" fill="${lite(c, .13)}"/><circle cx="${(x + u / 2 - u * .08).toFixed(1)}" cy="${(y + u / 2 - u * .09).toFixed(1)}" r="${(u * .1).toFixed(1)}" fill="#fff" opacity=".35"/>`;

// ベースプレート（背景一面のスタッド）
export function plate({ x = 0, y = 0, w, h, u, color, alt = null, seed = 0 }) {
  const r = rng(seed + 1); let s = `<g transform="translate(${x} ${y})">`;
  for (let j = 0; j < Math.ceil(h / u); j++) for (let i = 0; i < Math.ceil(w / u); i++) s += stud(i * u, j * u, u, alt && r() < .08 ? alt : color);
  return s + '</g>';
}

// 正面から見たブロック（上にスタッド）
export function brick({ x, y, cols, u, color, h = u * 1.2, studs = true, r = 5 }) {
  const w = cols * u; let s = '';
  if (studs) for (let i = 0; i < cols; i++) s += `<rect x="${x + i * u + u * .2}" y="${y - u * .2}" width="${u * .6}" height="${u * .24}" rx="${u * .08}" fill="${lite(color, .1)}"/><rect x="${x + i * u + u * .2}" y="${y - u * .08}" width="${u * .6}" height="${u * .08}" fill="${dark(color, .1)}"/>`;
  s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${color}"/><rect x="${x}" y="${y}" width="${w}" height="${Math.min(6, h * .12)}" rx="${r}" fill="#fff" opacity=".22"/><rect x="${x}" y="${y + h - Math.min(8, h * .14)}" width="${w}" height="${Math.min(8, h * .14)}" rx="${r}" fill="#000" opacity=".13"/>`;
  return s;
}
// 長い1枚のプレート（薄いブロック）
export const flat = (o) => brick({ ...o, h: o.u * .4, r: 3 });

// 市松ストライプ背景（広い面に動きを出す）
export function checker({ w, h, u, a, b }) { let s = `<rect width="${w}" height="${h}" fill="${a}"/>`; for (let j = 0; j < Math.ceil(h / u); j++) for (let i = 0; i < Math.ceil(w / u); i++) if ((i + j) % 2) s += `<rect x="${i * u}" y="${j * u}" width="${u}" height="${u}" fill="${b}"/>`; return s; }

export const svgWrap = (w, h, inner, cls = 'art') => `<svg class="${cls}" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

export const FONTS = {
  maru: `'Zen Maru Gothic','Noto Sans JP',sans-serif`,
  go: `'Zen Kaku Gothic New','Noto Sans JP',sans-serif`,
  min: `'Shippori Mincho','Zen Old Mincho',serif`,
  jo: `'Jost','Zen Maru Gothic',sans-serif`,
};

// HTMLのブロック見出し（--c 色, --p スタッド間隔）
export const baseCss = `
*{margin:0;padding:0;box-sizing:border-box}
html,body{background:#fff}
body{-webkit-font-smoothing:antialiased;font-feature-settings:"palt" 1}
.d{position:relative;overflow:hidden;font-family:${FONTS.maru};color:#1b1b1f}
.d>svg.art{position:absolute;inset:0;width:100%;height:100%}
.abs{position:absolute}
.maru{font-family:${FONTS.maru}}.go{font-family:${FONTS.go}}.min{font-family:${FONTS.min}}.jo{font-family:${FONTS.jo};font-variant-numeric:lining-nums}
.b9{font-weight:900}.b7{font-weight:700}.b5{font-weight:500}
.v{writing-mode:vertical-rl;text-orientation:upright}
.brk{position:relative;display:inline-block;background:var(--c,#e4372c);color:var(--t,#fff);border-radius:8px;margin-top:calc(var(--p,40px)*.26);box-shadow:inset 0 -.14em 0 rgba(0,0,0,.14),inset 0 .07em 0 rgba(255,255,255,.25)}
.brk::before{content:"";position:absolute;left:calc(var(--p,40px)*.2);right:calc(var(--p,40px)*.2);top:calc(var(--p,40px)*-.22);height:calc(var(--p,40px)*.24);background:repeating-linear-gradient(90deg,var(--c,#e4372c) 0 calc(var(--p,40px)*.6),transparent calc(var(--p,40px)*.6) var(--p,40px));filter:brightness(1.1);border-radius:4px 4px 0 0}
.pill{display:inline-block;border-radius:999px}
.sh{box-shadow:0 .35em 0 rgba(0,0,0,.14)}
`;
export const GF = `<link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Shippori+Mincho:wght@500;700;800&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=Zen+Maru+Gothic:wght@500;700;900&display=swap" rel="stylesheet">`;

// ── ドット数字（5×7）をスタッドで並べる
const DIG = {
  0: '01110 10001 10011 10101 11001 10001 01110', 1: '00100 01100 00100 00100 00100 00100 01110', 2: '01110 10001 00001 00010 00100 01000 11111',
  3: '11110 00001 00001 01110 00001 00001 11110', 4: '00010 00110 01010 10010 11111 00010 00010', 5: '11111 10000 11110 00001 00001 10001 01110',
  6: '00110 01000 10000 11110 10001 10001 01110', 7: '11111 00001 00010 00100 01000 01000 01000', 8: '01110 10001 10001 01110 10001 10001 01110',
  9: '01110 10001 10001 01111 00001 00010 01100', '%': '11001 11010 00010 00100 01000 01011 10011', '-': '00000 00000 00000 11111 00000 00000 00000', '.': '00000 00000 00000 00000 00000 01100 01100',
  '+': '00000 00100 00100 11111 00100 00100 00000',
};
export function pix({ x, y, u, text, color, gap = 0, space = 1 }) {
  let s = `<g transform="translate(${x} ${y})">`, ox = 0;
  for (const ch of String(text)) {
    const rows = (DIG[ch] || DIG['-']).split(' ');
    rows.forEach((r, j) => [...r].forEach((v, i) => { if (v === '1') s += stud((ox + i) * u, j * u, u, Array.isArray(color) ? color[(i + j) % color.length] : color, gap); }));
    ox += 5 + space;
  }
  return s + '</g>';
}
export const pixW = (text, u, space = 1) => ([...String(text)].length * (5 + space) - space) * u;
