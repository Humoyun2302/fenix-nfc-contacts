export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-5%,rgba(255,106,43,0.16),transparent_58%)]" />
      <div className="absolute -left-24 top-28 h-64 w-64 rounded-full bg-flame/15 blur-[90px]" />
      <div className="absolute -right-16 bottom-24 h-72 w-72 rounded-full bg-flame-soft/10 blur-[100px]" />
      <div className="absolute inset-0 grid-fade opacity-70" />
      <div className="noise-layer absolute inset-0" />
    </div>
  )
}
