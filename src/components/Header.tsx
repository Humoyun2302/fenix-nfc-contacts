import { siteConfig } from '@/data/contacts'

export function Header() {
  return (
    <header className="relative px-4 pt-[max(2rem,env(safe-area-inset-top))]">
      <div className="page-shell relative mx-auto flex flex-col items-center text-center">
        <div className="logo-halo absolute left-1/2 top-2 h-36 w-36 -translate-x-1/2 rounded-full" />

        <img
          src="/fenix-symbol-white.png"
          alt="Fenix NFC"
          width={84}
          height={84}
          className="animate-enter relative h-[84px] w-[84px] object-contain mix-blend-lighten"
          decoding="async"
        />

        <h1 className="animate-enter stagger-1 mt-6 text-[34px] font-semibold leading-none tracking-[-0.02em] text-white sm:text-[36px]">
          {siteConfig.name}
        </h1>

        <p className="animate-enter stagger-2 mt-3 text-[14px] font-normal text-muted sm:text-[15px]">
          {siteConfig.subtitle}
        </p>

        <div
          className="animate-enter stagger-2 mt-5 h-px w-10 bg-white/20"
          aria-hidden="true"
        />

        <p className="animate-enter stagger-3 mt-4 text-[13px] font-normal tracking-[0.01em] text-muted/80 sm:text-[14px]">
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  )
}
