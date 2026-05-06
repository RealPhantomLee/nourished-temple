import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { prisma } from '@/lib/db/prisma'

export async function POST(request: Request) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    return NextResponse.json({ error: 'No webhook secret configured' }, { status: 500 })
  }

  try {
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
      apiVersion: '2025-02-24.acacia' as any,
    })

    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as any
        const referralCode = session.metadata?.referral_code

        if (referralCode) {
          const referrer = await prisma.user.findUnique({
            where: { referralCode },
          })

          if (referrer) {
            await prisma.user.update({
              where: { id: referrer.id },
              data: {
                referrals: { increment: 1 },
                earnings: { increment: 5 },
              },
            })
          }
        }

        console.log('Payment completed for session:', session.id)
        break
      }

      case 'checkout.session.expired': {
        const session = event.data.object as any
        console.log('Payment session expired:', session.id)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    )
  }
}
