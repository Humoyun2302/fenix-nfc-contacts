type IconProps = {
  className?: string
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.2 3.75h2.1c.55 0 1.03.37 1.17.9l.75 2.75c.12.46-.05.95-.43 1.23l-1.55 1.14a11.2 11.2 0 0 0 4.99 4.99l1.14-1.55c.28-.38.77-.55 1.23-.43l2.75.75c.53.14.9.62.9 1.17v2.1c0 .62-.5 1.12-1.12 1.12C9.95 19.92 4.08 14.05 4.08 6.87c0-.62.5-1.12 1.12-1.12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20.4 4.7 3.9 11.1c-1.12.43-1.1 1.98.03 2.37l4.05 1.4 1.56 4.82c.34 1.05 1.72 1.25 2.34.35l2.24-3.25 4.18 3.08c.9.66 2.17.16 2.4-.94l2.45-11.7c.25-1.2-.96-2.17-2.15-1.72Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="m8.1 14.7 8.95-5.55"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ChevronIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 5.5 15.5 12 9 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
