import { contacts, siteConfig } from '@/data/contacts'
import { ContactButton } from '@/components/ContactButton'
import { ContactSection } from '@/components/ContactSection'
import {
  InstagramIcon,
  NfcMark,
  PhoneIcon,
  TelegramIcon,
} from '@/components/Icons'

export function ProfileCard() {
  return (
    <article className="animate-enter stagger-1 glass-panel mx-auto w-full max-w-[460px] rounded-[1.35rem] p-4 sm:p-5">
      <div className="mb-5 flex flex-col items-center text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-flame shadow-[0_0_24px_rgba(255,106,43,0.18)]">
          <NfcMark className="h-8 w-8" title="Fenix NFC" />
        </div>
        <h1 className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.5rem]">
          {siteConfig.cardTitle}
        </h1>
        <p className="mt-1.5 max-w-[18rem] text-[13.5px] leading-relaxed text-muted sm:text-sm">
          {siteConfig.cardSubtitle}
        </p>
      </div>

      <div className="space-y-5">
        <ContactSection label="Телефон" className="animate-enter stagger-2">
          {contacts.map((person, index) => (
            <ContactButton
              key={person.id}
              href={person.phone.href}
              title={person.name}
              subtitle={person.phone.display}
              actionLabel="Позвонить"
              ariaLabel={`Позвонить ${person.name}, ${person.phone.display}`}
              icon={<PhoneIcon className="h-[18px] w-[18px]" />}
              className={index === 0 ? 'animate-enter stagger-3' : 'animate-enter stagger-4'}
            />
          ))}
        </ContactSection>

        <ContactSection label="Instagram" className="animate-enter stagger-5">
          {contacts.map((person) => (
            <ContactButton
              key={`${person.id}-ig`}
              href={person.instagram.href}
              title={person.name}
              subtitle={person.instagram.handle}
              external
              ariaLabel={`Instagram ${person.name}, ${person.instagram.handle}`}
              icon={<InstagramIcon className="h-[18px] w-[18px]" />}
            />
          ))}
        </ContactSection>

        <ContactSection label="Telegram" className="animate-enter stagger-6">
          {contacts.map((person) => (
            <ContactButton
              key={`${person.id}-tg`}
              href={person.telegram.href}
              title={person.name}
              subtitle={person.telegram.handle}
              external
              ariaLabel={`Telegram ${person.name}, ${person.telegram.handle}`}
              icon={<TelegramIcon className="h-[18px] w-[18px]" />}
            />
          ))}
        </ContactSection>
      </div>
    </article>
  )
}
