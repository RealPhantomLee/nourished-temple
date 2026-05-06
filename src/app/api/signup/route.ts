import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'
import { hashPassword, generateReferralCode } from '@/lib/db/crypto'

export async function POST(request: Request) {
  try {
    const { email, password, name, referralCode } = await request.json()

    if (!email || !password || password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 })
    }

    let referredBy: string | null = null
    if (referralCode) {
      const referrer = await prisma.user.findUnique({
        where: { referralCode: referralCode.trim() },
      })
      if (!referrer) {
        return NextResponse.json({ error: 'Invalid referral code' }, { status: 400 })
      }
      referredBy = referrer.id
    }

    const passwordHash = hashPassword(password)
    const newUser = await prisma.user.create({
      data: {
        email,
        name: name || email.split('@')[0],
        passwordHash,
        referralCode: generateReferralCode(),
        referredBy,
      },
    })

    return NextResponse.json({
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      referralCode: newUser.referralCode,
    })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
