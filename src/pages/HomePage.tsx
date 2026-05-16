import { Link } from 'react-router-dom'

import Plasma from '../components/Plasma.tsx'

export function HomePage() {
  return (
    <div className="home-stack">
      <div className="home-stack__backdrop" aria-hidden>
        <div className="home-stack__void" />
        <div className="home-stack__penumbra" />
        <div className="home-stack__solar" />
        <div className="home-stack__crepuscular" />
        <div className="home-stack__tyndall" />
        <div className="home-stack__flare" />
        <div className="home-stack__grain" />
        <div className="home-stack__dust" />
      </div>

      <div className="home-plasma-host" aria-hidden>
        <div className="home-plasma-inner">
          <Plasma
            color="#B497CF"
            speed={1}
            direction="forward"
            scale={1}
            opacity={1}
            mouseInteractive={false}
          />
        </div>
      </div>

      {/* 巨幅水印：浮雕肌理，不参与焦点与朗读 */}
      <p className="home-marquee-grow" aria-hidden>
        Grow&nbsp;freely
      </p>

      <div className="container stack home-stack__content">
      <section className="hero">
        <p className="mono-label hero__tag">ambient folio · no imagery</p>
        <h1 className="hero-title-foreground hero__title">
          Grow freely
        </h1>
        <p className="lead hero__lead">
          A restrained personal site scaffolded from the Stitch spec: depth, monospace
          telemetry, and monochrome ambience—nothing ornamental, everything structural.
        </p>
        <div className="hero__cta">
          <Link className="btn btn-primary" to="/work">
            look look
          </Link>
          <Link className="btn btn-secondary" to="/about">
            About
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="signals-heading">
        <div className="section-head">
          <span className="mono-label section-kicker">signal matrix</span>
          <div className="section-head-row">
            <h2 id="signals-heading" className="section-title">
              System surfaces
            </h2>
            <p className="section-meta">
              Bento scaffolding · hairline containment · monospace readouts where useful
            </p>
          </div>
        </div>

        <div className="bento">
          <article className="card bento__hero">
            <div className="card-corner">
              <span className="mono-label">readout · 01</span>
              <span className="coords">A3 · 000</span>
            </div>
            <h3 className="card-title">Parallax‑ready hero</h3>
            <p className="muted">
              Keep the cinematic scroll affordance annotated in prototype notes; respect
              <code className="code-inline"> prefers-reduced-motion</code>.
            </p>
            <div className="chips-row" aria-label="Tags">
              {['ambient', 'grid', 'glow'].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="card-corner">
              <span className="mono-label">readout · 02</span>
              <span className="coords">B7 · ff</span>
            </div>
            <h3 className="card-title">Glass tonal layer</h3>
            <p className="muted">
              Translucent fields with blurred backing and a faint top-edge highlight—not
              spectacle, tactile depth.
            </p>
          </article>

          <article className="card">
            <div className="card-corner">
              <span className="mono-label">readout · 03</span>
              <span className="coords">C2 · Δ</span>
            </div>
            <h3 className="card-title">Typography discipline</h3>
            <p className="muted">
              Display lines lean tight; monospace holds metadata and telemetry at small scale.
            </p>
          </article>

          <article className="card bento__stretch">
            <div className="card-corner">
              <span className="mono-label">readout · 04</span>
              <span className="coords">D0 · 128</span>
            </div>
            <h3 className="card-title">Responsive density</h3>
            <p className="muted">
              Twelve-column rhythm on desktop, stacked clarity on handheld widths. Maintain
              32px safe margins where gradients breathe on large screens.
            </p>
            <Link className="text-link text-link-inline" to="/contact">
              Open contact channel →
            </Link>
          </article>

          <article className="card bento__tall">
            <div className="card-corner">
              <span className="mono-label">readout · 05</span>
              <span className="coords">Z9 · ⚑</span>
            </div>
            <h3 className="card-title">Contrast in steps</h3>
            <p className="muted">
              Highlights favor white-on-ink tonal jumps—no chroma, only luminance separating layers.
            </p>
          </article>
        </div>
      </section>
      </div>
    </div>
  )
}
