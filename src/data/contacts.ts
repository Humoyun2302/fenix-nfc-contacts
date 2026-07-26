export type ContactPerson = {
  id: string
  name: string
  phone: {
    display: string
    href: string
  }
  instagram: {
    handle: string
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
  description: 'Контактная страница Humoyun Zoirov и Fozilbek Shavkatov',
  headerLabel: 'Контакты',
  cardTitle: 'Связаться с нами',
  cardSubtitle: 'Выберите удобный способ связи',
  footer: 'Powered by Fenix NFC',
} as const

export const contacts: ContactPerson[] = [
  {
    id: 'humoyun',
    name: 'Humoyun Zoirov',
    phone: {
      display: '+998 90 920 55 30',
      href: 'tel:+998909205530',
    },
    instagram: {
      handle: '@humoyun_zoirov',
      href: 'https://instagram.com/humoyun_zoirov',
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
    instagram: {
      handle: '@shvktv_1',
      href: 'https://instagram.com/shvktv_1',
    },
    telegram: {
      handle: '@Fozilbek_Shavkatov',
      href: 'https://t.me/Fozilbek_Shavkatov',
    },
  },
]
