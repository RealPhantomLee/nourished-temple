import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const values = ['Love', 'Truth', 'Integrity', 'Peace', 'Health', 'Prosperity', 'Quality', 'Originality', 'Kindness', 'Life']

export function MissionSection() {
  return (
    <section className="py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-nt-green-950/45 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Left — Mission copy */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-nt-green-400 mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Rooted in truth.<br />
              <span className="text-nt-green-300">Healing through alkalinity.</span>
            </h2>

            <p className="mt-8 text-lg text-white/80 leading-[1.85]">
              Nourished Temple is rooted in the Alkaline Electric Bio-Mineral Balanced Lifestyle — dedicated to nourishing, uplifting, and educating individuals on a mental, physical, and spiritual level.
            </p>
            <p className="mt-5 text-lg text-white/80 leading-[1.85]">
              We honor sacred, indigenous plant medicines sourced from the Amazon, Mexico, Honduras, Peru, and Africa — each chosen for its ancestral wisdom and potent healing properties.
            </p>
            <p className="mt-5 text-base text-nt-green-300 leading-[1.85]">
              Whether you are alkaline, raw, vegetarian, fruitarian, or just beginning to transition — we meet you exactly where you are.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 text-nt-gold font-semibold hover:text-nt-gold-light transition-colors group"
            >
              Mel&apos;s full story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right — Values */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-nt-green-400 mb-6">
              Our 10 Principles
            </span>
            <div className="grid grid-cols-2 gap-3">
              {values.map((value, i) => (
                <div
                  key={value}
                  className="flex items-center gap-3 px-5 py-4 bg-white/8 rounded-xl border border-white/10 hover:bg-white/12 hover:border-nt-green-700/50 transition-all duration-300 group cursor-default"
                >
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-nt-green-400 to-nt-green-700 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-white/90 font-medium group-hover:text-nt-green-200 transition-colors">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 px-5 py-4 border-l-2 border-nt-gold/60">
              <p className="text-nt-gold font-serif italic text-lg leading-relaxed">
                &ldquo;When we eat right, we think right, feel right &amp; do right.&rdquo;
              </p>
              <p className="mt-2 text-nt-green-400 text-sm">— Mel, Nourished Temple</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
