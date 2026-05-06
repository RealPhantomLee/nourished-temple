import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/db/prisma'

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    const userId = (session?.user as any)?.id
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { referralCode: true, referrals: true, earnings: true },
    })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({
      code: user.referralCode,
      referrals: user.referrals,
      earnings: user.earnings,
    })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { referralCode } = await request.json()

    if (!referralCode) {
      return NextResponse.json({ error: 'Referral code required' }, { status: 400 })
    }

    const referrer = await prisma.user.findUnique({
      where: { referralCode: referralCode.trim() },
    })

    if (!referrer) {
      return NextResponse.json({ error: 'Invalid referral code' }, { status: 404 })
    }

    await prisma.user.update({
      where: { id: referrer.id },
      data: {
        referrals: { increment: 1 },
        earnings: { increment: 5 },
      },
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
