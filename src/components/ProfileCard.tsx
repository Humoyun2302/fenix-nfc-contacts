import { contacts, siteConfig } from '@/data/contacts'
import { ContactButton } from '@/components/ContactButton'
import { ContactSection } from '@/components/ContactSection'
import { InstagramIcon, PhoneIcon, TelegramIcon } from '@/components/Icons'

export function ProfileCard() {
  return (
    <div className="page-shell mx-auto flex w-full flex-col gap-2.5">
      <ContactSection label="Телефон" className="animate-enter stagger-2">
        <div className="flex flex-col gap-2.5">
          {contacts.map((person) => (
            <ContactButton
              key={person.id}
              href={person.phone.href}
              title={person.shortName}
              subtitle={person.phone.display}
              ariaLabel={`Позвонить ${person.shortName}, ${person.phone.display}`}
              icon={<PhoneIcon className="h-[18px] w-[18px]" />}
            />
          ))}
        </div>
      </ContactSection>

      <ContactSection label="Instagram" className="animate-enter stagger-3">
        <ContactButton
          href={siteConfig.instagram.href}
          title="Instagram"
          external
          ariaLabel="Instagram"
          icon={<InstagramIcon className="h-[18px] w-[18px]" />}
        />
      </ContactSection>

      <ContactSection label="Telegram" className="animate-enter stagger-4">
        <div className="flex flex-col gap-2.5">
          {contacts.map((person) => (
            <ContactButton
              key={`${person.id}-tg`}
              href={person.telegram.href}
              title={person.shortName}
              external
              ariaLabel={`Telegram ${person.shortName}`}
              icon={<TelegramIcon className="h-[18px] w-[18px]" />}
            />
          ))}
        </div>
      </ContactSection>
    </div>
  )
}
