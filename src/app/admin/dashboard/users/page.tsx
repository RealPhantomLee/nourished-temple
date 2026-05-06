'use client'

import { useEffect, useState } from 'react'
import { Search, Trash2, Shield, User, MoreVertical, X } from 'lucide-react'

interface User {
  id: string
  name: string | null
  email: string
  role: string
  referralCode: string
  referrals: number
  earnings: number
  createdAt: string
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const res = await fetch('/api/admin?action=users')
      const data = await res.json()
      setUsers(data)
    } catch {
      console.error('Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  async function updateRole(userId: string, newRole: string) {
    setActionLoading(userId)
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update-role', data: { id: userId, role: newRole } }),
      })
      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
        )
      }
    } catch {
      console.error('Failed to update role')
    } finally {
      setActionLoading(null)
    }
  }

  async function deleteUser(userId: string) {
    setActionLoading(userId)
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete-user', data: { id: userId } }),
      })
      if (res.ok) {
        setUsers((prev) => prev.filter((u) => u.id !== userId))
      }
    } catch {
      console.error('Failed to delete user')
    } finally {
      setActionLoading(null)
      setConfirmDelete(null)
    }
  }

  const filtered = users.filter(
    (u) =>
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      (u.name && u.name.toLowerCase().includes(search.toLowerCase()))
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-3 border-nt-green-700 border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header + search */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-nt-earth-400" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/70 backdrop-blur-md border border-white/20 rounded-lg text-sm focus:ring-2 focus:ring-nt-green-600 focus:border-transparent outline-none placeholder:text-nt-green-600 text-nt-green-950"
          />
        </div>
        <p className="text-sm text-nt-green-200">
          {filtered.length} user{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Users table */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm border border-white/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20 bg-nt-green-950/30">
                <th className="text-left px-6 py-3 text-xs font-medium text-nt-green-200 uppercase tracking-wider">
                  User
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-nt-green-200 uppercase tracking-wider">
                  Role
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-nt-green-200 uppercase tracking-wider">
                  Referrals
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-nt-green-200 uppercase tracking-wider">
                  Earnings
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-nt-green-200 uppercase tracking-wider">
                  Joined
                </th>
                <th className="text-right px-6 py-3 text-xs font-medium text-nt-green-200 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filtered.length > 0 ? (
                filtered.map((user) => (
                  <tr key={user.id} className="hover:bg-white/10 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-nt-green-950">
                          {user.name || 'Unnamed User'}
                        </p>
                        <p className="text-sm text-nt-green-700">{user.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={user.role}
                        onChange={(e) => updateRole(user.id, e.target.value)}
                        disabled={actionLoading === user.id}
                        className="text-sm px-2 py-1 border border-white/20 rounded-md bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-nt-green-600 outline-none disabled:opacity-50 text-nt-green-900"
                      >
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                        <option value="moderator">Moderator</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-nt-green-200">{user.referrals}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-nt-green-800">
                        ${user.earnings.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-nt-green-200">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setConfirmDelete(user.id)}
                          disabled={actionLoading === user.id}
                          className="p-2 text-red-300 hover:bg-red-500/20 rounded-lg transition-colors disabled:opacity-50"
                          title="Delete user"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-nt-green-300">
                    {search ? 'No users match your search' : 'No users found'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete confirmation modal */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-xl max-w-md w-full p-6 border border-white/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-nt-green-950">Delete User</h3>
              <button
                onClick={() => setConfirmDelete(null)}
                className="p-1 hover:bg-nt-green-100/50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-nt-green-600" />
              </button>
            </div>
            <p className="text-nt-green-800 mb-6">
              Are you sure you want to delete this user? This action cannot be undone and will
              remove all associated data.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 text-sm font-medium text-nt-green-800 bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteUser(confirmDelete)}
                disabled={actionLoading === confirmDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50"
              >
                {actionLoading === confirmDelete ? 'Deleting...' : 'Delete User'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
