type Project = {
  mono: string
  title: string
  synopsis: string
  tags: string[]
  coords: string
  readout: string
}

const projects: Project[] = [
  {
    mono: 'α',
    title: 'Nebula console',
    synopsis: 'Operational dashboard with ambient layering and restrained motion presets.',
    tags: ['React', 'Data viz'],
    coords: '+00.931 / −097.742',
    readout: 'p01 · grid',
  },
  {
    mono: 'Ω',
    title: 'Lattice forms',
    synopsis: 'Field components with accent glow rings and monochrome defaults.',
    tags: ['Accessibility', 'Design system'],
    coords: '+12.884 / −003.991',
    readout: 'p02 · frm',
  },
  {
    mono: 'Δ',
    title: 'Waypoint docs',
    synopsis: 'Spec-driven onboarding with monospace annotations in margins.',
    tags: ['Technical writing'],
    coords: '+48.856 / −002.352',
    readout: 'p03 · doc',
  },
  {
    mono: 'λ',
    title: 'Helio tokens',
    synopsis: 'Token pipeline bridging design tools and CI checks for regressions.',
    tags: ['Tooling'],
    coords: '+35.689 / −139.692',
    readout: 'p04 · tkn',
  },
]

export function WorkPage() {
  return (
    <div className="container stack">
      <header className="page-header">
        <p className="mono-label page-kicker">work</p>
        <h1 className="display page-title">
          <span className="text-gradient">Selected builds</span>
        </h1>
        <p className="lead muted">
          Text-forward tiles replace photography—glyph fields, gradients, monospace coordinates.
        </p>
      </header>

      <section className="section" aria-labelledby="projects-heading">
        <div className="section-head">
          <span className="mono-label section-kicker">portfolio</span>
          <div className="section-head-row">
            <h2 id="projects-heading" className="section-title">
              Projects
            </h2>
            <p className="section-meta">Structured like devtool releases, not galleries</p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="card project-card interactive">
              <div
                className="project-thumb interactive-spotlight"
                onMouseMove={(e) => {
                  const target = e.currentTarget
                  const rect = target.getBoundingClientRect()
                  target.style.setProperty('--px', `${e.clientX - rect.left}px`)
                  target.style.setProperty('--py', `${e.clientY - rect.top}px`)
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget
                  target.style.removeProperty('--px')
                  target.style.removeProperty('--py')
                }}
              >
                <span className="thumb-glyph">{p.mono}</span>
              </div>
              <div className="project-body">
                <div className="card-corner internal">
                  <span className="mono-label">{p.readout}</span>
                  <span className="coords">{p.coords}</span>
                </div>
                <h3 className="card-title">{p.title}</h3>
                <p className="muted">{p.synopsis}</p>
                <div className="chips-row" aria-label="Project tags">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <button type="button" className="text-link ghost-like">
                  Open dossier · coming soon
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
