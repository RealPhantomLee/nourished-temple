import Link from 'next/link'
import { Leaf, Utensils, MessageCircle, ChefHat, Droplet, Heart, ArrowRight, Sprout } from 'lucide-react'

const services = [
  {
    icon: Leaf,
    title: 'Herbs & Compounds',
    subtitle: 'Nourished Temple Alchemic Creations',
    description: 'Capsules, Teas, Tonics, Gels, Oils, Creams. Whole organic & wild-harvest herbs from the bush. Each compound is handcrafted with intention and rooted in ancestral wisdom.',
    cta: 'Shop Herbs',
    link: '/shop',
    highlight: 'Wild-crafted & organic',
  },
  {
    icon: Utensils,
    title: 'Meal Prep & Meal Plans',
    subtitle: 'Electric Plant-Based Nourishment',
    description: 'Delicious meals prepared just for you, or follow a personalized plan tailored to your alkaline journey. Transitional, vegetarian, raw, or mixed styles available.',
    cta: 'Explore Plans',
    link: '/shop',
    highlight: 'Customized to your body',
  },
  {
    icon: MessageCircle,
    title: 'Consultations',
    subtitle: 'Personalized Alkaline Guidance',
    description: 'Get one-on-one guidance on your alkaline journey. Submit a form and hear back within 24-48 hours. Every temple is unique — your guidance should be too.',
    cta: 'Get Started',
    link: '/contact',
    highlight: '24-48hr response',
  },
  {
    icon: ChefHat,
    title: 'Personal Chef',
    subtitle: 'Private Dining, Elevated',
    description: 'Delicious Electric Plant-based Meals made with love just for you. Experience the art of alkaline cuisine in the comfort of your own home.',
    cta: 'Book Now',
    link: '/contact',
    highlight: 'In-home service',
  },
  {
    icon: Droplet,
    title: 'Detox Packages',
    subtitle: 'Cleanse & Reset Your Temple',
    description: 'Complete detox programs with herbal compounds, teas, and guidance. Designed to flush toxins, restore balance, and awaken your natural healing power.',
    cta: 'Shop Detox',
    link: '/shop',
    highlight: 'Full body reset',
  },
  {
    icon: Heart,
    title: 'Community Program',
    subtitle: 'Help Me, Help You, Help Others',
    description: 'Save, earn, and grow together. Access free shipping, earn income through referrals, and support a movement of alkaline wellness.',
    cta: 'Join Community',
    link: '/dashboard',
    highlight: 'Earn $5 per referral',
  },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="relative py-24 lg:py-32 text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-nt-green-400 mb-4">
              <Sprout className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">What We Offer</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">Our Services</h1>
            <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
              Healing the temple through alkalinity. Each service is crafted with love, rooted in truth, and designed for your highest self.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=800&fit=crop')] bg-cover bg-center" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-nt-green-500 to-nt-green-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                <div className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-nt-green-100 to-nt-green-200 rounded-xl flex items-center justify-center group-hover:from-nt-green-700 group-hover:to-nt-green-800 transition-all duration-300 group-hover:scale-110">
                        <service.icon className="w-7 h-7 text-nt-green-700 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <p className="text-xs font-medium text-nt-green-600 uppercase tracking-wider mb-1">
                            {service.subtitle}
                          </p>
                          <h2 className="text-xl lg:text-2xl font-bold text-nt-earth-900 group-hover:text-nt-green-800 transition-colors">
                            {service.title}
                          </h2>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 bg-nt-green-50 text-nt-green-700 text-xs font-medium rounded-full group-hover:bg-nt-green-100 transition-colors self-start">
                          {service.highlight}
                        </span>
                      </div>

                      <p className="mt-3 text-nt-earth-600 leading-relaxed">{service.description}</p>

                      <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
                        <Link
                          href={service.link}
                          className="group/btn inline-flex items-center gap-2 text-nt-green-700 font-semibold hover:text-nt-green-800 transition-colors"
                        >
                          <span className="relative">
                            {service.cta}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nt-green-700 group-hover/btn:w-full transition-all duration-300" />
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-nt-green-100/50 rounded-full -translate-x-8 translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-nt-green-700/80 to-nt-green-800/80 backdrop-blur-md text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=600&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-nt-green-400/20 rounded-full blur-3xl animate-breathe" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-nt-green-500/20 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold">Events & Pop-Ups</h2>
          <p className="mt-4 text-lg text-nt-green-100">
            Experience Alkaline Electric Cell Food Kreationz in person. Come by, connect with community, and enjoy quality creations at locations near you.
          </p>
          <Link
            href="/events"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-nt-green-800 font-medium rounded-lg hover:bg-nt-green-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            View Upcoming Events
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
