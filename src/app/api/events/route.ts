import { NextResponse } from 'next/server'

interface EventbriteEvent {
  name: { text: string }
  description: { text: string }
  start: { utc: string; local: string; timezone: string }
  end: { utc: string; local: string }
  venue: { name: string; address: { localized_address_display: string } } | null
  logo: { url: string } | null
  url: string
  id: string
  is_free: boolean
}

interface MappedEvent {
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

const CACHE_KEY = 'eventbrite-events'
const CACHE_DURATION = 12 * 60 * 60 * 1000

async function fetchEventbriteEvents(): Promise<MappedEvent[]> {
  const token = process.env.EVENTBRITE_API_TOKEN

  if (!token) {
    return []
  }

  try {
    const response = await fetch(
      'https://www.eventbriteapi.com/v3/events/search/?q=health+wellness+alkaline&location.address=Los+Angeles,+CA&sort_by=date&start_date.range_start=now&start_date.range_end=+3months&categories=105&status=live&expand=venue%2Clogo',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      console.error('Eventbrite API error:', response.status)
      return []
    }

    const data = await response.json()
    const events: EventbriteEvent[] = data.events || []

    return events.slice(0, 10).map((event) => {
      const startDate = new Date(event.start.utc)
      return {
        id: event.id,
        title: event.name.text,
        description: event.description?.text?.replace(/<[^>]*>/g, '').slice(0, 200) || '',
        date: startDate.toISOString().split('T')[0],
        time: `${startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })} ${startDate.toLocaleTimeString('en-US', { timeZoneName: 'short' }).split(' ').slice(-1)[0]}`,
        location: event.venue?.address?.localized_address_display || event.venue?.name || 'TBA',
        image: event.logo?.url || 'https://images.unsplash.com/photo-1555939594-852815674083?w=800&h=500&fit=crop',
        url: event.url,
        isFree: event.is_free,
      }
    })
  } catch (error) {
    console.error('Error fetching Eventbrite events:', error)
    return []
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const forceRefresh = searchParams.get('refresh') === 'true'

  if (!forceRefresh) {
    const cached = process.env[CACHE_KEY as keyof typeof process.env]
    if (cached) {
      try {
        const parsed = JSON.parse(cached)
        if (Date.now() - parsed.timestamp < CACHE_DURATION) {
          return NextResponse.json(parsed.events)
        }
      } catch {}
    }
  }

  const events = await fetchEventbriteEvents()

  try {
    const cacheObj = JSON.stringify({ events, timestamp: Date.now() })
    process.env[CACHE_KEY as keyof typeof process.env] = cacheObj
  } catch {}

  return NextResponse.json(events)
}
