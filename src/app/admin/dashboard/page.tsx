'use client'

import { useEffect, useState } from 'react'
import { Users, Mail, TrendingUp, Eye } from 'lucide-react'

interface DashboardStats {
  userCount: number
  contactCount: number
  recentContacts: {
    id: string
    name: string
    email: string
    subject: string
    message: string
    createdAt: string
  }[]
  recentUsers: {
    id: string
    name: string | null
    email: string
    role: string
    referralCode: string
    referrals: number
    earnings: number
    createdAt: string
  }[]
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin?action=stats')
      .then((res) => res.json())
      .then((data) => {
        setStats(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-3 border-nt-green-700 border-t-transparent rounded-full" />
      </div>
    )
  }

  const statCards = [
    {
      label: 'Total Users',
      value: stats?.userCount || 0,
      icon: Users,
      color: 'bg-nt-green-100 text-nt-green-700',
    },
    {
      label: 'Contact Submissions',
      value: stats?.contactCount || 0,
      icon: Mail,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      label: 'Active This Week',
      value: 0,
      icon: TrendingUp,
      color: 'bg-amber-100 text-amber-700',
      placeholder: true,
    },
    {
      label: 'Page Views',
      value: 0,
      icon: Eye,
      color: 'bg-purple-100 text-purple-700',
      placeholder: true,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {statCards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.label}
              className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-nt-green-200">{card.label}</p>
                  <p className="text-3xl font-bold text-nt-green-950 mt-1">
                    {card.placeholder ? '—' : card.value}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent contacts */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm border border-white/20">
          <div className="px-6 py-4 border-b border-white/20">
            <h3 className="font-semibold text-nt-green-950">Recent Contact Submissions</h3>
          </div>
          <div className="divide-y divide-white/10">
            {stats?.recentContacts && stats.recentContacts.length > 0 ? (
              stats.recentContacts.map((contact) => (
                <div key={contact.id} className="px-6 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-medium text-nt-green-950">{contact.name}</p>
                      <p className="text-sm text-nt-green-700">{contact.email}</p>
                      <p className="text-sm text-nt-green-800 mt-1 truncate">{contact.subject}</p>
                    </div>
                    <span className="text-xs text-nt-green-500 whitespace-nowrap">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-12 text-center text-nt-green-400">
                No contact submissions yet
              </div>
            )}
          </div>
        </div>

        {/* Recent users */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm border border-white/20">
          <div className="px-6 py-4 border-b border-white/20">
            <h3 className="font-semibold text-nt-green-950">Recent Users</h3>
          </div>
          <div className="divide-y divide-white/10">
            {stats?.recentUsers && stats.recentUsers.length > 0 ? (
              stats.recentUsers.map((user) => (
                <div key={user.id} className="px-6 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-medium text-nt-green-950">
                        {user.name || 'Unnamed User'}
                      </p>
                      <p className="text-sm text-nt-green-700">{user.email}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            user.role === 'admin'
                              ? 'bg-nt-gold/30 text-nt-earth-900'
                              : 'bg-white/40 text-nt-green-800'
                          }`}
                        >
                          {user.role}
                        </span>
                        <span className="text-xs text-nt-green-500">
                          {user.referrals} referrals · ${user.earnings.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-nt-green-500 whitespace-nowrap">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-12 text-center text-nt-green-400">
                No users yet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
