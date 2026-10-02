import { P, S, spr, mosaic, plate, brick, flat, checker, pix, pixW, stud, lite, dark, svgWrap, rng } from './lib.js';

const SZ = { ig45: [1080, 1350], sq: [1080, 1080], story: [1080, 1920], a5: [874, 1240], a4: [1240, 1754], banner: [1200, 628] };
const D = (id, fmt, title, usage, body, extra = {}) => ({ id, fmt, title, usage, w: SZ[fmt][0], h: SZ[fmt][1], body, ...extra });
const B = (c, p, t = '#fff') => `--c:${c};--p:${p}px;--t:${t}`;
const T = (s, css) => `<div class="abs" style="${css}">${s}</div>`;

export default [
  // h18 ブリーチ ハイトーン（IG 4:5）— ネオン・斜め
  D('h18', 'ig45', 'ハイトーンカラー ブリーチ', 'Instagram投稿・広告', (() => {
    const W = 1080, H = 1350, N = ['#ff3d9a', '#b6ff2b', '#29d9ff', '#ffe600'];
    const art = `${checker({ w: W, h: H, u: 90, a: '#101014', b: '#17171d' })}
    ${mosaic({ x: 590, y: 700, u: 13, cols: 36, rows: 36, layers: spr.spark(N[3]) })}${mosaic({ x: 80, y: 740, u: 6, cols: 36, rows: 36, layers: spr.star(N[0]) })}
    ${mosaic({ x: 700, y: 120, u: 6, cols: 36, rows: 36, layers: spr.drops3(N[2]) })}`;
    const ch = (t, c, tc = '#101014') => `<span class="brk b9" style="${B(c, 70, tc)};font-size:150px;line-height:1;padding:10px 26px 24px;margin-right:14px">${t}</span>`;
    return `${svgWrap(W, H, art)}
    ${T('HIGH TONE × BLEACH', `left:64px;top:84px;font-size:30px;font-weight:900;color:${N[1]};letter-spacing:.3em`)}
    <div class="abs" style="left:48px;top:250px;transform:rotate(-5deg);transform-origin:left top">${ch('ハ', N[0], '#fff')}${ch('イ', N[1])}${ch('ト', N[2])}</div>
    <div class="abs" style="left:48px;top:520px;transform:rotate(-5deg);transform-origin:left top">${ch('ー', N[3])}${ch('ン', N[0], '#fff')}</div>
    ${T('ブリーチ1回＋カラー＋ケアブリーチ付き。<br>色落ちまで楽しめるデザインカラー。', 'left:64px;top:900px;font-size:34px;font-weight:700;line-height:1.7;color:#fff;letter-spacing:.04em')}
    <div class="abs" style="left:60px;bottom:64px"><div class="brk b9" style="${B(N[1], 48, '#101014')};font-size:36px;padding:14px 34px 24px">ブリーチ＋カラー <span class="jo" style="font-size:66px">¥16,500</span>〜</div></div>`;
  })()),

  // h19 アシスタント育成ロードマップ（A4求人）— 階段
  D('h19', 'a4', 'アシスタント育成ロードマップ', '求人ポスター・採用ページ（A4）', (() => {
    const W = 1240, H = 1754;
    const steps = [['入社', '0年', 'シャンプー・ブロー・接客', P.red, 150], ['1年目', '', 'カラー・パーマ補助', P.yellow, 270], ['2年目', '', 'カット練習・モデル担当', P.green, 390], ['3年目', 'DEBUT', 'スタイリストデビュー', P.blue, 510]];
    let art = `${plate({ w: W, h: H, u: 62, color: '#fff3d6', alt: '#ffeab8', seed: 19 })}`;
    steps.forEach((s, i) => { const x = 90 + i * 270; art += brick({ x, y: 1330 - s[4], cols: 4, u: 62, color: s[3], h: s[4] }); });
    art += `<rect x="60" y="1330" width="1120" height="26" rx="10" fill="${P.ink}"/>`;
    art += mosaic({ x: 900, y: 1330 - 510 - 150, u: 7, cols: 36, rows: 36, layers: spr.crown(P.yellow) });
    return `${svgWrap(W, H, art)}
    ${T('CAREER ROADMAP', `left:80px;top:92px;font-size:30px;font-weight:900;color:${P.red};letter-spacing:.4em`)}
    ${T('未経験から、<br>3年でデビュー。', 'left:74px;top:150px;font-size:112px;font-weight:900;line-height:1.14;letter-spacing:.01em')}
    ${T('アシスタント募集｜美容学生・未経験の方 歓迎', 'left:80px;top:420px;font-size:36px;font-weight:700;color:#555')}
    ${steps.map((s, i) => T(`<div class="jo b9" style="font-size:26px;color:#fff;opacity:.9;letter-spacing:.14em">${s[1] || 'STEP ' + i}</div><div class="b9" style="font-size:46px;color:${s[3] === P.yellow ? P.ink : '#fff'}">${s[0]}</div>`, `left:${112 + i * 270}px;top:${1330 - s[4] + 22}px;width:230px`)).join('')}
    ${steps.map((s, i) => T(s[2], `left:${90 + i * 270}px;width:248px;top:${1330 - s[4] - 98}px;font-size:23px;font-weight:900;line-height:1.35;color:${P.ink}`)).join('')}
    <div class="abs" style="left:80px;right:80px;bottom:70px"><div class="brk b9" style="${B(P.ink, 60, P.yellow)};display:flex;justify-content:space-between;font-size:38px;padding:24px 44px 34px"><span>サロン見学・応募はLINEから</span><span>→</span></div></div>`;
  })()),

  // h20 ホームケア3ステップ（IG 4:5）
  D('h20', 'ig45', 'ホームケア3ステップ', 'Instagram投稿', (() => {
    const W = 1080, H = 1350, items = [['SHAMPOO', 'シャンプー', P.blue, 1], ['TREATMENT', 'トリートメント', P.pink, 2], ['OUTBATH', 'アウトバス', P.orange, 3]];
    let art = `${plate({ w: W, h: H, u: 60, color: '#ffc6d8', alt: '#ffb8cf', seed: 20 })}`;
    items.forEach((it, i) => { const x = 60 + i * 332; art += `<rect x="${x}" y="420" width="304" height="560" rx="22" fill="#000" opacity=".14" transform="translate(0 10)"/><rect x="${x}" y="420" width="304" height="560" rx="22" fill="#fff"/>${mosaic({ x: x + 8, y: 436, u: 12.5, cols: 24, rows: 24, layers: spr.bottle(it[2], P.ink) })}`; });
    return `${svgWrap(W, H, art)}
    ${T(`<span class="brk b9" style="${B(P.ink, 34, '#fff')};font-size:28px;padding:8px 26px 12px;letter-spacing:.14em">HOME CARE</span>`, 'left:60px;top:68px')}
    ${T('サロンの仕上がりを、<br>おうちでも。', 'left:56px;top:150px;font-size:80px;font-weight:900;line-height:1.16;letter-spacing:.01em')}
    ${items.map((it, i) => T(`<span class="brk jo b9" style="${B(it[2], 36)};font-size:44px;padding:4px 26px 14px">${it[3]}</span><div class="b9" style="font-size:34px;margin-top:20px">${it[1]}</div><div class="jo b7" style="font-size:20px;color:#777;letter-spacing:.2em">${it[0]}</div>`, `left:${86 + i * 332}px;top:${700 + 0}px`)).join('')}
    ${T('サロン専売品', `left:60px;top:1030px;font-size:30px;font-weight:900;color:${P.red};letter-spacing:.14em`)}
    <div class="abs" style="left:56px;bottom:66px"><div class="brk b9" style="${B(P.ink, 44)};font-size:36px;padding:16px 34px 24px">3点セット <span class="jo" style="font-size:60px;color:${P.yellow}">¥9,900</span> 税込</div></div>`;
  })()),

  // h21 カットモデル募集（ストーリーズ）
  D('h21', 'story', 'カットモデル募集', 'Instagramストーリーズ', (() => {
    const W = 1080, H = 1920;
    const art = `${plate({ w: W, h: H, u: 90, color: P.yellow, alt: lite(P.yellow, .12), seed: 21 })}
    ${mosaic({ x: 650, y: 80, u: 11, cols: 36, rows: 36, layers: spr.sun('#fff') })}
    <rect x="70" y="760" width="940" height="560" rx="28" fill="#000" opacity=".15" transform="translate(0 12)"/><rect x="70" y="760" width="940" height="560" rx="28" fill="#fff"/>
    ${mosaic({ x: 700, y: 800, u: 8, cols: 36, rows: 36, layers: spr.scissors(P.blue, P.red) })}`;
    const row = (k, v, y) => T(`<span class="brk b9" style="${B(P.blue, 30)};font-size:26px;padding:6px 20px 12px;width:150px;text-align:center">${k}</span><span class="b9" style="font-size:38px;margin-left:24px">${v}</span>`, `left:110px;top:${y}px;display:flex;align-items:center`);
    return `${svgWrap(W, H, art)}
    ${T('MODEL WANTED', `left:80px;top:130px;font-size:32px;font-weight:900;letter-spacing:.34em;color:${P.red}`)}
    <div class="abs" style="left:70px;top:210px;line-height:1"><span class="brk b9" style="${B(P.red, 90)};font-size:210px;padding:10px 40px 30px;letter-spacing:.04em">MODEL</span></div>
    ${T('カットモデル<br>募集中！', 'left:76px;top:520px;font-size:118px;font-weight:900;line-height:1.1')}
    ${row('料金', 'カット無料（薬剤代のみ）', 820)}${row('日時', '平日 10:00〜／13:00〜', 930)}${row('条件', '顎〜肩下の長さの方', 1040)}${row('撮影', 'SNS掲載OKの方', 1150)}
    <div class="abs" style="left:80px;right:80px;bottom:150px"><div class="brk b9" style="${B(P.ink, 60, '#fff')};display:block;text-align:center;font-size:50px;padding:28px 0 38px">DMで応募する →</div></div>
    ${T('※顔写真の掲載は事前に同意をいただいた方のみ', 'left:0;right:0;bottom:90px;text-align:center;font-size:23px;font-weight:700;color:#7a6200')}`;
  })()),

  // h22 年末年始 営業案内（A5）— カレンダー
  D('h22', 'a5', '年末年始 営業のご案内', 'チラシ・店頭掲示（A5）', (() => {
    const W = 874, H = 1240, cw = 108, x0 = 59, y0 = 590;
    const st = (d) => (d <= 25 ? 'o' : d <= 30 ? 'b' : 'c'); // 営業・満席間近・休み
    let art = `${plate({ w: W, h: 330, u: 62, color: P.red, alt: lite(P.red, .08), seed: 22 })}<rect y="330" width="${W}" height="${H - 330}" fill="#fffaf0"/><rect y="324" width="${W}" height="12" fill="${P.yellow}"/>`;
    const names = ['日', '月', '火', '水', '木', '金', '土'];
    names.forEach((n, i) => { art += `<rect x="${x0 + i * cw + 4}" y="${y0 - 62}" width="${cw - 8}" height="46" rx="6" fill="${i === 0 ? P.red : i === 6 ? P.blue : P.ink}"/>`; });
    let d = 0, cells = '';
    for (let w = 0; w < 5; w++) for (let c = 0; c < 7; c++) {
      const idx = w * 7 + c - 1; // 12/1 が月曜
      if (idx < 0 || idx >= 31) continue;
      const day = idx + 1, s = day >= 29 ? 'c' : day >= 24 && day <= 28 ? 'b' : 'o';
      const col = s === 'c' ? P.red : s === 'b' ? P.yellow : '#fff';
      art += brick({ x: x0 + c * cw + 6, y: y0 + w * 88 + 8, cols: 1, u: cw - 12, color: col, h: 66, r: 8, studs: true });
      cells += T(`${day}`, `left:${x0 + c * cw + 6}px;top:${y0 + w * 88 + 16}px;width:${cw - 12}px;text-align:center;font-size:38px;font-weight:900;color:${s === 'b' ? P.ink : s === 'c' ? '#fff' : (c === 0 ? P.red : c === 6 ? P.blue : P.ink)}`);
    }
    return `${svgWrap(W, H, art)}${cells}
    ${names.map((n, i) => T(n, `left:${x0 + i * cw}px;width:${cw}px;text-align:center;top:${y0 - 54}px;font-size:26px;font-weight:900;color:#fff`)).join('')}
    ${T('YEAR-END NOTICE', 'left:56px;top:56px;font-size:26px;font-weight:900;color:' + P.yellow + ';letter-spacing:.34em')}
    ${T('年末年始の<br>営業のご案内', 'left:52px;top:112px;font-size:84px;font-weight:900;line-height:1.14;color:#fff')}
    ${T('12月のご予約はお早めに', 'left:56px;top:416px;font-size:36px;font-weight:900;color:' + P.ink)}
    ${T('<span style="display:inline-block;width:26px;height:26px;background:#fff;border:3px solid #ccc;border-radius:6px;vertical-align:-3px"></span> 営業　<span style="display:inline-block;width:26px;height:26px;background:' + P.yellow + ';border-radius:6px;vertical-align:-3px"></span> 混雑・残りわずか　<span style="display:inline-block;width:26px;height:26px;background:' + P.red + ';border-radius:6px;vertical-align:-3px"></span> 休業', 'left:58px;top:1046px;font-size:22px;font-weight:900;color:#555')}
    <div class="abs" style="left:52px;right:52px;bottom:48px"><div class="brk b9" style="${B(P.ink, 40)};display:block;text-align:center;font-size:32px;padding:20px 0 28px">12/29〜1/4 休業　1/5(月) 10:00 営業開始</div></div>`;
  })()),

  // h23 スタッフ紹介（正方形）
  D('h23', 'sq', 'スタイリスト紹介', 'Instagram投稿', (() => {
    const W = 1080, H = 1080;
    const art = `${plate({ w: W, h: H, u: 60, color: P.lime, alt: lite(P.lime, .12), seed: 23 })}
    <rect x="60" y="150" width="500" height="780" rx="28" fill="#000" opacity=".15" transform="translate(0 12)"/><rect x="60" y="150" width="500" height="780" rx="28" fill="#fff"/>
    ${mosaic({ x: 80, y: 250, u: 20, cols: 24, rows: 24, bgColor: P.sky, layers: spr.face(P.skin, '#8a4b2c') })}
    ${mosaic({ x: 800, y: 130, u: 6, cols: 36, rows: 36, layers: spr.star(P.yellow) })}`;
    return `${svgWrap(W, H, art)}
    ${T('STYLIST', `left:90px;top:176px;font-size:26px;font-weight:900;color:${P.red};letter-spacing:.34em`)}
    ${T('YUKI', 'left:88px;top:700px;font-size:110px;font-weight:900;line-height:1;letter-spacing:.04em;display:none')}
    ${T('ユキ', 'left:92px;top:742px;font-size:86px;font-weight:900;line-height:1')}
    ${T('サロン歴 8年 ／ 店長', 'left:94px;top:850px;font-size:28px;font-weight:700;color:#666')}
    ${T('得意なこと', `left:620px;top:190px;font-size:28px;font-weight:900;color:${P.ink};letter-spacing:.16em`)}
    ${['ボブ・ショート', 'ブリーチカラー', '髪質改善'].map((t, i) => T(`<span class="brk b9" style="${B([P.red, P.blue, P.orange][i], 36)};font-size:34px;padding:10px 26px 16px;display:block">${t}</span>`, `left:620px;top:${270 + i * 130}px`)).join('')}
    ${T('「なりたい」を<br>一緒に形にします。', 'left:620px;top:690px;font-size:38px;font-weight:900;line-height:1.5')}
    <div class="abs" style="left:620px;bottom:150px"><div class="brk b9" style="${B(P.ink, 34)};font-size:28px;padding:12px 26px 18px">指名予約OK ／ LINE</div></div>`;
  })()),

  // h24 コンセプト「まず、話そう。」（IG 4:5）— 会話のブロック
  D('h24', 'ig45', 'まず、話そう。 カウンセリング', 'Instagram投稿', (() => {
    const W = 1080, H = 1350;
    const art = `${checker({ w: W, h: H, u: 135, a: '#ffd84a', b: '#ffcf1f' })}
    ${mosaic({ x: 800, y: 1060, u: 8, cols: 36, rows: 36, layers: spr.chat(P.blue) })}`;
    const bub = (t, c, tc, left, top, w) => T(`<div class="brk b9" style="${B(c, 40, tc)};font-size:42px;line-height:1.4;padding:22px 34px 30px;width:${w}px">${t}</div>`, `left:${left}px;top:${top}px`);
    return `${svgWrap(W, H, art)}
    ${T('COUNSELING FIRST', `left:64px;top:84px;font-size:28px;font-weight:900;color:${P.red};letter-spacing:.34em`)}
    ${bub('どんな髪に<br>したいですか？', P.blue, '#fff', 64, 190, 560)}
    ${bub('まだ決まってなくて…', '#fff', P.ink, 440, 440, 560)}
    ${bub('大丈夫。<br>まず、話しましょう。', P.red, '#fff', 64, 640, 600)}
    ${T('まず、話そう。', 'left:62px;top:930px;font-size:124px;font-weight:900;line-height:1;letter-spacing:.01em')}
    ${T('カウンセリング無料・施術前に仕上がりを共有します', 'left:66px;top:1090px;font-size:29px;font-weight:900;color:#5a4800')}
    <div class="abs" style="left:60px;bottom:64px"><div class="brk b9" style="${B(P.ink, 40, P.yellow)};font-size:36px;padding:16px 34px 24px">LINEでご相談・ご予約</div></div>`;
  })()),

  // h25 ヘアカラーチャート（IG 4:5）
  D('h25', 'ig45', 'ヘアカラーチャート12色', 'Instagram投稿', (() => {
    const W = 1080, H = 1350;
    const cs = [['ミルクティー', '#d6b48f'], ['ベージュ', '#c9a57d'], ['アッシュ', '#8b9099'], ['グレージュ', '#a89c92'], ['ピンクブラウン', '#b9737a'], ['ラベンダー', '#a58bd0'], ['ブルーブラック', '#27304a'], ['カッパー', '#c0612f'], ['マット', '#7a8470'], ['ショコラ', '#5a3626'], ['ハニー', '#e3b04b'], ['レッド', '#b82a33']];
    let art = `<rect width="${W}" height="${H}" fill="#fff"/>${plate({ w: W, h: 250, u: 50, color: P.blue, alt: lite(P.blue, .1), seed: 25 })}`;
    cs.forEach((c, i) => { const x = 50 + (i % 3) * 330, y = 330 + Math.floor(i / 3) * 235; art += brick({ x, y, cols: 5, u: 60, color: c[1], h: 128 }) + `<rect x="${x + 6}" y="${y + 12}" width="22" height="104" rx="8" fill="#fff" opacity=".2"/>`; });
    return `${svgWrap(W, H, art)}
    ${T('HAIR COLOR CHART', `left:60px;top:48px;font-size:28px;font-weight:900;color:#fff;letter-spacing:.34em`)}
    ${T('なりたい色、<br>見つかる12色。', 'left:56px;top:96px;font-size:72px;font-weight:900;line-height:1.14;color:#fff;text-shadow:0 6px 0 rgba(0,0,0,.16)')}
    ${cs.map((c, i) => T(c[0], `left:${50 + (i % 3) * 330}px;top:${330 + Math.floor(i / 3) * 235 + 144}px;width:300px;font-size:27px;font-weight:900;color:${P.ink};letter-spacing:.02em`)).join('')}
    ${T('※髪質・既染毛の状態により仕上がりは異なります', 'left:60px;bottom:40px;font-size:22px;font-weight:700;color:#666')}`;
  })()),
];
