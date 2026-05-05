import { Event } from '@/types'

export const events: Event[] = [
  {
    _id: '1',
    slug: 'rhythms-of-the-village',
    title: 'Rhythms of The Village Saturday Sidewalk Sale',
    description:
      'Catch Nourished Temple in person! Items for sale include Chondrus Crispus Sea Moss, N360 Wellness Tonics, Essential 1 Daily Minerals, Batana Oils, Fonio, Black Chickpeas, Waist Beads, Cannabis Oils, and more.',
    date: '2026-06-06',
    time: '12:00 PM – 5:00 PM',
    location: '2279 Lake Ave, Altadena, CA 91001',
    image: 'https://images.unsplash.com/photo-1555939594-852815674083?w=800&h=500&fit=crop',
  },
]

export const getEvents = () => events

export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug)
