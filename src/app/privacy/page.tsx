import type { Metadata } from 'next'
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Nourished Temple LLC',
  description: 'How Nourished Temple LLC collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  const lastUpdated = 'May 5, 2026'

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-6 h-6 text-nt-green-700" />
            <span className="text-sm font-medium text-nt-green-700 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-nt-earth-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-nt-earth-500 mb-10">Last updated: {lastUpdated}</p>

          <div className="prose prose-sm max-w-none text-nt-earth-700 space-y-8">

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">1. Who We Are</h2>
              <p>
                Nourished Temple LLC (&quot;Nourished Temple,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is an alkaline
                electric cell food business based in Los Angeles, California. We operate the website
                nourishedtemple.store and offer herbal products, meal preparation services,
                consultations, and wellness events.
              </p>
              <p className="mt-2">
                Contact us at:{' '}
                <a href="mailto:info@nourishedtemple.store" className="text-nt-green-700 underline">
                  info@nourishedtemple.store
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">2. Information We Collect</h2>
              <p className="mb-2">We collect the following categories of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact information</strong> — name, email address, and phone number when you
                  submit a contact form, sign up for an account, or place an order.
                </li>
                <li>
                  <strong>Health information</strong> — optional information you voluntarily provide in
                  contact and consultation forms, including health concerns, dietary restrictions, and
                  alkaline lifestyle level. This information is used solely to personalize your
                  wellness recommendations.
                </li>
                <li>
                  <strong>Account information</strong> — email address and hashed password when you
                  create a community account.
                </li>
                <li>
                  <strong>Order and payment information</strong> — purchase history and transaction
                  details. Payment card data is processed directly by Stripe and never stored on our
                  servers.
                </li>
                <li>
                  <strong>Usage data</strong> — pages visited, browser type, and IP address collected
                  automatically via standard web server logs.
                </li>
                <li>
                  <strong>Referral data</strong> — referral codes used during signup or checkout.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fulfill orders, process payments, and communicate order status.</li>
                <li>Respond to contact and consultation requests.</li>
                <li>Personalize product and service recommendations based on health information you share.</li>
                <li>Operate the referral and affiliate program.</li>
                <li>Send transactional emails (order confirmations, replies to inquiries).</li>
                <li>Improve the website and troubleshoot technical issues.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p className="mt-3">
                We do <strong>not</strong> sell, rent, or share your personal information with third
                parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">4. Health Information</h2>
              <p>
                Health-related information you provide (health concerns, dietary restrictions, alkaline
                lifestyle level) is treated with the highest sensitivity. It is used exclusively to
                provide personalized wellness guidance and is accessible only to Nourished Temple staff.
                We do not share this information with any third party.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">5. Third-Party Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Stripe</strong> — processes all payment card transactions. Subject to{' '}
                  <a href="https://stripe.com/privacy" className="text-nt-green-700 underline" target="_blank" rel="noopener noreferrer">
                    Stripe&apos;s Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong>Sanity CMS</strong> — content management for product and event data.
                </li>
                <li>
                  <strong>Vercel</strong> — website hosting and edge delivery.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">6. Cookies</h2>
              <p>
                We use cookies for session management (keeping you logged into your account) and to
                maintain your shopping cart. We do not use third-party advertising or tracking cookies.
                You can disable cookies in your browser, but some site features may not function
                correctly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">
                7. Your Rights — California Residents (CCPA)
              </h2>
              <p className="mb-2">
                If you are a California resident, you have the following rights under the California
                Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Right to Know</strong> — request disclosure of the categories and specific
                  pieces of personal information we have collected about you.
                </li>
                <li>
                  <strong>Right to Delete</strong> — request deletion of personal information we hold
                  about you, subject to certain exceptions.
                </li>
                <li>
                  <strong>Right to Opt-Out</strong> — we do not sell personal information, so there is
                  nothing to opt out of.
                </li>
                <li>
                  <strong>Right to Non-Discrimination</strong> — exercising your privacy rights will
                  not result in reduced service quality or pricing.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{' '}
                <a href="mailto:info@nourishedtemple.store" className="text-nt-green-700 underline">
                  info@nourishedtemple.store
                </a>{' '}
                with the subject line &quot;Privacy Request.&quot; We will respond within 45 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">8. Data Security</h2>
              <p>
                We implement industry-standard security measures including encrypted passwords, HTTPS,
                and httpOnly session cookies. No method of internet transmission is 100% secure;
                however, we take reasonable precautions to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">9. Children&apos;s Privacy</h2>
              <p>
                Our website is not directed to children under 13. We do not knowingly collect personal
                information from children. If you believe a child has submitted information to us,
                contact us and we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page
                with a revised &quot;Last updated&quot; date. Continued use of the site after changes
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">11. Contact</h2>
              <p>
                Questions about this Privacy Policy? Reach us at:
              </p>
              <div className="mt-2 bg-nt-green-50 rounded-lg p-4 text-sm">
                <p className="font-semibold text-nt-earth-900">Nourished Temple LLC</p>
                <p>Los Angeles, California</p>
                <p>
                  <a href="mailto:info@nourishedtemple.store" className="text-nt-green-700 underline">
                    info@nourishedtemple.store
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
