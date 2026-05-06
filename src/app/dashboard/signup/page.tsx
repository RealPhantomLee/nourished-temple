'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [referralCode, setReferralCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, referralCode }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Could not create account')
        setLoading(false)
        return
      }

      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Account created but could not sign in automatically. Please log in.')
      } else {
        router.push('/dashboard')
        router.refresh()
      }
    } catch {
      setError('Something went wrong. Please try again.')
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
            <span className="text-sm font-medium">Join the Community</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Create Account</h1>
          <p className="mt-4 text-lg text-nt-green-200">
            Join the Nourished Temple community
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-sm">
            {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-nt-earth-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition bg-white/50"
                placeholder="Your name"
              />
            </div>

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
                className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition bg-white/50"
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
                minLength={6}
                className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition bg-white/50"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="referralCode" className="block text-sm font-medium text-nt-earth-700 mb-1">
                Referral Code <span className="text-nt-earth-400">(optional)</span>
              </label>
              <input
                type="text"
                id="referralCode"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                className="w-full px-4 py-3 border border-nt-earth-200 rounded-lg focus:ring-2 focus:ring-nt-green-500 focus:border-transparent outline-none transition bg-white/50"
                placeholder="NT-XXXXXXXX"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>

            <p className="text-sm text-center text-nt-earth-500">
              Already have an account?{' '}
              <Link href="/dashboard/login" className="text-nt-green-700 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}
