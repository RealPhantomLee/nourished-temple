import Link from 'next/link'
import { Leaf, Camera, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-nt-green-950 text-nt-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-nt-green-400" />
              <span className="text-lg font-semibold">Nourished Temple</span>
            </div>
            <p className="text-sm text-nt-green-300 leading-relaxed">
              Alkaline Electric Cell Food Kreationz. Healing the temple through alkalinity — nourishment for mind, body, and soul.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-nt-green-50 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ['Shop', '/shop'],
                ['About', '/about'],
                ['Services', '/services'],
                ['Events', '/events'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-nt-green-300 hover:text-nt-green-50 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-nt-green-50 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-nt-green-300">
              <li>Herbs & Compounds</li>
              <li>Meal Prep & Plans</li>
              <li>Consultations</li>
              <li>Personal Chef</li>
              <li>Detox Packages</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-nt-green-50 mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-nt-green-300">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Los Angeles, California
              </li>
              <li className="flex items-center gap-2 text-sm text-nt-green-300">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@nourishedtemple.store" className="hover:text-nt-green-50 transition-colors">
                  info@nourishedtemple.store
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-nt-green-300">
                <Camera className="w-4 h-4 shrink-0" />
                <a href="https://instagram.com/nourishedtemple" target="_blank" rel="noopener noreferrer" className="hover:text-nt-green-50 transition-colors">
                  @nourishedtemple
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-nt-green-900 text-center text-sm text-nt-green-400">
          <p>Love. Truth. Peace.</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Nourished Temple LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
