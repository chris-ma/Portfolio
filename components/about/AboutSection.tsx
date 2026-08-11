'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'

const roles = [
  'Creative Technology',
  'Digital Marketing',
  'Frontend Engineering',
  'Product Management',
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding px-6 md:px-10 lg:px-16 bg-brand-graphite">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left — oversized pull quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-8">
            <SectionLabel>About</SectionLabel>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-brand-black"
            >
              BUILT
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-brand-muted"
            >
              AT THE
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-brand-black"
            >
              EDGE.
            </motion.h2>
          </div>

          {/* Role tags */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-2">
            {roles.map((role) => (
              <div key={role} className="flex items-center gap-3">
                <span className="block w-3 h-px bg-brand-cobalt" />
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-brand-muted">{role}</span>
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
          className="lg:pt-24"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-base md:text-lg text-brand-black/75 leading-relaxed mb-6"
          >
            I build across creative technology, digital marketing, and product thinking. The work earns attention and delivers commercially.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-sans text-base text-brand-black/55 leading-relaxed mb-6"
          >
            My background covers brand campaigns, engineering systems, and product strategy. From campaign intelligence platforms to editorial design systems, the rigour applied to a brief is the same as the rigour applied to a build.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-sans text-base text-brand-black/55 leading-relaxed"
          >
            Based globally. Currently open to select collaborations, advisory roles, and build partnerships.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp}
            className="mt-12 pt-8 border-t border-brand-concrete grid grid-cols-3 gap-6"
          >
            {[
              { val: '5+', label: 'Years Experience' },
              { val: '30+', label: 'Projects Shipped' },
              { val: '4', label: 'Disciplines' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl text-brand-black">{stat.val}</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
