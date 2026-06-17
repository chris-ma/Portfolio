import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk } from 'next/font/google'
import './globals.css'
import GrainOverlay from '@/components/ui/GrainOverlay'
import Navbar from '@/components/nav/Navbar'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chris Ma — Creative Technologist',
  description: 'Portfolio of Chris Ma. Creative technologist, digital marketer, frontend developer, and product manager working at the intersection of culture, technology, and commerce.',
  openGraph: {
    title: 'Chris Ma — Creative Technologist',
    description: 'Portfolio of Chris Ma. At the intersection of culture, technology, and commerce.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <body>
        <GrainOverlay />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
