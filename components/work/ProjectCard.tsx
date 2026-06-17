'use client'

import { motion } from 'framer-motion'
import { cardHover, metadataReveal } from '@/lib/motion'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  year: string
  category: string
  index: number
  featured?: boolean
  href?: string
}

const svgPatterns = [
  // Geometric grid
  (color: string) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0A0A0A" />
      <line x1="0" y1="0" x2="400" y2="300" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <line x1="400" y1="0" x2="0" y2="300" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <rect x="80" y="60" width="240" height="180" stroke={color} strokeWidth="1" fill="none" opacity="0.3" />
      <rect x="120" y="90" width="160" height="120" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="200" cy="150" r="40" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="200" cy="150" r="10" fill={color} opacity="0.6" />
    </svg>
  ),
  // Diagonal stripes
  (color: string) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#111111" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1={i * 40 - 100} y1="0" x2={i * 40 + 200} y2="300" stroke={color} strokeWidth="0.7" opacity="0.2" />
      ))}
      <rect x="60" y="80" width="120" height="80" fill={color} opacity="0.15" />
      <rect x="220" y="140" width="120" height="80" fill={color} opacity="0.2" />
      <text x="200" y="160" textAnchor="middle" fill={color} opacity="0.5" fontSize="48" fontFamily="serif" fontWeight="700">CM</text>
    </svg>
  ),
  // Grid dots
  (color: string) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0D0D0D" />
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={col * 45 + 20} cy={row * 40 + 20} r="1.5" fill={color} opacity="0.25" />
        ))
      )}
      <polygon points="200,60 280,200 120,200" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" />
      <line x1="0" y1="150" x2="400" y2="150" stroke={color} strokeWidth="0.5" opacity="0.3" />
    </svg>
  ),
  // Abstract bars
  (color: string) => (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0A0A0A" />
      <rect x="0" y="100" width="400" height="1" fill={color} opacity="0.2" />
      <rect x="0" y="200" width="400" height="1" fill={color} opacity="0.2" />
      <rect x="50" y="60" width="20" height="180" fill={color} opacity="0.15" />
      <rect x="100" y="100" width="20" height="140" fill={color} opacity="0.2" />
      <rect x="150" y="40" width="20" height="220" fill={color} opacity="0.12" />
      <rect x="220" y="80" width="40" height="160" fill={color} opacity="0.25" />
      <rect x="300" y="60" width="20" height="200" fill={color} opacity="0.15" />
      <rect x="340" y="120" width="20" height="120" fill={color} opacity="0.2" />
    </svg>
  ),
]

export default function ProjectCard({ title, description, tags, year, category, index, featured = false, href }: ProjectCardProps) {
  const pattern = svgPatterns[index % svgPatterns.length]
  const accentColor = '#2563EB'

  return (
    <motion.article
      className={`group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <a href={href || '#work'} className="block">
        {/* Image area */}
        <div className="relative overflow-hidden bg-brand-graphite mb-4" style={{ aspectRatio: featured ? '16/7' : '4/3' }}>
          <motion.div
            className="w-full h-full"
            variants={cardHover}
          >
            {pattern(accentColor)}
          </motion.div>

          {/* Category tag */}
          <span className="absolute top-4 left-4 font-sans text-[10px] tracking-[0.2em] uppercase text-brand-white/70 bg-brand-black/60 backdrop-blur-sm px-3 py-1.5 border border-brand-concrete/30">
            {category}
          </span>

          {/* Hover metadata overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-brand-black/85 backdrop-blur-sm p-5 border-t border-brand-cobalt/30"
              variants={metadataReveal}
            >
              <p className="font-sans text-sm text-brand-white/80 leading-relaxed mb-3">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Card footer */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-brand-white group-hover:text-brand-cobalt transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
              {tags.slice(0, 2).map((tag) => (
                <span key={tag} className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted">{tag}</span>
              ))}
            </div>
          </div>
          <span className="font-sans text-sm text-brand-muted flex-shrink-0 mt-1">{year}</span>
        </div>
      </a>
    </motion.article>
  )
}
