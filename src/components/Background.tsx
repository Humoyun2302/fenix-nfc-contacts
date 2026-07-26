export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#090909_55%,#0d0d0f_100%)]" />

      {/* Soft halo behind brand area */}
      <div className="absolute left-1/2 top-[7%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-[90px]" />

      {/* Faint NFC rings */}
      <div className="absolute left-1/2 top-[4.5rem] h-[320px] w-[320px] -translate-x-1/2">
        <div className="absolute inset-[18%] rounded-full border border-white/[0.035]" />
        <div className="absolute inset-[30%] rounded-full border border-white/[0.04]" />
        <div className="absolute inset-[42%] rounded-full border border-white/[0.045]" />
        <div className="absolute inset-[54%] rounded-full border border-white/[0.03]" />
      </div>

      {/* Tiny technical crosshairs */}
      <div className="absolute left-[12%] top-[18%] h-3 w-3 opacity-[0.12]">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white" />
      </div>
      <div className="absolute right-[14%] top-[22%] h-3 w-3 opacity-[0.1]">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white" />
      </div>
      <div className="absolute left-[18%] bottom-[24%] h-px w-10 bg-white/[0.06]" />
      <div className="absolute right-[16%] bottom-[28%] h-px w-8 bg-white/[0.05]" />

      <div className="noise-layer absolute inset-0" />
    </div>
  )
}
