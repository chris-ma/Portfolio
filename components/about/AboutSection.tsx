'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, rowReveal } from '@/lib/motion'

const roles = [
  { label: 'Creative Technology' },
  { label: 'Digital Marketing' },
  { label: 'Frontend Engineering' },
  { label: 'Product Management' },
]

const stats = [
  { val: '5+', label: 'Years' },
  { val: '30+', label: 'Projects Shipped' },
  { val: '4', label: 'Disciplines' },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding px-6 md:px-10 lg:px-16 bg-bk-deep">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left — heading + roles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="font-book font-bold text-bk-gold leading-none mb-12"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
          >
            About.
          </motion.h2>

          {/* Role list */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col"
          >
            {roles.map((role) => (
              <motion.div
                key={role.label}
                variants={rowReveal}
                className="flex items-center gap-4 py-3.5 border-b border-bk-rule first:border-t first:border-bk-rule"
              >
                <span className="block w-3 h-px flex-shrink-0 bg-bk-gold/40" />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-bk-muted">
                  {role.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="font-book font-bold text-bk-parchment leading-none"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  {s.val}
                </div>
                <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-bk-muted mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — bio */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
          className="lg:pt-20"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-muted">
              Sydney / Global · Est. 2019
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-sans text-base md:text-lg text-bk-parchment leading-relaxed mb-6 max-w-md"
          >
            I build across creative technology, digital marketing, and product thinking.
            The work earns attention and delivers commercially.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm text-bk-muted leading-relaxed mb-6 max-w-md"
          >
            My background covers brand campaigns, engineering systems, and product strategy.
            From campaign intelligence platforms to editorial design systems, the rigour
            applied to a brief is the same as the rigour applied to a build.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm text-bk-muted leading-relaxed max-w-md"
          >
            Based globally. Currently open to select collaborations, advisory roles,
            and build partnerships.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase px-7 py-4 bg-bk-gold text-bk-deep hover:bg-bk-parchment transition-colors duration-150"
            >
              Open to work
              <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
