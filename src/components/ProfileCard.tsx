import { contacts, siteConfig } from '@/data/contacts'
import { ContactButton } from '@/components/ContactButton'
import { ContactSection } from '@/components/ContactSection'
import { InstagramIcon, PhoneIcon, TelegramIcon } from '@/components/Icons'

export function ProfileCard() {
  return (
    <div className="page-shell mx-auto flex w-full flex-col gap-2.5">
      <ContactSection label="Телефон" labelClassName="animate-enter stagger-2">
        <div className="flex flex-col gap-2.5">
          {contacts.map((person, index) => (
            <ContactButton
              key={person.id}
              href={person.phone.href}
              title={person.shortName}
              subtitle={person.phone.display}
              ariaLabel={`Позвонить ${person.shortName}, ${person.phone.display}`}
              icon={<PhoneIcon className="h-[18px] w-[18px]" />}
              className={index === 0 ? 'animate-enter stagger-3' : 'animate-enter stagger-4'}
            />
          ))}
        </div>
      </ContactSection>

      <ContactSection label="Instagram" labelClassName="animate-enter stagger-5">
        <ContactButton
          href={siteConfig.instagram.href}
          title="Instagram"
          external
          ariaLabel="Instagram"
          icon={<InstagramIcon className="h-[18px] w-[18px]" />}
          className="animate-enter stagger-6"
        />
      </ContactSection>

      <ContactSection label="Telegram" labelClassName="animate-enter stagger-7">
        <div className="flex flex-col gap-2.5">
          {contacts.map((person, index) => (
            <ContactButton
              key={`${person.id}-tg`}
              href={person.telegram.href}
              title={person.shortName}
              external
              ariaLabel={`Telegram ${person.shortName}`}
              icon={<TelegramIcon className="h-[18px] w-[18px]" />}
              className={index === 0 ? 'animate-enter stagger-8' : 'animate-enter stagger-9'}
            />
          ))}
        </div>
      </ContactSection>
    </div>
  )
}
