import { useState, type FormEvent } from 'react'

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sent')
    const form = e.currentTarget
    form.reset()
    window.setTimeout(() => setStatus('idle'), 3200)
  }

  return (
    <div className="container stack">
      <header className="page-header">
        <p className="mono-label page-kicker">contact</p>
        <h1 className="display page-title">
          <span className="text-gradient">Start a thread</span>
        </h1>
        <p className="lead muted">
          Minimal fields, sharp focus rings, no decorative chrome—just the conversation.
        </p>
      </header>

      <section className="section contact-grid" aria-labelledby="form-heading">
        <div className="card pad contact-card">
          <h2 id="form-heading" className="section-title compact">
            Direct line
          </h2>
          <p className="muted subtle-gap">
            This form is frontend-only scaffolding; wire it to your backend or provider when ready.
          </p>
          <form className="form" onSubmit={onSubmit}>
            <label className="field">
              <span className="mono-label field-label">name</span>
              <input className="input" name="name" type="text" autoComplete="name" required />
            </label>
            <label className="field">
              <span className="mono-label field-label">email</span>
              <input className="input" name="email" type="email" autoComplete="email" required />
            </label>
            <label className="field">
              <span className="mono-label field-label">message</span>
              <textarea className="input input-area" name="message" rows={6} required />
            </label>
            <button className="btn btn-primary btn-block" type="submit">
              Send transmission
            </button>
          </form>
          {status === 'sent' ? (
            <p className="form-toast mono-label" role="status">
              queued locally · hook your API next
            </p>
          ) : null}
        </div>

        <aside className="aside-stack" aria-label="Alternate contact channels">
          <article className="card pad">
            <p className="mono-label">async channels</p>
            <p className="muted subtle-gap">
              Prefer email? Swap these anchors for yours—still typography-first, zero avatars.
            </p>
            <div className="link-stack">
              <a className="text-link" href="mailto:hello@example.com">
                hello@example.com →
              </a>
              <a className="text-link" href="https://github.com" target="_blank" rel="noreferrer">
                github profile →
              </a>
              <a className="text-link" href="https://read.cv" target="_blank" rel="noreferrer">
                read.cv dossier →
              </a>
            </div>
          </article>
          <article className="card pad">
            <div className="card-corner internal">
              <span className="mono-label">readout · ACK</span>
              <span className="coords">OK · 200</span>
            </div>
            <p className="muted">
              Response policy: humane cadence—no churn templates, concise updates only.
            </p>
          </article>
        </aside>
      </section>
    </div>
  )
}
