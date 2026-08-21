import type { Variants, Transition } from 'framer-motion'

/* ── Studio Dumbar direction — print ink on white ground ─────────────────── */

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

export const charReveal: Variants = {
  hidden:  { y: '110%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export const cardHover: Variants = {
  rest:  { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export const metadataReveal: Variants = {
  rest:  { y: '100%', opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
}

export const cobaltUnderline: Variants = {
  hidden:  { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export const rowReveal: Variants = {
  hidden:  { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ── Studio Dumbar — print-press motion ──────────────────────────────────── */

/** Color block slides in from the left — offset print press feel */
export const blockReveal: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
  },
}

/** Display text presses in from slightly above — ink meeting paper */
export const inkPress: Variants = {
  hidden:  { y: '-6%', opacity: 0 },
  visible: (i: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2 + i * 0.12,
    },
  }),
}

/** Rule line draws across — structural mark */
export const ruleReveal: Variants = {
  hidden:  { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ── Broadcast variants (kept for article pages) ─────────────────────────── */

export const barSweep: Variants = {
  hidden:  { scaleX: 0, opacity: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3 + i * 0.045,
    },
  }),
}

export const stationReveal: Variants = {
  hidden:  { y: '105%' },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.5 + i * 0.12,
    },
  }),
}

export const metaFade: Variants = {
  hidden:  { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: delay ?? 0.9 },
  }),
}

export const BLOB_TRANSITION: Transition = {
  duration: 9,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
}
