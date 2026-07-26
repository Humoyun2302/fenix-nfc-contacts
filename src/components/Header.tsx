import { siteConfig } from '@/data/contacts'

export function Header() {
  return (
    <header className="px-4 pt-[max(1.5rem,env(safe-area-inset-top))]">
      <div className="mx-auto flex max-w-[440px] flex-col items-center text-center">
        <img
          src="/fenix-symbol-white.png"
          alt="Fenix NFC"
          width={88}
          height={88}
          className="animate-enter h-[4.75rem] w-[4.75rem] object-contain sm:h-20 sm:w-20"
          decoding="async"
        />

        <h1 className="animate-enter stagger-1 mt-5 font-display text-[1.35rem] font-semibold tracking-[0.22em] text-white sm:text-[1.5rem]">
          {siteConfig.name}
        </h1>

        <p className="animate-enter stagger-2 mt-2.5 text-[13.5px] text-muted sm:text-sm">
          {siteConfig.subtitle}
        </p>
      </div>
    </header>
  )
}
