import Link from 'next/link'
import { Leaf, Utensils, MessageCircle, ChefHat, Package, Users, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Leaf,
    title: 'Herbs & Compounds',
    description: 'Nourished Temple Alchemic Creations — Capsules, Teas, Tonics, Gels, Oils, Creams. Whole organic & wild-harvest herbs from the bush available.',
    cta: 'Shop Herbs',
    link: '/shop',
  },
  {
    icon: Utensils,
    title: 'Meal Prep & Meal Plans',
    description: 'Delicious electric plant-based meals prepared just for you. Or follow your own guide with a personalized meal plan tailored to your alkaline journey.',
    cta: 'Explore Meal Plans',
    link: '/shop',
  },
  {
    icon: MessageCircle,
    title: 'Consultations',
    description: 'Would you like a consultation? In order to get started please fill out the form. Once submitted you will be contacted within 24-48 hours.',
    cta: 'Get Started',
    link: '/contact',
  },
  {
    icon: ChefHat,
    title: 'Personal Chef',
    description: 'Delicious Electric Plant-based Meals made with love just for you. Transitional, Vegetarian, Alkaline & Raw, & Mixed Styles are available.',
    cta: 'Get Started',
    link: '/contact',
  },
  {
    icon: Package,
    title: 'Detox Packages',
    description: 'Complete detox packages designed to cleanse and reset your temple. Includes herbal compounds, teas, and personalized guidance.',
    cta: 'Shop Detox',
    link: '/shop',
  },
  {
    icon: Users,
    title: 'Community Program',
    description: 'Help me, help you, help others. A program designed to help customers save. Access to free shipping, earn income & support Nourished Temple LLC.',
    cta: 'Join Community',
    link: '/dashboard',
  },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-nt-green-950 to-nt-earth-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
            Nourished Temple specializes in healing the temple through Alkalinity. Explore our range of services.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-nt-green-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-nt-green-700" />
                </div>
                <h2 className="text-xl font-bold text-nt-earth-900">{service.title}</h2>
                <p className="mt-3 text-nt-earth-600 leading-relaxed">{service.description}</p>
                <Link
                  href={service.link}
                  className="mt-6 inline-flex items-center gap-2 text-nt-green-700 font-medium hover:text-nt-green-800 transition-colors"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-nt-earth-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-nt-earth-900">Events & Pop-Ups</h2>
          <p className="mt-4 text-lg text-nt-earth-600">
            Alkaline Electric Cell Food Kreationz in person. Come by and support, enjoy quality Alkaline Kreationz at various locations possibly near you.
          </p>
          <Link
            href="/events"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-colors"
          >
            View Upcoming Events
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
