import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type ContactSectionProps = {
  label: string
  children: ReactNode
  className?: string
}

export function ContactSection({ label, children, className }: ContactSectionProps) {
  return (
    <section className={cn('space-y-2.5', className)} aria-label={label}>
      <h2 className="px-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted/75">
        {label}
      </h2>
      {children}
    </section>
  )
}
