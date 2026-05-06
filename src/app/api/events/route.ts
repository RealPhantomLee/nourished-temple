import { NextResponse } from 'next/server'

interface EventbriteEvent {
  name: { text: string }
  description: { text: string }
  start: { utc: string; local: string }
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

async function fetchEventbriteEvents(): Promise<MappedEvent[]> {
  const token = process.env.EVENTBRITE_API_TOKEN
  if (!token) return []

  try {
    // Match: https://www.eventbrite.com/d/ca--los-angeles/black-owned/?subcategories=7001,7002,7005
    const params = new URLSearchParams({
      q: 'black owned',
      'location.address': 'Los Angeles, CA',
      'location.within': '25mi',
      subcategories: '7001,7002,7005',
      sort_by: 'date',
      'start_date.range_start': 'now',
      status: 'live',
      expand: 'venue,logo',
    })

    const res = await fetch(
      `https://www.eventbriteapi.com/v3/events/search/?${params.toString()}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 43200 }, // 12-hour cache
      }
    )

    if (!res.ok) return []

    const data = await res.json()
    const events: EventbriteEvent[] = data.events || []

    return events.slice(0, 10).map((event) => {
      const startDate = new Date(event.start.utc)
      return {
        id: event.id,
        title: event.name.text,
        description: event.description?.text?.replace(/<[^>]*>/g, '').slice(0, 200) || '',
        date: startDate.toISOString().split('T')[0],
        time: startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Los_Angeles' }),
        location: event.venue?.address?.localized_address_display || event.venue?.name || 'Los Angeles, CA',
        image: event.logo?.url || 'https://images.unsplash.com/photo-1555939594-852815674083?w=800&h=500&fit=crop',
        url: event.url,
        isFree: event.is_free,
      }
    })
  } catch {
    return []
  }
}

export async function GET() {
  const events = await fetchEventbriteEvents()
  return NextResponse.json(events)
}
