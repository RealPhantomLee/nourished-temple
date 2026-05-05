import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { items, referralCode } = await request.json()

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in cart' },
        { status: 400 }
      )
    }

    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
      apiVersion: '2025-02-24.acacia' as any,
    })

    const lineItems = items.map((item: { id: string; quantity: number; price: number; name: string }) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          metadata: { id: item.id },
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/shop?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/shop?canceled=true`,
      metadata: referralCode ? { referral_code: referralCode } : {},
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
