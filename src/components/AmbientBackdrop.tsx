export function AmbientBackdrop() {
  return (
    <div className="ambient" aria-hidden>
      <div className="ambient__base" />
      <div className="ambient__blob ambient__blob--a" />
      <div className="ambient__blob ambient__blob--b" />
      <div className="ambient__blob ambient__blob--c" />
      <div className="ambient__noise" />
      <div className="ambient__grid" />
    </div>
  )
}
