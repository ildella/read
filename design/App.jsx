const steps = [
  {
    number: "01",
    title: "Save",
    kicker: "Browser extension",
    text: "One click turns a noisy web page into a clean article you can keep. Ads, popups, and layout clutter fall away before they reach your library.",
  },
  {
    number: "02",
    title: "Listen",
    kicker: "Natural long-form TTS",
    text: "Queue essays, deep dives, and documentation for the walk home, the train, or the kitchen. Frankie keeps the pace gentle and the voice yours.",
  },
  {
    number: "03",
    title: "Understand",
    kicker: "Inline explanations",
    text: "Tap a word or passage for a quiet explanation in place. No tabs, no rabbit holes, no interruption to the thought you were following.",
  },
];

const highlights = [
  {
    title: "Offline-first",
    text: "Your articles live on your device. Save once, then read or listen without asking the cloud for permission.",
  },
  {
    title: "Beautiful voices, your choice",
    text: "Start with Frankie’s built-in natural voices, then connect your preferred TTS provider or API key when you want full control.",
  },
  {
    title: "Calm by design",
    text: "No social feeds, algorithms, streaks, or notification traps. Just a quiet room for the web you meant to finish.",
  },
];

const faqs = [
  ["Do I need an internet connection?", "Only to save. Reading and listening work offline after the article is on your device."],
  ["Which TTS voices are supported?", "OpenAI, ElevenLabs, Gemini, local models, and any provider you connect with your own API key."],
  ["Is this a replacement for Pocket?", "Yes. Frankie is built for the readers Pocket left behind, with listening as a first-class habit."],
  ["Does it summarize articles?", "It can, but that is not the point. The point is helping you actually read what you saved."],
  ["Is my data stored in the cloud?", "No. Articles are stored on your device. Frankie is offline-first, always."],
];

function FlowGlyph() {
  return (
    <svg className="flow-glyph" viewBox="0 0 640 430" role="img" aria-label="A quiet save, listen, and understand reading flow">
      <defs>
        <linearGradient id="pageGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#fff7e9" />
          <stop offset="1" stopColor="#eac47e" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#543515" floodOpacity="0.16" />
        </filter>
      </defs>
      <path className="orbit" d="M98 210 C 180 92, 286 74, 384 138 S 544 248, 486 326 C 424 409, 242 391, 138 304" />
      <g filter="url(#softShadow)">
        <rect x="150" y="74" width="250" height="310" rx="26" fill="url(#pageGlow)" />
        <rect x="176" y="104" width="96" height="12" rx="6" fill="#4b3823" opacity=".74" />
        <rect x="176" y="136" width="174" height="9" rx="4.5" fill="#7e6441" opacity=".32" />
        <rect x="176" y="160" width="190" height="9" rx="4.5" fill="#7e6441" opacity=".26" />
        <rect x="176" y="184" width="142" height="9" rx="4.5" fill="#7e6441" opacity=".26" />
        <path d="M176 230 C230 212 289 212 350 230" stroke="#9f7134" strokeWidth="7" strokeLinecap="round" fill="none" opacity=".55" />
        <path d="M176 258 C230 276 289 276 350 258" stroke="#9f7134" strokeWidth="7" strokeLinecap="round" fill="none" opacity=".55" />
        <rect x="176" y="314" width="132" height="10" rx="5" fill="#4b3823" opacity=".18" />
      </g>
      <g className="sound-lines" fill="none" stroke="#a85b2d" strokeWidth="8" strokeLinecap="round">
        <path d="M430 168 C462 198 462 244 430 274" />
        <path d="M463 132 C518 185 518 258 463 310" opacity=".55" />
      </g>
      <g className="word-pop">
        <rect x="374" y="278" width="134" height="58" rx="18" fill="#33291f" />
        <text x="398" y="313" fill="#fff5e2" fontSize="18" fontFamily="Georgia, serif">explain</text>
      </g>
      <circle cx="126" cy="128" r="15" fill="#bd6b37" />
      <circle cx="514" cy="80" r="9" fill="#d9aa54" />
      <circle cx="82" cy="308" r="7" fill="#7b5a33" />
    </svg>
  );
}

function WaveMark() {
  return (
    <svg className="wave-mark" viewBox="0 0 180 46" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5, 6].map((bar) => (
        <rect key={bar} x={16 + bar * 22} y={10 + (bar % 2) * 8} width="8" height={26 - (bar % 2) * 8} rx="4" />
      ))}
    </svg>
  );
}

function App() {
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#A8582D",
  "paperWarmth": "#F6EFE3",
  "sectionScale": 1,
  "radiusScale": 1
}/*EDITMODE-END*/;


  const scrollToFlow = () => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{`
        :root {
          --paper: #f6efe3;
          --paper-deep: #eadcc7;
          --ink: #2b241d;
          --muted: #766856;
          --faint: #9d8e78;
          --line: rgba(87, 63, 37, 0.18);
          --surface: rgba(255, 249, 238, 0.72);
          --surface-solid: #fff7e8;
          --accent: #a8582d;
          --accent-dark: #74401f;
          --gold: #d3a14e;
          --sage: #69705a;
          --shadow: 0 28px 90px rgba(73, 46, 19, 0.13);
          --radius: calc(28px * var(--ocd-tweak-radius-scale, 1));
          --max: 1160px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          color: var(--ink);
          background:
            radial-gradient(circle at 14% 4%, rgba(211,161,78,.24), transparent 28rem),
            radial-gradient(circle at 90% 12%, rgba(168,88,45,.12), transparent 25rem),
            linear-gradient(180deg, var(--paper), #f9f2e7 58%, #efe2cf);
          font-family: 'Iowan Old Style', 'Palatino Linotype', Georgia, serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: .09;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
        }

        a { color: inherit; }
        button, a { -webkit-tap-highlight-color: transparent; }
        a:focus-visible, button:focus-visible, summary:focus-visible {
          outline: 3px solid rgba(168, 88, 45, .42);
          outline-offset: 4px;
          border-radius: 999px;
        }

        .site-header {
          position: fixed;
          z-index: 20;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: min(calc(100% - 32px), var(--max));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 14px 12px 18px;
          border: 1px solid rgba(87, 63, 37, .14);
          border-radius: 999px;
          background: rgba(250, 242, 228, .75);
          backdrop-filter: blur(18px);
          box-shadow: 0 12px 32px rgba(75, 54, 29, .08);
        }

        .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; font-weight: 700; }
        .brand-mark {
          width: 34px; height: 34px; border-radius: 50%;
          display: grid; place-items: center;
          background: var(--ink); color: var(--surface-solid);
          font-family: 'Fraunces', Georgia, serif;
          font-variation-settings: 'WONK' 1;
        }
        .nav-links { display: flex; align-items: center; gap: 24px; font-size: .92rem; color: var(--muted); }
        .nav-links a { text-decoration: none; }
        .nav-links a:hover { color: var(--ink); }
        .header-cta {
          border: 1px solid rgba(43,36,29,.18);
          background: var(--ink);
          color: #fff8e9;
          padding: 11px 17px;
          min-height: 44px;
          border-radius: 999px;
          font-family: inherit;
          font-weight: 700;
          cursor: pointer;
          transition: transform .2s ease, background .2s ease;
        }
        .header-cta:hover { transform: translateY(-1px); background: #3a3025; }

        main { overflow: hidden; }
        section { position: relative; }
        .container { width: min(calc(100% - 40px), var(--max)); margin: 0 auto; }

        .hero {
          min-height: 100svh;
          display: grid;
          align-items: center;
          padding: 116px 0 72px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(320px, .88fr);
          align-items: center;
          gap: clamp(36px, 7vw, 92px);
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--accent-dark);
          border: 1px solid rgba(168,88,45,.22);
          background: rgba(255, 247, 232, .58);
          border-radius: 999px;
          padding: 8px 13px;
          font-size: .92rem;
          font-weight: 700;
        }
        .eyebrow::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 0 5px rgba(211,161,78,.18); }
        h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; letter-spacing: -.035em; margin: 0; }
        h1 {
          max-width: 780px;
          margin-top: 24px;
          font-size: clamp(3.5rem, 9vw, 8.8rem);
          line-height: .89;
          font-weight: 750;
          font-variation-settings: 'SOFT' 70, 'WONK' 1;
        }
        .hero-sub {
          max-width: 660px;
          margin: 28px 0 0;
          color: var(--muted);
          font-size: clamp(1.12rem, 2vw, 1.42rem);
          line-height: 1.65;
        }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; align-items: center; }
        .btn {
          min-height: 48px;
          border-radius: 999px;
          border: 1px solid transparent;
          padding: 14px 22px;
          font: 700 1rem/1 'Literata', Georgia, serif;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .btn-primary { background: var(--accent); color: #fff8e9; box-shadow: 0 14px 30px rgba(168,88,45,.22); }
        .btn-primary:hover { transform: translateY(-2px); background: #964e28; }
        .btn-secondary { background: rgba(255,248,234,.58); color: var(--ink); border-color: rgba(43,36,29,.18); }
        .btn-secondary:hover { transform: translateY(-2px); background: rgba(255,248,234,.9); }
        .availability { margin-top: 18px; color: var(--faint); font-size: .98rem; }

        .hero-visual {
          position: relative;
          min-height: 520px;
          display: grid;
          place-items: center;
        }
        .reading-room {
          position: absolute;
          inset: 5% 0 auto auto;
          width: min(96%, 560px);
          aspect-ratio: 1.08;
          border: 1px solid rgba(87,63,37,.12);
          border-radius: 42% 58% 48% 52% / 44% 40% 60% 56%;
          background: radial-gradient(circle at 44% 42%, rgba(255,250,239,.84), rgba(238,212,166,.48) 52%, rgba(168,88,45,.08) 78%);
          box-shadow: inset 0 0 80px rgba(255,255,255,.38), var(--shadow);
        }
        .flow-glyph { position: relative; z-index: 2; width: min(100%, 640px); height: auto; overflow: visible; }
        .orbit { fill: none; stroke: rgba(123,90,51,.2); stroke-width: 2; stroke-dasharray: 6 12; }
        .sound-lines { animation: breathe 3.4s ease-in-out infinite; transform-origin: 430px 220px; }
        .word-pop { animation: float 4.8s ease-in-out infinite; }
        .margin-note {
          position: absolute;
          z-index: 3;
          right: 0;
          bottom: 56px;
          max-width: 220px;
          padding: 18px;
          border-left: 2px solid var(--accent);
          background: rgba(255,247,232,.74);
          backdrop-filter: blur(12px);
          color: var(--muted);
          font-size: .98rem;
          line-height: 1.5;
          box-shadow: 0 16px 50px rgba(64,43,21,.08);
        }
        .margin-note strong { color: var(--ink); display: block; margin-bottom: 4px; }

        .section-pad { padding: calc(clamp(78px, 12vw, 148px) * var(--ocd-tweak-section-scale, 1)) 0; }
        .section-head { max-width: 720px; margin-bottom: clamp(34px, 6vw, 68px); }
        .section-kicker { color: var(--accent-dark); font-weight: 800; font-size: .95rem; letter-spacing: .08em; text-transform: uppercase; }
        h2 { margin-top: 12px; font-size: clamp(2.35rem, 5.5vw, 5.8rem); line-height: .95; font-weight: 720; }
        .section-lede { color: var(--muted); font-size: clamp(1.05rem, 1.7vw, 1.25rem); line-height: 1.72; margin: 20px 0 0; max-width: 620px; }

        .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; border: 1px solid var(--line); background: var(--line); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); }
        .step { background: rgba(255,248,234,.68); padding: clamp(24px, 4vw, 42px); min-height: 360px; display: flex; flex-direction: column; justify-content: space-between; }
        .step-number { font-family: 'Fraunces', Georgia, serif; font-size: 4.5rem; line-height: .8; color: rgba(168,88,45,.22); font-weight: 750; }
        .step h3 { font-size: clamp(2rem, 3vw, 3.2rem); line-height: 1; margin-top: 26px; }
        .step-kicker { color: var(--sage); font-weight: 800; margin-top: 8px; }
        .step p { color: var(--muted); line-height: 1.68; font-size: 1.04rem; margin: 26px 0 0; }
        .wave-mark { width: 150px; margin-top: 24px; fill: rgba(168,88,45,.72); }
        .step:nth-child(2) .wave-mark rect { animation: wave 1.4s ease-in-out infinite; transform-origin: center; }
        .step:nth-child(2) .wave-mark rect:nth-child(2) { animation-delay: .1s; }
        .step:nth-child(2) .wave-mark rect:nth-child(3) { animation-delay: .2s; }
        .step:nth-child(2) .wave-mark rect:nth-child(4) { animation-delay: .3s; }
        .step:nth-child(2) .wave-mark rect:nth-child(5) { animation-delay: .4s; }

        .why { border-block: 1px solid var(--line); background: rgba(237,225,207,.42); }
        .why-grid { display: grid; grid-template-columns: .75fr 1.25fr; gap: clamp(32px, 8vw, 100px); align-items: start; }
        .why-list { display: grid; gap: 18px; margin: 0; padding: 0; list-style: none; }
        .why-list li { display: grid; grid-template-columns: 42px 1fr; gap: 18px; align-items: start; padding: 24px 0; border-bottom: 1px solid var(--line); font-size: clamp(1.22rem, 2.2vw, 2rem); line-height: 1.2; }
        .why-list span { color: var(--accent); font-family: 'Fraunces', Georgia, serif; font-weight: 800; }

        .highlights-wrap { display: grid; grid-template-columns: minmax(260px, .82fr) minmax(0, 1.18fr); gap: clamp(32px, 7vw, 82px); align-items: center; }
        .quote-card { border-radius: 38px; padding: clamp(28px, 5vw, 54px); background: #31291f; color: #fff5e2; box-shadow: var(--shadow); position: relative; overflow: hidden; }
        .quote-card::after { content: "read"; position: absolute; right: -16px; bottom: -30px; font-family: 'Fraunces'; font-size: 9rem; line-height: 1; color: rgba(255,245,226,.06); letter-spacing: -.06em; }
        .quote-card p { margin: 0; font-family: 'Fraunces'; letter-spacing: -.03em; font-size: clamp(2rem, 4.2vw, 4.8rem); line-height: .98; }
        .quote-card small { display: block; margin-top: 26px; color: rgba(255,245,226,.7); line-height: 1.6; }
        .highlight-list { display: grid; gap: 22px; }
        .highlight { padding: 0 0 24px 34px; border-bottom: 1px solid var(--line); position: relative; }
        .highlight::before { content: ""; position: absolute; left: 0; top: 10px; width: 12px; height: 12px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 0 8px rgba(211,161,78,.16); }
        .highlight h3 { font-size: clamp(1.55rem, 2.6vw, 2.5rem); }
        .highlight p { color: var(--muted); line-height: 1.68; margin: 10px 0 0; font-size: 1.04rem; }

        .proof { padding: 54px 0; }
        .proof-line { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 30px 0; border-block: 1px solid var(--line); color: var(--muted); }
        .proof-line strong { font-family: 'Fraunces'; color: var(--ink); font-size: clamp(1.7rem, 3vw, 3.2rem); letter-spacing: -.035em; }

        .pricing { background: linear-gradient(180deg, transparent, rgba(255,247,232,.52)); }
        .plans { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; align-items: stretch; }
        .plan { border: 1px solid var(--line); border-radius: 32px; padding: clamp(26px, 4vw, 44px); background: rgba(255,248,234,.68); min-height: 330px; display: flex; flex-direction: column; box-shadow: 0 18px 52px rgba(70,45,21,.07); }
        .plan.pro { background: #fff3d8; border-color: rgba(168,88,45,.24); }
        .plan h3 { font-size: clamp(2rem, 3vw, 3.2rem); }
        .price { font-family: 'Fraunces'; font-size: clamp(2.5rem, 5vw, 5.4rem); line-height: 1; letter-spacing: -.05em; margin: 18px 0; }
        .price span { font-family: 'Literata'; font-size: 1rem; letter-spacing: 0; color: var(--muted); font-weight: 500; }
        .plan p { color: var(--muted); line-height: 1.65; margin: 0 0 24px; }
        .plan ul { margin: auto 0 0; padding: 0; list-style: none; display: grid; gap: 12px; color: var(--ink); }
        .plan li::before { content: "—"; color: var(--accent); margin-right: 10px; }

        .faq-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: clamp(28px, 8vw, 90px); align-items: start; }
        .faq-list { display: grid; gap: 12px; }
        details { border-bottom: 1px solid var(--line); background: rgba(255,248,234,.38); border-radius: 18px 18px 0 0; }
        summary { min-height: 58px; cursor: pointer; list-style: none; padding: 19px 20px; font-weight: 800; display: flex; justify-content: space-between; gap: 18px; }
        summary::-webkit-details-marker { display: none; }
        summary::after { content: "+"; color: var(--accent); font-size: 1.25rem; }
        details[open] summary::after { content: "–"; }
        details p { margin: 0; padding: 0 20px 22px; color: var(--muted); line-height: 1.65; }

        footer { padding: 46px 0 54px; border-top: 1px solid var(--line); }
        .footer-grid { display: flex; justify-content: space-between; gap: 24px; align-items: center; color: var(--muted); }
        .footer-links { display: flex; gap: 18px; flex-wrap: wrap; }
        .footer-links a { text-decoration: none; min-height: 44px; display: inline-flex; align-items: center; }
        .footer-links a:hover { color: var(--ink); }

        .reveal { animation: rise .8s ease both; }
        .reveal.delay-1 { animation-delay: .12s; }
        .reveal.delay-2 { animation-delay: .24s; }

        @keyframes rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes breathe { 0%,100% { opacity: .55; transform: scale(.98); } 50% { opacity: 1; transform: scale(1.02); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes wave { 0%,100% { transform: scaleY(.7); opacity: .55; } 50% { transform: scaleY(1.18); opacity: 1; } }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: .001ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition: none !important; }
        }

        @media (max-width: 920px) {
          .site-header { position: absolute; }
          .nav-links { display: none; }
          .hero-grid, .why-grid, .highlights-wrap, .faq-grid { grid-template-columns: 1fr; }
          .hero { padding-top: 104px; }
          .hero-visual { min-height: 390px; order: -1; margin-top: 30px; }
          .margin-note { right: 12px; bottom: 20px; }
          .steps { grid-template-columns: 1fr; }
          .step { min-height: 280px; }
        }

        @media (max-width: 640px) {
          .container { width: min(calc(100% - 28px), var(--max)); }
          .site-header { top: 10px; width: calc(100% - 20px); padding: 10px; }
          .brand span:last-child { display: none; }
          .header-cta { padding-inline: 14px; }
          .hero { min-height: auto; padding-bottom: 52px; }
          h1 { font-size: clamp(3.25rem, 18vw, 5.1rem); }
          .hero-actions, .plans, .proof-line, .footer-grid { flex-direction: column; align-items: stretch; }
          .btn { width: 100%; }
          .hero-visual { min-height: 310px; }
          .reading-room { inset: 8% auto auto 0; width: 100%; }
          .margin-note { position: relative; right: auto; bottom: auto; margin: -20px 12px 0 auto; }
          .plans { display: grid; grid-template-columns: 1fr; }
          .proof-line { display: grid; }
          .footer-grid { display: grid; }
          .footer-links { gap: 12px 18px; }
        }
      `}</style>

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Frankie Read home">
          <span className="brand-mark">F</span>
          <span>Frankie Read</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="header-cta" type="button">Get started</button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">A reading room for the saved web</span>
              <h1 id="hero-title">Turn the web into your personal podcast.</h1>
              <p className="hero-sub">Save any article. Listen to it with a natural voice. Understand it without breaking the flow.</p>
              <div className="hero-actions">
                <button className="btn btn-primary" type="button">Get started — free</button>
                <button className="btn btn-secondary" type="button" onClick={scrollToFlow}>See how it works</button>
              </div>
              <p className="availability">Save articles. Listen to them. Finally finish what you started reading.</p>
            </div>
            <div className="hero-visual reveal delay-1" aria-hidden="false">
              <div className="reading-room" />
              <FlowGlyph />
              <aside className="margin-note" aria-label="Design principle">
                <strong>Calm over power.</strong>
                Frankie is not a feed, a knowledge base, or an AI replacement for reading.
              </aside>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-pad" aria-labelledby="flow-title">
          <div className="container">
            <div className="section-head reveal">
              <span className="section-kicker">How it works</span>
              <h2 id="flow-title">From saved tab to finished thought.</h2>
              <p className="section-lede">Frankie keeps the ritual simple: collect the article, carry it with you, and stay inside the sentence when something needs context.</p>
            </div>
            <div className="steps">
              {steps.map((step) => (
                <article className="step" key={step.title}>
                  <div>
                    <div className="step-number">{step.number}</div>
                    <h3>{step.title}</h3>
                    <div className="step-kicker">{step.kicker}</div>
                    <p>{step.text}</p>
                  </div>
                  <WaveMark />
                </article>
              ))}
            </div>
          </div>
        </section>

        {false && <section className="why section-pad" aria-labelledby="why-title">
          <div className="container why-grid">
            <div className="section-head">
              <span className="section-kicker">Why this, why now</span>
              <h2 id="why-title">A new home for unfinished reading.</h2>
            </div>
            <ul className="why-list">
              {reasons.map((reason, index) => <li key={reason}><span>0{index + 1}</span>{reason}</li>)}
            </ul>
          </div>
        </section>

        }
          <section id="features" className="section-pad" aria-labelledby="features-title">
          <div className="container highlights-wrap">
            <div className="quote-card">
              <p>Not more to manage. More you can finally finish.</p>
              <small>Frankie is built around consumption, not collection — a quiet promise to return to the long-form web.</small>
            </div>
            <div>
              <div className="section-head">
                <span className="section-kicker">Feature highlights</span>
                <h2 id="features-title">Restraint is the feature.</h2>
              </div>
              <div className="highlight-list">
                {highlights.map((item) => (
                  <article className="highlight" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="proof" aria-label="Trust statement">
          <div className="container">
            <div className="proof-line proof-line-simple">
              
              <span>No fake logos. No inflated claims. Just a patient tool for people who still love the web.</span>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing section-pad" aria-labelledby="pricing-title">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Pricing</span>
              <h2 id="pricing-title">Simple enough to stay out of the way.</h2>
              <p className="section-lede">The essentials remain free. Listening and understanding are worth a few dollars a year, not another heavy subscription.</p>
            </div>
            <div className="plans">
              <article className="plan">
                <h3>Free</h3>
                <div className="price">$0 <span>always</span></div>
                <p>Save and read articles in a clean, offline-first space.</p>
                <ul>
                  <li>Browser saving</li>
                  <li>Clean reader mode</li>
                  <li>Local article library</li>
                </ul>
              </article>
              <article className="plan pro">
                <h3>Pro</h3>
                <div className="price">$9 <span>/ year</span></div>
                <p>Less than a coffee per month for unlimited listening and quiet inline help.</p>
                <ul>
                  <li>Unlimited listening queue</li>
                  <li>Voice selection and BYO key</li>
                  <li>Smart explain for words and passages</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="section-pad" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div className="section-head">
              <span className="section-kicker">FAQ</span>
              <h2 id="faq-title">A few quiet answers.</h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <strong>Frankie Read</strong><br />
            <span>Turn the web into your personal podcast. Built with calm.</span>
          </div>
          <nav className="footer-links" aria-label="Footer links">
            <a href="https://x.com/frankieread" rel="noreferrer">Twitter/X</a>
            <a href="https://github.com/frankieread" rel="noreferrer">GitHub</a>
            <a href="mailto:hello@frankieread.app">Email</a>
            <a href="mailto:hello@frankieread.app?subject=Privacy%20policy">Privacy</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);