'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, ruleReveal } from '@/lib/motion'

const socials = [
  { label: 'LinkedIn',    href: 'https://linkedin.com/in/chrisma' },
  { label: 'GitHub',      href: 'https://github.com/chris-ma' },
  { label: 'Twitter / X', href: 'https://twitter.com/chrisma' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-bk-deep border-t border-bk-rule/60">
      {/* Main contact block */}
      <div className="section-padding px-6 md:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-muted">
              Available for select projects
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-book font-bold text-bk-gold leading-[0.88] mb-12"
            style={{ fontSize: 'clamp(4rem, 14vw, 13rem)' }}
          >
            Correspondence.
          </motion.h2>

          {/* Animated rule */}
          <motion.div
            className="w-full h-px bg-bk-rule mb-10 overflow-hidden"
            variants={ruleReveal}
            style={{ transformOrigin: 'left' }}
          />

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          >
            <a
              href="mailto:hello@chrisma.co"
              className="group font-sans text-base md:text-lg text-bk-muted hover:text-bk-parchment transition-colors duration-150 flex items-center gap-3"
            >
              hello@chrisma.co
              <motion.span
                className="inline-block text-bk-gold"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </a>

            <span className="hidden md:block w-px h-8 bg-bk-rule" />

            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-[0.2em] uppercase text-bk-muted/60 hover:text-bk-muted transition-colors duration-150"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-10">
            <a
              href="mailto:hello@chrisma.co"
              className="group inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase px-7 py-4 bg-bk-gold text-bk-deep hover:bg-bk-parchment transition-colors duration-150"
            >
              Start a conversation
              <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-bk-rule/60 px-6 md:px-10 lg:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-book font-bold italic text-xl text-bk-gold tracking-tight">CM</span>
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-bk-muted/60">
            Chris Ma · Creative Technologist
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-mono text-[9px] text-bk-muted/40">© 2026 Chris Ma.</span>
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-bk-muted/30">
            Built in Next.js
          </span>
          {/* Gold rule mark — closing identity element */}
          <div className="flex gap-px" aria-hidden>
            <div className="w-6 h-6 border border-bk-rule/60" />
            <div className="w-6 h-6 bg-bk-gold/15 border border-bk-gold/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
