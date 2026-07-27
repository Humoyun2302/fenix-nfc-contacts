import { siteConfig } from '@/data/contacts'
import { GlassLogo } from '@/components/GlassLogo'

export function Header() {
  return (
    <header className="relative px-4 pt-[max(1.75rem,env(safe-area-inset-top))]">
      <div className="page-shell relative mx-auto flex flex-col items-center text-center">
        <GlassLogo />

        <h1 className="animate-enter stagger-1 mt-10 text-[34px] font-semibold leading-none tracking-[-0.02em] text-ink sm:mt-11 sm:text-[36px]">
          {siteConfig.name}
        </h1>
      </div>
    </header>
  )
}
