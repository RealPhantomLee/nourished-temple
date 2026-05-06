import Link from 'next/link'
import { Quote, Heart } from 'lucide-react'

const values = ['Love', 'Truth', 'Integrity', 'Peace', 'Health', 'Prosperity', 'Quality', 'Originality', 'Kindness', 'Life']

export function MissionSection() {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-nt-green-950/40 backdrop-blur-sm" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=800&fit=crop')] bg-cover bg-center" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-nt-green-400" />
              <Quote className="w-8 h-8 text-nt-green-400" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Mission</h2>
            <p className="mt-6 text-lg text-nt-green-100 leading-relaxed">
              Nourished Temple is rooted in the Alkaline Electric Bio-Mineral Balanced Lifestyle, dedicated to nourishing, uplifting, and educating individuals on a mental, physical, and spiritual level.
            </p>
            <p className="mt-4 text-lg text-nt-green-100 leading-relaxed">
              We honor and incorporate sacred, indigenous plant medicines sourced from the Amazon, Mexico, Honduras, Peru, and Africa — each chosen for its deep ancestral wisdom and potent healing properties.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-nt-green-300 font-medium hover:text-nt-green-200 transition-colors group"
            >
              Learn More About Us
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold mb-6 text-white">Our Core Values</h3>
            <div className="grid grid-cols-2 gap-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/15 transition-colors cursor-default"
                >
                  <div className="w-2 h-2 bg-nt-green-400 rounded-full" />
                  <span className="text-nt-green-100">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-nt-green-300">— Nourished Temple</p>
          </div>
        </div>
      </div>
    </section>
  )
}
