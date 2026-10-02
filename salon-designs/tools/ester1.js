import { P, S, spr, mosaic, plate, tiles, brick, flat, checker, pix, pixW, stud, lite, dark, svgWrap, rng } from './lib.js';

const SZ = { ig45: [1080, 1350], sq: [1080, 1080], story: [1080, 1920], a5: [874, 1240], a4: [1240, 1754], banner: [1200, 628], line: [1250, 843], card: [1200, 1500] };
const D = (id, fmt, title, usage, body, extra = {}) => ({ id, fmt, title, usage, w: SZ[fmt][0], h: SZ[fmt][1], body, ...extra });
const B = (c, p, t = P.plum) => `--c:${c};--p:${p}px;--t:${t}`;
const T = (s, css) => `<div class="abs" style="${css}">${s}</div>`;
const INK = P.plum;

export default [
  // e01 全身脱毛（IG 4:5）— でこぼこ(スタッド)→つるすべ(タイル)
  D('e01', 'ig45', '全身脱毛 ツルすべ肌へ', 'Instagram投稿・広告', (() => {
    const W = 1080, H = 1350;
    const art = `${plate({ w: W, h: 620, u: 60, color: P.pPink, alt: lite(P.pPink, .3), seed: 31 })}
    ${tiles({ y: 620, w: W, h: 730, u: 60, color: '#fff3f6', alt: '#ffe4ec', seed: 3 })}
    <path d="M0 620C180 560 320 680 540 620S900 560 1080 620V636C900 576 760 696 540 636S180 576 0 636Z" fill="${P.pRose}"/>
    ${mosaic({ x: 700, y: 330, u: 6, cols: 36, rows: 36, layers: spr.spark('#fff') })}${mosaic({ x: 880, y: 560, u: 5, cols: 36, rows: 36, layers: spr.heart(P.pRose) })}`;
    return `${svgWrap(W, H, art)}
    ${T('FULL BODY HAIR REMOVAL', `left:64px;top:76px;font-size:28px;font-weight:900;color:${INK};letter-spacing:.3em`)}
    ${T('でこぼこ、<br>さようなら。', `left:58px;top:130px;font-size:100px;font-weight:900;line-height:1.12;color:${INK};letter-spacing:.01em`)}
    ${T(`<span style="font-size:34px;color:${P.pRose}">▲</span> ひっかかる毛・ザラつきが気になる肌`, `left:64px;top:520px;font-size:27px;font-weight:900;color:${INK}`)}
    ${T('つるすべ肌へ。', `left:58px;top:690px;font-size:100px;font-weight:900;color:${P.pRose};letter-spacing:.01em`)}
    ${T('全身脱毛（顔・VIO込み）　回数コースあり', `left:64px;top:830px;font-size:32px;font-weight:900;color:${INK}`)}
    <div class="abs" style="left:58px;top:910px"><div class="brk b9" style="${B(P.pRose, 44, '#fff')};font-size:38px;padding:18px 34px 26px">月々 <span class="jo" style="font-size:84px">¥5,900</span>〜</div></div>
    ${T('※医療行為ではありません。効果には個人差があります。体験は初回限定・税込・コース契約の条件あり（サンプル表記）', `left:64px;bottom:44px;width:900px;font-size:19px;font-weight:700;line-height:1.6;color:#8a6b7c`)}`;
  })()),

  // e02 夏前脱毛（A5チラシ）
  D('e02', 'a5', '夏前の脱毛キャンペーン', 'チラシ・折込（A5）', (() => {
    const W = 874, H = 1240;
    const art = `${checker({ w: W, h: 520, u: 97, a: P.pSky, b: '#c8e6f9' })}<rect y="520" width="${W}" height="${H - 520}" fill="#fff"/><rect y="514" width="${W}" height="12" fill="${P.pButter}"/>
    ${mosaic({ x: 560, y: 40, u: 12, cols: 24, rows: 24, layers: spr.sun(P.pButter) })}${mosaic({ x: 80, y: 360, u: 5, cols: 36, rows: 36, layers: spr.cloud('#fff') })}`;
    const row = (n, p, c, y) => T(`<div style="display:flex;align-items:center;gap:20px"><span class="brk b9" style="${B(c, 30)};font-size:30px;padding:10px 0 16px;width:210px;text-align:center">${n}</span><span style="flex:1;border-bottom:4px dotted #d9d0e3"></span><span class="jo b9" style="font-size:56px;color:${INK}">${p}</span></div>`, `left:56px;right:56px;top:${y}px`);
    return `${svgWrap(W, H, art)}
    ${T('SUMMER BEAUTY', `left:56px;top:58px;font-size:26px;font-weight:900;color:#fff;letter-spacing:.34em`)}
    ${T('夏までに、<br>ツルすべ。', `left:50px;top:116px;font-size:100px;font-weight:900;line-height:1.12;color:${INK}`)}
    ${T(`<span class="brk b9" style="${B(P.pRose, 34, '#fff')};font-size:30px;padding:8px 26px 12px;letter-spacing:.08em">5/1〜7/31 ご予約限定</span>`, 'left:56px;top:400px')}
    ${row('ワキ', '¥990', P.pPink, 590)}${row('ひざ下', '¥3,980', P.pMint, 700)}${row('VIO', '¥4,980', P.pLilac, 810)}${row('両ワキ＋ひじ下', '¥2,980', P.pButter, 920)}
    ${T('※すべて税込・初回体験価格（1回限り）／ご契約の勧誘はいたしません', 'left:56px;top:1040px;font-size:19px;font-weight:700;color:#8a6b7c')}
    <div class="abs" style="left:56px;right:56px;bottom:50px"><div class="brk b9" style="${B(INK, 40, '#fff')};display:block;text-align:center;font-size:34px;padding:22px 0 30px">LINEで無料カウンセリング予約</div></div>`;
  })()),

  // e03 脱毛 料金表（A4）— カードグリッド
  D('e03', 'a4', '脱毛 パーツ別料金表', '店内掲示・Web（A4）', (() => {
    const W = 1240, H = 1754;
    const grp = [['FACE', '顔', P.pPink, [['顔（全体）', '¥6,600'], ['うなじ', '¥2,200'], ['ヒゲ周り', '¥4,400']]], ['ARM', '腕', P.pLilac, [['ひじ上', '¥3,300'], ['ひじ下', '¥3,300'], ['手の甲・指', '¥1,650']]], ['LEG', '脚', P.pMint, [['ひざ上', '¥4,400'], ['ひざ下', '¥4,400'], ['足の甲・指', '¥1,650']]], ['BODY', '体', P.pPeach, [['背中（上・下）', '¥6,600'], ['お腹', '¥4,400'], ['VIO', '¥6,600']]]];
    const art = `<rect width="${W}" height="${H}" fill="#fff8f4"/>${tiles({ w: W, h: 270, u: 54, color: P.pPink, alt: lite(P.pPink, .3), seed: 5 })}`;
    const card = (g) => `<div style="background:#fff;border-radius:22px;box-shadow:0 10px 0 rgba(90,47,77,.1);padding:26px 30px 22px;border:3px solid ${g[2]}"><div style="display:flex;align-items:center;gap:16px"><span class="brk jo b9" style="${B(g[2], 30)};font-size:26px;padding:6px 20px 12px;letter-spacing:.14em">${g[0]}</span><span class="b9" style="font-size:36px;color:${INK}">${g[1]}</span></div>${g[3].map((r) => `<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:3px dotted #eadcf0;padding:15px 0 9px"><span class="b9" style="font-size:27px">${r[0]}</span><span class="jo b9" style="font-size:38px;color:${INK}">${r[1]}</span></div>`).join('')}</div>`;
    return `${svgWrap(W, H, art)}
    ${T('PRICE LIST', `left:80px;top:48px;font-size:28px;font-weight:900;color:${INK};letter-spacing:.4em`)}
    ${T('脱毛 料金表', `left:76px;top:96px;font-size:104px;font-weight:900;line-height:1;color:${INK}`)}
    ${T('1回あたり・税込／パーツ単品', 'left:80px;top:318px;font-size:26px;font-weight:700;color:#7a5a6e')}
    <div class="abs" style="left:80px;right:80px;top:380px;display:grid;grid-template-columns:1fr 1fr;gap:36px">${grp.map(card).join('')}</div>
    <div class="abs" style="left:80px;right:80px;top:1130px;background:${INK};border-radius:24px;padding:34px 44px;color:#fff;display:flex;justify-content:space-between;align-items:center"><div><div class="jo b9" style="font-size:24px;letter-spacing:.3em;color:${P.pPink}">FULL BODY</div><div class="b9" style="font-size:44px;margin-top:6px">全身脱毛（顔・VIO込み）</div><div class="b7" style="font-size:22px;opacity:.8;margin-top:6px">6回コース ／ 12回コース ／ 通い放題 あり</div></div><div style="text-align:right"><div class="jo b9" style="font-size:78px;color:${P.pButter}">¥5,900</div><div class="b7" style="font-size:22px">月々〜（分割）</div></div></div>
    ${T('※医療行為ではありません。効果には個人差があります。ご契約前にカウンセリングで詳細をご説明します。', 'left:80px;top:1440px;width:1000px;font-size:21px;font-weight:700;line-height:1.7;color:#8a6b7c')}
    ${T('Éclat BEAUTY SALON ／ 10:00–21:00 ／ 不定休', 'left:80px;bottom:44px;font-size:22px;font-weight:900;color:#7a5a6e;letter-spacing:.12em')}`;
  })()),

  // e04 毛穴ケア フェイシャル（IG 4:5）
  D('e04', 'ig45', '毛穴ケア フェイシャル', 'Instagram投稿', (() => {
    const W = 1080, H = 1350;
    const art = `${plate({ w: W, h: H, u: 60, color: P.pMint, alt: lite(P.pMint, .35), seed: 41 })}
    <rect x="130" y="470" width="820" height="520" rx="30" fill="#000" opacity=".12" transform="translate(0 12)"/><rect x="130" y="470" width="820" height="520" rx="30" fill="#fff"/>
    ${mosaic({ x: 150, y: 490, u: 480 / 36, cols: 36, rows: 36, layers: spr.mirror(P.pRose), bgColor: null })}
    ${mosaic({ x: 560, y: 520, u: 6.6, cols: 36, rows: 36, layers: spr.drop(P.pSky) })}${mosaic({ x: 760, y: 700, u: 5, cols: 36, rows: 36, layers: spr.spark(P.pButter) })}${mosaic({ x: 640, y: 780, u: 4.4, cols: 36, rows: 36, layers: spr.drops3(P.pSky) })}`;
    return `${svgWrap(W, H, art)}
    ${T(`<span class="brk b9" style="${B(P.pRose, 34, '#fff')};font-size:28px;padding:8px 26px 12px;letter-spacing:.12em">PORE CARE FACIAL</span>`, 'left:64px;top:76px')}
    ${T('毛穴レス肌を、<br>めざす60分。', `left:58px;top:158px;font-size:90px;font-weight:900;line-height:1.14;color:${INK}`)}
    ${T('<span style="color:#fff;background:' + P.pRose + ';padding:2px 12px;border-radius:8px">洗浄</span> → <span style="color:#fff;background:#6db6e8;padding:2px 12px;border-radius:8px">導入</span> → <span style="color:#fff;background:#4fb890;padding:2px 12px;border-radius:8px">鎮静</span>', `left:64px;top:1030px;font-size:36px;font-weight:900`)}
    <div class="abs" style="left:58px;bottom:70px"><div class="brk b9" style="${B(INK, 44, '#fff')};font-size:36px;padding:16px 34px 24px">初回 <span class="jo" style="font-size:62px;color:${P.pButter}">¥6,980</span> 税込</div></div>
    ${T('※仕上がりには個人差があります', 'left:64px;bottom:30px;font-size:19px;font-weight:700;color:#4b7a68')}`;
  })()),

  // e05 施術例 ビフォーアフター（IG 4:5）— 肌のキメ
  D('e05', 'ig45', '施術例 ビフォーアフター', 'Instagram投稿・広告', (() => {
    const W = 1080, H = 1350, sk = '#f1c9ad';
    const rect = [[S.rect(0, 0, 24, 24), sk]];
    const art = `<rect width="${W}" height="${H}" fill="#fff6f0"/>${plate({ w: W, h: 300, u: 60, color: P.pLilac, alt: lite(P.pLilac, .3), seed: 51 })}
    <rect x="50" y="420" width="470" height="510" rx="24" fill="#fff" stroke="${P.pLilac}" stroke-width="6"/><rect x="560" y="420" width="470" height="510" rx="24" fill="#fff" stroke="${P.pRose}" stroke-width="6"/>
    ${mosaic({ x: 72, y: 450, u: 426 / 36, cols: 36, rows: 36, layers: [[S.rect(0, 0, 24, 24), sk]], fuzz: { from: sk, to: ['#d8a98a', '#c98c6e', '#e3b79b'], p: .26, seed: 8 } })}
    ${mosaic({ x: 582, y: 450, u: 426 / 36, cols: 36, rows: 36, layers: [[S.rect(0, 0, 24, 24), sk]], fuzz: { from: sk, to: ['#f6d4bb'], p: .1, seed: 9 } })}
    ${mosaic({ x: 481, y: 650, u: 4, cols: 36, rows: 36, layers: [[S.poly([[3, 4], [16, 12], [3, 20]]), P.pRose]] })}`;
    return `${svgWrap(W, H, art)}
    ${T('CASE STUDY', `left:64px;top:56px;font-size:28px;font-weight:900;color:#fff;letter-spacing:.4em`)}
    ${T('キメが整う、<br>その実感を。', `left:58px;top:106px;font-size:76px;font-weight:900;line-height:1.14;color:${INK}`)}
    ${T(`<span class="brk b9" style="${B(INK, 30, '#fff')};font-size:26px;padding:6px 22px 10px;letter-spacing:.2em">BEFORE</span>`, 'left:72px;top:372px')}${T(`<span class="brk b9" style="${B(P.pRose, 30, '#fff')};font-size:26px;padding:6px 22px 10px;letter-spacing:.2em">AFTER</span>`, 'left:582px;top:372px')}
    ${T('肌のざらつき・くすみ ／ 3回施術後', 'left:60px;top:972px;font-size:30px;font-weight:900;color:' + INK)}
    ${T('フェイシャルケア 3回コース（施術例のイメージ）', 'left:60px;top:1024px;font-size:24px;font-weight:700;color:#7a5a6e')}
    ${T('※個人の感想であり、効果を保証するものではありません。施術期間・回数・費用：3回／約3か月／¥19,800（税込）。リスク：赤み・乾燥が出る場合があります。', 'left:60px;bottom:48px;width:960px;font-size:19px;font-weight:700;line-height:1.65;color:#8a6b7c')}`;
  })()),

  // e06 モニター募集（ストーリーズ）
  D('e06', 'story', 'モニター募集', 'Instagramストーリーズ', (() => {
    const W = 1080, H = 1920;
    const art = `${checker({ w: W, h: H, u: 135, a: P.pLilac, b: '#dccdf5' })}
    ${pix({ x: 150, y: 480, u: 56, text: '5', color: [P.pRose, '#f08fb0'] })}
    ${mosaic({ x: 560, y: 430, u: 13, cols: 24, rows: 24, layers: spr.heart(P.pRose) })}${mosaic({ x: 820, y: 220, u: 6, cols: 36, rows: 36, layers: spr.spark('#fff') })}`;
    const row = (k, v, y) => T(`<span class="brk b9" style="${B(P.pPink, 30)};font-size:26px;padding:6px 20px 12px;width:150px;text-align:center">${k}</span><span class="b9" style="font-size:38px;margin-left:24px;color:${INK}">${v}</span>`, `left:90px;top:${y}px;display:flex;align-items:center`);
    return `${svgWrap(W, H, art)}
    ${T('MONITOR WANTED', `left:80px;top:130px;font-size:32px;font-weight:900;color:#fff;letter-spacing:.34em`)}
    ${T('モニター<br>募集', `left:76px;top:190px;font-size:140px;font-weight:900;line-height:1.05;color:${INK}`)}
    ${T('名様', `left:420px;top:830px;font-size:84px;font-weight:900;color:${INK}`)}
    <div class="abs" style="left:70px;right:70px;top:1000px;height:520px;background:#fff;border-radius:30px;box-shadow:0 14px 0 rgba(90,47,77,.12)"></div>
    ${row('内容', 'フェイシャル90分', 1050)}${row('料金', '通常¥12,100 → ¥4,980', 1160)}${row('条件', '施術後のアンケート', 1270)}${row('撮影', 'SNS掲載OKの方', 1380)}
    <div class="abs" style="left:80px;right:80px;bottom:150px"><div class="brk b9" style="${B(INK, 60, '#fff')};display:block;text-align:center;font-size:50px;padding:28px 0 38px">DMで応募する →</div></div>
    ${T('※先着順・税込／写真の掲載は同意をいただいた方のみ', 'left:0;right:0;bottom:90px;text-align:center;font-size:23px;font-weight:700;color:#5a4a8a')}`;
  })()),

  // e07 LINEリッチメニュー（エステ）— 大1＋小4
  D('e07', 'line', 'LINEリッチメニュー エステ', 'LINE公式アカウント（2500×1686）', (() => {
    const W = 1250, H = 843;
    const cells = [[8, 8, 620, 827, P.pRose, 'calendar', 'RESERVE', 'ネット予約', '初回体験 ¥3,000 OFF'], [644, 8, 300, 400, P.pLilac, 'tag', 'COUPON', 'クーポン'], [952, 8, 290, 400, P.pMint, 'menu', 'MENU', 'メニュー・料金'], [644, 428, 300, 407, P.pButter, 'pin', 'ACCESS', 'アクセス'], [952, 428, 290, 407, P.pSky, 'chat', 'CONTACT', 'ご相談']];
    let art = `<rect width="${W}" height="${H}" fill="#fff"/>`, lab = '';
    cells.forEach((c, i) => {
      art += `<rect x="${c[0]}" y="${c[1] + 8}" width="${c[2]}" height="${c[3]}" rx="22" fill="#000" opacity=".1"/><rect x="${c[0]}" y="${c[1]}" width="${c[2]}" height="${c[3]}" rx="22" fill="${c[4]}"/>`;
      const big = i === 0, u = big ? 11 : 6.6, sz = u * 24;
      art += mosaic({ x: c[0] + (c[2] - sz) / 2, y: c[1] + (big ? 90 : 36), u, cols: 24, rows: 24, layers: c[5] === 'calendar' ? spr.calendar(P.pRose) : c[5] === 'tag' ? spr.tag(P.pRose) : c[5] === 'menu' ? spr.menu(P.green) : c[5] === 'pin' ? spr.pin(P.pRose) : spr.chat('#fff') });
      lab += T(`<div class="jo b7" style="font-size:${big ? 30 : 22}px;letter-spacing:.3em;color:${INK};opacity:.7">${c[6]}</div><div class="b9" style="font-size:${big ? 66 : 38}px;color:${INK}">${c[7]}</div>${c[8] ? `<div class="brk b9" style="${B('#fff', 24, INK)};font-size:26px;padding:6px 20px 10px;margin-top:20px">${c[8]}</div>` : ''}`, `left:${c[0]}px;top:${c[1] + (big ? 420 : 204)}px;width:${c[2]}px;text-align:center`);
    });
    return `${svgWrap(W, H, art)}${lab}`;
  })(), { scale: 2 }),

  // e08 エステティシャン募集（A4）— チェックリスト
  D('e08', 'a4', 'エステティシャン募集', '求人ポスター（A4）', (() => {
    const W = 1240, H = 1754;
    const items = [['研修', '入社後3か月の技術研修あり'], ['資格', '認定資格の取得を全額サポート'], ['環境', '完全予約制・残業ほぼなし'], ['収入', '月給24万円〜＋歩合（サンプル）'], ['お休み', '週休2日・希望休OK']];
    let art = `${plate({ w: W, h: 560, u: 62, color: P.pPink, alt: lite(P.pPink, .3), seed: 81 })}<rect y="560" width="${W}" height="${H - 560}" fill="#fffaf6"/><rect y="552" width="${W}" height="16" fill="${P.pRose}"/>`;
    items.forEach((_, i) => { art += mosaic({ x: 96, y: 706 + i * 160, u: 4.4, cols: 24, rows: 24, layers: spr.check(P.green) }).replace('<g', '<g'); });
    art += mosaic({ x: 800, y: 70, u: 17, cols: 24, rows: 24, layers: spr.flower(P.pRose, P.pButter) });
    return `${svgWrap(W, H, art)}
    ${T('ESTHETICIAN WANTED', `left:80px;top:80px;font-size:30px;font-weight:900;color:${INK};letter-spacing:.34em`)}
    ${T('手に、<br>一生ものの<br>技術を。', `left:74px;top:140px;font-size:98px;font-weight:900;line-height:1.1;color:${INK}`)}
    ${T('エステティシャン募集｜未経験歓迎', `left:80px;top:490px;font-size:34px;font-weight:900;color:${INK}`)}
    ${items.map((it, i) => T(`<span class="brk b9" style="${B(P.pLilac, 30)};width:150px;text-align:center;font-size:28px;padding:8px 0 14px;display:inline-block">${it[0]}</span><span class="b9" style="font-size:42px;margin-left:30px;color:${INK}">${it[1]}</span>`, `left:160px;top:${696 + i * 160}px;display:flex;align-items:center`)).join('')}
    <div class="abs" style="left:80px;right:80px;bottom:70px"><div class="brk b9" style="${B(INK, 60, '#fff')};display:flex;justify-content:space-between;font-size:38px;padding:24px 44px 34px"><span>見学・応募はLINEから</span><span>→</span></div></div>`;
  })()),

  // e09 ブライダルエステ（IG 4:5）— 挙式までのカウントダウン階段
  D('e09', 'ig45', 'ブライダルエステ', 'Instagram投稿', (() => {
    const W = 1080, H = 1350, gold = '#e8c26a';
    const st = [['6か月前', 'ボディ＆脱毛', P.pPink, 240], ['3か月前', 'フェイシャル集中', P.pLilac, 380], ['1か月前', '仕上げケア', gold, 520]];
    let art = `${plate({ w: W, h: H, u: 60, color: '#fff4f1', alt: '#ffe9e4', seed: 91 })}`;
    st.forEach((s, i) => { art += brick({ x: 70 + i * 320, y: 1180 - s[3], cols: 5, u: 58, color: s[2], h: s[3] }); });
    art += `<rect x="40" y="1180" width="1000" height="22" rx="8" fill="${INK}"/>` + mosaic({ x: 700, y: 360, u: 8, cols: 36, rows: 36, layers: spr.crown(gold) });
    return `${svgWrap(W, H, art)}
    ${T('BRIDAL ESTHETIC', `left:64px;top:84px;font-size:28px;font-weight:900;color:${gold};letter-spacing:.4em`)}
    ${T('その日まで、<br>いちばん綺麗に。', `left:58px;top:136px;font-size:84px;font-weight:900;line-height:1.16;color:${INK}`)}
    ${st.map((s, i) => T(`<div class="b9" style="font-size:40px;color:${i === 2 ? INK : INK}">${s[0]}</div><div class="b7" style="font-size:24px;margin-top:6px;color:${INK}">${s[1]}</div>`, `left:${96 + i * 320}px;top:${1180 - s[3] + 24}px;width:260px`)).join('')}
    ${T('挙式日から逆算するケアプラン', `left:66px;top:1236px;font-size:30px;font-weight:900;color:${INK}`)}
    ${T('ブライダルコース ¥39,800〜（税込）／ カウンセリング無料', `left:66px;top:1284px;font-size:26px;font-weight:700;color:#7a5a6e`)}`;
  })()),
];
