'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Camera, Users } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Event } from '@/types'

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
    <div className="flex items-center gap-3 sm:gap-6 justify-center">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              {String(u.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs text-nt-green-300 mt-2 block font-medium uppercase tracking-wider">{u.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function EventsPage() {
  const [ourEvents, setOurEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/events/ours')
      .then((res) => res.json())
      .catch(() => [])
      .then((data) => {
        setOurEvents(Array.isArray(data) ? data : [])
        setLoading(false)
      })
  }, [])

  const nextEvent = ourEvents.length > 0 ? ourEvents[0] : null

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 text-nt-green-400 mb-5">
              <Calendar className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]">Join Us In Person</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Events & Pop-Ups
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
              Alkaline Electric Cell Food Kreationz in person. Come connect, taste, and experience real healing food.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Countdown to next event */}
      {nextEvent && (
        <section className="py-12 text-center">
          <p className="text-nt-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">Next Pop-Up</p>
          <h2 className="text-xl font-serif text-white mb-2">{nextEvent.title}</h2>
          {nextEvent.location && (
            <div className="flex items-center justify-center gap-1.5 text-nt-green-300 text-sm mb-6">
              <MapPin className="w-3.5 h-3.5" />
              {nextEvent.location}
            </div>
          )}
          <CountdownTimer targetDate={`${nextEvent.date}T12:00:00`} />
        </section>
      )}

      {/* Our Events */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-nt-green-700">Nourished Temple</span>
              <h2 className="mt-2 text-2xl lg:text-3xl font-serif font-bold text-nt-earth-900">
                Upcoming Events
              </h2>
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm animate-pulse">
                  <div className="h-52 bg-nt-earth-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-nt-earth-200 rounded w-3/4" />
                    <div className="h-4 bg-nt-earth-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : ourEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ourEvents.map((event, i) => (
                <ScrollReveal key={event._id} delay={i * 0.15}>
                  <Link href={`/events/${event.slug}`} className="group block">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nt-green-950/60 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-nt-earth-900 group-hover:text-nt-green-700 transition-colors leading-snug">
                          {event.title}
                        </h3>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-nt-earth-700">
                            <Calendar className="w-3.5 h-3.5 text-nt-green-600 shrink-0" />
                            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-nt-earth-700">
                            <Clock className="w-3.5 h-3.5 text-nt-green-600 shrink-0" />
                            {event.time}
                          </div>
                          <div className="flex items-start gap-2 text-sm text-nt-earth-700">
                            <MapPin className="w-3.5 h-3.5 text-nt-green-600 shrink-0 mt-0.5" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm max-w-xl mx-auto">
                <Calendar className="w-12 h-12 text-nt-earth-300 mx-auto mb-4" />
                <p className="text-xl font-serif text-nt-earth-700">No events scheduled yet.</p>
                <p className="text-sm text-nt-earth-500 mt-2 leading-relaxed">
                  Pop-up dates drop on Instagram first.<br />
                  Follow us to be the first to know.
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Stay Connected CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-nt-green-950/45 backdrop-blur-sm" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-nt-green-400">Stay in the Loop</span>
                <h2 className="mt-3 text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                  Pop-up announcements drop on Instagram first.
                </h2>
                <p className="mt-4 text-white/75 leading-relaxed">
                  Follow <span className="text-nt-green-300 font-medium">@alkalineexcellence</span> for real-time event drops, alkaline recipes, product restocks, and behind-the-scenes kreations from Mel&apos;s kitchen.
                </p>
                <a
                  href="https://instagram.com/alkalineexcellence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-nt-green-800 font-semibold rounded-lg hover:bg-nt-green-50 transition-colors hover:shadow-lg hover:-translate-y-0.5 duration-200"
                >
                  <Camera className="w-4 h-4" />
                  Follow on Instagram
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-white/8 border border-white/15 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-nt-green-700/40 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-nt-green-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Join the Community</p>
                    <p className="text-xs text-nt-green-400">Members get early event access</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Community members receive early access to pop-up dates, exclusive product drops, and a referral code worth $5 on every successful referral.
                </p>
                <Link
                  href="/dashboard/signup"
                  className="block w-full text-center py-3 bg-nt-gold text-nt-earth-900 font-semibold rounded-lg hover:bg-nt-gold-light transition-colors"
                >
                  Create Your Account
                </Link>
                <p className="text-center text-xs text-nt-green-500 mt-3">Free to join. No spam, ever.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
