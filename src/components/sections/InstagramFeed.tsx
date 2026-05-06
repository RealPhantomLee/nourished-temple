import Image from 'next/image'
import { Camera } from 'lucide-react'

const instagramPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=400&fit=crop',
    alt: 'Lush green tropical leaves',
  },
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    alt: 'Fresh green salad bowl',
  },
  {
    src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    alt: 'Herbal green juice',
  },
  {
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    alt: 'Wellness and meditation',
  },
  {
    src: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
    alt: 'Natural oils and herbs',
  },
  {
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17ee0?w=400&h=400&fit=crop',
    alt: 'Fresh alkaline food',
  },
]

export function InstagramFeed() {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-nt-green-300 mb-4">
            <Camera className="w-6 h-6" />
            <span className="text-sm font-medium uppercase tracking-wider">@alkalineexcellence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Follow Our Journey</h2>
          <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
            Join us on Instagram for daily alkaline inspiration, recipes, and temple wellness tips.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPhotos.map((photo, index) => (
            <a
              key={index}
              href="https://instagram.com/alkalineexcellence"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-nt-green-950/0 group-hover:bg-nt-green-950/40 transition-colors duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://instagram.com/alkalineexcellence"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-nt-green-300 font-medium hover:text-white transition-colors"
          >
            Follow us on Instagram
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
