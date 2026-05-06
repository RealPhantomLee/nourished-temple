import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const cronSecret = searchParams.get('secret')

  if (cronSecret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    const host = request.headers.get('host') || 'localhost:3000'
    const baseUrl = `${protocol}://${host}`

    await fetch(`${baseUrl}/api/events?refresh=true`)

    return NextResponse.json({
      success: true,
      message: 'Events refreshed from Eventbrite',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to refresh events', details: String(error) },
      { status: 500 }
    )
  }
}
