'use client'

import { useState } from 'react'
import { Shield, Plus, Key, Database, Globe } from 'lucide-react'

export default function AdminSettingsPage() {
  const [newAdminEmail, setNewAdminEmail] = useState('')
  const [newAdminName, setNewAdminName] = useState('')
  const [newAdminPassword, setNewAdminPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  async function createAdmin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create-admin',
          data: {
            email: newAdminEmail,
            name: newAdminName,
            password: newAdminPassword,
          },
        }),
      })

      const data = await res.json()
      if (res.ok) {
        setMessage({ type: 'success', text: 'Admin user created successfully!' })
        setNewAdminEmail('')
        setNewAdminName('')
        setNewAdminPassword('')
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to create admin' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Something went wrong' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Create admin user */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm border border-white/20 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-nt-gold/20 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-nt-gold" />
          </div>
          <div>
            <h3 className="font-semibold text-nt-green-950">Create Admin User</h3>
            <p className="text-sm text-nt-green-600">Add a new administrator to the system</p>
          </div>
        </div>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg text-sm ${
              message.type === 'success'
                ? 'bg-green-100/60 text-green-800 border border-green-200/50'
                : 'bg-red-100/60 text-red-800 border border-red-200/50'
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={createAdmin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-nt-green-800 mb-1">Name</label>
            <input
              type="text"
              value={newAdminName}
              onChange={(e) => setNewAdminName(e.target.value)}
              required
              className="w-full px-4 py-2.5 bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg text-sm focus:ring-2 focus:ring-nt-green-600 focus:border-transparent outline-none text-nt-green-950 placeholder:text-nt-green-500"
              placeholder="Admin name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-nt-green-800 mb-1">Email</label>
            <input
              type="email"
              value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg text-sm focus:ring-2 focus:ring-nt-green-600 focus:border-transparent outline-none text-nt-green-950 placeholder:text-nt-green-500"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-nt-green-800 mb-1">Password</label>
            <input
              type="password"
              value={newAdminPassword}
              onChange={(e) => setNewAdminPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg text-sm focus:ring-2 focus:ring-nt-green-600 focus:border-transparent outline-none text-nt-green-950 placeholder:text-nt-green-500"
              placeholder="Secure password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Plus className="w-4 h-4" />
            {loading ? 'Creating...' : 'Create Admin'}
          </button>
        </form>
      </div>

      {/* System status */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm border border-white/20 p-6">
        <h3 className="font-semibold text-nt-green-950 mb-6">System Status</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-nt-green-50/40 rounded-lg">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-nt-green-700" />
              <div>
                <p className="font-medium text-nt-green-900">Database</p>
                <p className="text-sm text-nt-green-600">SQLite (development)</p>
              </div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-green-200/60 text-green-800">Connected</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-nt-green-50/40 rounded-lg">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-nt-green-700" />
              <div>
                <p className="font-medium text-nt-green-900">Sanity CMS</p>
                <p className="text-sm text-nt-green-600">Content management</p>
              </div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-amber-200/60 text-amber-800">Preview Ready</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-nt-green-50/40 rounded-lg">
            <div className="flex items-center gap-3">
              <Key className="w-5 h-5 text-nt-green-700" />
              <div>
                <p className="font-medium text-nt-green-900">Stripe</p>
                <p className="text-sm text-nt-green-600">Payment processing</p>
              </div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-amber-200/60 text-amber-800">Preview Ready</span>
          </div>
        </div>
      </div>
    </div>
  )
}
