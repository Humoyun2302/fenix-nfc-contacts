export type ContactPerson = {
  id: string
  name: string
  phone: {
    display: string
    href: string
  }
  telegram: {
    handle: string
    href: string
  }
}

export const siteConfig = {
  name: 'FENIX NFC',
  title: 'Fenix NFC — Контакты',
  description: 'Контакты Fenix NFC: телефон, Instagram и Telegram.',
  ogDescription: 'Свяжитесь с командой Fenix NFC удобным способом.',
  subtitle: 'Связаться с нами',
  footer: 'Powered by Fenix NFC',
  instagram: {
    handle: '@fenix.nfc',
    href: 'https://www.instagram.com/fenix.nfc/',
  },
} as const

export const contacts: ContactPerson[] = [
  {
    id: 'humoyun',
    name: 'Humoyun Zoirov',
    phone: {
      display: '+998 90 920 55 30',
      href: 'tel:+998909205530',
    },
    telegram: {
      handle: '@Humoyun_Z',
      href: 'https://t.me/Humoyun_Z',
    },
  },
  {
    id: 'fozilbek',
    name: 'Fozilbek Shavkatov',
    phone: {
      display: '+998 99 870 17 87',
      href: 'tel:+998998701787',
    },
    telegram: {
      handle: '@Fozilbek_Shavkatov',
      href: 'https://t.me/Fozilbek_Shavkatov',
    },
  },
]
