'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Clock, ExternalLink, RefreshCw } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Event } from '@/types'

interface ExternalEvent {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  url: string
  isFree: boolean
}

const fallbackCommunityEvents: ExternalEvent[] = [
  {
    id: '1',
    title: 'Black-Owned Wellness Expo LA',
    description: 'Explore holistic health, herbal remedies, and plant-based nutrition from Black-owned wellness brands.',
    date: '2026-06-15',
    time: '11:00 AM',
    location: 'Los Angeles Convention Center, LA',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop',
    url: 'https://www.eventbrite.com',
    isFree: true,
  },
  {
    id: '2',
    title: 'Plant-Based Healing Summit',
    description: 'A day of workshops on alkaline living, herbal medicine, and natural detoxification.',
    date: '2026-06-22',
    time: '9:00 AM',
    location: 'Santa Monica Civic Auditorium',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop',
    url: 'https://www.eventbrite.com',
    isFree: false,
  },
  {
    id: '3',
    title: 'Community Herb Walk & Tea Ceremony',
    description: 'Guided walk through local gardens followed by a traditional herbal tea ceremony.',
    date: '2026-07-01',
    time: '8:00 AM',
    location: 'Griffith Park, Los Angeles',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=500&fit=crop',
    url: 'https://www.eventbrite.com',
    isFree: true,
  },
  {
    id: '4',
    title: 'Alkaline Cooking Masterclass',
    description: 'Learn to prepare alkaline electric meals from scratch with expert chefs.',
    date: '2026-07-10',
    time: '2:00 PM',
    location: 'Culver City Community Center',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop',
    url: 'https://www.eventbrite.com',
    isFree: false,
  },
  {
    id: '5',
    title: 'Mental Health & Holistic Wellness Fair',
    description: 'Free screenings, workshops, and resources for mental and physical wellness.',
    date: '2026-07-18',
    time: '10:00 AM',
    location: 'Inglewood Community Park',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop',
    url: 'https://www.eventbrite.com',
    isFree: true,
  },
  {
    id: '6',
    title: 'African Ancestral Healing Workshop',
    description: 'Explore traditional African healing practices, herbal knowledge, and spiritual wellness.',
    date: '2026-07-25',
    time: '1:00 PM',
    location: 'Leimert Park Village, LA',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=500&fit=crop',
    url: 'https://www.eventbrite.com',
    isFree: false,
  },
  {
    id: '7',
    title: 'Yoga & Sound Bath in the Park',
    description: 'Outdoor yoga session followed by a healing sound bath under the trees.',
    date: '2026-08-02',
    time: '7:00 AM',
    location: 'Runyon Canyon, Hollywood',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop',
    url: 'https://www.eventbrite.com',
    isFree: true,
  },
  {
    id: '8',
    title: 'Black Farmers Market & Health Expo',
    description: 'Support Black farmers and learn about sustainable agriculture and nutrition.',
    date: '2026-08-09',
    time: '9:00 AM',
    location: 'Exposition Park, Los Angeles',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=500&fit=crop',
    url: 'https://www.eventbrite.com',
    isFree: true,
  },
  {
    id: '9',
    title: 'Juice Cleanse & Detox Retreat',
    description: 'A weekend retreat focused on juicing, fasting, and natural body detoxification.',
    date: '2026-08-15',
    time: '6:00 AM',
    location: 'Malibu Wellness Center',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&h=500&fit=crop',
    url: 'https://www.eventbrite.com',
    isFree: false,
  },
  {
    id: '10',
    title: 'Community Meditation & Herbal Tea Circle',
    description: 'Join fellow wellness seekers for guided meditation and herbal tea sharing.',
    date: '2026-08-22',
    time: '5:00 PM',
    location: 'Venice Beach Community Center',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=500&fit=crop',
    url: 'https://www.eventbrite.com',
    isFree: true,
  },
]

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(targetDate).getTime() - Date.now()
      if (diff <= 0) {
        clearInterval(interval)
        return
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds },
  ]

  return (
    <div className="flex items-center gap-3 sm:gap-4 justify-center">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-white font-mono">{String(u.value).padStart(2, '0')}</span>
          </div>
          <span className="text-xs text-nt-green-300 mt-1 block">{u.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function EventsPage() {
  const [ourEvents, setOurEvents] = useState<Event[]>([])
  const [externalEvents, setExternalEvents] = useState<ExternalEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [lastRefresh, setLastRefresh] = useState<string>('')

  useEffect(() => {
    Promise.all([
      fetch('/api/events/ours').then((res) => res.json()).catch(() => []),
      fetch('/api/events').then((res) => res.json()).catch(() => fallbackCommunityEvents),
    ])
      .then(([our, ext]) => {
        setOurEvents(our)
        setExternalEvents(ext.length > 0 ? ext.slice(0, 10) : fallbackCommunityEvents)
        setLastRefresh(new Date().toLocaleString())
      })
      .catch(() => {
        setOurEvents([])
        setExternalEvents(fallbackCommunityEvents)
      })
      .finally(() => setLoading(false))
  }, [])

  const nextEvent = ourEvents.length > 0 ? ourEvents[0] : null

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 text-nt-green-400 mb-4">
              <Calendar className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-widest">Join Us In Person</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white">Events & Pop-Ups</h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Alkaline Electric Cell Food Kreationz in person. Come connect with community and enjoy quality creations.
            </p>
            {lastRefresh && <p className="mt-2 text-sm text-nt-green-300">Last updated: {lastRefresh}</p>}
          </ScrollReveal>
        </div>
      </section>

      {/* Countdown to next event - no background border */}
      {nextEvent && (
        <section className="py-10 text-center">
          <p className="text-nt-gold text-sm font-medium uppercase tracking-wider mb-3">Next Event</p>
          <h2 className="text-xl font-serif text-white/90 mb-5">{nextEvent.title}</h2>
          <CountdownTimer targetDate={`${nextEvent.date}T12:00:00`} />
        </section>
      )}

      {/* Our Events */}
      {ourEvents.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl font-serif font-bold text-nt-earth-900 mb-8">Nourished Temple Events</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ourEvents.map((event, i) => (
                <ScrollReveal key={event._id} delay={i * 0.15}>
                  <Link href={`/events/${event.slug}`} className="block group">
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-nt-earth-900 group-hover:text-nt-green-700 transition-colors">
                          {event.title}
                        </h3>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-nt-earth-600">
                            <Calendar className="w-3.5 h-3.5 text-nt-green-700" />
                            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-nt-earth-600">
                            <Clock className="w-3.5 h-3.5 text-nt-green-700" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-nt-earth-600">
                            <MapPin className="w-3.5 h-3.5 text-nt-green-700" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Community Events */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif font-bold text-nt-earth-900">Community Health Events in LA</h2>
              <div className="flex items-center gap-2 text-sm text-nt-earth-500">
                <RefreshCw className="w-3 h-3" />
                Auto-updated Mon, Thu, Sat
              </div>
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm animate-pulse">
                  <div className="h-48 bg-nt-earth-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-nt-earth-200 rounded w-3/4" />
                    <div className="h-4 bg-nt-earth-200 rounded w-1/2" />
                    <div className="h-4 bg-nt-earth-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : externalEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {externalEvents.map((event, i) => (
                <ScrollReveal key={event.id} delay={i * 0.1} direction="scale">
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {event.isFree && (
                        <span className="absolute top-3 left-3 px-3 py-1 bg-nt-green-700 text-white text-xs font-medium rounded-full">
                          Free
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-nt-earth-900 group-hover:text-nt-green-700 transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      {event.description && (
                        <p className="mt-2 text-sm text-nt-earth-500 line-clamp-2">{event.description}</p>
                      )}
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-nt-earth-600">
                          <Calendar className="w-3.5 h-3.5 text-nt-green-700" />
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-nt-earth-600">
                          <MapPin className="w-3.5 h-3.5 text-nt-green-700" />
                          {event.location}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-nt-green-700 font-medium text-sm">
                        View on Eventbrite
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
                <Calendar className="w-12 h-12 text-nt-earth-300 mx-auto mb-4" />
                <p className="text-xl text-nt-earth-600">No community events found at the moment.</p>
                <p className="text-sm text-nt-earth-400 mt-2">Events are sourced from Eventbrite and updated regularly.</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  )
}
