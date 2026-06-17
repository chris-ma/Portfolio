'use client'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-sans text-brand-muted ${className}`}
    >
      <span className="block w-4 h-px bg-brand-cobalt flex-shrink-0" />
      {children}
    </span>
  )
}
