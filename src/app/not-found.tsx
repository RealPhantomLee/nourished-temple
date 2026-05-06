import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <div>
        <Leaf className="w-12 h-12 text-nt-green-300 mx-auto mb-4" />
        <h1 className="text-6xl lg:text-8xl font-bold text-nt-green-700">404</h1>
        <p className="mt-4 text-xl text-nt-earth-700">Page not found</p>
        <p className="mt-2 text-nt-earth-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block px-8 py-3 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
