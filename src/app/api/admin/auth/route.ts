import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { timingSafeEqual } from 'crypto'

function secureCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) {
    timingSafeEqual(bufA, bufA) // maintain constant time
    return false
  }
  return timingSafeEqual(bufA, bufB)
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    const adminEmail = process.env.ADMIN_EMAIL ?? ''
    const adminPassword = process.env.ADMIN_PASSWORD ?? ''

    if (!adminEmail || !adminPassword) {
      return NextResponse.json({ error: 'Admin not configured' }, { status: 503 })
    }

    if (!secureCompare(email, adminEmail) || !secureCompare(password, adminPassword)) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = Buffer.from(`${adminEmail}:${Date.now()}:${Math.random().toString(36)}`).toString('base64')
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)

    const cookieStore = await cookies()
    cookieStore.set('nt-admin-session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: expiresAt,
      path: '/',
      sameSite: 'strict',
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function DELETE() {
  const cookieStore = await cookies()
  cookieStore.delete('nt-admin-session')
  return NextResponse.json({ success: true })
}

export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get('nt-admin-session')
  if (!session) {
    return NextResponse.json({ authenticated: false })
  }
  return NextResponse.json({ authenticated: true })
}
