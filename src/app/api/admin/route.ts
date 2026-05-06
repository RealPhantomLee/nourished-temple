import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { prisma } from '@/lib/db/prisma'
import { hashPassword } from '@/lib/db/crypto'

async function checkAdmin() {
  const cookieStore = await cookies()
  const session = cookieStore.get('nt-admin-session')
  if (!session) return false
  return true
}

export async function GET(request: Request) {
  if (!await checkAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')

  try {
    switch (action) {
      case 'stats': {
        const userCount = await prisma.user.count()
        const contactCount = await prisma.contactSubmission.count()
        const recentContacts = await prisma.contactSubmission.findMany({
          orderBy: { createdAt: 'desc' },
          take: 10,
        })
        const recentUsers = await prisma.user.findMany({
          orderBy: { createdAt: 'desc' },
          take: 10,
          select: { id: true, name: true, email: true, role: true, referralCode: true, referrals: true, earnings: true, createdAt: true },
        })
        return NextResponse.json({ userCount, contactCount, recentContacts, recentUsers })
      }

      case 'contacts': {
        const contacts = await prisma.contactSubmission.findMany({
          orderBy: { createdAt: 'desc' },
          take: 50,
        })
        return NextResponse.json(contacts)
      }

      case 'users': {
        const users = await prisma.user.findMany({
          orderBy: { createdAt: 'desc' },
          select: { id: true, name: true, email: true, role: true, referralCode: true, referrals: true, earnings: true, createdAt: true },
        })
        return NextResponse.json(users)
      }

      default:
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Admin API error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  if (!await checkAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { action, data } = await request.json()

  try {
    switch (action) {
      case 'create-admin': {
        const existing = await prisma.user.findUnique({ where: { email: data.email } })
        if (existing) {
          return NextResponse.json({ error: 'Email already exists' }, { status: 400 })
        }
        const user = await prisma.user.create({
          data: {
            email: data.email,
            name: data.name,
            passwordHash: hashPassword(data.password),
            role: 'admin',
            referralCode: `NT-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
          },
        })
        return NextResponse.json({ success: true, user })
      }

      case 'delete-user': {
        await prisma.user.delete({ where: { id: data.id } })
        return NextResponse.json({ success: true })
      }

      case 'update-role': {
        await prisma.user.update({
          where: { id: data.id },
          data: { role: data.role },
        })
        return NextResponse.json({ success: true })
      }

      default:
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
    }
  } catch (error) {
    console.error('Admin mutation error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
