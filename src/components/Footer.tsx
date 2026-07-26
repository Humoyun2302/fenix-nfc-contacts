import { siteConfig } from '@/data/contacts'

export function Footer() {
  return (
    <footer className="animate-enter stagger-7 px-4 pb-[max(1.4rem,env(safe-area-inset-bottom))] pt-3">
      <p className="mx-auto max-w-[440px] text-center text-[11px] text-muted/50">
        {siteConfig.footer}
      </p>
    </footer>
  )
}
