import { siteConfig } from '@/data/contacts'

export function Footer() {
  return (
    <footer className="animate-enter stagger-8 px-4 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-8">
      <div className="page-shell mx-auto">
        <div className="mb-5 h-px w-full bg-white/[0.08]" aria-hidden="true" />
        <div className="flex flex-col items-center gap-1.5 text-center">
          <p className="text-[12px] font-medium tracking-[0.04em] text-muted/70">
            {siteConfig.footerBrand}
          </p>
          <p className="text-[11px] text-muted/45">{siteConfig.footerTagline}</p>
          <p className="mt-1 text-[11px] text-muted/35">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
