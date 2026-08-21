'use client'

interface SectionLabelProps {
  children: React.ReactNode
  color?: string
  className?: string
}

/**
 * Broadcast channel marker — appears after or alongside section headings,
 * never as an eyebrow above them.
 */
export default function SectionLabel({ children, color, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.22em] uppercase text-bk-muted ${className}`}
    >
      <span
        className="block w-3 h-px flex-shrink-0"
        style={{ background: color ?? 'var(--bk-gold)' }}
      />
      {children}
    </span>
  )
}
