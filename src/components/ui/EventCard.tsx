import { Event } from '@/types'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock } from 'lucide-react'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-nt-earth-900">{event.title}</h3>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-nt-earth-600">
            <Calendar className="w-4 h-4 text-nt-green-700" />
            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center gap-2 text-sm text-nt-earth-600">
            <Clock className="w-4 h-4 text-nt-green-700" />
            {event.time}
          </div>
          <div className="flex items-center gap-2 text-sm text-nt-earth-600">
            <MapPin className="w-4 h-4 text-nt-green-700" />
            {event.location}
          </div>
        </div>
        <Link
          href={`/events/${event.slug}`}
          className="mt-4 inline-block text-sm font-medium text-nt-green-700 hover:text-nt-green-800 transition-colors"
        >
          View Details &rarr;
        </Link>
      </div>
    </div>
  )
}
