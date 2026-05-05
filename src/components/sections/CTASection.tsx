import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-nt-green-700 to-nt-green-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">Begin Your Alkaline Journey</h2>
        <p className="mt-4 text-lg text-nt-green-100 max-w-2xl mx-auto">
          Whether you&apos;re transitioning to an alkaline lifestyle or deepening your practice, we&apos;re here to guide you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-nt-green-800 font-medium rounded-lg hover:bg-nt-green-50 transition-colors"
          >
            Get a Consultation
          </Link>
          <Link
            href="/shop"
            className="px-8 py-4 border-2 border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  )
}
