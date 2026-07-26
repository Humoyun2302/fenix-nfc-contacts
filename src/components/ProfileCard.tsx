import { contacts, siteConfig } from '@/data/contacts'
import { ContactButton } from '@/components/ContactButton'
import { ContactSection } from '@/components/ContactSection'
import { InstagramIcon, PhoneIcon, TelegramIcon } from '@/components/Icons'

export function ProfileCard() {
  return (
    <div className="page-shell mx-auto flex w-full flex-col gap-3">
      <ContactSection label="Телефон" className="animate-enter stagger-4">
        <div className="flex flex-col gap-3">
          {contacts.map((person) => (
            <ContactButton
              key={person.id}
              href={person.phone.href}
              title={person.name}
              subtitle={person.phone.display}
              actionLabel="Позвонить"
              ariaLabel={`Позвонить ${person.name}, ${person.phone.display}`}
              icon={<PhoneIcon className="h-5 w-5" />}
            />
          ))}
        </div>
      </ContactSection>

      <ContactSection label="Instagram" className="animate-enter stagger-5">
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

      <ContactSection label="Telegram" className="animate-enter stagger-6">
        <div className="flex flex-col gap-3">
          {contacts.map((person) => (
            <ContactButton
              key={`${person.id}-tg`}
              href={person.telegram.href}
              title={person.telegram.handle}
              subtitle={person.name}
              external
              ariaLabel={`Telegram ${person.name}, ${person.telegram.handle}`}
              icon={<TelegramIcon className="h-5 w-5" />}
            />
          ))}
        </div>
      </ContactSection>
    </div>
  )
}
