'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart/context'
import { CartDrawer } from '@/components/ui/CartDrawer'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const { itemCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-nt-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                <Image
                  src="/images/logo.png"
                  alt="Nourished Temple"
                  fill
                  sizes="(max-width: 640px) 32px, 40px"
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className={`text-lg lg:text-xl font-serif font-semibold tracking-tight hidden sm:block transition-colors duration-500 ${
                scrolled ? 'text-nt-green-800' : 'text-white'
              }`}>
                Nourished Temple
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-500 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all hover:after:w-full ${
                    scrolled
                      ? 'text-nt-earth-700 hover:text-nt-green-700 after:bg-nt-green-700'
                      : 'text-white/90 hover:text-white after:bg-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCartOpen(true)}
                className={`relative p-2 transition-colors duration-500 hover:scale-110 transform duration-200 interactive ${
                  scrolled
                    ? 'text-nt-earth-600 hover:text-nt-green-700'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-nt-gold text-white text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                className={`lg:hidden p-2 transition-colors duration-500 ${
                  scrolled
                    ? 'text-nt-earth-600 hover:text-nt-green-700'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } ${scrolled ? 'bg-nt-cream border-t border-nt-earth-200' : 'bg-nt-green-950/95 backdrop-blur-md border-t border-nt-green-800'}`}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base font-medium hover:pl-2 transition-all py-2 ${
                  scrolled
                    ? 'text-nt-earth-700 hover:text-nt-green-700'
                    : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
