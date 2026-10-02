import { P, S, spr, mosaic, plate, tiles, brick, flat, checker, pix, pixW, stud, lite, dark, svgWrap, rng } from './lib.js';

const SZ = { ig45: [1080, 1350], sq: [1080, 1080], story: [1080, 1920], a5: [874, 1240], a4: [1240, 1754], banner: [1200, 628], line: [1250, 843], card: [1200, 1500] };
const D = (id, fmt, title, usage, body, extra = {}) => ({ id, fmt, title, usage, w: SZ[fmt][0], h: SZ[fmt][1], body, ...extra });
const B = (c, p, t = P.plum) => `--c:${c};--p:${p}px;--t:${t}`;
const T = (s, css) => `<div class="abs" style="${css}">${s}</div>`;
const INK = P.plum;

export default [
  // e10 ボディメイク（IG 4:5）— 曲線のウェーブ
  D('e10', 'ig45', 'ボディメイク ハンドケア', 'Instagram投稿', (() => {
    const W = 1080, H = 1350;
    const waves = Array.from({ length: 5 }, (_, i) => [S.wave(0, 24, 2.1 + i * 2.3, 1.1, 9 - i * .6, 1.3), [P.pRose, P.pPink, P.pLilac, P.pPeach, P.pButter][i]]);
    const art = `${plate({ w: W, h: H, u: 60, color: '#4d2a47', alt: '#563050', seed: 101 })}
    <rect x="70" y="420" width="940" height="522" rx="30" fill="#2f1a2c"/>
    ${mosaic({ x: 70, y: 420, u: 940 / 36, cols: 36, rows: 20, layers: waves.map(([f, c]) => [(x, y) => f(x * 1, y * 1), c]) })}`;
    return `${svgWrap(W, H, art)}
    ${T('BODY MAKE', `left:64px;top:84px;font-size:30px;font-weight:900;color:${P.pPink};letter-spacing:.4em`)}
    ${T('なりたい<br>ラインへ。', `left:58px;top:136px;font-size:104px;font-weight:900;line-height:1.1;color:#fff`)}
    ${T('ハンド施術で巡りをサポートする、ボディメイクコース。', `left:66px;top:980px;font-size:28px;font-weight:700;color:#e9d3e4`)}
    <div class="abs" style="left:60px;bottom:110px"><div class="brk b9" style="${B(P.pButter, 44)};font-size:36px;padding:16px 34px 24px">60分 <span class="jo" style="font-size:64px">¥8,800</span> 税込</div></div>
    ${T('※医療行為・減量を目的とするものではありません。感じ方・結果には個人差があります。', 'left:66px;bottom:44px;font-size:19px;font-weight:700;color:#bfa0b8')}`;
  })()),

  // e11 脱毛のQ&A（正方形）
  D('e11', 'sq', '脱毛のよくある質問', 'Instagram投稿（Q&A）', (() => {
    const W = 1080, H = 1080;
    const art = `${checker({ w: W, h: H, u: 120, a: P.pMint, b: '#cfeee0' })}
    ${mosaic({ x: 820, y: 700, u: 8, cols: 36, rows: 36, layers: spr.sparkle ? [] : spr.spark(P.pButter) })}${mosaic({ x: 800, y: 130, u: 6, cols: 36, rows: 36, layers: spr.spark('#fff') })}`;
    return `${svgWrap(W, H, art)}
    ${T('Q&A', `left:64px;top:70px;font-size:30px;font-weight:900;color:${INK};letter-spacing:.4em`)}
    ${T('生理中でも<br>脱毛できる？', `left:58px;top:118px;font-size:84px;font-weight:900;line-height:1.14;color:${INK}`)}
    <div class="abs" style="left:64px;top:430px;display:flex;gap:26px;align-items:flex-start"><span class="brk jo b9" style="${B(P.pRose, 40, '#fff')};font-size:60px;padding:8px 30px 18px">A</span><div class="b9" style="font-size:38px;line-height:1.6;color:${INK};width:780px;background:#fff;border-radius:22px;padding:26px 34px;box-shadow:0 10px 0 rgba(90,47,77,.1)">ほとんどの部位は施術可能です。<br>VIOなどデリケートな部位は、<br>日程の調整をおすすめしています。</div></div>
    ${T('他にも聞きたいこと、LINEで気軽にどうぞ。', `left:64px;top:900px;font-size:30px;font-weight:900;color:${INK}`)}
    <div class="abs" style="left:60px;bottom:50px"><div class="brk b9" style="${B(INK, 36, '#fff')};font-size:30px;padding:14px 30px 22px">Éclat ／ 無料カウンセリング実施中</div></div>
    ${T('※状態により施術できない場合があります。', 'right:60px;bottom:64px;font-size:18px;font-weight:700;color:#4b7a68')}`;
  })()),

  // e12 美白ケア（横バナー）
  D('e12', 'banner', '美白ケア ホワイトニングフェイシャル', 'Webバナー（1200×628）', (() => {
    const W = 1200, H = 628;
    const art = `${plate({ w: W, h: H, u: 52, color: P.pButter, alt: lite(P.pButter, .4), seed: 121 })}
    ${mosaic({ x: 760, y: 50, u: 19, cols: 24, rows: 24, layers: spr.sun(P.pPeach) })}${mosaic({ x: 700, y: 330, u: 6.4, cols: 36, rows: 36, layers: spr.drops3(P.pSky) })}${mosaic({ x: 1010, y: 360, u: 6, cols: 36, rows: 36, layers: spr.spark('#fff') })}`;
    return `${svgWrap(W, H, art)}
    ${T(`<span class="brk b9" style="${B(P.pRose, 30, '#fff')};font-size:24px;padding:6px 22px 10px;letter-spacing:.12em">WHITENING FACIAL</span>`, 'left:60px;top:62px')}
    ${T('紫外線のあと、<br>肌を整える。', `left:56px;top:130px;font-size:84px;font-weight:900;line-height:1.14;color:${INK}`)}
    ${T('ビタミンケア＋鎮静パックで、明るい印象の素肌へ。', `left:62px;top:394px;font-size:28px;font-weight:700;color:${INK}`)}
    <div class="abs" style="left:56px;bottom:46px"><div class="brk b9 jo" style="${B(INK, 40, '#fff')};font-size:56px;padding:6px 32px 16px">¥7,480<span class="maru" style="font-size:24px;color:${P.pButter}">　75分・税込</span></div></div>
    ${T('※効果には個人差があります', 'right:60px;bottom:30px;font-size:19px;font-weight:700;color:#9a7d3a')}`;
  })()),

  // e13 メンズ脱毛 ヒゲ（IG 4:5）
  D('e13', 'ig45', 'メンズ ヒゲ脱毛', 'Instagram投稿・広告', (() => {
    const W = 1080, H = 1350, steel = '#2b4a78';
    const stub = [[S.and(S.ell(12, 16, 5.2, 4.6), S.rect(0, 16, 24, 24)), '#5a4a46']];
    const art = `${plate({ w: W, h: H, u: 60, color: steel, alt: '#335689', seed: 131 })}
    <rect x="380" y="420" width="640" height="640" rx="26" fill="${P.pSky}"/>
    ${mosaic({ x: 380, y: 420, u: 640 / 36, cols: 36, rows: 36, layers: [...spr.shorthair('#1b1b1f', P.skin).slice(0, 4), ...stub, ...spr.shorthair('#1b1b1f', P.skin).slice(4)], fuzz: { from: '#5a4a46', to: ['#3b2f2c', P.skin, '#6a5a55'], p: .3, seed: 5 } })}
    ${brick({ x: 60, y: 480, cols: 4, u: 52, color: P.pSky, h: 90 })}${brick({ x: 60, y: 590, cols: 4, u: 52, color: '#fff', h: 90 })}${brick({ x: 60, y: 700, cols: 4, u: 52, color: P.pButter, h: 90 })}`;
    return `${svgWrap(W, H, art)}
    ${T("MEN'S BEARD REMOVAL", `left:62px;top:84px;font-size:30px;font-weight:900;color:${P.pSky};letter-spacing:.3em`)}
    ${T('朝のヒゲ剃り、<br>減らそう。', 'left:58px;top:136px;font-size:78px;font-weight:900;line-height:1.14;color:#fff;display:none')}
    ${T('青ヒゲ、<br>卒業へ。', 'left:58px;top:130px;font-size:100px;font-weight:900;line-height:1.1;color:#fff')}
    ${T('回数', 'left:76px;top:502px;font-size:30px;font-weight:900;color:' + INK)}${T('痛み', 'left:76px;top:612px;font-size:30px;font-weight:900;color:' + INK)}${T('時間', 'left:76px;top:722px;font-size:30px;font-weight:900;color:' + INK)}
    ${T('ヒゲ脱毛<br>6回コース', 'left:64px;top:1070px;font-size:44px;font-weight:900;line-height:1.3;color:#fff')}
    <div class="abs" style="left:600px;bottom:72px"><div class="brk b9" style="${B(P.pButter, 44)};font-size:30px;padding:14px 30px 22px">¥19,800 <span style="font-size:20px">税込〜</span></div></div>
    ${T('※医療行為ではありません。効果・感じ方には個人差があります。', 'left:64px;bottom:34px;font-size:19px;font-weight:700;color:#a9bddd')}`;
  })()),

  // e14 ポイントカード（表裏）
  D('e14', 'card', 'スタンプカード', 'ポイントカード（91×55mm 表裏）', (() => {
    const W = 1200, H = 1500;
    let art = `${checker({ w: W, h: H, u: 100, a: '#fff6f8', b: '#ffeaf0' })}
    <rect x="100" y="110" width="1000" height="606" rx="30" fill="#000" opacity=".14" transform="translate(0 16)"/><rect x="100" y="110" width="1000" height="606" rx="30" fill="${P.pRose}"/>
    ${plate({ x: 100, y: 110, w: 1000, h: 606, u: 101, color: P.pRose, alt: lite(P.pRose, .12), seed: 14 })}
    ${mosaic({ x: 760, y: 190, u: 12, cols: 24, rows: 24, layers: spr.lotus('#fff') })}
    <rect x="100" y="784" width="1000" height="606" rx="30" fill="#000" opacity=".14" transform="translate(0 16)"/><rect x="100" y="784" width="1000" height="606" rx="30" fill="#fff"/>`;
    for (let i = 0; i < 10; i++) { const x = 160 + (i % 5) * 180, y = 960 + Math.floor(i / 5) * 190; art += `<circle cx="${x + 80}" cy="${y + 80}" r="76" fill="${i < 6 ? P.pPink : '#f4eef2'}" stroke="${i < 6 ? P.pRose : '#d9ccd5'}" stroke-width="5" stroke-dasharray="${i < 6 ? 0 : '10 10'}"/>`; if (i < 6) art += mosaic({ x: x + 22, y: y + 22, u: 2.4, cols: 24, rows: 24, layers: spr.heart(P.pRose) }); }
    art += `<rect x="1020" y="1210" width="80" height="80" fill="none"/>`;
    return `${svgWrap(W, H, art)}
    ${T('Éclat', 'left:150px;top:200px;font-size:200px;font-weight:900;line-height:1;color:#fff;letter-spacing:.02em;text-shadow:0 10px 0 rgba(90,47,77,.2)')}
    ${T('BEAUTY SALON', 'left:158px;top:460px;font-size:34px;font-weight:900;color:#fff;letter-spacing:.4em')}
    ${T('脱毛・フェイシャル・ボディ', 'left:158px;top:560px;font-size:34px;font-weight:700;color:#fff;letter-spacing:.1em')}
    ${T('STAMP CARD', `left:160px;top:822px;font-size:28px;font-weight:900;color:${P.pRose};letter-spacing:.34em`)}
    ${T('10個たまると ¥3,000 OFF', `left:160px;top:866px;font-size:40px;font-weight:900;color:${INK}`)}
    ${T('有効期限：最終ご来店から1年／ご来店ごとに1個', 'left:160px;top:1334px;font-size:22px;font-weight:700;color:#7a5a6e')}`;
  })()),

  // e15 ハイフ リフトアップ（IG 4:5）— 階段アップ
  D('e15', 'ig45', 'ハイフ フェイスライン', 'Instagram投稿', (() => {
    const W = 1080, H = 1350;
    let art = `${plate({ w: W, h: H, u: 60, color: '#ece3fb', alt: '#e1d4f7', seed: 151 })}`;
    for (let i = 0; i < 5; i++) art += brick({ x: 70 + i * 190, y: 1100 - (i + 1) * 118, cols: 3, u: 60, color: [P.pLilac, '#bda6ec', '#a98be3', P.pRose, '#7b5bd0'][i], h: (i + 1) * 118 });
    art += mosaic({ x: 720, y: 330, u: 14, cols: 24, rows: 24, layers: spr.arrowUp(P.pRose) });
    return `${svgWrap(W, H, art)}
    ${T('HIFU FACE LINE', `left:64px;top:84px;font-size:30px;font-weight:900;color:#7b5bd0;letter-spacing:.34em`)}
    ${T('もう一度、<br>上を向く。', `left:58px;top:136px;font-size:100px;font-weight:900;line-height:1.12;color:${INK}`)}
    ${T('フェイスラインの印象が気になる方へ。<br>ハイフ（超音波）でじっくりアプローチ。', `left:66px;top:400px;font-size:28px;font-weight:700;line-height:1.7;color:${INK}`)}
    ${T('1回目', 'left:94px;top:1118px;font-size:28px;font-weight:900;color:' + INK)}${T('5回目', 'left:854px;top:1118px;font-size:28px;font-weight:900;color:' + INK)}
    <div class="abs" style="left:60px;bottom:90px"><div class="brk b9" style="${B(INK, 44, '#fff')};font-size:34px;padding:14px 30px 22px">フェイスライン <span class="jo" style="font-size:58px;color:${P.pButter}">¥9,800</span> 税込</div></div>
    ${T('※効果・感じ方には個人差があります。施術後に赤み・むくみが出る場合があります。', 'left:64px;bottom:40px;font-size:19px;font-weight:700;color:#7a5a9a')}`;
  })()),

  // e16 学割脱毛 クーポン（A5）
  D('e16', 'a5', '学割 脱毛クーポン', 'チラシ・学校配布（A5）', (() => {
    const W = 874, H = 1240;
    const art = `${plate({ w: W, h: H, u: 62, color: P.pMint, alt: lite(P.pMint, .3), seed: 161 })}
    <path d="M60 220H814V560A34 34 0 0 0 814 628V1000H60V628A34 34 0 0 0 60 560Z" fill="#000" opacity=".12" transform="translate(0 12)"/>
    <path d="M60 220H814V560A34 34 0 0 0 814 628V1000H60V628A34 34 0 0 0 60 560Z" fill="#fff"/>
    <path d="M110 594H764" stroke="#d6c9de" stroke-width="5" stroke-dasharray="14 12"/>
    ${pix({ x: 110, y: 290, u: 21, text: '20%', color: [P.pRose, '#f08fb0'] })}${mosaic({ x: 560, y: 250, u: 5, cols: 36, rows: 36, layers: spr.star(P.pButter) })}`;
    return `${svgWrap(W, H, art)}
    ${T('STUDENT COUPON', `left:60px;top:48px;font-size:26px;font-weight:900;color:${INK};letter-spacing:.34em`)}
    ${T('学生さん、<br>脱毛デビュー。', `left:56px;top:96px;font-size:54px;font-weight:900;line-height:1.1;color:${INK}`)}
    ${T('OFF', `left:520px;top:410px;font-size:84px;font-weight:900;line-height:1;color:${P.pRose}`)}
    ${T('全身脱毛 コース料金（学生証の提示で）', `left:110px;top:520px;font-size:28px;font-weight:900;color:${INK}`)}
    ${['ワキ・ひざ下・VIO セット　¥7,980→¥6,380', '全身脱毛 6回　¥59,800→¥47,840'].map((t, i) => T(t, `left:110px;top:${660 + i * 100}px;font-size:30px;font-weight:900;color:${INK};border-bottom:4px dotted #d9d0e3;padding-bottom:12px;width:654px`)).join('')}
    ${T('※税込／ご契約時の学生証提示が必要です／他割引との併用不可', 'left:110px;top:900px;font-size:19px;font-weight:700;color:#7a5a6e')}
    <div class="abs" style="left:60px;right:60px;bottom:62px"><div class="brk b9" style="${B(INK, 40, '#fff')};display:block;text-align:center;font-size:34px;padding:22px 0 30px">LINEで予約 → このクーポンを提示</div></div>`;
  })()),

  // e17 グランドオープン（A4）— ブロックで建てた店舗
  D('e17', 'a4', 'GRAND OPEN 店頭ポスター', '店頭ポスター・オープン告知（A4）', (() => {
    const W = 1240, H = 1754;
    let art = `${checker({ w: W, h: H, u: 124, a: '#ffe9ef', b: '#ffdde8' })}`;
    const x0 = 170, wall = '#fff7ee';
    // 店舗の外観
    art += `<rect x="${x0 - 10}" y="760" width="920" height="780" rx="14" fill="#000" opacity=".12" transform="translate(0 12)"/>`;
    for (let j = 0; j < 7; j++) { let x = x0 + (j % 2 ? 0 : 0); const c = j % 2 ? [3, 3, 3, 3, 2, 2] : [2, 3, 3, 3, 3, 2]; let cx = x0 - (j % 2 ? 0 : 0); c.forEach((n) => { art += brick({ x: cx, y: 980 + j * 80, cols: n, u: 55 * 1, color: wall, h: 76 }); cx += n * 55 + 0; }); }
    for (let i = 0; i < 8; i++) art += brick({ x: x0 + i * 115, y: 850, cols: 2, u: 57.5, color: i % 2 ? '#fff' : P.pRose, h: 120 });
    art += brick({ x: 150, y: 830, cols: 17, u: 56, color: P.pLilac, h: 24, studs: false });
    art += brick({ x: 270, y: 1170, cols: 5, u: 58, color: '#bfe6f8', h: 260 });
    art += brick({ x: 680, y: 1160, cols: 4, u: 58, color: P.pPink, h: 350 });
    art += `<circle cx="850" cy="1340" r="12" fill="${P.pButter}"/>`;
    art += mosaic({ x: 940, y: 470, u: 8, cols: 36, rows: 36, layers: spr.flower(P.pRose, P.pButter) });
    return `${svgWrap(W, H, art)}
    ${T('GRAND OPEN', `left:0;right:0;top:100px;text-align:center;font-size:44px;font-weight:900;color:${P.pRose};letter-spacing:.5em`)}
    ${T('ついに、<br>オープン。', `left:0;right:0;top:180px;text-align:center;font-size:170px;font-weight:900;line-height:1.08;color:${INK}`)}
    ${T('10.20 FRI', `left:0;right:0;top:640px;text-align:center;font-size:62px;font-weight:900;color:${INK};letter-spacing:.2em`)}
    ${T('エステ・脱毛サロン Éclat', `left:0;right:0;top:1000px;text-align:center;font-size:48px;font-weight:900;color:${INK};letter-spacing:.1em;display:none`)}
    ${T('OPEN', `left:290px;top:1200px;font-size:56px;font-weight:900;color:${INK};letter-spacing:.1em;display:none`)}
    ${T('オープン記念<br>全メニュー 20%OFF', `left:0;right:0;top:1548px;text-align:center;font-size:48px;font-weight:900;line-height:1.3;color:${INK}`)}
    ${T('※期間：10/20〜11/30 ご予約の方 ／ 税込 ／ 他クーポン併用不可', `left:0;right:0;bottom:26px;text-align:center;font-size:20px;font-weight:700;color:#7a5a6e`)}`;
  })()),

  // e18 秋の保湿ケア（正方形）
  D('e18', 'sq', '秋の乾燥ケア 保湿フェイシャル', 'Instagram投稿', (() => {
    const W = 1080, H = 1080, A = '#e8a24a';
    const r = rng(181); let leaves = '';
    for (let i = 0; i < 8; i++) leaves += mosaic({ x: 40 + r() * 960, y: 40 + r() * 900, u: 3 + r() * 2.4, cols: 36, rows: 36, layers: spr.leaf([A, '#d97a3a', '#f2c46d', '#c9602e'][i % 4]) });
    const art = `${plate({ w: W, h: H, u: 60, color: '#ffe8c8', alt: '#ffdcae', seed: 18 })}${leaves}`;
    return `${svgWrap(W, H, art)}
    ${T('AUTUMN MOISTURE', `left:64px;top:80px;font-size:30px;font-weight:900;color:#b9692a;letter-spacing:.34em`)}
    ${T('乾く秋、<br>うるおう肌。', `left:58px;top:134px;font-size:100px;font-weight:900;line-height:1.12;color:${INK}`)}
    ${T('保湿フェイシャル（ハチミツ＆ヒアルロン酸パック）', `left:66px;top:470px;font-size:30px;font-weight:700;color:${INK}`)}
    <div class="abs" style="left:60px;bottom:80px"><div class="brk b9" style="${B('#b9692a', 44, '#fff')};font-size:36px;padding:16px 34px 24px">60分 <span class="jo" style="font-size:64px;color:#ffe9b0">¥6,600</span> 税込</div></div>
    ${T('※効果には個人差があります', 'left:66px;bottom:36px;font-size:19px;font-weight:700;color:#a8782f')}`;
  })()),
];
