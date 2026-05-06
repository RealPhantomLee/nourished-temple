'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Copy, Users, DollarSign, Gift, ArrowLeft, Shield } from 'lucide-react'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [referralCode, setReferralCode] = useState('')
  const [referrals, setReferrals] = useState(0)
  const [earnings, setEarnings] = useState(0)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/dashboard/login')
    }
    if (status === 'authenticated') {
      fetch('/api/referral')
        .then((res) => res.json())
        .then((data) => {
          setReferralCode(data.code)
          setReferrals(data.referrals)
          setEarnings(data.earnings)
          setLoading(false)
        })
    }
  }, [status, router])

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading || status === 'loading') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-nt-earth-600">Loading...</p>
      </div>
    )
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
            <span className="text-sm font-medium">Community Member</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Referral Dashboard</h1>
          <p className="mt-4 text-lg text-nt-green-200">
            Welcome, {session?.user?.name || session?.user?.email}!
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-nt-earth-900 mb-4">Your Referral Code</h2>
            <div className="flex items-center gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm">
              <code className="text-2xl font-mono font-bold text-nt-green-800 flex-1">
                {referralCode}
              </code>
              <button
                onClick={copyCode}
                className="flex items-center gap-2 px-4 py-2 bg-nt-green-700 text-white rounded-lg hover:bg-nt-green-800 transition-colors"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p className="mt-3 text-sm text-nt-earth-600">
              Share this code with friends. When they sign up and make a purchase, you earn $5!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-nt-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-nt-green-700" />
                </div>
                <h3 className="font-semibold text-nt-earth-900">Referrals</h3>
              </div>
              <p className="text-3xl font-bold text-nt-green-800">{referrals}</p>
              <p className="text-sm text-nt-earth-500 mt-1">People referred</p>
            </div>

            <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-nt-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-nt-green-700" />
                </div>
                <h3 className="font-semibold text-nt-earth-900">Earnings</h3>
              </div>
              <p className="text-3xl font-bold text-nt-green-800">${earnings}</p>
              <p className="text-sm text-nt-earth-500 mt-1">Earned so far</p>
            </div>

            <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-nt-green-100 rounded-lg flex items-center justify-center">
                  <Gift className="w-5 h-5 text-nt-green-700" />
                </div>
                <h3 className="font-semibold text-nt-earth-900">Rewards</h3>
              </div>
              <p className="text-3xl font-bold text-nt-green-800">$5</p>
              <p className="text-sm text-nt-earth-500 mt-1">Per referral</p>
            </div>
          </div>

          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl">
            <h3 className="text-lg font-semibold text-nt-earth-900 mb-3">How It Works</h3>
            <ol className="space-y-3 text-nt-earth-700">
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-nt-green-700 text-white rounded-full flex items-center justify-center text-sm shrink-0">1</span>
                <span>Share your unique referral code with friends and family.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-nt-green-700 text-white rounded-full flex items-center justify-center text-sm shrink-0">2</span>
                <span>They enter your code at checkout when making a purchase.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 bg-nt-green-700 text-white rounded-full flex items-center justify-center text-sm shrink-0">3</span>
                <span>You earn $5 for every successful referral!</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}
