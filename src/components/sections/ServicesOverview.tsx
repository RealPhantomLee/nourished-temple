import Link from 'next/link'
import { Leaf, Utensils, MessageCircle, ChefHat, Package, Users } from 'lucide-react'

const services = [
  {
    icon: Leaf,
    title: 'Herbs & Compounds',
    description: 'Alchemic creations: capsules, teas, tonics, gels, oils, and creams from wild-harvested organic herbs.',
    link: '/shop',
  },
  {
    icon: Utensils,
    title: 'Meal Prep & Plans',
    description: 'Delicious electric plant-based meals prepared for you or a personalized meal plan to follow.',
    link: '/services',
  },
  {
    icon: MessageCircle,
    title: 'Consultations',
    description: 'Get personalized guidance on your alkaline journey. Submit a form and hear back within 24-48 hours.',
    link: '/contact',
  },
  {
    icon: ChefHat,
    title: 'Personal Chef',
    description: 'Transitional, vegetarian, alkaline & raw, or mixed style meals made with love just for you.',
    link: '/contact',
  },
  {
    icon: Package,
    title: 'Detox Packages',
    description: 'Complete detox programs with herbal compounds and guidance to cleanse and reset your temple.',
    link: '/shop',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join our community for online access to cooking demos, recipes, freebies, and alkalinity resources.',
    link: '/dashboard',
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-nt-earth-900">Our Services</h2>
          <p className="mt-4 text-lg text-nt-earth-600 max-w-2xl mx-auto">
            Nourishment for mind, body, and soul — through alkalinity, herbs, and holistic wellness.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-nt-green-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-nt-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-nt-earth-900 group-hover:text-nt-green-700 transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-nt-earth-600 leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
