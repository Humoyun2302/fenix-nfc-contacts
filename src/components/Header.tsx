import { siteConfig } from '@/data/contacts'

export function Header() {
  return (
    <header className="relative px-4 pt-[max(1.75rem,env(safe-area-inset-top))]">
      <div className="page-shell relative mx-auto flex flex-col items-center text-center">
        <div className="logo-halo absolute left-1/2 top-1 h-48 w-48 -translate-x-1/2 rounded-full" />

        <img
          src="/fenix-symbol-black.png"
          alt="Fenix NFC"
          width={104}
          height={104}
          className="animate-enter relative h-[104px] w-[104px] object-contain mix-blend-multiply"
          decoding="async"
        />

        <h1 className="animate-enter stagger-1 mt-5 text-[34px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[36px]">
          {siteConfig.name}
        </h1>
      </div>
    </header>
  )
}
