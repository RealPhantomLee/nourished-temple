'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  LayoutDashboard,
  Users,
  Mail,
  Settings,
  LogOut,
  Menu,
  X,
  Leaf,
} from 'lucide-react'

const navItems = [
  { href: '/admin/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/admin/dashboard/users', label: 'Users', icon: Users },
  { href: '/admin/dashboard/contacts', label: 'Contacts', icon: Mail },
  { href: '/admin/dashboard/settings', label: 'Settings', icon: Settings },
]

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    fetch('/api/admin/auth')
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          router.push('/admin/login')
        } else {
          setAuthenticated(true)
        }
      })
      .catch(() => router.push('/admin/login'))
  }, [router])

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin/login')
  }

  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3 text-nt-green-200">
          <Leaf className="w-6 h-6 animate-pulse" />
          <span>Loading admin...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-nt-green-950/90 backdrop-blur-xl text-white flex flex-col transition-transform duration-200 lg:translate-x-0 border-r border-white/10 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-nt-gold/20 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-nt-gold" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Nourished Temple</h1>
              <p className="text-xs text-nt-green-300">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-nt-gold/20 text-nt-gold'
                    : 'text-nt-green-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-nt-green-300 hover:bg-red-500/20 hover:text-red-300 transition-colors w-full"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white/70 backdrop-blur-md border-b border-white/20 px-4 lg:px-8 py-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5 text-nt-green-100" />
            ) : (
              <Menu className="w-5 h-5 text-nt-green-100" />
            )}
          </button>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-nt-green-950">
              {navItems.find((item) => item.href === pathname)?.label || 'Admin'}
            </h2>
          </div>
          <Link
            href="/"
            className="text-sm text-nt-green-800 hover:text-nt-green-950 transition-colors font-medium"
            target="_blank"
          >
            View Site →
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
