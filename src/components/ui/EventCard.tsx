import { Event } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-nt-earth-900">{event.title}</h3>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-nt-earth-600">
            <div className="w-6 h-6 bg-nt-green-100 rounded flex items-center justify-center">
              <Calendar className="w-3 h-3 text-nt-green-700" />
            </div>
            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center gap-2 text-sm text-nt-earth-600">
            <div className="w-6 h-6 bg-nt-green-100 rounded flex items-center justify-center">
              <Clock className="w-3 h-3 text-nt-green-700" />
            </div>
            {event.time}
          </div>
          <div className="flex items-center gap-2 text-sm text-nt-earth-600">
            <div className="w-6 h-6 bg-nt-green-100 rounded flex items-center justify-center">
              <MapPin className="w-3 h-3 text-nt-green-700" />
            </div>
            {event.location}
          </div>
        </div>
        <Link
          href={`/events/${event.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-nt-green-700 hover:text-nt-green-800 transition-colors group"
        >
          View Details
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
