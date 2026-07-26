import { contacts, siteConfig } from '@/data/contacts'
import { ContactButton } from '@/components/ContactButton'
import { ContactSection } from '@/components/ContactSection'
import { InstagramIcon, PhoneIcon, TelegramIcon } from '@/components/Icons'

export function ProfileCard() {
  return (
    <div className="mx-auto flex w-full max-w-[440px] flex-col gap-5">
      <ContactSection label="Телефон" className="animate-enter stagger-3">
        <div className="glass-panel space-y-2.5 rounded-[1.5rem] p-2.5 sm:p-3">
          {contacts.map((person) => (
            <ContactButton
              key={person.id}
              href={person.phone.href}
              title={person.name}
              subtitle={person.phone.display}
              actionLabel="Позвонить"
              ariaLabel={`Позвонить ${person.name}, ${person.phone.display}`}
              icon={<PhoneIcon className="h-[18px] w-[18px]" />}
            />
          ))}
        </div>
      </ContactSection>

      <ContactSection label="Instagram" className="animate-enter stagger-4">
        <ContactButton
          href={siteConfig.instagram.href}
          title={siteConfig.instagram.handle}
          subtitle="Официальный аккаунт"
          external
          featured
          ariaLabel={`Instagram ${siteConfig.instagram.handle}`}
          icon={<InstagramIcon className="h-5 w-5" />}
        />
      </ContactSection>

      <ContactSection label="Telegram" className="animate-enter stagger-5">
        <div className="space-y-2.5">
          {contacts.map((person) => (
            <ContactButton
              key={`${person.id}-tg`}
              href={person.telegram.href}
              title={person.telegram.handle}
              subtitle={person.name}
              external
              ariaLabel={`Telegram ${person.name}, ${person.telegram.handle}`}
              icon={<TelegramIcon className="h-[18px] w-[18px]" />}
            />
          ))}
        </div>
      </ContactSection>
    </div>
  )
}
