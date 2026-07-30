import { siteConfig } from '@/data/contacts'

export function Header() {
  return (
    <header className="relative px-4 pt-[max(1.75rem,env(safe-area-inset-top))]">
      <div className="page-shell relative mx-auto flex flex-col items-center text-center">
        <div className="logo-halo absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full" />

        <img
          src="/fenix-f.png"
          alt="Fenix NFC"
          width={130}
          height={130}
          className="animate-logo relative h-[130px] w-[130px] object-contain sm:h-[140px] sm:w-[140px]"
          decoding="async"
        />

        <h1 className="animate-title stagger-1 mt-4 text-[34px] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[36px]">
          {siteConfig.name}
        </h1>
      </div>
    </header>
  )
}
