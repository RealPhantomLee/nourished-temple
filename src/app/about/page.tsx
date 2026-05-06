'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionSeparator } from '@/components/ui/SectionSeparator'
import { Heart, Leaf, Sparkles } from 'lucide-react'

const timeline = [
  { year: '2009', title: 'Medical Field Begins', desc: 'Started career in nursing across Southern California hospitals.' },
  { year: '2009', title: 'Health Crisis', desc: 'Kidney complications led to a deep search for natural healing.' },
  { year: '2009', title: 'Discovering Dr. Sebi', desc: 'Introduced to Alkaline Cell Food and indigenous plant medicine.' },
  { year: '2010s', title: 'Personal Transformation', desc: 'Converted Western teachings to alkaline electric lifestyle.' },
  { year: '2010s', title: 'Creating Products', desc: 'Began formulating herbal compounds that worked for real people.' },
  { year: 'Now', title: 'Nourished Temple', desc: 'Sharing healing knowledge with the community in Los Angeles.' },
]

const values = ['Love', 'Truth', 'Integrity', 'Peace', 'Health', 'Prosperity', 'Quality', 'Originality', 'Kindness', 'Life']

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
      setActiveTimeline(Math.min(Math.floor(scrollProgress * timeline.length), timeline.length - 1))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 text-nt-green-300 mb-4">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-widest">Our Story</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white">
              About Nourished Temple
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Healing the temple through alkalinity — nourishment for mind, body, and soul.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionSeparator variant="leaf" />

      {/* Who We Are */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-nt-earth-900 mb-6">Who We Are</h2>
              <p className="text-lg text-nt-earth-700 leading-relaxed">
                Located in Los Angeles, California, Nourished Temple attributes a good reputation through honest customer relationships. We are a well-rounded health and wellness business empowered by integrity, love, peace, and original laws of life.
              </p>
              <p className="mt-4 text-lg text-nt-earth-700 leading-relaxed">
                Nourished Temple specializes in healing of the temple through Alkalinity. We heal with an Alkaline electric Bio-mineral Balanced based approach, Nourishment for Mind, Body, and Soul. When we eat right, we think right, feel right & do right.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionSeparator variant="vine" />

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-nt-green-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-nt-green-700" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-nt-earth-900">Our Mission</h2>
                </div>
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
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/about-woman-1.jpg"
                  alt="Mel - Nourished Temple founder"
                  fill
                  sizes="(max-width: 1024px) 50vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nt-green-950/40 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gold Quote Pullout */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-nt-green-950/40 backdrop-blur-sm" />
        <ScrollReveal>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <svg viewBox="0 0 40 40" className="w-10 h-10 text-nt-gold/60" fill="currentColor">
                <path d="M12 30C10 30 8 28 8 26C8 22 10 18 14 14C16 12 18 10 20 8C22 10 24 12 26 14C30 18 32 22 32 26C32 28 30 30 28 30H12Z" />
              </svg>
              <svg viewBox="0 0 40 40" className="w-10 h-10 text-nt-gold/60" fill="currentColor">
                <path d="M12 30C10 30 8 28 8 26C8 22 10 18 14 14C16 12 18 10 20 8C22 10 24 12 26 14C30 18 32 22 32 26C32 28 30 30 28 30H12Z" />
              </svg>
            </div>
            <blockquote className="text-2xl lg:text-4xl font-serif text-white leading-relaxed italic">
              When we eat right, we think right, feel right & do right.
            </blockquote>
            <p className="mt-6 text-nt-gold font-medium">— Mel, Founder of Nourished Temple</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/about-woman-2.jpg"
                  alt="Mel - Nourished Temple founder"
                  fill
                  sizes="(max-width: 1024px) 50vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nt-green-950/40 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-nt-gold/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-nt-gold-dark" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-nt-earth-900">Our Vision</h2>
                </div>
                <p className="text-lg text-nt-earth-700 leading-relaxed">
                  To create a renewed and thriving world, we must first begin within by healing at the cellular level. True transformation extends beyond clean eating and sacred plant medicine. It requires patience, education, self-love, self-awareness, and an unwavering commitment to truth.
                </p>
                <p className="mt-4 text-lg text-nt-earth-700 leading-relaxed">
                  A peaceful, healthy, and elevated world begins with each of us. At Nourished Temple, we envision a powerful movement of spiritually aligned, self-sustained, and consciously educated individuals living in balance and continuously evolving into their highest selves.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionSeparator variant="vine" />

      {/* Timeline - Owner's Journey */}
      <section className="py-16 lg:py-24 relative" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-nt-earth-900 mb-4">Mel's Journey</h2>
              <p className="text-lg text-nt-earth-600 max-w-2xl mx-auto">From medical professional to alkaline healer.</p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-nt-earth-200" />
            <div
              className="absolute left-6 lg:left-1/2 top-0 w-0.5 bg-gradient-to-b from-nt-green-600 to-nt-gold transition-all duration-700"
              style={{ height: `${(activeTimeline / (timeline.length - 1)) * 100}%` }}
            />

            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className={`absolute left-6 lg:left-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                    i <= activeTimeline
                      ? 'bg-nt-green-600 border-nt-green-700 scale-110'
                      : 'bg-white border-nt-earth-300'
                  }`} style={{ transform: 'translateX(-50%)' }} />

                  {/* Content */}
                  <div className={`ml-14 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className={`p-6 rounded-xl transition-all duration-500 ${
                      i <= activeTimeline
                        ? 'bg-white/80 backdrop-blur-sm shadow-lg'
                        : 'bg-white/40'
                    }`}>
                      <span className="text-sm font-bold text-nt-gold-dark">{item.year}</span>
                      <h3 className="text-lg font-semibold text-nt-earth-900 mt-1">{item.title}</h3>
                      <p className="text-sm text-nt-earth-600 mt-2">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Bio with Photo */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-nt-earth-900 mb-6">About the Owner</h2>
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
                <p className="mt-4 text-nt-earth-700 leading-relaxed font-medium">
                  Love, Truth & Peace — Mel
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="/images/about-woman-3.jpg"
                  alt="Mel - Nourished Temple founder"
                  fill
                  sizes="(max-width: 1024px) 50vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nt-green-950/40 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-nt-green-950/40 backdrop-blur-sm" />
        <ScrollReveal>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-8">Our Core Values</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {values.map((value, i) => (
                <span
                  key={value}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-nt-green-100 font-medium hover:bg-nt-gold/20 hover:text-nt-gold-light hover:scale-105 transition-all duration-300 cursor-default animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {value}
                </span>
              ))}
            </div>
            <p className="mt-8 text-nt-green-300">— NT</p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
