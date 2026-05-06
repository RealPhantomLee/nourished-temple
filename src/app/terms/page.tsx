import type { Metadata } from 'next'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Nourished Temple LLC',
  description: 'Terms and conditions for purchasing from and using Nourished Temple LLC.',
}

export default function TermsPage() {
  const lastUpdated = 'May 5, 2026'

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-6 h-6 text-nt-green-700" />
            <span className="text-sm font-medium text-nt-green-700 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-nt-earth-900 mb-2">Terms of Service</h1>
          <p className="text-sm text-nt-earth-500 mb-10">Last updated: {lastUpdated}</p>

          <div className="text-nt-earth-700 space-y-8 text-sm leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing the Nourished Temple LLC website (nourishedtemple.store) or purchasing
                any product or service, you agree to be bound by these Terms of Service. If you do
                not agree, please do not use the site or make a purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">2. Products & Services</h2>
              <p className="mb-2">
                Nourished Temple LLC offers handcrafted herbal compounds, alkaline foods,
                wildcrafted accessories, meal preparation, personalized meal plans, detox packages,
                and personal chef services.
              </p>
              <p>
                All products are handcrafted in small batches. Availability may vary. We reserve the
                right to modify product formulations, pricing, or availability at any time without
                prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">3. Health Disclaimer</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
                <p className="font-semibold text-amber-900 mb-1">Important Health Notice</p>
                <p className="text-amber-800">
                  These statements have not been evaluated by the Food and Drug Administration. Our
                  products are not intended to diagnose, treat, cure, or prevent any disease.
                </p>
              </div>
              <p>
                The information provided on this website, including product descriptions, blog posts,
                wellness tips, and consultation guidance, is for educational purposes only and does
                not constitute medical advice. Always consult a qualified healthcare professional
                before beginning any new health regimen, especially if you are pregnant, nursing,
                taking prescription medications, or have an existing medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">4. Return & Refund Policy</h2>
              <p className="mb-3 font-semibold text-nt-earth-900">
                All consumable product sales are final. No returns or exchanges on:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Herbal compounds, capsules, teas, and tonics</li>
                <li>Sea moss gel and botanical oils</li>
                <li>Alkaline foods and grains</li>
                <li>Detox packages and meal prep orders</li>
                <li>Personalized meal plans (once delivered)</li>
              </ul>
              <p className="mb-2">
                We will issue a full refund or replacement if a product arrives damaged, defective,
                or significantly different from what was ordered. Claims must be submitted within{' '}
                <strong>48 hours</strong> of delivery with photographic evidence to{' '}
                <a href="mailto:info@nourishedtemple.store" className="text-nt-green-700 underline">
                  info@nourishedtemple.store
                </a>.
              </p>
              <p>
                Non-consumable accessories (waist beads) may be returned unused and in original
                condition within 7 days for store credit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">5. Payments</h2>
              <p>
                All payments are processed securely through Stripe. By completing a purchase, you
                authorize Nourished Temple LLC to charge the payment method provided. Prices are in
                USD. We reserve the right to update pricing at any time; changes will not affect
                already-placed orders.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">6. Shipping & Delivery</h2>
              <p className="mb-2">
                Physical products are shipped from Los Angeles, California. Processing time is
                typically 2–5 business days. Shipping times vary by carrier and destination.
              </p>
              <p>
                Nourished Temple LLC is not responsible for delays caused by shipping carriers,
                customs, weather, or circumstances outside our control. Customers are responsible
                for providing accurate shipping information. We are not liable for orders lost due to
                incorrect addresses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">7. Consultation Services</h2>
              <p>
                Wellness consultations provided by Nourished Temple LLC are for educational and
                informational purposes only. They are not a substitute for professional medical
                advice, diagnosis, or treatment. Consultations must be booked and paid for in
                advance. Cancellations made less than 24 hours before a scheduled appointment are
                non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">8. Referral Program</h2>
              <p>
                Our referral program rewards members with store credit for referring new customers.
                Referral earnings are issued as credit toward future purchases and are
                non-transferable. Nourished Temple LLC reserves the right to modify or discontinue
                the referral program at any time. Fraudulent referral activity will result in account
                termination.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">9. Intellectual Property</h2>
              <p>
                All content on this website — including text, product descriptions, photographs,
                logos, and the Nourished Temple brand — is the property of Nourished Temple LLC.
                Reproduction, distribution, or use of any content without written permission is
                prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">10. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Nourished Temple LLC shall not be liable for
                any indirect, incidental, special, or consequential damages arising from your use of
                our products, services, or website. Our total liability to you for any claim shall
                not exceed the amount paid for the product or service in question.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of California, without regard to
                conflict of law principles. Any disputes shall be resolved in the courts of Los
                Angeles County, California.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">12. Changes to Terms</h2>
              <p>
                We may update these Terms at any time. Continued use of the site after changes are
                posted constitutes your agreement to the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-nt-earth-900 mb-3">13. Contact</h2>
              <div className="bg-nt-green-50 rounded-lg p-4">
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
