'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Work',    anchor: 'work' },
  { label: 'About',   anchor: 'about' },
  { label: 'Process', anchor: 'process' },
  { label: 'Notes',   anchor: 'notes' },
  { label: 'Contact', anchor: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHome = pathname === '/'

  const href = (anchor: string) => isHome ? `#${anchor}` : `/#${anchor}`
  const logoHref = isHome ? '#hero' : '/'

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60))

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-16 flex items-center justify-between bg-bk-deep/95 backdrop-blur-sm border-b border-bk-rule"
      animate={{
        paddingTop:    scrolled ? '0.75rem' : '1.25rem',
        paddingBottom: scrolled ? '0.75rem' : '1.25rem',
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Gold bottom accent on scroll */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-bk-gold/40"
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Monogram — Playfair */}
      <a
        href={logoHref}
        className="font-book font-bold text-xl text-bk-gold hover:text-bk-parchment transition-colors duration-200 tracking-tight italic"
      >
        CM
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={href(link.anchor)}
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-bk-muted hover:text-bk-parchment transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}

        <a
          href={href('contact')}
          className="font-mono text-[10px] tracking-[0.22em] uppercase px-5 py-2.5 border border-bk-rule text-bk-muted hover:border-bk-gold hover:text-bk-gold transition-all duration-200"
        >
          Correspondence
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          className="block w-6 h-px bg-bk-parchment"
          animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
          transition={{ duration: 0.25 }}
        />
        <motion.span
          className="block w-6 h-px bg-bk-parchment"
          animate={{ opacity: menuOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-6 h-px bg-bk-parchment"
          animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
          transition={{ duration: 0.25 }}
        />
      </button>

      {/* Mobile drawer */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-bk-deep border-b border-bk-rule overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: menuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col px-6 py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={href(link.anchor)}
              className="font-book font-bold text-4xl text-bk-parchment hover:text-bk-gold transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={href('contact')}
            className="font-mono text-[10px] tracking-[0.22em] uppercase px-5 py-4 border border-bk-gold text-bk-gold text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Correspondence
          </a>
        </div>
      </motion.div>
    </motion.nav>
  )
}
