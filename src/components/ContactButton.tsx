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
        'contact-card group flex min-h-[92px] w-full items-center gap-4 rounded-[20px] px-4 py-4',
        className,
      )}
      aria-label={ariaLabel}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      <span className="icon-well flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[14px] text-white">
        {icon}
      </span>

      <span className="min-w-0 flex-1 text-left">
        <span className="block truncate text-[18px] font-medium leading-tight tracking-[-0.01em] text-white sm:text-[19px]">
          {title}
        </span>
        {subtitle ? (
          <span className="mt-1.5 block truncate text-[14px] leading-tight text-muted sm:text-[15px]">
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
