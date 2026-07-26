export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#101010]" />
      <div className="wave-fade absolute inset-0" />
      <div className="absolute left-[-20%] top-[18%] h-72 w-72 rounded-full bg-white/[0.04] blur-[100px]" />
      <div className="absolute right-[-15%] bottom-[12%] h-80 w-80 rounded-full bg-white/[0.03] blur-[110px]" />
      <div className="noise-layer absolute inset-0" />
    </div>
  )
}
