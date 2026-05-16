export function AboutPage() {
  return (
    <div className="container stack">
      <header className="page-header">
        <p className="mono-label page-kicker">about</p>
        <h1 className="display page-title">
          <span className="text-gradient">Grounded ethos</span>
        </h1>
        <p className="lead muted">
          Manifesto excerpt from the Stitch brief—verbatim wording, restrained cadence.
        </p>
      </header>

      <section className="section prose-block" aria-labelledby="manifesto-heading">
        <h2 id="manifesto-heading" className="mono-label section-kicker">
          manifesto
        </h2>
        <blockquote className="manifesto" aria-labelledby="manifesto-heading">
          <p>
            I believe every genuine idea settles like its own tract in an immense digital
            expanse—not grandstanding, simply particular—carrying habits and constraints
            that belong to it alone. The work I care for thrives where orderly code
            intersects discerning aesthetics; in that narrow overlap, restraint and intuition
            are not opposites but coordinates. Growth, there, stays quiet: steady,
            unobtrusive, and free enough to correct itself as it proceeds.
          </p>
        </blockquote>
        <p className="pull-quote mono-label">
          “Orderly code intersects discerning aesthetics.”
        </p>
      </section>

      <section className="section" aria-labelledby="timeline-heading">
        <div className="section-head">
          <span className="mono-label section-kicker">trace</span>
          <div className="section-head-row">
            <h2 id="timeline-heading" className="section-title">
              Timeline
            </h2>
            <p className="section-meta">Structural milestones without imagery</p>
          </div>
        </div>
        <div className="list-panel">
          {[
            { t: '2019 · 00', title: 'First production systems', d: 'Hardened UI surfaces for internal tools.' },
            { t: '2022 · 08', title: 'Design tokens at scale', d: 'Centralized palettes, typography, spacing contracts.' },
            { t: '2025 · present', title: 'Cinematic dark patterns', d: 'Ambient tooling aesthetics with restrained motion.' },
          ].map((row) => (
            <article key={row.t} className="list-panel__item">
              <div className="list-panel__meta">
                <span className="mono-label">{row.t}</span>
              </div>
              <div>
                <h3 className="list-panel__title">{row.title}</h3>
                <p className="muted list-panel__desc">{row.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="skills-heading">
        <div className="section-head">
          <span className="mono-label section-kicker">capabilities</span>
          <div className="section-head-row">
            <h2 id="skills-heading" className="section-title">
              Skills
            </h2>
            <p className="section-meta">Monospace chips · no illustrative icons required</p>
          </div>
        </div>
        <div className="skills-grid" aria-label="Skill clusters">
          {[
            {
              cluster: 'Engineering · front-end',
              items: ['TypeScript', 'React', 'Vite', 'Edge rendering'],
            },
            {
              cluster: 'Design systems',
              items: ['Tokens', 'Components', 'A11y', 'Motion policy'],
            },
            {
              cluster: 'Product craft',
              items: ['Critique', 'Prototyping', 'Spec writing'],
            },
          ].map((g) => (
            <article key={g.cluster} className="card pad">
              <p className="mono-label">{g.cluster}</p>
              <div className="chips-row" style={{ marginTop: '0.75rem' }}>
                {g.items.map((i) => (
                  <span key={i} className="chip">
                    {i}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="tools-heading">
        <div className="section-head">
          <span className="mono-label section-kicker">toolchain</span>
          <div className="section-head-row">
            <h2 id="tools-heading" className="section-title">
              Tools
            </h2>
            <p className="section-meta">Curated, replaceable, never totemic</p>
          </div>
        </div>
        <div className="tools-table" role="table" aria-label="Tools table">
          <div className="tools-row tools-row--head" role="row">
            <span role="columnheader">Name</span>
            <span role="columnheader">Role</span>
            <span role="columnheader">Notes</span>
          </div>
          {[
            { name: 'Vite', role: 'Bundler', notes: 'Fast dev, minimal ceremony' },
            { name: 'Figma · Stitch', role: 'Prototyping', notes: 'System-first exploration' },
            { name: 'ESLint · TS', role: 'Guardrails', notes: 'Strict-but-kind defaults' },
          ].map((r) => (
            <div key={r.name} className="tools-row" role="row">
              <span role="cell">{r.name}</span>
              <span role="cell" className="mono-label">
                {r.role}
              </span>
              <span role="cell" className="muted">
                {r.notes}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
