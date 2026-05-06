import { NextResponse } from 'next/server'
import { fetchEvents } from '@/lib/sanity'

export async function GET() {
  try {
    const events = await fetchEvents()
    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json([])
  }
}
