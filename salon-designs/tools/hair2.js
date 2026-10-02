import { P, S, spr, mosaic, plate, brick, flat, checker, pix, pixW, stud, lite, dark, svgWrap, rng } from './lib.js';

const SZ = { ig45: [1080, 1350], sq: [1080, 1080], story: [1080, 1920], a5: [874, 1240], a4: [1240, 1754], banner: [1200, 628], line: [1250, 843], card: [1200, 1500] };
const D = (id, fmt, title, usage, body, extra = {}) => ({ id, fmt, title, usage, w: SZ[fmt][0], h: SZ[fmt][1], body, ...extra });
const B = (c, p, t = '#fff') => `--c:${c};--p:${p}px;--t:${t}`;
const T = (s, css) => `<div class="abs" style="${css}">${s}</div>`;

export default [
  // h09 髪質改善 BEFORE/AFTER（IG 4:5）— ごちゃごちゃ→そろう
  D('h09', 'ig45', '髪質改善トリートメント', 'Instagram投稿・広告', (() => {
    const W = 1080, H = 1350, hc = '#7a4a34', u = 13.3;
    const art = `${plate({ w: W, h: H, u: 60, color: P.yellow, alt: lite(P.yellow, .12), seed: 9 })}
    <rect x="50" y="510" width="480" height="480" rx="20" fill="#000" opacity=".15" transform="translate(0 10)"/><rect x="50" y="510" width="480" height="480" rx="20" fill="#fff"/>
    <rect x="550" y="510" width="480" height="480" rx="20" fill="#000" opacity=".15" transform="translate(0 10)"/><rect x="550" y="510" width="480" height="480" rx="20" fill="#fff"/>
    ${mosaic({ x: 62, y: 522, u: 16 * 0.83, cols: 36, rows: 36, bgColor: '#dbe9f7', layers: spr.longhair(hc, P.skin), fuzz: { from: hc, to: ['#c9a07f', '#3d2418', '#e6c9ad', '#a05a38'], p: .5, seed: 4 } })}
    ${mosaic({ x: 562, y: 522, u: 16 * 0.83, cols: 36, rows: 36, bgColor: '#dbe9f7', layers: spr.longhair(hc, P.skin) })}
    ${mosaic({ x: 489, y: 690, u: 3.2, cols: 36, rows: 36, layers: [[S.poly([[3, 4], [16, 12], [3, 20]]), P.red]] })}`;
    return `${svgWrap(W, H, art)}
    ${T(`<span class="brk b9" style="${B(P.red, 34)};font-size:30px;padding:8px 26px 12px;letter-spacing:.12em">髪質改善</span>`, 'left:56px;top:70px')}
    ${T('ごわごわが、<br><span style="background:#fff;padding:0 14px;color:' + P.blue + '">つるん</span>と<br>そろう。', 'left:54px;top:140px;font-size:84px;font-weight:900;line-height:1.14;letter-spacing:.01em')}
    ${T(`<span class="brk b9" style="${B(P.ink, 30, P.yellow)};font-size:28px;padding:6px 24px 10px;letter-spacing:.2em">BEFORE</span>`, 'left:70px;top:458px')}
    ${T(`<span class="brk b9" style="${B(P.blue, 30)};font-size:28px;padding:6px 24px 10px;letter-spacing:.2em">AFTER</span>`, 'left:570px;top:458px')}
    <div class="abs" style="left:50px;bottom:56px"><div class="brk b9" style="${B(P.ink, 42, '#fff')};font-size:40px;padding:18px 36px 26px;letter-spacing:.04em">髪質改善トリートメント <span class="jo" style="color:${P.yellow};font-size:56px">¥7,700</span></div></div>
    ${T('※仕上がりには個人差があります（施術例のイメージ）', 'left:56px;bottom:20px;font-size:20px;font-weight:700;color:#7a6200')}`;
  })()),

  // h10 白髪ぼかしハイライト（横バナー）
  D('h10', 'banner', '白髪ぼかしハイライト 40・50代向け', 'Webバナー・Googleビジネス（1200×628）', (() => {
    const W = 1200, H = 628, hc = '#5a3a2a';
    const art = `${plate({ w: W, h: H, u: 52, color: P.green, alt: lite(P.green, .1), seed: 10 })}
    <rect x="690" y="50" width="470" height="530" rx="24" fill="#000" opacity=".16" transform="translate(0 10)"/><rect x="690" y="50" width="470" height="530" rx="24" fill="#fff4d6"/>
    ${mosaic({ x: 690, y: 60, u: 470 / 36 * 1, cols: 36, rows: 36, layers: spr.longhair(hc, P.skin), fuzz: { from: hc, to: ['#d8d4cf', '#efece8', '#b9b3ab'], p: .32, seed: 6 } })}`;
    return `${svgWrap(W, H, art)}
    ${T(`<span class="brk b9" style="${B(P.yellow, 34, P.ink)};font-size:26px;padding:8px 24px 12px;letter-spacing:.1em">40代・50代の方へ</span>`, 'left:60px;top:60px')}
    ${T('白髪を、<br>活かす。', 'left:56px;top:130px;font-size:104px;font-weight:900;line-height:1.1;color:#fff;text-shadow:0 7px 0 rgba(0,0,0,.18)')}
    ${T('白髪ぼかしハイライト', 'left:62px;top:372px;font-size:40px;font-weight:900;color:#fff;letter-spacing:.06em')}
    ${T('染め直しの頻度が減って、伸びても気にならない。', 'left:62px;top:430px;font-size:22px;font-weight:700;color:#fff;letter-spacing:.04em')}
    <div class="abs" style="left:56px;bottom:40px"><div class="brk b9 jo" style="${B(P.ink, 40, '#fff')};font-size:50px;padding:6px 32px 14px">¥12,100<span class="maru" style="font-size:24px;color:${P.yellow};margin-left:12px">〜 カット込・税込</span></div></div>`;
  })()),

  // h11 LINE友だち追加クーポン（ストーリーズ）
  D('h11', 'story', 'LINE友だち追加クーポン', 'Instagramストーリーズ', (() => {
    const W = 1080, H = 1920;
    const art = `${checker({ w: W, h: H, u: 120, a: '#1faa4d', b: '#27b957' })}
    ${mosaic({ x: 240, y: 330, u: 25, cols: 24, rows: 24, layers: spr.chat('#fff') })}
    ${mosaic({ x: 80, y: 250, u: 4.5, cols: 36, rows: 36, layers: spr.spark(P.yellow) })}${mosaic({ x: 800, y: 700, u: 5, cols: 36, rows: 36, layers: spr.heart(P.pink) })}`;
    const step = (n, c, t, s, y) => T(`<div style="display:flex;align-items:center;gap:30px"><span class="brk jo b9" style="${B(c, 44, P.ink)};font-size:62px;width:104px;text-align:center;padding:6px 0 14px">${n}</span><div><div class="b9" style="font-size:44px;color:#fff;letter-spacing:.04em">${t}</div><div class="b7" style="font-size:26px;color:#d9f5e2;margin-top:6px">${s}</div></div></div>`, `left:90px;top:${y}px`);
    return `${svgWrap(W, H, art)}
    ${T('LINE FRIENDS', `left:0;right:0;top:110px;text-align:center;font-size:30px;font-weight:900;color:#fff;letter-spacing:.4em`)}
    ${T('友だち追加で', 'left:0;right:0;top:960px;text-align:center;font-size:58px;font-weight:900;color:#fff;letter-spacing:.06em')}
    <div class="abs" style="left:0;right:0;top:1030px;text-align:center"><span class="brk b9 jo" style="${B(P.yellow, 80, P.ink)};font-size:178px;line-height:1;padding:8px 54px 22px">¥1,000<span class="maru" style="font-size:80px"> OFF</span></span></div>
    ${step('1', P.yellow, '友だち追加', 'プロフィールのリンクから', 1330)}${step('2', P.sky, '予約メニューを選ぶ', 'トーク画面から24時間OK', 1478)}${step('3', P.pink, 'ご来店でクーポン提示', '初回のお客様限定', 1626)}`;
  })()),

  // h12 学割U24（A5チラシ）
  D('h12', 'a5', '学割U24 チラシ', 'チラシ・学校配布（A5）', (() => {
    const W = 874, H = 1240;
    const art = `${checker({ w: W, h: H, u: 109.25, a: P.orange, b: '#ff9c3f' })}
    <rect x="40" y="250" width="794" height="360" rx="26" fill="#000" opacity=".16" transform="translate(0 12)"/><rect x="40" y="250" width="794" height="360" rx="26" fill="#fff"/>
    ${pix({ x: 78, y: 296, u: 25, text: '20%', color: [P.red, '#ff5a4a'] })}
    ${mosaic({ x: 590, y: 262, u: 6, cols: 36, rows: 36, layers: spr.star(P.yellow) })}`;
    return `${svgWrap(W, H, art)}
    ${T(`<span class="brk b9" style="${B(P.blue, 42)};font-size:44px;padding:12px 36px 18px;letter-spacing:.1em">学割U24</span>`, 'left:46px;top:62px')}
    ${T('学生・24歳以下は', 'left:48px;top:152px;font-size:44px;font-weight:900;color:#fff;letter-spacing:.04em')}
    ${T('<span style="color:' + P.red + '">OFF</span>', 'left:536px;top:410px;font-size:110px;font-weight:900;line-height:1')}
    ${T('いつでも！', 'left:520px;top:212px;font-size:0px')}
    ${[['カット', '¥4,400→¥3,520'], ['カット＋カラー', '¥9,900→¥7,920'], ['カット＋パーマ', '¥11,000→¥8,800']].map((r, i) => T(`<div style="display:flex;justify-content:space-between;align-items:baseline"><span class="b9" style="font-size:34px;color:#fff">${r[0]}</span><span class="jo b9" style="font-size:38px;color:#fff">${r[1]}</span></div>`, `left:60px;right:60px;top:${680 + i * 88}px;border-bottom:4px dotted rgba(255,255,255,.55);padding-bottom:10px`)).join('')}
    ${T('※ご来店時に学生証等をご提示ください／税込／他クーポン併用不可', 'left:60px;top:970px;font-size:19px;font-weight:700;color:#fff')}
    <div class="abs" style="left:46px;right:46px;bottom:46px"><div class="brk b9" style="${B(P.ink, 40)};display:block;text-align:center;font-size:36px;padding:22px 0 30px">LINEで予約 ／ pop hair 03-0000-0000</div></div>`;
  })()),

  // h13 メンズ（IG 4:5）— ダーク
  D('h13', 'ig45', "メンズカット＆フェード", 'Instagram投稿', (() => {
    const W = 1080, H = 1350;
    const art = `${plate({ w: W, h: H, u: 60, color: '#25272d', alt: '#2d3037', seed: 13 })}
    <rect x="300" y="250" width="720" height="720" rx="26" fill="${P.orange}"/>
    ${mosaic({ x: 300, y: 250, u: 20, cols: 36, rows: 36, layers: spr.shorthair('#1b1b1f', P.skin), fuzz: { from: '#1b1b1f', to: ['#3a3d47', '#14151a'], p: .3, seed: 3 } })}
    ${brick({ x: 60, y: 300, cols: 4, u: 52, color: P.red, h: 90 })}${brick({ x: 60, y: 410, cols: 4, u: 52, color: P.yellow, h: 90 })}${brick({ x: 60, y: 520, cols: 4, u: 52, color: P.blue, h: 90 })}`;
    return `${svgWrap(W, H, art)}
    ${T("MEN'S GROOMING", `left:62px;top:84px;font-size:30px;font-weight:900;color:${P.orange};letter-spacing:.34em`)}
    ${T('清潔感は、<br>最強の武器。', 'left:58px;top:130px;font-size:80px;font-weight:900;line-height:1.1;color:#fff;letter-spacing:.01em;display:none')}
    ${T('清潔感は、<br>武器になる。', 'left:58px;top:126px;font-size:78px;font-weight:900;line-height:1.12;color:#fff')}
    ${T('カット', 'left:78px;top:322px;font-size:30px;font-weight:900;color:#fff')}${T('フェード', 'left:78px;top:432px;font-size:30px;font-weight:900;color:' + P.ink)}${T('パーマ', 'left:78px;top:542px;font-size:30px;font-weight:900;color:#fff')}
    ${T('忙しい朝でも<br>ワックスなしで決まる。', 'left:62px;top:1010px;font-size:36px;font-weight:700;line-height:1.7;color:#d6d8df;letter-spacing:.04em')}
    <div class="abs" style="left:58px;bottom:66px"><div class="brk b9" style="${B(P.orange, 44, P.ink)};font-size:40px;padding:16px 36px 24px;letter-spacing:.04em">メンズカット <span class="jo" style="font-size:62px">¥4,950</span><span style="font-size:24px"> 税込</span></div></div>`;
  })()),

  // h14 ショップカード（表裏）
  D('h14', 'card', 'ショップカード 表裏', 'ショップカード・名刺サイズ（91×55mm 表裏）', (() => {
    const W = 1200, H = 1500;
    const art = `${checker({ w: W, h: H, u: 100, a: '#eef0f4', b: '#e4e7ee' })}
    <rect x="100" y="110" width="1000" height="606" rx="30" fill="#000" opacity=".18" transform="translate(0 16)"/><rect x="100" y="110" width="1000" height="606" rx="30" fill="${P.red}"/>
    ${plate({ x: 100, y: 110, w: 1000, h: 606, u: 101, color: P.red, alt: lite(P.red, .08), seed: 14 })}
    ${mosaic({ x: 720, y: 190, u: 12, cols: 24, rows: 24, layers: spr.scissors(P.yellow, P.white) })}
    <rect x="100" y="784" width="1000" height="606" rx="30" fill="#000" opacity=".18" transform="translate(0 16)"/><rect x="100" y="784" width="1000" height="606" rx="30" fill="#fff"/>
    ${[P.red, P.yellow, P.blue, P.green].map((c, i) => brick({ x: 100 + i * 250, y: 1318, cols: 4, u: 62, color: c, h: 72, r: 4 })).join('')}
    ${mosaic({ x: 806, y: 836, u: 7, cols: 36, rows: 36, layers: spr.pin(P.red) })}`;
    return `${svgWrap(W, H, art)}
    ${T('hair studio', 'left:150px;top:170px;font-size:34px;font-weight:900;color:#fff;letter-spacing:.34em')}
    ${T('POP', 'left:146px;top:226px;font-size:230px;font-weight:900;line-height:1;color:#fff;letter-spacing:.02em;text-shadow:0 12px 0 rgba(0,0,0,.18)')}
    ${T('カット・カラー・パーマ', 'left:152px;top:552px;font-size:34px;font-weight:700;color:#fff;letter-spacing:.14em')}
    ${T('東京都〇〇区〇〇 1-2-3 2F', 'left:160px;top:862px;font-size:34px;font-weight:900;letter-spacing:.06em')}
    ${T('TEL 03-0000-0000', 'left:158px;top:930px;font-size:52px;font-weight:900;color:' + P.red + ';letter-spacing:.04em')}
    ${T('営業 10:00〜19:00（最終受付 18:00）<br>定休日 毎週火曜・第3月曜', 'left:160px;top:1030px;font-size:30px;font-weight:700;line-height:1.7;color:#444;letter-spacing:.04em')}
    ${T('LINE予約はこちら → @pophair（サンプル）', 'left:160px;top:1198px;font-size:28px;font-weight:900;color:' + P.blue)}`;
  })()),

  // h15 ブライダル（IG 4:5）
  D('h15', 'ig45', 'ブライダルヘアセット', 'Instagram投稿', (() => {
    const W = 1080, H = 1350, gold = '#e2b23c';
    const art = `${plate({ w: W, h: H, u: 60, color: '#f1ede4', alt: '#e8e2d3', seed: 15 })}
    ${mosaic({ x: 200, y: 330, u: 23.3, cols: 36, rows: 36, layers: spr.crown(gold) })}`;
    return `${svgWrap(W, H, art)}
    ${T('BRIDAL HAIR SET', `left:0;right:0;top:92px;text-align:center;font-size:30px;font-weight:900;color:${gold};letter-spacing:.42em`)}
    ${T('いちばんの日を、<br>いちばんの髪で。', `left:0;right:0;top:150px;text-align:center;font-size:72px;font-weight:900;line-height:1.3;color:#5b4a2c;letter-spacing:.04em`)}
    ${T('挙式・前撮り　ヘアセット＆リハーサル', `left:0;right:0;top:930px;text-align:center;font-size:32px;font-weight:900;color:#5b4a2c;letter-spacing:.06em`)}
    ${T(`<span class="brk b9" style="${B(gold, 44, '#fff')};font-size:44px;padding:14px 40px 22px">ヘアセット <span class="jo" style="font-size:62px">¥8,800</span>〜</span>`, 'left:0;right:0;bottom:96px;text-align:center')}
    ${T('前撮り・結婚式 ご予約は3ヶ月前から承ります', 'left:0;right:0;bottom:54px;text-align:center;font-size:23px;font-weight:700;color:#8a7a5a')}`;
  })()),

  // h16 縮毛矯正（正方形）— くせ毛が、まっすぐ
  D('h16', 'sq', '縮毛矯正 くせ毛がまっすぐ', 'Instagram投稿', (() => {
    const W = 1080, H = 1080;
    const strand = (i) => (x, y) => { const amp = 3.2 * Math.max(0, 1 - y / 20); const cx = 2.6 + i * 3.1 + amp * Math.sin(y * 0.85 + i * 0.9); return Math.abs(x - cx) < 1.15 && y > 1 && y < 23.4; };
    const layers = Array.from({ length: 7 }, (_, i) => [strand(i), ['#6a3f2a', '#8a5a40', '#4d2c1d'][i % 3]]);
    const art = `${plate({ w: W, h: H, u: 60, color: P.blue, alt: lite(P.blue, .08), seed: 16 })}
    <rect x="560" y="120" width="460" height="840" rx="24" fill="#000" opacity=".16" transform="translate(0 10)"/><rect x="560" y="120" width="460" height="840" rx="24" fill="#fff6e0"/>
    ${mosaic({ x: 570, y: 150, u: 440 / 24 * 1, cols: 24, rows: 24, layers, bgColor: null })}
    ${mosaic({ x: 570, y: 150, u: 440 / 24, cols: 24, rows: 24, layers: [] })}`;
    return `${svgWrap(W, H, art)}
    ${T(`<span class="brk b9" style="${B(P.yellow, 34, P.ink)};font-size:30px;padding:8px 26px 12px;letter-spacing:.1em">縮毛矯正</span>`, 'left:56px;top:90px')}
    ${T('くせ毛が、<br>まっすぐ<br>になる。', 'left:52px;top:176px;font-size:96px;font-weight:900;line-height:1.14;color:#fff;text-shadow:0 7px 0 rgba(0,0,0,.18)')}
    ${T('うねり・広がりをリセットして、<br>やわらかなストレートに。', 'left:58px;top:600px;font-size:28px;font-weight:700;line-height:1.8;color:#fff')}
    ${T('くせ', 'left:620px;top:140px;font-size:28px;font-weight:900;color:' + P.red)}${T('まっすぐ', 'left:620px;top:900px;font-size:28px;font-weight:900;color:' + P.blue)}
    <div class="abs" style="left:56px;bottom:70px"><div class="brk b9 jo" style="${B(P.yellow, 44, P.ink)};font-size:62px;padding:8px 34px 18px">¥16,500<span class="maru" style="font-size:26px">〜 税込</span></div></div>`;
  })()),

  // h17 ドライヘッドスパ（横バナー）
  D('h17', 'banner', 'ドライヘッドスパ', 'Webバナー（1200×628）', (() => {
    const W = 1200, H = 628;
    const art = `${checker({ w: W, h: H, u: 78, a: '#2bb673', b: '#31c07c' })}
    ${mosaic({ x: 790, y: 40, u: 15, cols: 24, rows: 24, layers: spr.cloud('#fff') })}
    ${mosaic({ x: 720, y: 320, u: 7.5, cols: 36, rows: 36, layers: spr.leaf(P.lime) })}${mosaic({ x: 960, y: 400, u: 6, cols: 36, rows: 36, layers: spr.leaf('#d6f08c') })}
    ${mosaic({ x: 1000, y: 100, u: 6, cols: 36, rows: 36, layers: spr.drops3(P.sky) })}${mosaic({ x: 650, y: 80, u: 5, cols: 36, rows: 36, layers: spr.spark(P.yellow) })}`;
    return `${svgWrap(W, H, art)}
    ${T(`<span class="brk b9" style="${B(P.ink, 30, '#fff')};font-size:24px;padding:6px 22px 10px;letter-spacing:.14em">DRY HEAD SPA</span>`, 'left:60px;top:62px')}
    ${T('頭の疲れ、<br>ほどける。', 'left:56px;top:130px;font-size:104px;font-weight:900;line-height:1.1;color:#fff;text-shadow:0 7px 0 rgba(0,0,0,.16)')}
    ${T('ドライヘッドスパ 60分', 'left:62px;top:388px;font-size:38px;font-weight:900;color:#fff;letter-spacing:.06em')}
    <div class="abs" style="left:56px;bottom:48px"><div class="brk b9 jo" style="${B(P.yellow, 40, P.ink)};font-size:62px;padding:6px 32px 16px">¥6,600<span class="maru" style="font-size:24px">　税込・シャンプー付き</span></div></div>`;
  })()),
];
