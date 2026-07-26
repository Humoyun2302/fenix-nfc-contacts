import { siteConfig } from '@/data/contacts'
import { NfcMark } from '@/components/Icons'

export function Header() {
  return (
    <header className="animate-enter sticky top-0 z-20 px-4 pt-[max(0.75rem,env(safe-area-inset-top))]">
      <div className="glass-chip mx-auto flex max-w-[460px] items-center justify-center gap-2.5 rounded-2xl px-4 py-2.5">
        <span className="relative flex h-7 w-7 items-center justify-center text-flame">
          <NfcMark className="h-7 w-7" />
          <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-flame shadow-[0_0_10px_rgba(255,106,43,0.95)]" />
        </span>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-[13px] font-semibold tracking-[0.1em] text-white sm:text-sm">
            FENI<span className="text-flame">X</span>
            <span className="ml-1.5 text-muted">NFC</span>
          </span>
          <span className="text-[11px] text-muted/80 sm:text-xs">{siteConfig.headerLabel}</span>
        </div>
      </div>
    </header>
  )
}
