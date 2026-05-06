import Link from 'next/link'
import Image from 'next/image'
import { Camera, Mail, MapPin, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-nt-green-950/40 backdrop-blur-sm" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=600&fit=crop')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Nourished Temple"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold text-white">Nourished Temple</span>
            </div>
            <p className="text-sm text-nt-green-200 leading-relaxed">
              Alkaline Electric Cell Food Kreationz. Healing the temple through alkalinity — nourishment for mind, body, and soul.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['Shop', '/shop'],
                ['About', '/about'],
                ['Services', '/services'],
                ['Events', '/events'],
                ['Contact', '/contact'],
                ['Community', '/dashboard'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-nt-green-200 hover:text-nt-green-50 hover:translate-x-1 transition-all inline-block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-nt-green-200">
              <li>Herbs & Compounds</li>
              <li>Meal Prep & Plans</li>
              <li>Consultations</li>
              <li>Personal Chef</li>
              <li>Detox Packages</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-nt-green-200">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-nt-green-400" />
                Los Angeles, California
              </li>
              <li className="flex items-center gap-2 text-sm text-nt-green-200">
                <Mail className="w-4 h-4 shrink-0 text-nt-green-400" />
                <a href="mailto:info@nourishedtemple.store" className="hover:text-nt-green-50 transition-colors">
                  info@nourishedtemple.store
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-nt-green-200">
                <Camera className="w-4 h-4 shrink-0 text-nt-green-400" />
                <a href="https://instagram.com/alkalineexcellence" target="_blank" rel="noopener noreferrer" className="hover:text-nt-green-50 transition-colors">
                  @alkalineexcellence
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="flex items-center justify-center gap-2 text-nt-green-300 mb-2">
            <Heart className="w-4 h-4 text-nt-green-400" />
            <p>Love. Truth. Peace.</p>
          </div>
          <p className="text-sm text-nt-green-300 mb-3">&copy; {new Date().getFullYear()} Nourished Temple LLC. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 text-xs text-nt-green-400">
            <Link href="/privacy" className="hover:text-nt-green-200 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-nt-green-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
