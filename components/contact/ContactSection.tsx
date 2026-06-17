'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/chrisma' },
  { label: 'GitHub', href: 'https://github.com/chris-ma' },
  { label: 'Twitter / X', href: 'https://twitter.com/chrisma' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-brand-black">
      {/* Main contact block */}
      <div className="section-padding px-6 md:px-10 lg:px-16 border-t border-brand-concrete/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>Available for select projects</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(4rem,14vw,12rem)] leading-[0.9] text-brand-white mb-10"
          >
            GET IN
            <br />
            <span className="text-brand-cobalt">TOUCH.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          >
            <a
              href="mailto:hello@chrisma.co"
              className="group font-sans text-base md:text-lg text-brand-white/70 hover:text-brand-cobalt transition-colors duration-300 flex items-center gap-3"
            >
              hello@chrisma.co
              <motion.span
                className="inline-block text-brand-cobalt"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25 }}
              >
                →
              </motion.span>
            </a>
            <span className="hidden md:block w-px h-8 bg-brand-concrete/40" />
            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs tracking-[0.18em] uppercase text-brand-muted hover:text-brand-white transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer strip */}
      <motion.div
        className="px-6 md:px-10 lg:px-16 py-8 border-t border-brand-concrete/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-6">
          <span className="font-display text-xl text-brand-white">CM</span>
          <span className="font-sans text-xs tracking-[0.15em] uppercase text-brand-muted">
            Chris Ma · Creative Technologist
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-sans text-xs text-brand-muted">
            © 2026 Chris Ma. All rights reserved.
          </span>
          <span className="font-sans text-xs tracking-[0.15em] uppercase text-brand-muted/50">
            Built in Next.js
          </span>
        </div>
      </motion.div>
    </section>
  )
}
