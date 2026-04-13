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
    <main> {/* INI ADALAH PEMBUNGKUS UTAMA YANG HILANG */}
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
    </main>
  );
}