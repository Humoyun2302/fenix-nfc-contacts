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
  featured = false,
  className,
  ariaLabel,
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'contact-link group flex min-h-[58px] w-full items-center gap-3.5 rounded-[1.1rem] px-3.5 py-3.5',
        featured && 'contact-link-featured',
        className,
      )}
      aria-label={ariaLabel}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      <span
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.9rem] border border-white/14 bg-white/[0.04] text-white transition-colors duration-200 group-hover:border-white/28',
          featured && 'h-11 w-11 border-white/20 bg-white/[0.06]',
        )}
      >
        {icon}
      </span>

      <span className="min-w-0 flex-1 text-left">
        <span
          className={cn(
            'block truncate font-medium leading-tight text-white',
            featured ? 'text-[15.5px] sm:text-base' : 'text-[14px] sm:text-[15px]',
          )}
        >
          {title}
        </span>
        {subtitle ? (
          <span className="mt-0.5 block truncate text-[12.5px] leading-tight text-muted sm:text-[13px]">
            {subtitle}
          </span>
        ) : null}
      </span>

      <span className="flex shrink-0 items-center gap-1 text-muted transition-colors duration-200 group-hover:text-soft">
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
