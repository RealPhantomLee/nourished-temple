import { notFound } from 'next/navigation'
import Image from 'next/image'
import { fetchEventBySlug, fetchEvents } from '@/lib/sanity'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const events = await fetchEvents()
  return events.map((e) => ({ slug: e.slug }))
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = await fetchEventBySlug(slug)

  if (!event) {
    notFound()
  }

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-nt-green-700 font-medium hover:text-nt-green-800 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Events
          </Link>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-nt-earth-100 shadow-xl mb-8">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-nt-earth-900">{event.title}</h1>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-nt-earth-50 rounded-lg hover:bg-nt-earth-100 transition-colors">
              <div className="w-10 h-10 bg-nt-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-nt-green-700" />
              </div>
              <div>
                <p className="text-xs text-nt-earth-500 uppercase">Date</p>
                <p className="font-medium">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-nt-earth-50 rounded-lg hover:bg-nt-earth-100 transition-colors">
              <div className="w-10 h-10 bg-nt-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-nt-green-700" />
              </div>
              <div>
                <p className="text-xs text-nt-earth-500 uppercase">Time</p>
                <p className="font-medium">{event.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-nt-earth-50 rounded-lg hover:bg-nt-earth-100 transition-colors">
              <div className="w-10 h-10 bg-nt-green-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-nt-green-700" />
              </div>
              <div>
                <p className="text-xs text-nt-earth-500 uppercase">Location</p>
                <p className="font-medium">{event.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-nt-earth-50 rounded-xl">
            <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">About This Event</h2>
            <p className="text-nt-earth-700 leading-relaxed">{event.description}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
