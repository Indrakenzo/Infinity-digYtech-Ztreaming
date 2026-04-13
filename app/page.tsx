// app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Infiniti digYtech Ztreaming — Landing Page
// Stack : Next.js 14 App Router + Tailwind CSS
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infiniti digYtech Ztreaming',
  description:
    'Platform streaming premium — drama, sinema, dan seri orisinal pilihan.',
};

// ── ⚠️  GANTI [PROJECT_ID] di bawah ini dengan Project ID Supabase-mu ──────
// Contoh: jika Project URL-mu adalah https://abcxyz123.supabase.co
// maka isi: const SUPABASE_PROJECT_ID = "abcxyz123"
const SUPABASE_PROJECT_ID = 'qccraheikhllmtmztttu';
// ─────────────────────────────────────────────────────────────────────────────

const VIDEO_URL = `https://qccraheikhllmtmztttu.supabase.co/storage/v1/object/public/infiniti-videos/Teaser_Dalam-Bayang-Luka-Lama.mp4`;

const SKELETON_COUNT = 10;

export default function HomePage() {
  return (
    <>
      {/* ── Google Fonts + Custom CSS ───────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Sora:wght@300;400;500;600;700&display=swap');

        :root {
          --black:      #060608;
          --surface:    #0e0e14;
          --surface-2:  #161620;
          --border:     rgba(255,255,255,0.07);
          --red:        #c1121f;
          --red-glow:   rgba(193,18,31,0.35);
          --gold:       #d4a017;
          --text:       #e2e2ef;
          --muted:      #7a7a94;
          --font-serif: 'Cormorant Garamond', Georgia, serif;
          --font-sans:  'Sora', system-ui, sans-serif;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        body {
          background-color: var(--black);
          color: var(--text);
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          min-height: 100dvh;
          overflow-x: hidden;
        }

        /* ── Scrollbar ──────────────────────────────── */
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: var(--surface); }
        ::-webkit-scrollbar-thumb { background: var(--surface-2); border-radius: 4px; }

        /* ── Navbar ─────────────────────────────────── */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          height: 64px;
          display: flex;
          align-items: center;
          padding: 0 clamp(1rem, 5vw, 3rem);
          background: linear-gradient(180deg, rgba(6,6,8,0.98) 0%, rgba(6,6,8,0) 100%);
          backdrop-filter: blur(12px) saturate(120%);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          transition: background 0.4s;
        }

        .brand {
          font-family: var(--font-sans);
          font-size: clamp(0.8rem, 2.4vw, 1rem);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text);
          line-height: 1;
          user-select: none;
        }

        .brand-highlight {
          display: inline-block;
          color: var(--red);
          font-weight: 700;
        }

        .brand-dot {
          display: inline-block;
          width: 5px; height: 5px;
          background: var(--gold);
          border-radius: 50%;
          margin: 0 4px 2px;
          vertical-align: middle;
        }

        /* ── Hero Wrapper ────────────────────────────── */
        .hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px clamp(1rem, 5vw, 3rem) 3rem;
          overflow: hidden;
        }

        /* ambient radial glow */
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 55% at 50% 30%, rgba(193,18,31,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(212,160,23,0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        /* grain overlay */
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          background-size: 180px;
          opacity: 0.5;
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 960px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Badge ───────────────────────────────────── */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(212,160,23,0.3);
          background: rgba(212,160,23,0.07);
          padding: 4px 10px;
          border-radius: 4px;
          width: fit-content;
        }

        .badge-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--red);
          animation: pulse 1.8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }

        /* ── Title ───────────────────────────────────── */
        .video-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 6vw, 3.75rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #ffffff;
        }

        .video-title em {
          font-style: italic;
          color: var(--red);
          font-weight: 300;
        }

        .video-subtitle {
          font-size: clamp(0.8rem, 2vw, 0.9rem);
          color: var(--muted);
          letter-spacing: 0.04em;
          font-weight: 300;
          margin-top: -0.5rem;
        }

        /* ── Video Player Shell ──────────────────────── */
        .player-shell {
          position: relative;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px var(--border),
            0 0 60px rgba(193,18,31,0.18),
            0 30px 80px rgba(0,0,0,0.7);
          background: #000;
        }

        .player-shell video {
          display: block;
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          outline: none;
        }

        /* thin red line on top of player */
        .player-shell::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--red) 0%, var(--gold) 100%);
          z-index: 2;
        }

        /* ── Meta row ────────────────────────────────── */
        .meta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          font-size: 0.78rem;
          color: var(--muted);
          font-weight: 400;
        }

        .meta-pill {
          padding: 3px 10px;
          border-radius: 4px;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .meta-sep { color: var(--border); }

        /* ── Episodes Section ────────────────────────── */
        .episodes-section {
          position: relative;
          z-index: 1;
          padding: 3rem clamp(1rem, 5vw, 3rem) 5rem;
          background: linear-gradient(180deg, transparent 0%, var(--surface) 8%, var(--surface) 100%);
        }

        .section-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-family: var(--font-sans);
          font-size: clamp(1rem, 3vw, 1.25rem);
          font-weight: 600;
          color: var(--text);
          letter-spacing: -0.01em;
        }

        .section-line {
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        /* ── Horizontal Scroll Track ─────────────────── */
        .scroll-track-wrapper {
          position: relative;
          overflow: hidden;
        }

        .scroll-track-wrapper::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 80px;
          background: linear-gradient(90deg, transparent 0%, var(--surface) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .scroll-track {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 12px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: var(--surface-2) transparent;
        }

        /* ── Skeleton Card ───────────────────────────── */
        .skeleton-card {
          flex: 0 0 clamp(160px, 28vw, 220px);
          border-radius: 8px;
          overflow: hidden;
          scroll-snap-align: start;
          background: var(--surface-2);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 0;
          cursor: default;
          transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s;
        }

        .skeleton-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(193,18,31,0.25);
        }

        .skeleton-thumb {
          width: 100%;
          aspect-ratio: 16/9;
          background: linear-gradient(
            110deg,
            var(--surface-2) 30%,
            rgba(255,255,255,0.04) 50%,
            var(--surface-2) 70%
          );
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
          position: relative;
        }

        /* play icon hint on thumb */
        .skeleton-thumb::after {
          content: '▶';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: rgba(255,255,255,0.08);
        }

        .skeleton-body {
          padding: 10px 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skeleton-line {
          height: 10px;
          border-radius: 4px;
          background: linear-gradient(
            110deg,
            rgba(255,255,255,0.04) 30%,
            rgba(255,255,255,0.08) 50%,
            rgba(255,255,255,0.04) 70%
          );
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }

        .skeleton-line.short { width: 55%; animation-delay: 0.15s; }
        .skeleton-line.medium { width: 75%; animation-delay: 0.05s; }
        .skeleton-line.long  { width: 90%; }

        @keyframes shimmer {
          from { background-position: 200% 0; }
          to   { background-position: -200% 0; }
        }

        /* ── Coming Soon Banner ──────────────────────── */
        .coming-soon {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--surface-2);
          margin-top: 2rem;
          max-width: 480px;
        }

        .coming-soon-icon {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(193,18,31,0.12);
          border: 1px solid rgba(193,18,31,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .coming-soon-text strong {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text);
        }

        .coming-soon-text span {
          font-size: 0.75rem;
          color: var(--muted);
        }

        /* ── Footer ──────────────────────────────────── */
        .footer {
          text-align: center;
          padding: 2rem;
          font-size: 0.72rem;
          color: var(--muted);
          border-top: 1px solid var(--border);
          letter-spacing: 0.04em;
        }

        /* ── Responsive tweaks ───────────────────────── */
        @media (min-width: 768px) {
          .hero {
            padding-top: 100px;
            justify-content: flex-end;
            min-height: 100dvh;
            padding-bottom: 5rem;
          }

          .hero-inner {
            max-width: 1100px;
          }

          .skeleton-card {
            flex: 0 0 220px;
          }
        }

        @media (min-width: 1280px) {
          .hero-inner {
            max-width: 1200px;
          }
        }
      `}</style>

      {/* ── NAVBAR ───────────────────────────────────────────────────────────── */}
      <header className="navbar">
        <nav aria-label="Navigasi utama">
          <span className="brand">
            Infiniti <span className="brand-highlight">dig</span>
            Ytech
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-highlight">Z</span>
            treaming
          </span>
        </nav>
      </header>

      {/* ── HERO + VIDEO PLAYER ──────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="video-title">
        <div className="hero-inner">
          {/* Badge */}
          <div className="badge" aria-label="Tayangan baru tersedia">
            <span className="badge-dot" aria-hidden="true" />
            Tayang Sekarang
          </div>

          {/* Title */}
          <h1 className="video-title" id="video-title">
            Teaser: <em>Dalam Bayang</em> Luka Lama
          </h1>
          <p className="video-subtitle">
            Sebuah kisah tentang luka yang tak pernah benar-benar sembuh
          </p>

          {/* Video Player */}
          <div className="player-shell" role="region" aria-label="Video utama">
            {/*
              ─────────────────────────────────────────────────────────────
              VIDEO SOURCE
              Ganti [PROJECT_ID] pada variabel SUPABASE_PROJECT_ID di baris
              atas file ini dengan Project ID Supabase-mu.
              Contoh: const SUPABASE_PROJECT_ID = "abcxyz123"
              ─────────────────────────────────────────────────────────────
            */}
            <video
              controls
              preload="metadata"
              playsInline
              aria-label="Teaser: Dalam Bayang Luka Lama"
            >
              <source src={VIDEO_URL} type="video/mp4" />
              <p
                style={{
                  padding: '2rem',
                  color: 'var(--muted)',
                  textAlign: 'center',
                }}
              >
                Browser-mu tidak mendukung pemutaran video HTML5.{' '}
                <a href={VIDEO_URL} style={{ color: 'var(--red)' }}>
                  Unduh video
                </a>
                .
              </p>
            </video>
          </div>

          {/* Meta row */}
          <div className="meta-row" aria-label="Informasi video">
            <span className="meta-pill">Teaser</span>
            <span className="meta-pill">Drama</span>
            <span className="meta-sep" aria-hidden="true">
              ·
            </span>
            <span>Infiniti digYtech Ztreaming Original</span>
            <span className="meta-sep" aria-hidden="true">
              ·
            </span>
            <span>2024</span>
          </div>
        </div>
      </section>

      {/* ── EPISODE SLIDER ───────────────────────────────────────────────────── */}
      <section className="episodes-section" aria-labelledby="episodes-title">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title" id="episodes-title">
            Episode Lainnya
          </h2>
          <div className="section-line" aria-hidden="true" />
        </div>

        {/* Horizontal scroll skeleton grid */}
        <div className="scroll-track-wrapper">
          <div
            className="scroll-track"
            role="list"
            aria-label="Daftar episode (segera hadir)"
          >
            {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <div
                key={i}
                className="skeleton-card"
                role="listitem"
                aria-label={`Slot episode ${i + 1} — segera hadir`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Thumbnail skeleton */}
                <div
                  className="skeleton-thumb"
                  aria-hidden="true"
                  style={{ animationDelay: `${i * 0.08}s` }}
                />
                {/* Text skeleton */}
                <div className="skeleton-body" aria-hidden="true">
                  <div
                    className="skeleton-line long"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  />
                  <div
                    className="skeleton-line medium"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                  <div
                    className="skeleton-line short"
                    style={{ animationDelay: `${i * 0.12}s` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon notice */}
        <div className="coming-soon" role="status" aria-live="polite">
          <div className="coming-soon-icon" aria-hidden="true">
            🎬
          </div>
          <div className="coming-soon-text">
            <strong>Menunggu tayangan berikutnya…</strong>
            <span>
              Episode dan konten baru akan segera hadir. Pantau terus!
            </span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()}{' '}
          <strong style={{ color: 'var(--text)' }}>
            Infiniti digYtech Ztreaming
          </strong>{' '}
          — Hak Cipta Dilindungi
        </p>
      </footer>
    </>
  );
}
