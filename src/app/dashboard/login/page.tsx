'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError('Invalid email or password')
    } else {
      router.push('/dashboard')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <div>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-nt-green-950 to-nt-earth-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=800&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-nt-green-300 hover:text-nt-green-200 transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-nt-green-400 mb-4">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Community Access</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Sign In</h1>
          <p className="mt-4 text-lg text-nt-green-200">
            Access your referral dashboard
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
            {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-nt-earth-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-nt-earth-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition"
                placeholder="Your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

            <p className="text-sm text-center text-nt-earth-500">
              Don&apos;t have an account?{' '}
              <Link href="/dashboard/signup" className="text-nt-green-700 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
