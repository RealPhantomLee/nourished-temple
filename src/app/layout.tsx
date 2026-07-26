import type { Metadata } from 'next'
import { Inter, Playfair_Display, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'
import { Providers } from '@/components/Providers'
import { WellnessTipBanner } from '@/components/sections/WellnessTipBanner'
import { NatureBackground } from '@/components/ui/NatureBackground'
import { CartProvider } from '@/lib/cart/context'
import { NoiseOverlay } from '@/components/ui/NoiseOverlay'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nourished Temple LLC | Alkaline Electric Cell Food Kreationz',
  description:
    'Los Angeles-based alkaline electric cell food business. Healing the temple through alkalinity with organic herbs, meal prep, consultations, and more.',
  keywords: ['alkaline', 'cell food', 'herbs', 'sea moss', 'meal prep', 'Los Angeles', 'wellness'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-nt-cream text-nt-earth-900 relative overflow-x-hidden">
        <NatureBackground />
        <NoiseOverlay />
        <div className="relative z-10 flex flex-col min-h-screen">
          <CartProvider>
            <Providers>
              <WellnessTipBanner />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </Providers>
          </CartProvider>
        </div>
      </body>
    </html>
  )
}
