import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// In-memory store for demo (use a real database in production)
const referrals = new Map<string, { code: string; referrals: number; earnings: number }>()

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.user.email || ''
    const userReferral = referrals.get(userId)

    if (!userReferral) {
      const code = `${userId.slice(0, 4)}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
      referrals.set(userId, { code, referrals: 0, earnings: 0 })
    }

    const data = referrals.get(userId)!
    return NextResponse.json({ code: data.code, referrals: data.referrals, earnings: data.earnings })
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

    for (const [_, data] of referrals.entries()) {
      if (data.code === referralCode) {
        data.referrals += 1
        data.earnings += 5
        return NextResponse.json({ success: true })
      }
    }

    return NextResponse.json({ error: 'Invalid referral code' }, { status: 404 })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
