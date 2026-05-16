import { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <NavLink
          className="mark"
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Home — Grow freely"
        >
          <img
            className="mark__glyph"
            src="/mark-glyph.png"
            alt=""
            width={36}
            height={36}
            decoding="async"
          />
          <span className="mark__text">
            <span className="mark__name">grow freely</span>
            <span className="mark__meta">personal folio · v1.8.0</span>
          </span>
        </NavLink>

        <nav className="topbar__nav" aria-label="Primary">
          <ul className="topbar__links">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    `ghost-link${isActive ? ' ghost-link--active' : ''}`
                  }
                  to={item.to}
                  end={item.end}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="mono-label">{open ? 'close' : 'menu'}</span>
        </button>
      </div>

      <div
        id={panelId}
        className={`mobile-sheet${open ? ' mobile-sheet--open' : ''}`}
        hidden={!open}
      >
        <nav className="mobile-sheet__nav" aria-label="Mobile primary">
          <ul className="mobile-sheet__links">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  className={({ isActive }) =>
                    `sheet-link${isActive ? ' sheet-link--active' : ''}`
                  }
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink className="btn btn-primary" to="/contact" onClick={() => setOpen(false)}>
            Start a conversation
          </NavLink>
        </nav>
      </div>
      {open ? (
        <button
          type="button"
          className="mobile-scrim"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </header>
  )
}
