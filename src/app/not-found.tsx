export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-6xl lg:text-8xl font-bold text-nt-green-700">404</h1>
        <p className="mt-4 text-xl text-nt-earth-700">Page not found</p>
        <p className="mt-2 text-nt-earth-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-8 inline-block px-8 py-3 bg-nt-green-700 text-white font-medium rounded-lg hover:bg-nt-green-800 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}
