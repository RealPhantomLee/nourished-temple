'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'

export function HeroSection() {
  const [textVisible, setTextVisible] = useState(false)
  const [subVisible, setSubVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const [quoteVisible, setQuoteVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const t1 = setTimeout(() => setTextVisible(true), 400)
    const t2 = setTimeout(() => setSubVisible(true), 900)
    const t3 = setTimeout(() => setCtaVisible(true), 1300)
    const t4 = setTimeout(() => setQuoteVisible(true), 1700)

    const newParticles = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 4,
    }))
    setParticles(newParticles)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-firefly pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.id % 3 === 0 ? '#f0d48a' : '#4ade80',
            boxShadow: `0 0 ${p.size * 2}px ${p.id % 3 === 0 ? '#f0d48a' : '#4ade80'}`,
            animationDelay: `${p.delay}s`,
            opacity: 0,
          }}
        />
      ))}

      {/* Glassmorphic hero card */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white/8 backdrop-blur-md rounded-2xl px-8 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20 border border-white/15 shadow-2xl text-center">

          {/* Location eyebrow */}
          <div
            className={`transition-all duration-1000 ease-out ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-nt-green-300 mb-6">
              <div className="h-px w-8 bg-nt-green-600/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em]">Los Angeles, California</span>
              <div className="h-px w-8 bg-nt-green-600/60" />
            </div>
          </div>

          {/* Main headline */}
          <div
            className={`transition-all duration-1000 ease-out ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight text-white">
              <span className="animate-text-shimmer">Alkaline Electric</span>
              <span className="block mt-2 text-white">Cell Food</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-light mt-3 text-nt-green-200 tracking-wide">
                Kreationz
              </span>
            </h1>
          </div>

          {/* Sub copy */}
          <div
            className={`transition-all duration-1000 ease-out ${
              subVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="mt-8 text-base sm:text-lg lg:text-xl text-white/75 max-w-2xl mx-auto leading-[1.85]">
              Wildcrafted herbs, alkaline electric meals, and healing guidance — handcrafted with love by Mel in Los Angeles.
            </p>
          </div>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-nt-green-700 text-white font-semibold rounded-lg hover:bg-nt-green-600 transition-all duration-300 hover:shadow-xl hover:shadow-nt-green-700/30 hover:-translate-y-1"
            >
              Shop the Kreationz
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/25 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
            >
              Mel&apos;s Story
            </Link>
          </div>

          {/* Brand quote */}
          <div
            className={`mt-10 pt-8 border-t border-white/10 transition-all duration-1000 ease-out ${
              quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-nt-gold font-serif italic text-base sm:text-lg">
              &ldquo;When we eat right, we think right, feel right &amp; do right.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-float">
        <Leaf className="w-5 h-5 rotate-90" />
      </div>
    </section>
  )
}
