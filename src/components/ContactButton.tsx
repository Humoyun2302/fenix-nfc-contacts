import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { ChevronIcon } from '@/components/Icons'

type ContactButtonProps = {
  href: string
  title: string
  subtitle?: string
  icon: ReactNode
  actionLabel?: string
  external?: boolean
  featured?: boolean
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
        'contact-card group flex min-h-[72px] w-full items-center gap-3 rounded-[18px] px-3.5 py-2',
        className,
      )}
      aria-label={ariaLabel}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      <span className="icon-well flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] text-white">
        {icon}
      </span>

      <span className="min-w-0 flex-1 text-left">
        <span className="block truncate text-[16px] font-medium leading-tight tracking-[-0.01em] text-white sm:text-[17px]">
          {title}
        </span>
        {subtitle ? (
          <span className="mt-0.5 block truncate text-[13px] leading-tight text-muted sm:text-[14px]">
            {subtitle}
          </span>
        ) : null}
      </span>

      <span className="flex shrink-0 items-center gap-1.5 text-muted/80">
        {actionLabel ? (
          <span className="hidden text-[12px] font-medium tracking-wide sm:inline">
            {actionLabel}
          </span>
        ) : null}
        <ChevronIcon className="card-arrow h-[18px] w-[18px] transition-transform duration-[220ms] ease-out" />
      </span>
    </a>
  )
}
