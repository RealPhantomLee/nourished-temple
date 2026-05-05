import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nt-green-950 via-nt-green-900 to-nt-earth-900" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <p className="text-sm font-medium text-nt-green-300 uppercase tracking-widest mb-4">
          Los Angeles, California
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
          Alkaline Electric
          <span className="block text-nt-green-400">Cell Food</span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-light mt-2">Kreationz</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-nt-green-100 max-w-2xl mx-auto">
          Healing the temple through alkalinity. Organic herbs, plant-based meals, and holistic wellness for mind, body, and soul.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-nt-green-600 text-white font-medium rounded-lg hover:bg-nt-green-500 transition-colors"
          >
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
