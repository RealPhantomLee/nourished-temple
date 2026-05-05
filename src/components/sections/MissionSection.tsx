import Link from 'next/link'
import { Quote } from 'lucide-react'

const values = ['Love', 'Truth', 'Integrity', 'Peace', 'Health', 'Prosperity', 'Quality', 'Originality', 'Kindness', 'Life']

export function MissionSection() {
  return (
    <section className="py-16 lg:py-24 bg-nt-green-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Quote className="w-10 h-10 text-nt-green-400 mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
            <p className="mt-6 text-lg text-nt-green-200 leading-relaxed">
              Nourished Temple is rooted in the Alkaline Electric Bio-Mineral Balanced Lifestyle, dedicated to nourishing, uplifting, and educating individuals on a mental, physical, and spiritual level.
            </p>
            <p className="mt-4 text-lg text-nt-green-200 leading-relaxed">
              We honor and incorporate sacred, indigenous plant medicines sourced from the Amazon, Mexico, Honduras, Peru, and Africa — each chosen for its deep ancestral wisdom and potent healing properties.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-nt-green-400 font-medium hover:text-nt-green-300 transition-colors"
            >
              Learn More About Us
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="bg-nt-green-900/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-nt-green-100">Our Core Values</h3>
            <div className="grid grid-cols-2 gap-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 px-4 py-3 bg-nt-green-800/50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-nt-green-400 rounded-full" />
                  <span className="text-nt-green-200">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-nt-green-400">— Nourished Temple</p>
          </div>
        </div>
      </div>
    </section>
  )
}
