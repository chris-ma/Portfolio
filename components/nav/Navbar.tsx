'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const navLinks = [
  { label: 'Work',    href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 60)
  })

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 lg:px-16 flex items-center justify-between border-b border-brand-concrete/20 backdrop-blur-sm bg-brand-black/80"
      animate={{ paddingTop: scrolled ? '0.75rem' : '1.5rem', paddingBottom: scrolled ? '0.75rem' : '1.5rem' }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Monogram */}
      <a href="#" className="font-display text-2xl text-brand-white tracking-tight hover:text-brand-cobalt transition-colors duration-300">
        CM
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-sans text-xs tracking-[0.18em] uppercase text-brand-muted hover:text-brand-white transition-colors duration-300 relative group"
          >
            {link.label}
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-cobalt group-hover:w-full transition-all duration-300 ease-out" />
          </a>
        ))}
        <a
          href="#contact"
          className="font-sans text-xs tracking-[0.18em] uppercase px-5 py-2.5 border border-brand-cobalt text-brand-cobalt hover:bg-brand-cobalt hover:text-brand-white transition-all duration-300"
        >
          Get in touch
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          className="block w-6 h-px bg-brand-white"
          animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
          transition={{ duration: 0.25 }}
        />
        <motion.span
          className="block w-6 h-px bg-brand-white"
          animate={{ opacity: menuOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block w-6 h-px bg-brand-white"
          animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
          transition={{ duration: 0.25 }}
        />
      </button>

      {/* Mobile drawer */}
      <motion.div
        className="md:hidden absolute top-full left-0 right-0 bg-brand-graphite border-b border-brand-concrete/30 overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: menuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-4xl text-brand-white hover:text-brand-cobalt transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sans text-xs tracking-[0.18em] uppercase px-5 py-3 border border-brand-cobalt text-brand-cobalt text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </motion.nav>
  )
}
