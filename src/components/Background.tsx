export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#eef2f7]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f5f8fc_0%,#e8eef6_48%,#e3eaf3_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_-5%,rgba(190,215,245,0.55),transparent_60%)]" />

      <div className="blob blob-1 absolute left-[-10%] top-[12%] h-72 w-72 rounded-full bg-[#c9daf0]/35 blur-[90px]" />
      <div className="blob blob-2 absolute right-[-8%] top-[28%] h-64 w-64 rounded-full bg-[#d7e4f5]/40 blur-[100px]" />
      <div className="blob blob-3 absolute bottom-[8%] left-[20%] h-80 w-80 rounded-full bg-[#bfd2ea]/25 blur-[110px]" />

      <div className="noise-layer absolute inset-0" />
    </div>
  )
}
