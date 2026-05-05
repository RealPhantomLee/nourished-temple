export interface Product {
  _id: string
  slug: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
}

export interface Event {
  _id: string
  slug: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
}

export interface Service {
  id: string
  title: string
  description: string
  ctaText: string
  ctaLink: string
  icon: string
}

export interface Referral {
  code: string
  userId: string
  referrals: number
  earnings: number
}
