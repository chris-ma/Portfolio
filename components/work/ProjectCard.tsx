'use client'

import { motion } from 'framer-motion'
import { metadataReveal } from '@/lib/motion'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  year: string
  category: string
  index: number
  featured?: boolean
  href?: string
  accentColor?: string
}

// Light-ground SVG thumbnails — white substrate, dark ink marks, CMY accent
const svgThumbnails = [
  (color: string) => (
    <svg viewBox="0 0 800 460" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="460" fill="#F8F8F8" />
      {/* Structural grid */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="#1A1A1A" strokeWidth="0.4" opacity="0.06" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 72} y1="0" x2={i * 72} y2="460" stroke="#1A1A1A" strokeWidth="0.4" opacity="0.06" />
      ))}
      {/* Bar chart — analytics */}
      {[180, 280, 140, 320, 240, 200, 360].map((h, i) => (
        <rect key={i} x={60 + i * 96} y={400 - h} width="60" height={h}
          fill={i === 6 ? color : '#1A1A1A'} opacity={i === 6 ? 0.85 : 0.06 + i * 0.02} />
      ))}
      {/* Trend line */}
      <polyline
        points="60,380 156,320 252,290 348,220 444,200 540,160 636,110 732,70"
        fill="none" stroke={color} strokeWidth="2" opacity="0.8"
      />
      <circle cx="732" cy="70" r="5" fill={color} />
      <text x="60" y="440" fill="#1A1A1A" opacity="0.25" fontSize="9" fontFamily="monospace" letterSpacing="2">CAMPAIGN INTELLIGENCE · REAL-TIME</text>
    </svg>
  ),
  (color: string) => (
    <svg viewBox="0 0 800 460" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="460" fill="#F8F8F8" />
      {/* Component grid blueprint */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 65} x2="800" y2={i * 65} stroke="#1A1A1A" strokeWidth="0.4" opacity="0.06" />
      ))}
      {[
        [60, 60, 220, 72], [300, 60, 160, 72], [480, 60, 260, 72],
        [60, 170, 100, 90], [180, 170, 100, 90], [300, 170, 100, 90],
        [60, 300, 680, 36],
        [60, 370, 200, 32], [280, 370, 200, 32], [500, 370, 240, 32],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h}
          stroke="#1A1A1A" strokeWidth="0.8" fill={i < 3 ? color : 'none'}
          fillOpacity="0.08" opacity="0.45" />
      ))}
      <text x="60" y="440" fill="#1A1A1A" opacity="0.25" fontSize="9" fontFamily="monospace" letterSpacing="2">EDITORIAL DESIGN SYSTEM · TOKEN-DRIVEN</text>
    </svg>
  ),
  (color: string) => (
    <svg viewBox="0 0 800 460" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="460" fill="#F8F8F8" />
      {/* Queue items */}
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={60 + i * 56} y={160} width="42" height="130"
          fill={color} opacity={i < 3 ? 0.75 : i < 7 ? 0.18 : 0.06} />
      ))}
      {/* Countdown arc */}
      <circle cx="650" cy="230" r="90" stroke="#1A1A1A" strokeWidth="0.8" fill="none" opacity="0.10" />
      <circle cx="650" cy="230" r="90" stroke={color} strokeWidth="3" fill="none" opacity="0.85"
        strokeDasharray="565" strokeDashoffset="141" strokeLinecap="square"
        transform="rotate(-90 650 230)" />
      <text x="650" y="222" textAnchor="middle" fill="#1A1A1A" fontSize="28" fontFamily="monospace" fontWeight="700" opacity="0.7">03</text>
      <text x="650" y="244" textAnchor="middle" fill="#1A1A1A" fontSize="9" fontFamily="monospace" opacity="0.35">REMAINING</text>
      <text x="60" y="340" fill="#1A1A1A" opacity="0.25" fontSize="9" fontFamily="monospace" letterSpacing="2">DROP COMMERCE · REAL-TIME QUEUE</text>
    </svg>
  ),
  (color: string) => (
    <svg viewBox="0 0 800 460" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="460" fill="#F8F8F8" />
      {/* Funnel — structural */}
      <polygon points="100,80 700,80 580,210 220,210" stroke="#1A1A1A" strokeWidth="1" fill={color} fillOpacity="0.12" opacity="0.6" />
      <polygon points="220,230 580,230 500,340 300,340" stroke="#1A1A1A" strokeWidth="1" fill={color} fillOpacity="0.18" opacity="0.6" />
      <polygon points="300,360 500,360 430,420 370,420" stroke="#1A1A1A" strokeWidth="1" fill={color} fillOpacity="0.30" opacity="0.8" />
      {['AWARENESS', 'CONSIDERATION', 'CONVERT'].map((s, i) => (
        <text key={s} x="400" y={[148, 288, 396][i]} textAnchor="middle" fill="#1A1A1A"
          opacity="0.35" fontSize="9" fontFamily="monospace" letterSpacing="2">{s}</text>
      ))}
      <text x="60" y="448" fill="#1A1A1A" opacity="0.25" fontSize="9" fontFamily="monospace" letterSpacing="2">BRAND × PRODUCT STRATEGY · GTM</text>
    </svg>
  ),
]

const ACCENT_COLORS = ['#00AEEF', '#E6007E', '#FFE000', '#00AEEF']

export default function ProjectCard({
  title, description, tags, year, category, index, featured = false, href, accentColor,
}: ProjectCardProps) {
  const color = accentColor ?? ACCENT_COLORS[index % ACCENT_COLORS.length]
  const thumbnail = svgThumbnails[index % svgThumbnails.length]

  return (
    <motion.article
      className={`group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <a href={href ?? '#work'} className="block">
        {/* Thumbnail */}
        <div
          className="relative overflow-hidden mb-4 border border-sd-rule"
          style={{ aspectRatio: featured ? '16/7' : '4/3' }}
        >
          {/* CMY color block header — structural mark */}
          <div
            className="absolute top-0 left-0 right-0 z-10"
            style={{ height: '10px', background: color }}
          />

          <motion.div
            className="w-full h-full pt-[10px]"
            variants={{ rest: { scale: 1 }, hover: { scale: 1.02, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }}
          >
            {thumbnail(color)}
          </motion.div>

          {/* Category badge */}
          <span className="absolute top-6 left-4 font-mono text-[9px] tracking-[0.22em] uppercase text-sd-secondary bg-white/90 px-3 py-1.5 border border-sd-rule z-20">
            {category}
          </span>

          {/* Hover overlay */}
          <div className="absolute inset-0 overflow-hidden z-30">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-white/96 p-5 border-t border-sd-rule"
              variants={metadataReveal}
            >
              <p className="font-sans text-sm text-sd-secondary leading-relaxed mb-3">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-[0.18em] uppercase text-sd-tertiary border border-sd-rule px-2 py-1"
                  >
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
            <h3
              className="font-sans font-bold text-sd-ink leading-tight transition-colors duration-200 group-hover:text-sd-cyan"
              style={{ fontSize: featured ? 'clamp(2rem,4vw,3.5rem)' : 'clamp(1.5rem,3vw,2.5rem)' }}
            >
              {title}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
              {tags.slice(0, 2).map((tag) => (
                <span key={tag} className="font-mono text-[9px] tracking-[0.2em] uppercase text-sd-tertiary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="font-mono text-[10px] text-sd-tertiary flex-shrink-0 mt-1">{year}</span>
        </div>
      </a>
    </motion.article>
  )
}
