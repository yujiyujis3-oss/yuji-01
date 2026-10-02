import { P, S, spr, mosaic, plate, tiles, brick, flat, checker, pix, pixW, stud, lite, dark, svgWrap, rng } from './lib.js';

const SZ = { ig45: [1080, 1350], sq: [1080, 1080], story: [1080, 1920], a5: [874, 1240], a4: [1240, 1754] };
const D = (id, fmt, title, usage, body, extra = {}) => ({ id, fmt, title, usage, w: SZ[fmt][0], h: SZ[fmt][1], body, ...extra });
const B = (c, p, t = P.plum) => `--c:${c};--p:${p}px;--t:${t}`;
const T = (s, css) => `<div class="abs" style="${css}">${s}</div>`;
const INK = P.plum;

export default [
  // e19 無料カウンセリングの流れ（ストーリーズ）
  D('e19', 'story', '無料カウンセリングの流れ', 'Instagramストーリーズ', (() => {
    const W = 1080, H = 1920;
    const steps = [['LINEで友だち追加', 'プロフィールのリンクから', P.pRose], ['日時をえらぶ', 'トーク画面から24時間予約OK', P.pLilac], ['無料カウンセリング', '肌・毛の状態をチェック（約30分）', P.pMint], ['プランをご提案', 'その場での契約は不要です', P.pButter]];
    let art = `${plate({ w: W, h: H, u: 90, color: '#f3ebff', alt: '#eadcff', seed: 19 })}<rect x="150" y="640" width="14" height="940" fill="${INK}" opacity=".18" rx="7"/>`;
    steps.forEach((s, i) => { art += `<rect x="70" y="${650 + i * 240}" width="940" height="200" rx="26" fill="#000" opacity=".1" transform="translate(0 10)"/><rect x="70" y="${650 + i * 240}" width="940" height="200" rx="26" fill="#fff"/>` + mosaic({ x: 800, y: 670 + i * 240, u: 6.5, cols: 24, rows: 24, layers: [spr.chat(P.pRose), spr.calendar(P.pRose), spr.heart(P.pRose), spr.check(P.green)][i] }); });
    return `${svgWrap(W, H, art)}
    ${T('FREE COUNSELING', `left:80px;top:120px;font-size:32px;font-weight:900;color:#7b5bd0;letter-spacing:.34em`)}
    ${T('はじめてでも、<br>安心の4ステップ。', `left:76px;top:190px;font-size:92px;font-weight:900;line-height:1.16;color:${INK}`)}
    ${steps.map((s, i) => T(`<span class="brk jo b9" style="${B(s[2], 36)};font-size:56px;width:96px;text-align:center;padding:6px 0 14px">${i + 1}</span><div style="margin-left:30px"><div class="b9" style="font-size:42px;color:${INK}">${s[0]}</div><div class="b7" style="font-size:24px;color:#7a5a6e;margin-top:6px">${s[1]}</div></div>`, `left:100px;top:${686 + i * 240}px;display:flex;align-items:center;width:700px`)).join('')}
    <div class="abs" style="left:80px;right:80px;bottom:110px"><div class="brk b9" style="${B(INK, 60, '#fff')};display:block;text-align:center;font-size:48px;padding:28px 0 38px">LINEで予約する →</div></div>
    ${T('カウンセリング無料・無理な勧誘はいたしません', 'left:0;right:0;bottom:58px;text-align:center;font-size:24px;font-weight:700;color:#6a5a8a')}`;
  })()),

  // e20 コース比較（IG 4:5）— 3カラム
  D('e20', 'ig45', '脱毛コース3プラン比較', 'Instagram投稿・広告', (() => {
    const W = 1080, H = 1350;
    const pl = [['LIGHT', 'ライト', P.pPink, '¥3,980', ['ワキ＋ひざ下', '6回コース'], false], ['STANDARD', 'スタンダード', P.pRose, '¥5,900', ['全身（顔・VIO込）', '12回コース', '回数追加OK'], true], ['PREMIUM', 'プレミアム', P.pLilac, '¥8,900', ['全身（顔・VIO込）', '通い放題', 'ケア用品付き'], false]];
    let art = `${plate({ w: W, h: 330, u: 60, color: P.pPeach, alt: lite(P.pPeach, .3), seed: 20 })}<rect y="330" width="${W}" height="${H - 330}" fill="#fffaf6"/>`;
    pl.forEach((p, i) => { const x = 50 + i * 330, y = p[5] ? 400 : 450, h = p[5] ? 700 : 650; art += `<rect x="${x}" y="${y + 10}" width="310" height="${h}" rx="26" fill="#000" opacity=".1"/><rect x="${x}" y="${y}" width="310" height="${h}" rx="26" fill="#fff" stroke="${p[2]}" stroke-width="${p[5] ? 8 : 5}"/>`; });
    art += mosaic({ x: 398, y: 332, u: 3.4, cols: 36, rows: 36, layers: spr.crown(P.pButter) });
    return `${svgWrap(W, H, art)}
    ${T('COURSE PLAN', `left:64px;top:64px;font-size:28px;font-weight:900;color:${INK};letter-spacing:.4em`)}
    ${T('あなたに合う<br>プランは？', `left:58px;top:112px;font-size:80px;font-weight:900;line-height:1.12;color:${INK}`)}
    ${pl.map((p, i) => { const x = 50 + i * 330, y = p[5] ? 400 : 450; return T(`<div style="text-align:center"><span class="brk jo b9" style="${B(p[2], 26, p[5] ? '#fff' : INK)};font-size:24px;padding:6px 18px 12px;letter-spacing:.1em">${p[0]}</span><div class="b9" style="font-size:36px;margin-top:22px;color:${INK}">${p[1]}</div><div class="jo b9" style="font-size:58px;margin-top:14px;color:${p[5] ? P.pRose : INK}">${p[3]}</div><div class="b7" style="font-size:20px;color:#7a5a6e">月々〜（税込）</div><div style="margin-top:26px;text-align:left;padding:0 26px">${p[4].map((t) => `<div class="b9" style="font-size:22px;border-top:3px dotted #eadcf0;padding:12px 0;color:${INK}">✓ ${t}</div>`).join('')}</div></div>`, `left:${x}px;top:${y + 50}px;width:310px`); }).join('')}
    ${T('人気No.1', `left:432px;top:374px;font-size:20px;font-weight:900;color:${INK};display:none`)}
    ${T('※医療行為ではありません。効果には個人差があります。分割手数料は別途（サンプル表記）。', 'left:60px;bottom:50px;width:960px;font-size:19px;font-weight:700;line-height:1.6;color:#8a6b7c')}`;
  })()),

  // e21 疲労回復ヘッド＆フェイシャル（正方形）— 3つのアイテム
  D('e21', 'sq', '仕事終わりのヘッド＆フェイシャル', 'Instagram投稿', (() => {
    const W = 1080, H = 1080;
    const items = [[spr.candle(P.pRose), 'アロマ', '#fff'], [spr.towel('#6ec6a5'), 'ホットタオル', '#fff'], [spr.lotus('#a98be3'), 'ヘッドケア', '#fff']];
    let art = `${plate({ w: W, h: H, u: 60, color: '#2e2a52', alt: '#383363', seed: 211 })}`;
    items.forEach((it, i) => { const x = 60 + i * 332; art += `<rect x="${x}" y="500" width="304" height="360" rx="26" fill="${it[2]}"/>` + mosaic({ x: x + 22, y: 540, u: 11.5, cols: 24, rows: 24, layers: it[0] }).replace(/<g /, '<g '); });
    return `${svgWrap(W, H, art)}
    ${T('HEAD & FACIAL', `left:64px;top:76px;font-size:30px;font-weight:900;color:${P.pLilac};letter-spacing:.4em`)}
    ${T('仕事終わりの<br>90分。', `left:58px;top:128px;font-size:100px;font-weight:900;line-height:1.12;color:#fff`)}
    ${items.map((it, i) => T(it[1], `left:${60 + i * 332}px;width:304px;text-align:center;top:810px;font-size:30px;font-weight:900;color:${INK}`)).join('')}
    <div class="abs" style="left:60px;bottom:50px"><div class="brk b9" style="${B(P.pButter, 40)};font-size:32px;padding:12px 28px 20px">ヘッド＆フェイシャル 90分 <span class="jo" style="font-size:52px">¥9,900</span></div></div>`;
  })()),

  // e22 2周年（A5）— ブロックのケーキ
  D('e22', 'a5', '2周年 感謝のご優待', 'チラシ（A5）', (() => {
    const W = 874, H = 1240;
    let art = `${checker({ w: W, h: H, u: 109.25, a: '#fff2f6', b: '#ffe4ed' })}`;
    const tiers = [[7, P.pPink, 130], [5, P.pRose, 130], [3, P.pLilac, 130]];
    let y = 600; const cx = W / 2;
    tiers.forEach(([c, col, h]) => { y -= h; art += brick({ x: cx - (c * 60) / 2, y, cols: c, u: 60, color: col, h }); });
    art += `<rect x="${cx - 240}" y="600" width="480" height="20" rx="8" fill="${INK}" opacity=".85"/>`;
    for (let i = 0; i < 3; i++) art += `<rect x="${cx - 90 + i * 90 - 6}" y="${y - 70}" width="12" height="60" rx="4" fill="${[P.pSky, P.pButter, P.pMint][i]}"/><ellipse cx="${cx - 90 + i * 90}" cy="${y - 86}" rx="10" ry="16" fill="${P.orange}"/>`;
    art += mosaic({ x: 80, y: 120, u: 5, cols: 36, rows: 36, layers: spr.spark(P.pRose) }) + mosaic({ x: 650, y: 100, u: 5, cols: 36, rows: 36, layers: spr.heart(P.pRose) });
    return `${svgWrap(W, H, art)}
    ${T('2nd ANNIVERSARY', `left:0;right:0;top:44px;text-align:center;font-size:26px;font-weight:900;color:${P.pRose};letter-spacing:.4em`)}
    ${T('ありがとう、2周年', `left:0;right:0;top:640px;text-align:center;font-size:64px;font-weight:900;color:${INK}`)}
    ${[['全コース', '10%OFF'], ['初回体験', '¥2,980'], ['お友だち紹介', '¥3,000 OFF']].map((r, i) => T(`<div style="display:flex;justify-content:space-between;align-items:baseline"><span class="b9" style="font-size:32px;color:${INK}">${r[0]}</span><span class="jo b9" style="font-size:44px;color:${P.pRose}">${r[1]}</span></div>`, `left:70px;right:70px;top:760px;margin-top:${i * 82}px;border-bottom:4px dotted #e6c9d6;padding-bottom:6px`)).join('')}
    ${T('期間：11/1〜11/30　※税込・一部対象外メニューあり', 'left:70px;top:1030px;font-size:19px;font-weight:700;color:#8a6b7c')}
    <div class="abs" style="left:56px;right:56px;bottom:50px"><div class="brk b9" style="${B(INK, 40, '#fff')};display:block;text-align:center;font-size:32px;padding:20px 0 28px">LINEからご予約ください</div></div>`;
  })()),

  // e23 コンセプト（IG 4:5）— 縦書き＋芽吹き
  D('e23', 'ig45', '肌は、育てるもの。', 'Instagram投稿・ブランドコンセプト', (() => {
    const W = 1080, H = 1350;
    const g = [P.pMint, '#8fd3b0', '#5fbf93'];
    let art = `${plate({ w: W, h: H, u: 60, color: '#e6f6ee', alt: '#d9efe3', seed: 23 })}
    ${brick({ x: 80, y: 1130, cols: 8, u: 60, color: '#b98a64', h: 140 })}${brick({ x: 140, y: 1010, cols: 6, u: 60, color: '#c89d78', h: 120 })}`;
    art += mosaic({ x: 60, y: 480, u: 21, cols: 24, rows: 24, layers: [[S.line(12, 22, 12, 9, 1.5), '#4aa87e'], [S.and(S.circ(7.5, 8.5, 6), S.rect(0, 0, 12, 24)), g[1]], [S.and(S.circ(16.5, 6.5, 6), S.rect(12, 0, 24, 24)), g[0]], [S.ell(12, 14, 3.6, 2), g[2]], [S.circ(12, 3.5, 2.6), P.pPink]] });
    return `${svgWrap(W, H, art)}
    ${T('SKIN GROWTH', `left:64px;top:84px;font-size:28px;font-weight:900;color:#3f9a73;letter-spacing:.4em`)}
    <div class="abs v b9" style="right:90px;top:130px;font-size:112px;line-height:1.3;color:${INK};letter-spacing:.06em;height:1000px">肌は、<br>育てるもの。</div>
    ${T('ていねいなカウンセリングと、<br>続けやすい通い方で、<br>素肌と向き合います。', `left:66px;top:290px;font-size:30px;font-weight:700;line-height:1.9;color:${INK}`)}
    <div class="abs" style="left:60px;bottom:96px"><div class="brk b9" style="${B(INK, 40, '#fff')};font-size:34px;padding:14px 30px 22px">Éclat ／ 初回カウンセリング無料</div></div>`;
  })()),

  // e24 フェイシャルメニュー（A4）— 6アイコンカード
  D('e24', 'a4', 'フェイシャルメニュー', '店内メニュー・Web（A4）', (() => {
    const W = 1240, H = 1754;
    const m = [[spr.drop(P.pSky), 'ベーシック', '60分', '¥6,600', P.pSky], [spr.mirror(P.pRose), '毛穴ケア', '75分', '¥8,800', P.pPink], [spr.sun(P.pButter), 'ホワイトニング', '75分', '¥9,900', P.pButter], [spr.leaf(P.green), '敏感肌ケア', '60分', '¥7,700', P.pMint], [spr.lotus(P.pLilac), 'エイジングケア', '90分', '¥11,000', P.pLilac], [spr.crown(P.orange), 'プレミアム', '120分', '¥16,500', P.pPeach]];
    let art = `<rect width="${W}" height="${H}" fill="#fffaf5"/>${plate({ w: W, h: 280, u: 62, color: P.pPeach, alt: lite(P.pPeach, .3), seed: 24 })}`;
    m.forEach((it, i) => { const x = 80 + (i % 2) * 536, y = 370 + Math.floor(i / 2) * 400; art += `<rect x="${x}" y="${y + 10}" width="508" height="360" rx="26" fill="#000" opacity=".08"/><rect x="${x}" y="${y}" width="508" height="360" rx="26" fill="#fff" stroke="${it[4]}" stroke-width="6"/><rect x="${x + 30}" y="${y + 30}" width="160" height="160" rx="18" fill="${it[4]}" opacity=".5"/>` + mosaic({ x: x + 40, y: y + 40, u: 6.1, cols: 24, rows: 24, layers: it[0] }); });
    return `${svgWrap(W, H, art)}
    ${T('FACIAL MENU', `left:80px;top:52px;font-size:28px;font-weight:900;color:${INK};letter-spacing:.4em`)}
    ${T('フェイシャル<br>メニュー', `left:76px;top:96px;font-size:84px;font-weight:900;line-height:1.1;color:${INK}`)}
    ${m.map((it, i) => { const x = 80 + (i % 2) * 536, y = 370 + Math.floor(i / 2) * 400; return T(`<div class="b9" style="font-size:36px;color:${INK}">${it[1]}</div><div class="b7" style="font-size:24px;color:#7a5a6e;margin-top:4px">${it[2]}</div>`, `left:${x + 214}px;top:${y + 52}px`) + T(`<span class="jo b9" style="font-size:66px;color:${INK}">${it[3]}</span><span class="b7" style="font-size:22px;color:#7a5a6e"> 税込</span>`, `left:${x + 34}px;top:${y + 244}px`); }).join('')}
    ${T('※効果・感じ方には個人差があります。カウンセリング後に肌状態に合わせてご案内します。', 'left:80px;bottom:56px;font-size:21px;font-weight:700;color:#8a6b7c')}`;
  })()),

  // e25 お友だち紹介（正方形）
  D('e25', 'sq', 'お友だち紹介キャンペーン', 'Instagram投稿', (() => {
    const W = 1080, H = 1080;
    const art = `${plate({ w: W, h: H, u: 60, color: P.pPink, alt: lite(P.pPink, .3), seed: 25 })}
    <rect x="60" y="400" width="450" height="450" rx="28" fill="${P.pLilac}"/><rect x="570" y="400" width="450" height="450" rx="28" fill="${P.pMint}"/>
    ${mosaic({ x: 80, y: 420, u: 17, cols: 24, rows: 24, layers: spr.face(P.skin, '#7a4b2d') })}${mosaic({ x: 590, y: 420, u: 17, cols: 24, rows: 24, layers: spr.face('#f1c9ad', '#2b1d17') })}
    ${mosaic({ x: 456, y: 560, u: 5, cols: 36, rows: 36, layers: spr.heart(P.pRose) })}`;
    return `${svgWrap(W, H, art)}
    ${T('FRIEND CAMPAIGN', `left:64px;top:70px;font-size:28px;font-weight:900;color:#fff;letter-spacing:.4em`)}
    ${T('紹介すると、<br>ふたりとも。', `left:58px;top:118px;font-size:90px;font-weight:900;line-height:1.12;color:${INK}`)}
    <div class="abs" style="left:0;right:0;bottom:70px;text-align:center"><div class="brk b9" style="${B(INK, 50, '#fff')};font-size:44px;padding:16px 40px 26px"><span class="jo" style="font-size:78px;color:${P.pButter}">¥3,000</span> OFF</div></div>
    ${T('ご紹介者・お友だち（初回）ともに次回のご利用に使えます ※税込', 'left:0;right:0;bottom:30px;text-align:center;font-size:19px;font-weight:700;color:#7a4a64')}`;
  })()),
];
