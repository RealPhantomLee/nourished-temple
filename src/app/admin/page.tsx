export default function AdminPage() {
  return (
    <div>
      <section className="py-20 lg:py-28 bg-gradient-to-br from-nt-green-950 to-nt-earth-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold">Admin Dashboard</h1>
          <p className="mt-4 text-lg text-nt-green-200 max-w-2xl mx-auto">
            Manage your content through Sanity Studio
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-nt-earth-900 mb-4">Sanity Studio</h2>
            <p className="text-nt-earth-600 mb-6">
              Access the Sanity Studio to manage products, events, and other content.
              Make sure you have set up your Sanity project and environment variables.
            </p>
            <div className="p-4 bg-nt-earth-50 rounded-lg mb-6 text-left">
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
          </div>
        </div>
      </section>
    </div>
  )
}
