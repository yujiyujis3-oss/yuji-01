import { P, S, spr, mosaic, plate, brick, flat, checker, pix, pixW, stud, lite, dark, svgWrap, rng } from './lib.js';

const SZ = { ig45: [1080, 1350], sq: [1080, 1080], story: [1080, 1920], a5: [874, 1240], a4: [1240, 1754], banner: [1200, 628], line: [1250, 843], card: [1200, 1500] };
const D = (id, fmt, title, usage, body, extra = {}) => ({ id, fmt, title, usage, w: SZ[fmt][0], h: SZ[fmt][1], body, ...extra });
const B = (c, p, t = '#fff') => `--c:${c};--p:${p}px;--t:${t}`;
const T = (s, css) => `<div class="abs" style="${css}">${s}</div>`;

export default [
  // h01 初回クーポン（IG 4:5）
  D('h01', 'ig45', '初回限定カット＋カラー', 'Instagram投稿・広告', (() => {
    const W = 1080, H = 1350;
    const art = `${plate({ w: W, h: H, u: 60, color: P.blue, alt: lite(P.blue, .06), seed: 1 })}
    <rect x="150" y="360" width="780" height="600" rx="26" fill="#000" opacity=".16" transform="translate(0 14)"/>
    <rect x="150" y="360" width="780" height="600" rx="26" fill="#fff"/>
    ${mosaic({ x: 270, y: 392, u: 15, cols: 36, rows: 36, bgColor: P.yellow, layers: spr.bob('#c9569a', P.skin, P.red) })}
    ${mosaic({ x: 100, y: 300, u: 4.2, cols: 36, rows: 36, layers: spr.star(P.yellow) })}
    ${mosaic({ x: 830, y: 800, u: 5, cols: 36, rows: 36, layers: spr.heart(P.red) })}
    ${mosaic({ x: 820, y: 280, u: 5, cols: 36, rows: 36, layers: spr.spark(P.yellow) })}`;
    return `${svgWrap(W, H, art)}
    <div class="abs" style="left:78px;top:92px"><div class="brk b9" style="${B(P.red, 40)};font-size:44px;padding:14px 38px 18px;letter-spacing:.08em">初回限定</div></div>
    <div class="abs b9" style="left:78px;top:178px;font-size:96px;line-height:1.1;color:#fff;letter-spacing:.02em;text-shadow:0 8px 0 rgba(0,0,0,.18)">カット<span style="color:${P.yellow}">＋</span>カラー</div>
    <div class="abs" style="left:0;right:0;top:318px;text-align:center"><span class="b7" style="font-size:24px;color:#fff;letter-spacing:.3em">HAIR STUDIO  BRICKS</span></div>
    <div class="abs" style="left:90px;bottom:70px"><div class="brk jo b9" style="${B(P.yellow, 54, P.ink)};font-size:128px;line-height:1;padding:10px 36px 20px;letter-spacing:-.01em">¥9,800</div></div>
    <div class="abs b7" style="left:770px;bottom:128px;width:260px;color:#fff;font-size:23px;line-height:1.7;letter-spacing:.06em"><span style="text-decoration:line-through;opacity:.8">通常 ¥15,400</span><br>税込・髪質補修付き<br><span style="color:${P.yellow}">LINE予約で適用</span></div>`;
  })()),

  // h02 ボブ カラーチャート（正方形）
  D('h02', 'sq', 'ボブ、はじめました', 'Instagram投稿', (() => {
    const W = 1080, H = 1080;
    const cols = [['ミルクティー', '#d9b48f'], ['アッシュグレー', '#8e949c'], ['チョコブラウン', '#6a3f2a'], ['ラベンダー', '#a98bd8']];
    const art = `${checker({ w: W, h: H, u: 90, a: '#fff6df', b: '#ffecbd' })}
    <rect x="60" y="270" width="610" height="610" rx="26" fill="#000" opacity=".14" transform="translate(0 12)"/><rect x="60" y="270" width="610" height="610" rx="26" fill="${P.sky}"/>
    ${mosaic({ x: 62, y: 272, u: 16.9, cols: 36, rows: 36, layers: spr.bob('#6a3f2a', P.skin, P.red) })}
    ${cols.map((c, i) => brick({ x: 720, y: 290 + i * 134, cols: 6, u: 52, color: c[1], h: 104 })).join('')}`;
    return `${svgWrap(W, H, art)}
    ${T(`<span class="brk b9" style="${B(P.red, 34)};font-size:30px;padding:8px 26px 12px;letter-spacing:.12em">NEW STYLE</span>`, 'left:60px;top:54px')}
    ${T('ボブ、<span style="color:' + P.blue + '">はじめました。</span>', 'left:56px;top:128px;font-size:88px;font-weight:900;line-height:1.1;letter-spacing:.02em')}
    ${cols.map((c, i) => T(c[0], `left:732px;top:${318 + i * 134}px;width:290px;font-size:25px;font-weight:900;color:${i === 1 || i === 3 || i === 2 ? '#fff' : P.ink};letter-spacing:.04em`)).join('')}
    <div class="abs" style="left:0;right:0;bottom:0;height:130px;background:${P.ink}"></div>
    ${T('cut ¥6,600〜　color ¥8,800〜', `left:60px;bottom:40px;font-size:34px;font-weight:900;color:#fff;letter-spacing:.06em`)}
    ${T('nocca hair', `right:60px;bottom:40px;font-size:34px;font-weight:900;color:${P.yellow};letter-spacing:.14em`)}`;
  })()),

  // h03 今週の空き状況（ストーリーズ）— ブロックの棒グラフ
  D('h03', 'story', '今週の予約空き状況', 'Instagramストーリーズ', (() => {
    const W = 1080, H = 1920, u = 96;
    const days = [['月', 4], ['火', 2], ['水', 0], ['木', 5], ['金', 1], ['土', 2], ['日', 3]];
    const colr = (n) => (n >= 3 ? P.green : n >= 1 ? P.yellow : '#c9ccd4');
    let art = `${plate({ w: W, h: H, u: 80, color: P.navy, alt: '#1b3266', seed: 3 })}`;
    days.forEach((d, i) => {
      const x = 60 + i * 138; const bw = 138;
      for (let k = 0; k < d[1]; k++) art += brick({ x: x + 6, y: 1380 - (k + 1) * 150, cols: 2, u: 63, color: colr(d[1]), h: 140, r: 8 });
      if (d[1] === 0) art += flat({ x: x + 6, y: 1340, cols: 2, u: 63, color: '#8d93a3' });
    });
    art += `<rect x="40" y="1400" width="1000" height="22" rx="8" fill="${P.red}"/>`;
    return `${svgWrap(W, H, art)}
    ${T('THIS WEEK', `left:70px;top:110px;font-size:30px;font-weight:900;color:${P.yellow};letter-spacing:.4em`)}
    ${T('今週の<br>空き状況', 'left:66px;top:170px;font-size:150px;font-weight:900;line-height:1.08;color:#fff;letter-spacing:.02em')}
    ${T('ブロックの数 ＝ 空き枠の数', `left:70px;top:520px;font-size:34px;font-weight:700;color:#cfd6ee;letter-spacing:.08em`)}
    ${days.map((d, i) => T(d[0], `left:${60 + i * 138}px;width:138px;text-align:center;top:1446px;font-size:54px;font-weight:900;color:#fff`)).join('')}
    ${days.map((d, i) => T(d[1] === 0 ? '休み' : d[1] === 1 ? '残り1' : '', `left:${60 + i * 138}px;width:138px;text-align:center;top:${d[1] === 0 ? 1280 : 1380 - d[1] * 150 - 58}px;font-size:26px;font-weight:900;color:${d[1] === 0 ? '#c9ccd4' : P.yellow}`)).join('')}
    <div class="abs" style="left:70px;right:70px;bottom:120px"><div class="brk b9" style="${B(P.yellow, 60, P.ink)};display:block;text-align:center;font-size:48px;padding:26px 0 34px;letter-spacing:.08em">LINEで空きを確認 →</div></div>
    ${T('プロフィールのリンクから24時間予約OK', 'left:0;right:0;bottom:56px;text-align:center;font-size:24px;font-weight:700;color:#9fb0dd;letter-spacing:.14em')}`;
  })()),

  // h04 3周年感謝祭（A5チラシ）— ドット数字の「3」
  D('h04', 'a5', '3周年感謝祭 チラシ', 'チラシ・ポスティング（A5）', (() => {
    const W = 874, H = 1240;
    const art = `${plate({ w: W, h: 560, u: 62, color: P.red, alt: lite(P.red, .08), seed: 4 })}
    <rect y="560" width="${W}" height="${H - 560}" fill="#fff7e4"/>
    <rect y="548" width="${W}" height="14" fill="${P.yellow}"/>
    ${pix({ x: 50, y: 70, u: 60, text: '3', color: [P.yellow, '#ffe36a'] })}
    ${mosaic({ x: 560, y: 262, u: 9, cols: 36, rows: 36, layers: spr.crown(P.yellow) })}
        ${mosaic({ x: 400, y: 80, u: 7, cols: 36, rows: 36, layers: spr.star('#fff') })}`;
    const row = (t, p, o, y) => T(`<div style="display:flex;align-items:center;gap:14px"><span class="b9" style="font-size:30px;color:${P.ink}">${t}</span><span class="b7" style="font-size:19px;color:#8a7a60">${o}</span><span style="flex:1;border-bottom:3px dotted #d8c9a8"></span><span class="jo b9" style="font-size:54px;color:${P.red}">${p}</span></div>`, `left:52px;right:52px;top:${y}px`);
    return `${svgWrap(W, H, art)}
    ${T('ありがとう、', 'left:390px;top:300px;font-size:44px;font-weight:900;color:#fff;letter-spacing:.06em')}
    ${T('周年', 'left:390px;top:356px;font-size:110px;font-weight:900;color:#fff;line-height:1')}
    ${T('hoshi hair  ANNIVERSARY', 'left:56px;top:500px;font-size:24px;font-weight:900;color:#fff;letter-spacing:.2em')}
    ${T(`<span class="brk b9" style="${B(P.blue, 30)};font-size:26px;padding:6px 22px 10px;letter-spacing:.1em">10/14 SAT〜10/31 TUE</span>`, 'left:52px;top:594px')}
    ${row('カット', '¥3,300', '通常 ¥4,400', 668)}${row('カット＋カラー', '¥7,700', '通常 ¥9,900', 758)}${row('カット＋パーマ', '¥8,800', '通常 ¥11,000', 848)}${row('縮毛矯正', '¥12,100', '通常 ¥15,400', 938)}
    ${T('※全て税込・期間中のご予約のお客様限定／ロング料金別途／他クーポン併用不可', 'left:52px;top:1034px;font-size:17px;font-weight:700;color:#8a7a60')}
    <div class="abs" style="left:52px;right:52px;bottom:48px"><div class="brk b9" style="${B(P.ink, 40)};display:flex;justify-content:space-between;align-items:center;font-size:30px;padding:22px 40px 30px"><span>ご予約はLINE・お電話で</span><span class="jo" style="color:${P.yellow};font-size:38px">03-0000-0000</span></div></div>`;
  })()),

  // h05 料金表（A4）
  D('h05', 'a4', 'メニュー料金表', '店内掲示・Web・印刷（A4）', (() => {
    const W = 1240, H = 1754;
    const secs = [
      ['CUT', 'カット', P.red, spr.scissors(P.blue, P.red), [['カット', '¥5,500'], ['前髪カット', '¥1,100'], ['学生カット', '¥4,400', '〜高校生'], ['メンズカット', '¥5,500']]],
      ['COLOR', 'カラー', P.blue, spr.drop(P.sky), [['リタッチ', '¥6,600'], ['フルカラー', '¥8,800'], ['ハイライト', '¥11,000〜', 'ブリーチ1回']]],
      ['PERM', 'パーマ・矯正', P.green, spr.comb(P.yellow), [['デジタルパーマ', '¥13,200'], ['縮毛矯正', '¥16,500'], ['前髪縮毛矯正', '¥5,500']]],
      ['CARE', 'トリートメント', P.orange, spr.bottle(P.pink, P.ink), [['髪質改善トリートメント', '¥7,700'], ['ミニ・ヘッドスパ', '¥3,300', '10分'], ['ヘッドスパ（ロング）', '¥6,600', '30分']]],
    ];
    const art = `<rect width="${W}" height="${H}" fill="#fffaf0"/>${plate({ w: W, h: 150, u: 50, color: P.yellow, alt: lite(P.yellow, .15), seed: 5 })}`;
    const sec = (s) => `<div style="display:flex;gap:30px;align-items:flex-start">
      <div style="width:230px;flex:none"><div class="brk b9" style="${B(s[2], 36)};display:block;text-align:center;font-size:36px;padding:16px 0 22px;letter-spacing:.1em">${s[0]}</div><div class="b9" style="font-size:22px;text-align:center;margin-top:14px;color:#555;letter-spacing:.12em">${s[1]}</div></div>
      <div style="flex:1">${s[4].map((r) => `<div style="display:flex;align-items:baseline;padding:13px 0 8px;border-bottom:3px dotted #e2d8bf"><span class="b9" style="font-size:29px">${r[0]}</span>${r[2] ? `<span class="b7" style="font-size:18px;color:#999;margin-left:14px">${r[2]}</span>` : ''}<span style="flex:1"></span><span class="jo b9" style="font-size:40px;color:${s[2]}">${r[1]}</span></div>`).join('')}</div></div>`;
    const icons = secs.map((s, i) => mosaic({ x: 120 + (i % 1) * 0, y: 0, u: 0, layers: [] })).join('');
    return `${svgWrap(W, H, art)}
    ${T('PRICE LIST', 'left:80px;top:34px;font-size:30px;font-weight:900;color:#fff;letter-spacing:.4em')}
    ${T('料金表', `left:78px;top:80px;font-size:108px;font-weight:900;line-height:1;color:${P.ink}`)}
    ${T('すべて税込　ミディアム〜ロングは +¥1,100〜', 'left:420px;top:160px;font-size:24px;font-weight:700;color:#777')}
    <div class="abs" style="left:80px;right:80px;top:246px;display:flex;flex-direction:column;gap:46px">${secs.map(sec).join('')}</div>
    ${T('MONO HAIR STUDIO ／ OPEN 10:00–19:00 ／ 火曜定休', 'left:80px;bottom:44px;font-size:22px;font-weight:900;letter-spacing:.14em;color:#666')}`;
  })()),

  // h06 LINEリッチメニュー（2500×1686）
  D('h06', 'line', 'LINEリッチメニュー', 'LINE公式アカウント（2500×1686）', (() => {
    const W = 1250, H = 843, cw = W / 3, ch = H / 2;
    const cells = [['calendar', 'RESERVE', 'ネット予約', P.red], ['tag', 'COUPON', 'クーポン', P.blue], ['menu', 'MENU', 'メニュー・料金', P.green], ['star', 'STYLE', 'スタイル集', P.orange], ['pin', 'ACCESS', 'アクセス', P.purple], ['chat', 'CONTACT', 'ご相談・質問', '#1b9d8a']];
    let art = `<rect width="${W}" height="${H}" fill="#fff"/>`;
    cells.forEach((c, i) => {
      const x = (i % 3) * cw, y = Math.floor(i / 3) * ch;
      art += `<rect x="${x + 8}" y="${y + 8}" width="${cw - 16}" height="${ch - 16}" rx="18" fill="${c[3]}"/><rect x="${x + 8}" y="${y + ch - 30}" width="${cw - 16}" height="22" rx="10" fill="#000" opacity=".14"/>`;
      art += mosaic({ x: x + cw / 2 - 90, y: y + 24, u: 7.5, cols: 24, rows: 24, layers: (c[0] === 'star' ? spr.star(P.yellow) : spr[c[0]](c[0] === 'calendar' || c[0] === 'chat' ? undefined : undefined)) }).replace(/<g transform/, '<g transform');
    });
    const labels = cells.map((c, i) => T(`<div class="jo b7" style="font-size:24px;letter-spacing:.3em;opacity:.85">${c[1]}</div><div class="b9" style="font-size:42px;letter-spacing:.06em;margin-top:2px">${c[2]}</div>`, `left:${(i % 3) * cw}px;top:${Math.floor(i / 3) * ch + 222}px;width:${cw}px;text-align:center;color:#fff`)).join('');
    return `${svgWrap(W, H, art)}${labels}${T(`<span class="brk b9" style="${B(P.yellow, 20, P.ink)};font-size:20px;padding:4px 14px 8px">初回 ¥3,000 OFF</span>`, 'left:30px;top:34px')}`;
  })(), { scale: 2 }),

  // h07 スタイリスト募集（A4）— レンガ積みの壁
  D('h07', 'a4', 'スタイリスト募集ポスター', '求人ポスター・Indeed画像（A4）', (() => {
    const W = 1240, H = 1754, r = rng(77);
    const cs = [P.red, P.yellow, P.blue, P.green, P.orange, P.white];
    let art = `<rect width="${W}" height="${H}" fill="${P.ink}"/>`;
    for (let j = 0; j < 7; j++) { let x = j % 2 ? -62 : 0; while (x < W) { const c = [2, 3, 4][Math.floor(r() * 3)]; art += brick({ x, y: 80 + j * 96, cols: c, u: 62, color: cs[Math.floor(r() * cs.length)], h: 84 }); x += c * 62 + 4; } }
    art += `<rect y="760" width="${W}" height="${H - 760}" fill="${P.ink}"/>${plate({ y: 760, w: W, h: 12, u: 62, color: P.yellow })}`;
    art += mosaic({ x: 800, y: 1020, u: 18, cols: 24, rows: 24, layers: spr.scissors(P.blue, P.red) });
    const ben = [['月給', '28万円〜', P.yellow], ['休み', '週休2日', P.sky], ['保証', 'デビュー支援', P.pink]];
    return `${svgWrap(W, H, art)}
    ${T(`<span class="brk b9" style="${B(P.ink, 50, P.yellow)};font-size:46px;padding:12px 40px 18px;letter-spacing:.2em">WE ARE HIRING</span>`, 'left:80px;top:612px')}
    ${T('一緒に、<br>つくろう。', 'left:74px;top:822px;font-size:158px;font-weight:900;line-height:1.08;color:#fff;letter-spacing:.01em')}
    ${T('スタイリスト・アシスタント募集｜未経験歓迎', `left:80px;top:1150px;font-size:38px;font-weight:900;color:${P.yellow};letter-spacing:.06em`)}
    <div class="abs" style="left:80px;top:1240px;width:620px;display:flex;flex-direction:column;gap:20px">${ben.map((b) => `<div style="display:flex;align-items:center;gap:22px"><span class="brk b9" style="${B(b[2], 30, P.ink)};width:150px;text-align:center;font-size:28px;padding:10px 0 14px">${b[0]}</span><span class="b9" style="font-size:44px;color:#fff">${b[1]}</span></div>`).join('')}</div>
    ${T('※想定月給は経験・技術により変動します（サンプル記載）', 'left:80px;top:1560px;font-size:19px;font-weight:700;color:#9a9ca5')}
    <div class="abs" style="left:80px;right:80px;bottom:60px"><div class="brk b9" style="${B(P.red, 60)};display:flex;justify-content:space-between;align-items:center;font-size:40px;padding:24px 44px 34px"><span>見学・応募はLINEから</span><span>→</span></div></div>`;
  })()),

  // h08 トレンドカラー5選（カルーセル表紙）
  D('h08', 'ig45', '2026秋冬トレンドカラー5選', 'Instagram投稿（カルーセル表紙）', (() => {
    const W = 1080, H = 1350;
    const cols = [['01', 'ショコラ<br>モカ', '#7a4a34'], ['02', 'プラム<br>ブラウン', '#7d3b5e'], ['03', 'スモーキー<br>アッシュ', '#8b8f99'], ['04', 'ミルク<br>ベージュ', '#d9bf9f'], ['05', 'カッパー<br>レッド', '#b8542e']];
    let art = `${plate({ w: W, h: H, u: 54, color: '#1a2a55', alt: '#223566', seed: 8 })}${pix({ x: 70, y: 190, u: 38, text: '5', color: [P.yellow, '#ffe36a'] })}${mosaic({ x: 800, y: 70, u: 7, cols: 36, rows: 36, layers: spr.spark(P.yellow) })}`;
    cols.forEach((c, i) => { art += brick({ x: 70 + i * 188, y: 700 + (4 - i) * 0, cols: 3, u: 60, color: c[2], h: 520 - i * 50 }); });
    return `${svgWrap(W, H, art)}
    ${T('2026 AW TREND COLOR', `left:74px;top:84px;font-size:30px;font-weight:900;color:${P.yellow};letter-spacing:.3em`)}
    ${T('秋冬の<br>トレンド<br>カラー', 'left:360px;top:208px;font-size:98px;font-weight:900;line-height:1.1;color:#fff')}
    ${cols.map((c, i) => T(`<div class="jo b9" style="font-size:30px;opacity:.85">${c[0]}</div><div class="b9" style="font-size:30px;line-height:1.3;margin-top:4px">${c[1]}</div>`, `left:${86 + i * 188}px;top:${724}px;width:160px;color:${i === 3 ? P.ink : '#fff'}`)).join('')}
    ${T('スワイプして全部チェック →', `right:70px;bottom:62px;font-size:32px;font-weight:900;color:${P.yellow};letter-spacing:.08em`)}`;
  })()),
];
