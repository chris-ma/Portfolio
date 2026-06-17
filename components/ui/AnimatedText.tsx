'use client'

import { motion } from 'framer-motion'
import { charReveal, staggerContainer } from '@/lib/motion'

type El = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'

interface AnimatedTextProps {
  text: string
  el?: El
  className?: string
  delay?: number
  mode?: 'words' | 'chars'
  once?: boolean
}

export default function AnimatedText({
  text,
  el: Tag = 'span',
  className = '',
  delay = 0,
  mode = 'words',
  once = true,
}: AnimatedTextProps) {
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.span
  const tokens = mode === 'chars' ? text.split('') : text.split(' ')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: mode === 'chars' ? 0.03 : 0.07,
        delayChildren: delay,
      },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {tokens.map((token, i) => (
        <span key={i} className="clip-text-reveal">
          <motion.span
            variants={charReveal}
            className="inline-block"
            style={{ whiteSpace: mode === 'words' && token === '' ? 'pre' : 'normal' }}
          >
            {token}
            {mode === 'words' && i < tokens.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
