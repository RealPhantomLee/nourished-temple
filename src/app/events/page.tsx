import { EventCard } from '@/components/ui/EventCard'
import { getEvents } from '@/lib/events'

export default function EventsPage() {
  const events = getEvents()

  return (
    <div>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-nt-green-950 to-nt-earth-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold">Events & Pop-Ups</h1>
          <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
            Alkaline Electric Cell Food Kreationz in person. Come by and support, enjoy quality Alkaline Kreationz at various locations possibly near you.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-nt-earth-600">No events at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
