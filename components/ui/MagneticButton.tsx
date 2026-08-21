'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Props {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

/**
 * Gold CTA that follows the cursor slightly — like pressing foil that has give.
 * Snaps back on leave via spring physics.
 */
export default function MagneticButton({ href, children, className, onClick }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPos({
      x: (e.clientX - (rect.left + rect.width  / 2)) * 0.28,
      y: (e.clientY - (rect.top  + rect.height / 2)) * 0.28,
    })
  }, [])

  const onLeave = useCallback(() => setPos({ x: 0, y: 0 }), [])

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </motion.a>
  )
}
