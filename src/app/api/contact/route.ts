import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      subject,
      message,
      preferredContact,
      heardFrom,
      healthConcerns,
      alkalineLevel,
      dietaryRestrictions,
    } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      )
    }

    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject,
        message,
        preferredContact: preferredContact || null,
        heardFrom: heardFrom || null,
        healthConcerns: healthConcerns || null,
        alkalineLevel: alkalineLevel || null,
        dietaryRestrictions: dietaryRestrictions || null,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
