export type ContactPerson = {
  id: string
  name: string
  shortName: string
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
  name: 'Fenix NFC',
  title: 'Fenix NFC — Контакты',
  description: 'Контакты Fenix NFC: телефон, Instagram и Telegram.',
  ogDescription: 'Свяжитесь с командой Fenix NFC удобным способом.',
  footerBrand: 'Fenix NFC',
  footerTagline: 'NFC solutions for modern connections',
  copyright: '© 2026 Fenix NFC',
  instagram: {
    handle: '@fenix.nfc',
    href: 'https://www.instagram.com/fenix.nfc/',
  },
  website: {
    label: 'Website',
    href: 'https://fenix-nfc-671.netlify.app/',
  },
} as const

export const contacts: ContactPerson[] = [
  {
    id: 'humoyun',
    name: 'Humoyun Zoirov',
    shortName: 'Humoyun',
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
    shortName: 'Fozilbek',
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
