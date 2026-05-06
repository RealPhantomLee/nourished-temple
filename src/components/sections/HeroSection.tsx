'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'

export function HeroSection() {
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [subVisible, setSubVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    setLogoLoaded(true)

    const t1 = setTimeout(() => setTextVisible(true), 600)
    const t2 = setTimeout(() => setSubVisible(true), 1200)
    const t3 = setTimeout(() => setCtaVisible(true), 1600)

    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 3,
    }))
    setParticles(newParticles)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-firefly"
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

      {/* Logo entrance WOW animation */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div
          className={`transition-all duration-[2000ms] ease-out ${
            logoLoaded
              ? 'opacity-0 scale-[3] blur-xl'
              : 'opacity-1 scale-[0.3] blur-none'
          }`}
          style={{ transitionDelay: logoLoaded ? '0ms' : '0ms' }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="80" stroke="#15803d" strokeWidth="2" opacity="0.3" />
            <path
              d="M100 30 Q120 70 100 110 Q80 70 100 30Z"
              fill="#15803d"
              opacity="0.6"
            />
            <path
              d="M100 110 Q140 90 170 110 Q140 130 100 110Z"
              fill="#166534"
              opacity="0.5"
            />
            <path
              d="M100 110 Q60 90 30 110 Q60 130 100 110Z"
              fill="#166534"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Glassmorphic hero card */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ease-out ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center justify-center gap-2 text-nt-green-300 mb-6">
                <span className="text-xs font-medium uppercase tracking-[0.3em]">Los Angeles, California</span>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 ease-out ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight text-white">
                <span className="animate-text-shimmer">Alkaline Electric</span>
                <span className="block mt-1">Cell Food</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-light mt-3 text-nt-green-200">
                  Kreationz
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 ease-out ${
                subVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Healing the temple through alkalinity. Organic herbs, plant-based meals, and holistic wellness for mind, body, and soul.
              </p>
            </div>

            <div
              className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out ${
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-600 transition-all duration-300 hover:shadow-xl hover:shadow-nt-green-700/30 hover:-translate-y-1"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-float">
        <Leaf className="w-5 h-5 rotate-90" />
      </div>
    </section>
  )
}
