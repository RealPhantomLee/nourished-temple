import Link from 'next/link'
import { ArrowLeft, Settings, ExternalLink } from 'lucide-react'

export default function AdminPage() {
  return (
    <div>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-nt-green-950 to-nt-earth-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&h=800&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-nt-green-300 hover:text-nt-green-200 transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2 text-nt-green-400 mb-4">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Content Management</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Admin Dashboard</h1>
          <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
            Manage your content through Sanity Studio
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-nt-earth-900 mb-4">Sanity Studio</h2>
            <p className="text-nt-earth-600 mb-6">
              Access the Sanity Studio to manage products, events, and other content.
              Make sure you have set up your Sanity project and environment variables.
            </p>
            <div className="p-4 bg-nt-earth-50 rounded-lg mb-6">
              <p className="text-sm font-medium text-nt-earth-700 mb-2">Required Environment Variables:</p>
              <ul className="text-sm text-nt-earth-600 space-y-1 font-mono">
                <li>NEXT_PUBLIC_SANITY_PROJECT_ID</li>
                <li>NEXT_PUBLIC_SANITY_DATASET</li>
                <li>SANITY_API_TOKEN</li>
              </ul>
            </div>
            <p className="text-sm text-nt-earth-500">
              Run <code className="px-2 py-1 bg-nt-earth-100 rounded">npx sanity dev</code> in a separate terminal to start Sanity Studio on port 3333.
            </p>
            <div className="mt-6">
              <a
                href="http://localhost:3333"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-colors"
              >
                Open Sanity Studio
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
