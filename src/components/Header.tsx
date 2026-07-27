import { siteConfig } from '@/data/contacts'

export function Header() {
  return (
    <header className="relative px-4 pt-[max(1.5rem,env(safe-area-inset-top))]">
      <div className="page-shell relative mx-auto flex flex-col items-center text-center">
        <div className="logo-halo absolute left-1/2 top-3 h-40 w-40 -translate-x-1/2 rounded-full" />

        <img
          src="/fenix-symbol-white.png"
          alt="Fenix NFC"
          width={100}
          height={100}
          className="animate-enter relative h-[100px] w-[100px] object-contain mix-blend-lighten"
          decoding="async"
        />

        <h1 className="animate-enter stagger-1 mt-4 text-[34px] font-semibold leading-none tracking-[-0.02em] text-white sm:text-[36px]">
          {siteConfig.name}
        </h1>
      </div>
    </header>
  )
}
