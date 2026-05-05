import Image from 'next/image'

export default function AboutPage() {
  const values = ['Love', 'Truth', 'Integrity', 'Peace', 'Health', 'Prosperity', 'Quality', 'Originality', 'Kindness', 'Life']

  return (
    <div>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-nt-green-950 to-nt-earth-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold">About Nourished Temple</h1>
          <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
            Healing the temple through alkalinity — nourishment for mind, body, and soul.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-nt-earth-900 mb-6">Who We Are</h2>
            <p className="text-lg text-nt-earth-700 leading-relaxed">
              Located in Los Angeles, California, Nourished Temple attributes a good reputation through honest customer relationships. We are a well-rounded health and wellness business empowered by integrity, love, peace, and original laws of life.
            </p>
            <p className="mt-4 text-lg text-nt-earth-700 leading-relaxed">
              Nourished Temple specializes in healing of the temple through Alkalinity. We heal with an Alkaline electric Bio-mineral Balanced based approach, Nourishment for Mind, Body, and Soul. When we eat right, we think right, feel right & do right.
            </p>
            <p className="mt-4 text-lg text-nt-earth-700 leading-relaxed">
              We are proud to serve you great alkaline meals, handcrafted wild-crafted and/or organic herbal compounds, alkaline transition coaching, and more. Nourished Temple is an alternative to synthetic westernized medicine.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-nt-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-nt-earth-900 mb-6">Our Mission</h2>
              <p className="text-lg text-nt-earth-700 leading-relaxed">
                Nourished Temple is rooted in the Alkaline Electric Bio-Mineral Balanced Lifestyle, dedicated to nourishing, uplifting, and educating individuals on a mental, physical, and spiritual level.
              </p>
              <p className="mt-4 text-lg text-nt-earth-700 leading-relaxed">
                Our mission is guided by universal truths and the natural laws of living. We honor and incorporate sacred, indigenous plant medicines sourced from powerful regions such as the Amazon, Mexico, Honduras, Peru, and Africa — each chosen for its deep ancestral wisdom and potent healing properties.
              </p>
              <p className="mt-4 text-lg text-nt-earth-700 leading-relaxed">
                Through these plant-based modalities and an intentional, electric approach to nourishment — whether alkaline, raw, vegetarian, fruitarian, or even for those transitioning from a carnivorous lifestyle — we aim to support true cellular regeneration and holistic well-being.
              </p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-nt-earth-900 mb-6">Our Vision</h2>
              <p className="text-lg text-nt-earth-700 leading-relaxed">
                To create a renewed and thriving world, we must first begin within by healing at the cellular level. True transformation extends beyond clean eating and sacred plant medicine. It requires patience, education, self-love, self-awareness, and an unwavering commitment to truth.
              </p>
              <p className="mt-4 text-lg text-nt-earth-700 leading-relaxed">
                A peaceful, healthy, and elevated world begins with each of us. At Nourished Temple, we envision a powerful movement of spiritually aligned, self-sustained, and consciously educated individuals living in balance and continuously evolving into their highest selves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-nt-earth-900 mb-6">About the Owner</h2>
              <p className="text-lg text-nt-earth-700 leading-relaxed font-medium">Peace Nourished Family!</p>
              <p className="mt-4 text-nt-earth-700 leading-relaxed">
                Welcome, I appreciate you taking the time out of your day to visit my site today. With a well-rounded medical background in the medical field since October 2009, now nursing in various Hospitals around Southern California, I have quality knowledge on how the body works along with African-based medical teachings.
              </p>
              <p className="mt-4 text-nt-earth-700 leading-relaxed">
                Like many back along my journey I suffered complications through my temple, eating the wrong detrimental foods like dairy, meat & starch. I had candida, severe cramps, excess mucus, headaches, low energy, I was overweight, and delusional. It got so bad I was in need of a new kidney.
              </p>
              <p className="mt-4 text-nt-earth-700 leading-relaxed">
                I tried many diets — nothing worked, not even vegan. Once this kidney issue happened twice I decided to dedicate time to researching something different. Gratefully I was introduced to Dr. Sebi Cell Food and Alkaline Foods by Rastas back in 2009.
              </p>
              <p className="mt-4 text-nt-earth-700 leading-relaxed">
                I then converted my Western herbal-based teachings to what now made sense — Indigenous Plant Medicine & living an Alkaline Electric Cell Food Plant-based Lifestyle. Taking my health back into my own hands, understanding herbs and how they work for our temples.
              </p>
              <p className="mt-4 text-nt-earth-700 leading-relaxed">
                I immediately fell in love with the results mentally, physically & spiritually. Learning so much, creating my own products that actually worked for me, others and my family — I acted on my desire to get this information out to the community.
              </p>
              <p className="mt-4 text-nt-earth-700 leading-relaxed font-medium">
                Love, Truth & Peace — Mel
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden bg-nt-earth-200">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop"
                alt="Mel - Owner of Nourished Temple"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-nt-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8">Our Core Values</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {values.map((value) => (
              <span
                key={value}
                className="px-6 py-3 bg-nt-green-800 rounded-full text-nt-green-200 font-medium"
              >
                {value}
              </span>
            ))}
          </div>
          <p className="mt-8 text-nt-green-400">— NT</p>
        </div>
      </section>
    </div>
  )
}
