import Link from 'next/link'
import { Leaf, ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-nt-green-950/50 backdrop-blur-sm" />

      {/* Breathing orbs for atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nt-green-600/10 rounded-full blur-3xl animate-breathe-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-nt-gold/10 rounded-full blur-3xl animate-breathe-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-nt-green-400 mb-6">
          <Leaf className="w-4 h-4" />
          <span className="text-xs font-medium uppercase tracking-[0.2em]">Your Temple Awaits</span>
          <Leaf className="w-4 h-4 scale-x-[-1]" />
        </div>

        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white leading-tight">
          Every cell in your body<br className="hidden sm:block" /> wants to heal.
        </h2>

        <p className="mt-6 text-lg lg:text-xl text-nt-green-100 max-w-2xl mx-auto leading-relaxed">
          Give it what it needs — pure alkaline electric nourishment, wildcrafted herbs, and guidance from someone who&apos;s walked this path.
        </p>

        <blockquote className="mt-8 text-nt-gold font-serif italic text-lg lg:text-xl">
          &ldquo;When we eat right, we think right, feel right &amp; do right.&rdquo;
        </blockquote>
        <p className="mt-2 text-nt-green-400 text-sm">— Mel, Founder of Nourished Temple</p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-nt-gold text-nt-earth-900 font-semibold rounded-lg hover:bg-nt-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-nt-gold/20 hover:-translate-y-1"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:-translate-y-1"
          >
            Shop the Kreationz
          </Link>
        </div>
      </div>
    </section>
  )
}
