# ChatGPT への引き継ぎ：YUJI SHIMONO ホームページ

> **ChatGPTへ**：以下は、別のAIで作ったホームページの引き継ぎ資料です。このあとの作業を手伝ってください。
> 資料の最後に、サイトのコード全文（index.html / css/style.css / js/main.js）が入っています。
> 修正するときは、**変更したファイルの全文**を返してください（部分だけだと、差し替え作業が難しいため）。
> 依頼者はプログラミングに詳しくないので、操作手順は画面のボタン名を使って、1つずつ説明してください。

---

## 1. サイトの概要

- **屋号**：YUJI SHIMONO
- **内容**：「ホームページ制作」「広告デザイン」「自動化ツール制作」を紹介する、1ページ構成の制作サービスサイト
- **世界観**：「静かな未来感」。黒い展示空間に、白い機械生命体のキャラクターが浮かぶイメージ
- **作り**：HTML / CSS / JavaScript だけで作成。ビルド作業は不要で、`index.html` を開けば表示される
- **お問い合わせ**：メール（yujiyuji.s3@gmail.com）。ボタンを押すと、件名「制作のご相談」でメールソフトが開く
- **サンプルサイト**：https://shimono-web-samples-2026.yujiyuji-s3.chatgpt.site（「ホームページ制作」欄と「制作イメージ」欄からリンク）

## 2. ファイルの置き場所

- **GitHub リポジトリ（公開）**：https://github.com/yujiyujis3-oss/yuji-01
- **作業中のブランチ**：`claude/homepage-code-development-3xejph`
- **プルリクエスト**：https://github.com/yujiyujis3-oss/yuji-01/pull/1（まだマージしていない。競合はなく、すぐマージできる状態）

```
index.html              ページ本体
css/style.css           デザイン（配色・余白・スマホ対応）
js/main.js              メニュー開閉・スクロール時のヘッダー・表示アニメーション
images/character-720.webp, character-1254.webp        白い機械生命体のキャラクター（メイン画像）
images/glass-horses-720.webp, glass-horses-1254.webp  ガラスの馬の展示空間（制作イメージ用）
docs/handoff-spec.md    元のデザイン仕様書
docs/design-comp.webp   デザインカンプ（参考用）
.nojekyll               GitHub Pages 用の空ファイル
```

## 3. ページの構成（上から順）

1. **ヘッダー**：左に屋号、右にメニュー（サービス / 制作イメージ / 制作の流れ）と「制作を相談する」ボタン。スクロールすると黒い背景になる。スマホではメニューボタン（≡）で開閉
2. **トップ（ファーストビュー）**：見出し「伝わるデザイン。進化するビジネス。」、左に文章、右にキャラクター画像。スマホでは文章の下に画像
3. **サービスの帯**：01 WEB DESIGN / 02 AD CREATIVE / 03 AUTOMATION
4. **サービス**（明るいアイボリー背景）：見出し「つくる。その先まで。」、3つのサービスを横に3列
5. **制作イメージ**（黒背景）：自主制作のコンセプトイメージ2点と、サンプルサイトへのリンク。「納品実績ではありません」と注記あり
6. **制作の流れ**：01 ご相談 → 02 方向性の整理 → 03 デザイン・制作 → 04 確認・公開
7. **お問い合わせ**：見出し「次の一歩を、一緒につくる。」、メールで相談するボタン、メールアドレス
8. **フッター**：屋号、メニュー、コピーライト

## 4. デザインのルール（変更するときも守る）

| 要素 | 指定 |
|---|---|
| 主背景 | #101416 |
| 補助背景 | #1A2023 |
| 明るい面・主な文字 | #F2F1EB |
| 暗い面の本文 | #C3CBCC |
| アクセント（暗い面） | #A9EEE4 |
| アクセント（明るい面） | #22706A（読みやすさのため濃くしている） |
| 罫線（暗い面） | #394347 |
| 明るい面の文字 | #171C1F |
| フォント | 和文 Noto Sans JP、欧文 Inter、数字や小さいラベル JetBrains Mono（Google Fonts） |
| 角丸 | 0〜4px |
| ボタン | 高さ52px、左右24px、太字 |

- **守っていること**：
  - スマホ（320px〜）で横スクロールが出ない
  - キーボードで操作できる
  - 「動きを減らす」設定ではアニメーションを止める
  - スマホでは写真の上に本文を乗せない
  - キャラクターのレンズや白い外殻に文字を重ねない
- **やらないこと**：
  - 架空の実績・顧客名・数値は書かない
  - 未確定の住所・個人名は載せない

## 5. いまの状況

**できていること**
- ページ本体は完成している
- 320 / 390 / 768 / 1440px の幅で表示を確認し、崩れや横スクロールはない
- 屋号とメールアドレスを反映済み
- サンプルサイトへのリンクを追加済み

**残っている作業（公開まで）**
1. **マージ**：GitHub のプルリクエスト（上記URL）で「Merge pull request」→「Confirm merge」を押す
2. **公開設定**：リポジトリの「Settings」→ 左メニューの「Pages」を開く。Source を「Deploy from a branch」、Branch を「main」「/ (root)」にして「Save」を押す
3. **公開の確認**：1〜2分後、https://yujiyujis3-oss.github.io/yuji-01/ で表示されるか確認する

**公開後に、必要に応じて行うこと**
- 実際の制作実績ができたら、「制作イメージ」の画像と説明を差し替える
- サービスの対応範囲を、実際に対応できる内容に合わせる
- 問い合わせフォームを使うことにしたら、プライバシーポリシーを追加する

## 6. ChatGPT にお願いしたいこと（例）

- 上の「残っている作業」を、画面の操作手順に沿って案内してほしい
- 文章やデザインの修正（修正したファイルは全文で返してほしい）
- 修正したファイルを GitHub に反映する手順（ブラウザだけでできる方法）の案内

---

## 7. コード全文

### index.html

````html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>YUJI SHIMONO｜ホームページ制作・広告デザイン・自動化ツール制作</title>
  <meta name="description" content="ホームページ・広告・自動化ツールを、ひとつにつなぐ。見せ方から日々の運用まで、事業に合わせて設計します。">
  <meta name="theme-color" content="#101416">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="preload" as="image" href="images/character-1254.webp" imagesrcset="images/character-720.webp 720w, images/character-1254.webp 1254w" imagesizes="(max-width: 767px) 100vw, 60vw">
  <link rel="stylesheet" href="css/style.css">
  <script>document.documentElement.classList.add("js");</script>
</head>
<body>
  <a class="skip-link" href="#main">本文へスキップ</a>

  <!-- ============ Header ============ -->
  <header class="site-header" id="top">
    <div class="site-header__inner">
      <a class="logo" href="#top" aria-label="YUJI SHIMONO トップへ">YUJI SHIMONO</a>

      <nav class="global-nav" aria-label="メインメニュー">
        <ul class="global-nav__list">
          <li><a href="#services">サービス</a></li>
          <li><a href="#works">制作イメージ</a></li>
          <li><a href="#flow">制作の流れ</a></li>
        </ul>
        <a class="btn btn--light btn--sm" href="#contact">制作を相談する<span class="btn__icon" aria-hidden="true">↗</span></a>
      </nav>

      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu">
        <span class="menu-toggle__bars" aria-hidden="true"></span>
        <span class="visually-hidden">メニューを開く</span>
      </button>
    </div>
  </header>

  <!-- Mobile menu -->
  <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="メニュー" hidden>
    <div class="mobile-menu__head">
      <span class="logo">YUJI SHIMONO</span>
      <button class="mobile-menu__close" type="button">
        <span aria-hidden="true">×</span>
        <span class="visually-hidden">メニューを閉じる</span>
      </button>
    </div>
    <nav aria-label="モバイルメニュー">
      <ul class="mobile-menu__list">
        <li><a href="#services"><span class="mono">01</span>サービス</a></li>
        <li><a href="#works"><span class="mono">02</span>制作イメージ</a></li>
        <li><a href="#flow"><span class="mono">03</span>制作の流れ</a></li>
      </ul>
      <a class="btn btn--light btn--block" href="#contact">制作を相談する<span class="btn__icon" aria-hidden="true">↗</span></a>
    </nav>
  </div>

  <main id="main">
    <!-- ============ Hero ============ -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__visual intro" style="--delay: 150ms">
        <img
          src="images/character-1254.webp"
          srcset="images/character-720.webp 720w, images/character-1254.webp 1254w"
          sizes="(max-width: 767px) 100vw, 60vw"
          width="1254" height="1254"
          alt="白い外殻と黒いレンズ、露出したケーブルを持つ機械生命体のキャラクター"
          fetchpriority="high">
      </div>

      <div class="hero__inner container">
        <div class="hero__content">
          <p class="hero__eyebrow label intro">WEB DESIGN <span aria-hidden="true">/</span> AD CREATIVE <span aria-hidden="true">/</span> AUTOMATION</p>
          <h1 class="hero__title intro" id="hero-title" style="--delay: 80ms">
            <span>伝わるデザイン。</span>
            <span>進化するビジネス。</span>
          </h1>
          <span class="hero__rule intro" aria-hidden="true" style="--delay: 160ms"></span>
          <p class="hero__lead intro" style="--delay: 200ms">
            ホームページ・広告・自動化ツールを、ひとつにつなぐ。<br>
            見せ方から日々の運用まで、事業に合わせて設計します。
          </p>
          <div class="hero__actions intro" style="--delay: 260ms">
            <a class="btn btn--light" href="#contact">制作を相談する<span class="btn__icon" aria-hidden="true">↗</span></a>
            <a class="btn btn--ghost" href="#services">サービスを見る<span class="btn__icon btn__icon--down" aria-hidden="true">↓</span></a>
          </div>
          <p class="hero__note label" aria-hidden="true">CREATIVE<br>AUTOMATION<br>A MORE HUMAN FUTURE</p>
        </div>
      </div>
    </section>

    <!-- Service strip -->
    <div class="strip" aria-label="サービス概要">
      <ol class="strip__list container">
        <li>
          <span class="strip__num mono">01</span>
          <span class="strip__en label">WEB DESIGN</span>
          <span class="strip__ja">ブランドを伝える、体験をつくる。</span>
        </li>
        <li>
          <span class="strip__num mono">02</span>
          <span class="strip__en label">AD CREATIVE</span>
          <span class="strip__ja">心を動かす、伝わるデザイン。</span>
        </li>
        <li>
          <span class="strip__num mono">03</span>
          <span class="strip__en label">AUTOMATION</span>
          <span class="strip__ja">くり返す作業を、未来の時間に。</span>
        </li>
      </ol>
    </div>

    <!-- ============ Services ============ -->
    <section class="services section section--light" id="services" aria-labelledby="services-title">
      <div class="container">
        <div class="section-head section-head--split reveal">
          <div>
            <p class="section-label label">OUR SERVICES</p>
            <h2 class="section-title" id="services-title">つくる。その先まで。</h2>
          </div>
          <p class="section-head__text">
            美しいデザインで伝わる体験をつくり、仕組みでビジネスを進化させる。<br class="br-pc">
            つくって終わりではなく、その先の成長まで伴走します。
          </p>
        </div>

        <ul class="service-list">
          <li class="service reveal">
            <div class="service__head">
              <span class="service__num mono" aria-hidden="true">01</span>
              <h3 class="service__title">ホームページ制作</h3>
            </div>
            <p class="service__text">伝えたい価値が届く、使いやすいWebサイトへ。目的に合わせて構成とデザインを設計します。</p>
            <p class="service__tags">コーポレートサイト / LP / ECサイト</p>
            <a class="service__link" href="https://shimono-web-samples-2026.yujiyuji-s3.chatgpt.site" target="_blank" rel="noopener">ホームページのサンプルを見る<span class="btn__icon" aria-hidden="true">↗</span><span class="visually-hidden">（新しいタブで開きます）</span></a>
            <div class="service__figure">
              <svg viewBox="0 0 200 90" aria-hidden="true" focusable="false">
                <rect x="1" y="1" width="150" height="80" />
                <g class="svg-lines"><line x1="12" y1="14" x2="64" y2="14"/><line x1="12" y1="22" x2="64" y2="22"/><line x1="12" y1="30" x2="64" y2="30"/><line x1="12" y1="38" x2="64" y2="38"/><line x1="12" y1="46" x2="64" y2="46"/><line x1="12" y1="54" x2="64" y2="54"/><line x1="12" y1="62" x2="64" y2="62"/></g>
                <rect x="82" y="12" width="56" height="52" />
              </svg>
              <span class="label service__en">WEB DESIGN</span>
            </div>
          </li>
          <li class="service reveal" style="--delay: 100ms">
            <div class="service__head">
              <span class="service__num mono" aria-hidden="true">02</span>
              <h3 class="service__title">広告デザイン</h3>
            </div>
            <p class="service__text">商品やサービスの魅力を整理し、目に留まり、伝わるクリエイティブへ。</p>
            <p class="service__tags">バナー / SNS広告 / キービジュアル</p>
            <div class="service__figure">
              <svg viewBox="0 0 200 90" aria-hidden="true" focusable="false">
                <path d="M1 1 H124 V88 H1 Z" />
                <line x1="92" y1="1" x2="92" y2="88" />
                <rect x="12" y="14" width="36" height="46" />
                <circle cx="96" cy="44" r="22" />
              </svg>
              <span class="label service__en">AD CREATIVE</span>
            </div>
          </li>
          <li class="service reveal" style="--delay: 200ms">
            <div class="service__head">
              <span class="service__num mono" aria-hidden="true">03</span>
              <h3 class="service__title">自動化ツール制作</h3>
            </div>
            <p class="service__text">繰り返しの作業を見直し、日々の業務に合う仕組みをつくります。</p>
            <p class="service__tags">データ整理 / 業務フロー / AI活用</p>
            <div class="service__figure">
              <svg viewBox="0 0 200 90" aria-hidden="true" focusable="false">
                <circle cx="20" cy="45" r="18" />
                <line x1="44" y1="45" x2="60" y2="45" /><path d="M56 41 L60 45 L56 49" />
                <rect x="66" y="28" width="34" height="34" />
                <line x1="106" y1="45" x2="122" y2="45" /><path d="M118 41 L122 45 L118 49" />
                <path d="M150 21 L174 45 L150 69 L126 45 Z" />
              </svg>
              <span class="label service__en">AUTOMATION</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- ============ Works (concept) ============ -->
    <section class="works section section--dark" id="works" aria-labelledby="works-title">
      <div class="container">
        <div class="section-head section-head--split reveal">
          <div>
            <p class="section-label label"><span class="accent">CONCEPT</span> / 自主制作イメージ</p>
            <h2 class="section-title section-title--rule" id="works-title">制作イメージ</h2>
          </div>
          <p class="section-head__text">
            テクノロジーと美意識が出会うと、こんな表現も生まれます。<br class="br-pc">
            掲載しているのは、表現の方向性を示す自主制作のコンセプトイメージです。
          </p>
        </div>

        <div class="work-grid">
          <!-- TODO: 掲載許可済みの実績が用意できたら、画像・担当範囲・制作目的を差し替える -->
          <article class="work work--large reveal" aria-labelledby="work1-title">
            <div class="work__media">
              <img src="images/glass-horses-1254.webp"
                   srcset="images/glass-horses-720.webp 720w, images/glass-horses-1254.webp 1254w"
                   sizes="(max-width: 767px) 100vw, 60vw"
                   width="1254" height="1254" loading="lazy" decoding="async"
                   alt="暗い展示空間に吊るされた透明なガラスの馬の彫刻と、床に映り込む光">
              <div class="work__overlay">
                <p class="work__display" aria-hidden="true">STILL<br>LIVES</p>
                <p class="work__catch">静けさのなかに、<br>生命が宿る。</p>
              </div>
            </div>
            <div class="work__meta">
              <div>
                <p class="work__badge label">CONCEPT / 自主制作イメージ</p>
                <h3 class="work__title" id="work1-title">Web方向性：アートギャラリー風サイト</h3>
                <p class="work__desc">透明なガラス彫刻と暗い展示空間を主役にした、ブランドサイトの表現案です。</p>
              </div>
            </div>
          </article>

          <article class="work work--small reveal" style="--delay: 120ms" aria-labelledby="work2-title">
            <div class="work__media work__media--ad">
              <img src="images/character-720.webp"
                   width="720" height="720" loading="lazy" decoding="async"
                   alt="">
              <div class="work__panel">
                <p class="work__panel-copy">テクノロジーは、<br>もっと美しく<br>寄り添える。</p>
                <p class="work__panel-sub">仕組みで、<br>人の可能性をひらく。</p>
                <span class="work__panel-rule" aria-hidden="true"></span>
              </div>
            </div>
            <div class="work__meta">
              <div>
                <p class="work__badge label">CONCEPT / 自主制作イメージ</p>
                <h3 class="work__title" id="work2-title">広告方向性：キービジュアル</h3>
                <p class="work__desc">アイボリー地に大きな文字とシアンの細いアクセントを合わせた、広告ビジュアルの表現案です。</p>
              </div>
            </div>
          </article>
        </div>
        <a class="sample-link reveal" href="https://shimono-web-samples-2026.yujiyuji-s3.chatgpt.site" target="_blank" rel="noopener">
          <span class="sample-link__label label">WEB SAMPLES / ホームページ</span>
          <span class="sample-link__title">ホームページ制作のサンプルサイト</span>
          <span class="sample-link__text">ホームページのサンプルをまとめたサイトです。別のタブで開きます。</span>
          <span class="sample-link__icon" aria-hidden="true">↗</span>
        </a>

        <p class="works__note">※ 掲載イメージは表現の提案であり、納品実績ではありません。</p>
      </div>
    </section>

    <!-- ============ Flow ============ -->
    <section class="flow section section--sub" id="flow" aria-labelledby="flow-title">
      <div class="container">
        <div class="section-head reveal">
          <p class="section-label label">FLOW</p>
          <h2 class="section-title" id="flow-title">制作の流れ</h2>
        </div>
        <ol class="flow-list">
          <li class="flow-step reveal">
            <span class="flow-step__num mono">01</span>
            <h3 class="flow-step__title">ご相談</h3>
            <p class="flow-step__text">つくりたいものや、業務の困りごとをお聞かせください。</p>
          </li>
          <li class="flow-step reveal" style="--delay: 80ms">
            <span class="flow-step__num mono">02</span>
            <h3 class="flow-step__title">方向性の整理</h3>
            <p class="flow-step__text">目的と課題を整理し、進め方と制作の方向性をまとめます。</p>
          </li>
          <li class="flow-step reveal" style="--delay: 160ms">
            <span class="flow-step__num mono">03</span>
            <h3 class="flow-step__title">デザイン・制作</h3>
            <p class="flow-step__text">確認をはさみながら、デザインと実装を進めます。</p>
          </li>
          <li class="flow-step reveal" style="--delay: 240ms">
            <span class="flow-step__num mono">04</span>
            <h3 class="flow-step__title">確認・公開</h3>
            <p class="flow-step__text">最終確認のうえ公開し、その後の運用につなげます。</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ============ Contact ============ -->
    <section class="contact section" id="contact" aria-labelledby="contact-title">
      <div class="container contact__inner">
        <p class="contact__side label" aria-hidden="true">LET'S CREATE<br>THE NEXT TOGETHER</p>
        <h2 class="contact__title reveal" id="contact-title">次の一歩を、<br>一緒につくる。</h2>
        <div class="contact__body reveal" style="--delay: 100ms">
          <p>つくりたいものや、日々の業務の困りごとからお聞かせください。</p>
          <a class="btn btn--light contact__btn" href="mailto:yujiyuji.s3@gmail.com?subject=%E5%88%B6%E4%BD%9C%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87">
            メールで相談する<span class="btn__icon" aria-hidden="true">↗</span>
          </a>
          <p class="contact__mail">
            <span class="label">MAIL</span>
            <a href="mailto:yujiyuji.s3@gmail.com">yujiyuji.s3@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  </main>

  <!-- ============ Footer ============ -->
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <a class="logo" href="#top" aria-label="YUJI SHIMONO トップへ">YUJI SHIMONO</a>
      <nav aria-label="フッターメニュー">
        <ul class="footer-nav">
          <li><a href="#services">サービス</a></li>
          <li><a href="#works">制作イメージ</a></li>
          <li><a href="#flow">制作の流れ</a></li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
      </nav>
      <p class="copyright">© <span data-year>2026</span> YUJI SHIMONO</p>
    </div>
  </footer>

  <script src="js/main.js" defer></script>
</body>
</html>
````

### css/style.css

````css
/* =========================================================
   YUJI SHIMONO — 制作サービスサイト
   デザイントークンは docs/handoff-spec.md に準拠
   ========================================================= */

:root {
  --bg: #101416;            /* 主背景 */
  --bg-sub: #1a2023;        /* 補助背景 */
  --ivory: #f2f1eb;         /* 明るい面・主文字 */
  --text-dim: #c3cbcc;      /* 暗い面の本文 */
  --accent: #a9eee4;        /* アクセント（暗い面） */
  --accent-light: #22706a;  /* アクセント（明るい面：コントラスト調整済み） */
  --line: #394347;          /* 暗い面の罫線 */
  --ink: #171c1f;           /* 明るい面の文字 */
  --line-light: #cfcdc4;    /* 明るい面の罫線 */

  --font-ja: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif;
  --font-en: "Inter", "Helvetica Neue", Arial, var(--font-ja);
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

  --header-h: 64px;
  --gutter: 24px;
  --container: 1280px;
  --section-y: 88px;
  --radius: 2px;
  --ease: cubic-bezier(.2, .7, .2, 1);
}

@media (min-width: 768px) {
  :root { --gutter: 40px; --section-y: 104px; }
}
@media (min-width: 1024px) {
  :root { --header-h: 80px; --gutter: 80px; --section-y: 120px; }
}

/* ---------- Base ---------- */
*, *::before, *::after { box-sizing: border-box; }

html {
  -webkit-text-size-adjust: 100%;
  scroll-padding-top: calc(var(--header-h) + 8px);
}
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ivory);
  font-family: var(--font-ja);
  font-size: 16px;
  line-height: 1.8;
  letter-spacing: .02em;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
@media (min-width: 1024px) {
  body { font-size: 17px; }
}

body.is-menu-open { overflow: hidden; }

img, svg { display: block; max-width: 100%; }
img { height: auto; }
h1, h2, h3, p, ul, ol { margin: 0; }
ul, ol { padding: 0; list-style: none; }
a { color: inherit; text-decoration: none; }
button { font: inherit; color: inherit; }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
.section--light :focus-visible { outline-color: var(--accent-light); }
[tabindex="-1"]:focus { outline: none; }

.visually-hidden {
  position: absolute !important;
  width: 1px; height: 1px;
  margin: -1px; padding: 0; border: 0;
  overflow: hidden; clip: rect(0 0 0 0);
  white-space: nowrap;
}

.skip-link {
  position: absolute;
  left: 16px; top: -100px;
  z-index: 300;
  padding: 12px 20px;
  background: var(--ivory);
  color: var(--ink);
  font-weight: 700;
  font-size: 14px;
}
.skip-link:focus { top: 16px; }

.container {
  width: 100%;
  max-width: calc(var(--container) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

/* 英字小ラベル */
.label {
  font-family: var(--font-en);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.7;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--text-dim);
}
.mono {
  font-family: var(--font-mono);
  font-weight: 400;
  letter-spacing: .04em;
}
.accent { color: var(--accent); }

.br-pc { display: none; }
@media (min-width: 1024px) { .br-pc { display: inline; } }

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 52px;
  padding: 0 24px;
  border: 1px solid transparent;
  border-radius: var(--radius);
  font-family: var(--font-ja);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: .06em;
  cursor: pointer;
  transition: border-color .3s var(--ease), background-color .3s var(--ease);
}
.btn__icon {
  display: inline-block;
  font-family: var(--font-en);
  font-weight: 400;
  font-size: 16px;
  transition: transform .3s var(--ease);
}
.btn:hover .btn__icon { transform: translate(3px, -3px); }
.btn:hover .btn__icon--down { transform: translateY(3px); }

.btn--light {
  background: var(--ivory);
  color: var(--ink);
  border-color: var(--ivory);
}
.btn--light:hover { border-color: var(--accent); }

.btn--ghost {
  background: transparent;
  color: var(--ivory);
  border-color: rgba(242, 241, 235, .55);
}
.btn--ghost:hover { border-color: var(--ivory); }

.btn--sm { min-height: 44px; padding: 0 18px; font-size: 14px; gap: 14px; }
.btn--block { display: flex; width: 100%; }

/* ---------- Header ---------- */
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  height: var(--header-h);
  border-bottom: 1px solid transparent;
  transition: background-color .35s var(--ease), border-color .35s var(--ease);
}
.site-header.is-scrolled {
  background: rgba(16, 20, 22, .94);
  border-bottom-color: rgba(57, 67, 71, .7);
}
.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: calc(var(--container) + var(--gutter) * 2);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.logo {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-family: var(--font-en);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .28em;
  white-space: nowrap;
  color: var(--ivory);
}
.logo span { margin-inline: .35em; }

.global-nav { display: none; }

@media (min-width: 1024px) {
  .global-nav {
    display: flex;
    align-items: center;
    gap: 48px;
  }
  .global-nav__list { display: flex; gap: 36px; }
  .global-nav__list a {
    position: relative;
    display: inline-block;
    padding: 10px 0;
    font-size: 14px;
    letter-spacing: .08em;
    color: var(--ivory);
  }
  .global-nav__list a::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: 4px;
    height: 1px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .3s var(--ease);
  }
  .global-nav__list a:hover::after { transform: scaleX(1); }
}

.menu-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px; height: 48px;
  margin-right: -12px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
.menu-toggle__bars,
.menu-toggle__bars::before {
  display: block;
  width: 24px;
  height: 1px;
  background: var(--ivory);
}
.menu-toggle__bars { position: relative; transform: translateY(-4px); }
.menu-toggle__bars::before {
  content: "";
  position: absolute;
  left: 0; top: 8px;
}
@media (min-width: 1024px) {
  .menu-toggle { display: none; }
}

/* Mobile menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  padding: 0 var(--gutter) 40px;
  background: var(--bg);
  overflow-y: auto;
}
.mobile-menu[hidden] { display: none; }
.mobile-menu__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-h);
  flex-shrink: 0;
  border-bottom: 1px solid var(--line);
}
.mobile-menu__close {
  width: 48px; height: 48px;
  margin-right: -12px;
  border: 0;
  background: transparent;
  font-family: var(--font-en);
  font-size: 28px;
  font-weight: 300;
  line-height: 1;
  cursor: pointer;
}
.mobile-menu__list { margin: 24px 0 40px; }
.mobile-menu__list a {
  display: flex;
  align-items: baseline;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
  font-size: 20px;
  letter-spacing: .08em;
}
.mobile-menu__list .mono { font-size: 12px; color: var(--accent); }
@media (prefers-reduced-motion: no-preference) {
  .mobile-menu:not([hidden]) { animation: fade-in .3s var(--ease) both; }
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: calc(var(--header-h) + 40px);
  background: var(--bg);
  overflow: hidden;
}
.hero__inner { position: relative; z-index: 2; }

.hero__eyebrow { margin-bottom: 20px; color: var(--text-dim); letter-spacing: .24em; }

.hero__title {
  font-size: clamp(28px, 9.2vw, 40px);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: .02em;
}
.hero__title span { display: block; white-space: nowrap; }

.hero__rule {
  display: block;
  width: 32px; height: 1px;
  margin: 28px 0 24px;
  background: var(--ivory);
}
.hero__lead { color: var(--ivory); font-size: 15px; line-height: 1.9; }

.hero__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
}
.hero__actions .btn { width: 100%; }

.hero__note { display: none; }

/* スマートフォン：キャラクターは文章の下に配置 */
.hero__visual {
  position: relative;
  order: 2;
  margin-top: 40px;
  aspect-ratio: 1 / .9;
  max-height: 440px;
  overflow: hidden;
}
.hero__visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 55%;
}
.hero__visual::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(to bottom, var(--bg) 0%, rgba(16, 20, 22, 0) 16%, rgba(16, 20, 22, 0) 82%, var(--bg) 100%),
    rgba(16, 20, 22, .18);
}

@media (min-width: 600px) and (max-width: 1023px) {
  .hero__actions { flex-direction: row; }
  .hero__actions .btn { width: auto; }
  .hero__visual { width: 100%; max-width: 640px; max-height: none; margin-inline: auto; }
  .hero__visual::after {
    background:
      linear-gradient(to right, var(--bg) 0%, rgba(16, 20, 22, 0) 12%, rgba(16, 20, 22, 0) 88%, var(--bg) 100%),
      linear-gradient(to bottom, var(--bg) 0%, rgba(16, 20, 22, 0) 16%, rgba(16, 20, 22, 0) 82%, var(--bg) 100%),
      rgba(16, 20, 22, .18);
  }
  .hero__title { font-size: clamp(40px, 6.6vw, 56px); }
}

/* PC：左に文字、右にキャラクター */
@media (min-width: 1024px) {
  .hero {
    min-height: clamp(680px, 100svh, 860px);
    justify-content: center;
    padding-top: var(--header-h);
  }
  .hero__visual {
    position: absolute;
    top: 0; right: 0; bottom: 0;
    order: 0;
    width: 60%;
    max-height: none;
    margin: 0;
    aspect-ratio: auto;
  }
  .hero__visual img { object-position: 60% 45%; }
  .hero__visual::after {
    background:
      linear-gradient(to right, var(--bg) 0%, rgba(16, 20, 22, .72) 14%, rgba(16, 20, 22, 0) 38%),
      linear-gradient(to bottom, rgba(16, 20, 22, .55) 0%, rgba(16, 20, 22, 0) 22%, rgba(16, 20, 22, 0) 80%, var(--bg) 100%),
      rgba(16, 20, 22, .2);
  }

  .hero__content { max-width: 620px; padding-block: 64px; }
  .hero__title { font-size: clamp(48px, 4.6vw, 68px); line-height: 1.25; }
  .hero__lead { font-size: 16px; }
  .hero__actions { flex-direction: row; gap: 16px; margin-top: 40px; }
  .hero__actions .btn { width: auto; min-width: 184px; justify-content: space-between; }

  .hero__note {
    display: block;
    margin-top: 56px;
    padding-left: 14px;
    border-left: 1px solid var(--line);
    font-size: 12px;
    letter-spacing: .18em;
    color: #8f9a9c;
  }
}

/* ---------- Strip ---------- */
.strip {
  position: relative;
  z-index: 2;
  background: var(--bg);
  border-top: 1px solid var(--line);
}
.strip__list { display: grid; }
.strip__list li {
  display: grid;
  grid-template-columns: 32px 1fr;
  column-gap: 12px;
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
}
.strip__list li:last-child { border-bottom: 0; }
.strip__num { grid-row: span 2; font-size: 12px; color: var(--accent); line-height: 2; }
.strip__en { color: var(--ivory); }
.strip__ja { font-size: 14px; color: var(--text-dim); }

@media (min-width: 768px) {
  .strip__list { grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .strip__list li {
    display: block;
    padding: 24px 0 28px 20px;
    border-bottom: 0;
    border-left: 1px solid var(--line);
  }
  .strip__num { display: block; margin: 0 0 6px -20px; line-height: 1.5; }
  .strip__en, .strip__ja { display: block; }
}

/* ---------- Sections (common) ---------- */
.section { padding-block: var(--section-y); }
.section--light { background: var(--ivory); color: var(--ink); }
.section--dark { background: var(--bg); }
.section--sub { background: var(--bg-sub); }

.section-label { margin-bottom: 12px; }
.section--light .section-label { color: var(--accent-light); }

.section-title {
  font-size: clamp(26px, 8.4vw, 34px);
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: .03em;
}
@media (min-width: 768px) {
  .section-title { font-size: clamp(36px, 3.6vw, 48px); }
}
.section-title--rule {
  display: flex;
  align-items: center;
  gap: 24px;
}
.section-title--rule::after {
  content: "";
  width: 32px; height: 1px;
  background: var(--text-dim);
}

.section-head { margin-bottom: 48px; }
.section-head__text { margin-top: 24px; color: var(--text-dim); font-size: 15px; }
.section--light .section-head__text { color: #3c4448; }

@media (min-width: 1024px) {
  .section-head { margin-bottom: 72px; }
  .section-head--split {
    display: grid;
    grid-template-columns: 5fr 7fr;
    gap: 24px;
    align-items: center;
  }
  .section-head--split .section-head__text {
    margin-top: 0;
    padding: 12px 0 12px 48px;
    border-left: 1px solid var(--line);
    font-size: 16px;
  }
  .section--light .section-head--split .section-head__text { border-left-color: var(--line-light); }
}

/* ---------- Services ---------- */
.service-list { display: grid; gap: 0; }
.service {
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  border-top: 1px solid var(--line-light);
}
.service:first-child { padding-top: 8px; border-top: 0; }
.service__head {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}
.service__num {
  font-family: var(--font-en);
  font-size: 44px;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 0;
  color: var(--accent-light);
}
.service__title { font-size: 22px; font-weight: 700; line-height: 1.4; letter-spacing: .06em; }
.service__text { color: #2d3437; }
.service__tags {
  margin-top: 16px;
  font-size: 13px;
  letter-spacing: .06em;
  color: var(--accent-light);
}
.service__figure {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  padding-top: 32px;
}
.service__figure svg {
  flex: 0 1 180px;
  min-width: 0;
  height: auto;
  fill: none;
  stroke: var(--ink);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
  overflow: visible;
}
.service__figure svg * { vector-effect: non-scaling-stroke; }
.service__en {
  padding-top: 12px;
  border-top: 1px solid var(--ink);
  font-size: 12px;
  color: var(--ink);
  white-space: nowrap;
}

@media (min-width: 900px) {
  .service-list { grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .service,
  .service:first-child {
    padding: 0 32px 0 32px;
    border-top: 0;
    border-left: 1px solid var(--line-light);
  }
  .service:first-child { padding-left: 0; border-left: 0; }
  .service__num { font-size: 52px; }
  .service__text { font-size: 15px; }
}

/* ---------- Works ---------- */
.work-grid { display: grid; gap: 48px; }
@media (min-width: 900px) {
  .work-grid { grid-template-columns: 1.3fr 1fr; gap: 16px; }
}

.work { display: flex; flex-direction: column; }
.work__media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border: 1px solid var(--line);
  background: #0b0e0f;
}
@media (min-width: 900px) {
  .work__media { aspect-ratio: auto; height: clamp(300px, 28vw, 400px); }
}
.work__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.work--large .work__media img { object-position: 50% 12%; }

.work__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(to right, rgba(11, 14, 15, .85) 0%, rgba(11, 14, 15, .35) 45%, rgba(11, 14, 15, 0) 70%);
}
.work__display {
  font-family: var(--font-en);
  font-size: clamp(32px, 9vw, 52px);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: .22em;
  color: var(--ivory);
}
.work__catch { margin-top: 16px; font-size: 13px; line-height: 1.8; color: var(--ivory); }
@media (max-width: 599px) {
  /* スマートフォンでは写真上の文章を省き、見出し文字のみ残す */
  .work__catch { display: none; }
}
@media (min-width: 900px) {
  .work__overlay { padding: 40px; }
}

/* 広告方向性：アイボリー地＋大きな文字＋シアンの細いアクセント */
.work__media--ad {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  background: var(--ivory);
}
.work__media--ad img { object-position: 76% 44%; }
.work__panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 16px 16px 20px;
  background: linear-gradient(to right, rgba(242, 241, 235, .9), var(--ivory) 24%);
  color: var(--ink);
}
.work__panel-copy {
  font-size: clamp(15px, 4.4vw, 22px);
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: .06em;
}
.work__panel-sub { margin-top: 12px; font-size: 12px; line-height: 1.8; color: #3c4448; }
.work__panel-rule {
  display: block;
  width: 40px; height: 1px;
  margin-top: 20px;
  background: #5fbfb3;
}
@media (min-width: 900px) {
  .work__media--ad { grid-template-columns: 1.1fr 1fr; }
  .work__panel { padding: 32px 28px; }
  .work__panel-copy { font-size: clamp(18px, 1.6vw, 22px); }
}

.work__meta {
  margin-top: 20px;
  padding-left: 16px;
  border-left: 1px solid var(--line);
}
.work__badge { color: var(--accent); }
.work__title { margin-top: 6px; font-size: 17px; font-weight: 500; line-height: 1.6; letter-spacing: .04em; }
.work__desc { margin-top: 6px; font-size: 14px; color: var(--text-dim); }

.service__link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  align-self: flex-start;
  min-height: 44px;
  margin-top: 8px;
  border-bottom: 1px solid var(--ink);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .06em;
}
.service__link:hover .btn__icon { transform: translate(3px, -3px); }

.sample-link {
  position: relative;
  display: grid;
  gap: 6px;
  margin-top: 48px;
  padding: 28px 64px 28px 24px;
  border: 1px solid var(--line);
  border-left: 2px solid var(--accent);
  background: var(--bg-sub);
  transition: border-color .3s var(--ease);
}
.sample-link:hover { border-color: var(--text-dim); border-left-color: var(--accent); }
.sample-link__label { color: var(--accent); }
.sample-link__title { font-size: 18px; font-weight: 700; letter-spacing: .06em; line-height: 1.5; }
.sample-link__text { font-size: 14px; color: var(--text-dim); }
.sample-link__icon {
  position: absolute;
  right: 24px; top: 50%;
  font-family: var(--font-en);
  font-size: 22px;
  transform: translateY(-50%);
  transition: transform .3s var(--ease);
}
.sample-link:hover .sample-link__icon { transform: translate(3px, calc(-50% - 3px)); }
@media (min-width: 900px) {
  .sample-link { padding: 32px 88px 32px 40px; }
  .sample-link__title { font-size: 20px; }
  .sample-link__icon { right: 40px; }
}

.works__note { margin-top: 24px; font-size: 13px; color: var(--text-dim); }

/* ---------- Flow ---------- */
.flow-list { display: grid; position: relative; }
.flow-step {
  position: relative;
  padding: 0 0 36px 32px;
}
/* 縦の細い線（スマートフォン） */
.flow-step::before {
  content: "";
  position: absolute;
  left: 4px; top: 8px; bottom: -8px;
  width: 1px;
  background: var(--line);
}
.flow-step:last-child::before { display: none; }
.flow-step::after {
  content: "";
  position: absolute;
  left: 0; top: 8px;
  width: 9px; height: 9px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  background: var(--bg-sub);
}
.flow-step:last-child { padding-bottom: 0; }
.flow-step__num { display: block; font-size: 12px; color: var(--accent); line-height: 1.8; }
.flow-step__title { margin-top: 4px; font-size: 18px; font-weight: 700; letter-spacing: .06em; line-height: 1.5; }
.flow-step__text { margin-top: 8px; font-size: 14px; color: var(--text-dim); }

@media (min-width: 900px) {
  .flow-list { grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .flow-step { padding: 32px 16px 0 0; }
  /* 横方向の細い線 */
  .flow-step::before {
    left: 0; right: -24px; top: 4px; bottom: auto;
    width: auto; height: 1px;
  }
  .flow-step:last-child::before { display: block; right: 0; }
  .flow-step::after { top: 0; }
}

/* ---------- Contact ---------- */
.contact {
  position: relative;
  /* スマートフォンでは写真の上に本文を乗せない */
  background: linear-gradient(to bottom, var(--bg-sub), var(--bg));
  border-top: 1px solid var(--line);
}
@media (min-width: 900px) {
  .contact {
    background:
      linear-gradient(to bottom, rgba(16, 20, 22, .82), rgba(16, 20, 22, .7) 60%, rgba(16, 20, 22, .9)),
      url("../images/character-1254.webp") 50% 96% / cover no-repeat,
      var(--bg);
  }
}
.contact__inner { position: relative; display: grid; gap: 32px; }
.contact__side { font-size: 12px; letter-spacing: .18em; }
.contact__title {
  font-size: clamp(30px, 9vw, 40px);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: .04em;
}
.contact__body p:first-child { color: var(--text-dim); }
.contact__btn { width: 100%; margin-top: 28px; }
.contact__mail {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 16px;
  margin-top: 16px;
  font-family: var(--font-en);
  font-size: 15px;
  letter-spacing: .04em;
}
.contact__mail a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  word-break: break-all;
  text-decoration: underline;
  text-decoration-color: var(--line);
  text-underline-offset: 5px;
}
.contact__mail a:hover { text-decoration-color: var(--accent); }

@media (min-width: 900px) {
  .contact__inner {
    grid-template-columns: 180px auto 1fr;
    align-items: center;
    gap: 48px;
  }
  .contact__side { align-self: start; }
  .contact__title { font-size: clamp(40px, 3.8vw, 52px); padding-right: 48px; border-right: 1px solid var(--line); }
  .contact__btn { width: auto; min-width: 220px; justify-content: space-between; }
}

/* ---------- Footer ---------- */
.site-footer {
  padding-block: 32px 40px;
  border-top: 1px solid var(--line);
  background: var(--bg);
}
.site-footer__inner {
  display: grid;
  gap: 16px;
}
.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
}
.footer-nav a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: 13px;
  letter-spacing: .06em;
}
.footer-nav a:hover { text-decoration: underline; text-underline-offset: 4px; text-decoration-color: var(--accent); }
.copyright {
  font-family: var(--font-en);
  font-size: 12px;
  letter-spacing: .1em;
  color: var(--text-dim);
}

@media (min-width: 1024px) {
  .site-footer__inner {
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 40px;
  }
  .footer-nav { justify-content: center; gap: 0 36px; }
}

/* ---------- Motion ---------- */
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: no-preference) {
  /* 初回表示：短いフェード */
  .intro { animation: fade-up .6s var(--ease) both; animation-delay: var(--delay, 0ms); }
  .hero__visual.intro { animation-name: fade-in; animation-duration: .9s; }

  /* 下層：12px以内・500msの控えめな出現（JS有効時のみ） */
  .js .reveal {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity .5s var(--ease), transform .5s var(--ease);
    transition-delay: var(--delay, 0ms);
  }
  .js .reveal.is-visible { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}

@media print {
  .site-header, .menu-toggle, .mobile-menu { display: none !important; }
  .reveal { opacity: 1 !important; transform: none !important; }
}
````

### js/main.js

````javascript
(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;

  /* ---------- Header: スクロールで背景を不透明に ---------- */
  var header = document.querySelector('.site-header');
  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var closeBtn = menu.querySelector('.mobile-menu__close');
  var toggleLabel = toggle.querySelector('.visually-hidden');
  var main = document.getElementById('main');
  var footer = document.querySelector('.site-footer');
  var desktopQuery = window.matchMedia('(min-width: 1024px)');

  function focusables() {
    return Array.prototype.slice.call(
      menu.querySelectorAll('a[href], button:not([disabled])')
    );
  }

  function setBackgroundInert(state) {
    [main, footer, header].forEach(function (el) {
      if (state) {
        el.setAttribute('inert', '');
        el.setAttribute('aria-hidden', 'true');
      } else {
        el.removeAttribute('inert');
        el.removeAttribute('aria-hidden');
      }
    });
  }

  function openMenu() {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggleLabel.textContent = 'メニューを閉じる';
    body.classList.add('is-menu-open');
    setBackgroundInert(true);
    closeBtn.focus();
    document.addEventListener('keydown', onMenuKeydown);
  }

  function closeMenu(returnFocus) {
    if (menu.hidden) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggleLabel.textContent = 'メニューを開く';
    body.classList.remove('is-menu-open');
    setBackgroundInert(false);
    document.removeEventListener('keydown', onMenuKeydown);
    if (returnFocus !== false) toggle.focus();
  }

  function onMenuKeydown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
      return;
    }
    if (e.key !== 'Tab') return;
    // フォーカスをメニュー内に留める
    var items = focusables();
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  toggle.addEventListener('click', function () {
    if (menu.hidden) openMenu(); else closeMenu();
  });
  closeBtn.addEventListener('click', function () { closeMenu(); });

  // メニュー内リンク：閉じてから該当セクションへ移動し、見出しへフォーカス
  menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      closeMenu(false);
      target.scrollIntoView();
      history.pushState(null, '', link.getAttribute('href'));
      focusSection(target);
    });
  });

  // PC幅に広がったらメニューを閉じる
  function onDesktopChange(e) { if (e.matches) closeMenu(false); }
  if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', onDesktopChange);
  else if (desktopQuery.addListener) desktopQuery.addListener(onDesktopChange);

  /* ---------- ページ内リンク：移動先へフォーカスを移す ---------- */
  function focusSection(target) {
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
  document.querySelectorAll('a[href^="#"]:not(.mobile-menu a)').forEach(function (link) {
    link.addEventListener('click', function () {
      var id = link.getAttribute('href');
      if (id === '#top' || id === '#main') return;
      var target = document.querySelector(id);
      if (target) focusSection(target);
    });
  });

  /* ---------- 下層コンテンツの出現 ---------- */
  var reveals = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || reduceMotion) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- フッターの年号 ---------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  root.classList.add('is-ready');
})();
````

