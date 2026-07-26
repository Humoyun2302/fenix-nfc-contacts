import { siteConfig } from '@/data/contacts'
import { NfcMark } from '@/components/Icons'

export function Footer() {
  return (
    <footer className="animate-enter stagger-8 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2">
      <div className="mx-auto flex max-w-[460px] items-center justify-center gap-2 text-[11px] text-muted/55">
        <NfcMark className="h-3.5 w-3.5 text-muted/45" />
        <span>{siteConfig.footer}</span>
      </div>
    </footer>
  )
}
