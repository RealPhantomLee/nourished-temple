import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-nt-green-800/40 backdrop-blur-sm" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=600&fit=crop')] bg-cover bg-center" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">Begin Your Alkaline Journey</h2>
        <p className="mt-4 text-lg text-nt-green-100 max-w-2xl mx-auto">
          Whether you&apos;re transitioning to an alkaline lifestyle or deepening your practice, we&apos;re here to guide you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-nt-green-800 font-medium rounded-lg hover:bg-nt-green-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get a Consultation
          </Link>
          <Link
            href="/shop"
            className="px-8 py-4 border-2 border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  )
}
