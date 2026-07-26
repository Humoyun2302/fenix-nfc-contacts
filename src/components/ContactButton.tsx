import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { ChevronIcon } from '@/components/Icons'

type ContactButtonProps = {
  href: string
  title: string
  subtitle: string
  icon: ReactNode
  actionLabel?: string
  external?: boolean
  className?: string
  ariaLabel: string
}

export function ContactButton({
  href,
  title,
  subtitle,
  icon,
  actionLabel,
  external = false,
  className,
  ariaLabel,
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'contact-link group flex min-h-12 w-full items-center gap-3 rounded-[1.05rem] px-3.5 py-3',
        className,
      )}
      aria-label={ariaLabel}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-flame shadow-[0_0_18px_rgba(255,106,43,0.12)] transition-colors duration-200 group-hover:border-flame/35">
        {icon}
      </span>

      <span className="min-w-0 flex-1 text-left">
        <span className="block truncate text-[14px] font-medium leading-tight text-white sm:text-[15px]">
          {title}
        </span>
        <span className="mt-0.5 block truncate text-[12.5px] leading-tight text-muted sm:text-[13px]">
          {subtitle}
        </span>
      </span>

      <span className="flex shrink-0 items-center gap-1 text-muted transition-colors duration-200 group-hover:text-flame-soft">
        {actionLabel ? (
          <span className="hidden text-[11px] font-medium tracking-wide sm:inline">
            {actionLabel}
          </span>
        ) : null}
        <ChevronIcon className="h-4 w-4 opacity-70" />
      </span>
    </a>
  )
}
