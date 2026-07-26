'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Leaf, Utensils, MessageCircle, ChefHat, Package, Users, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const services = [
  {
    icon: Leaf,
    title: 'Herbs & Compounds',
    description: 'Alchemic creations: capsules, teas, tonics, gels, oils, and creams from wild-harvested organic herbs.',
    link: '/shop',
    accent: 'from-nt-green-600 to-nt-green-800',
  },
  {
    icon: Utensils,
    title: 'Meal Prep & Plans',
    description: 'Delicious electric plant-based meals prepared for you or a personalized meal plan to follow.',
    link: '/services',
    accent: 'from-nt-gold to-nt-gold-dark',
  },
  {
    icon: MessageCircle,
    title: 'Consultations',
    description: 'Get personalized guidance on your alkaline journey. Submit a form and hear back within 24-48 hours.',
    link: '/contact',
    accent: 'from-nt-moss to-nt-green-800',
  },
  {
    icon: ChefHat,
    title: 'Personal Chef',
    description: 'Transitional, vegetarian, alkaline & raw, or mixed style meals made with love just for you.',
    link: '/contact',
    accent: 'from-nt-terracotta to-nt-amber',
  },
  {
    icon: Package,
    title: 'Detox Packages',
    description: 'Complete detox programs with herbal compounds and guidance to cleanse and reset your temple.',
    link: '/shop',
    accent: 'from-nt-green-700 to-nt-forest',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join our community for online access to cooking demos, recipes, freebies, and alkalinity resources.',
    link: '/dashboard/signup',
    accent: 'from-nt-gold-light to-nt-gold',
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">Our Services</h2>
            <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
              Nourishment for mind, body, and soul — through alkalinity, herbs, and holistic wellness.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1} direction="scale">
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, description, link, accent }: typeof services[0]) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={link}
      className="group block relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background gradient reveal */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Card content */}
      <div className={`relative p-6 transition-all duration-500 ${hovered ? 'h-64' : ''}`}>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${
          hovered
            ? 'bg-white/20 scale-110'
            : 'bg-nt-green-100/80 group-hover:bg-nt-green-200/80'
        }`}>
          <Icon className={`w-6 h-6 transition-all duration-500 ${
            hovered ? 'text-white' : 'text-nt-green-700'
          }`} />
        </div>

        <h3 className={`text-lg font-semibold transition-colors duration-500 ${
          hovered ? 'text-white' : 'text-nt-earth-900 group-hover:text-nt-green-700'
        }`}>
          {title}
        </h3>

        {/* Expandable description */}
        <div className={`overflow-hidden transition-all duration-500 ${
          hovered ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}>
          <p className={`text-sm leading-relaxed ${hovered ? 'text-white/90' : 'text-nt-earth-600'}`}>
            {description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-white/90 font-medium">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}
