import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav/Navbar'

/*
  LUXURY BOOK CLOTH — direction contract — Taschen, Phaidon, Penguin Modern Classics
  THESIS: Chris Ma as a culturally-literate monograph. Rich non-neutral ground —
  deep slate (#1C3340) — warm gold (#D4AF6E) lettering in Playfair Display.
  A physical object that happens to be a website.
  OWN-WORLD: Deep slate ground. Gold as the only accent. Parchment body text.
  Playfair Display Bold Italic for the name; Space Grotesk for body; system mono
  for metadata. Work presented as a typographic table of contents, not a card grid.
  STORY: Visitor arrives at a book cover, reads the name in gold on deep slate,
  turns the page through a typeset contents list, leaves feeling they've encountered
  someone who operates at an entirely different cultural register.
  FIRST VIEWPORT: Full-bleed deep slate. CHRIS MA in Playfair Display Bold Italic
  at maximum scale in warm gold. Parchment subtitle. Gold-ruled horizontal mark.
*/

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

const playfairDisplay = Playfair_Display({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-playfair',
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
    <html lang="en" className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable}`}>
      <body>
        <Navbar />
        {children}
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js?token=00cfb7ac-b52c-48a0-8166-7a7e2e6bc835"></script>
{/* impeccable-live-end */}
</body>
    </html>
  )
}
