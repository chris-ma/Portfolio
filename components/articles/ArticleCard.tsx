'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Article } from '@/lib/articles'
import {
  HermesMemoryTimeline,
  VanityVsValue,
  CameraMovesGrid,
  WorkflowSpectrum,
  RAGPipeline,
  ThreeGateDiagram,
  CostComparison,
  FlowDiagram,
  RLSStateDiagram,
  SlopPatternVisual,
  EEATFramework,
  SwapTestDiagram,
  DesignFundamentalsGrid,
  ValidationSequenceDiagram,
  FunnelStageDiagram,
  JourneyMapVisual,
  AIUsageTypologyDiagram,
  CalibrationVsAccuracyDiagram,
  PlatformEngagementDiagram,
} from '@/components/articles/ArticleMockups'

interface ArticleCardProps {
  article: Article
  index: number
  featured?: boolean
}

export default function ArticleCard({ article, index, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <motion.article
      className={`group ${featured ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
    >
      <Link href={`/articles/${article.slug}`} className="block">
        {/* Image / visual area */}
        <div
          className="relative overflow-hidden bg-brand-graphite mb-5 border border-brand-concrete/50"
          style={{ aspectRatio: featured ? '16/7' : '3/2' }}
        >
          <ArticleVisual slug={article.slug} category={article.category} index={index} />

          {/* Category + read-time row */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-black/70 bg-brand-white/85 backdrop-blur-sm px-3 py-1.5 border border-brand-concrete/60">
              {article.category}
            </span>
            <span className="font-sans text-[10px] tracking-[0.1em] text-brand-muted bg-brand-white/75 backdrop-blur-sm px-2.5 py-1.5 border border-brand-concrete/50">
              {article.readTime}
            </span>
          </div>

          {/* Hover reveal — excerpt */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-brand-white/93 backdrop-blur-sm p-5 border-t border-brand-cobalt/25"
              initial={{ y: '100%', opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-sm text-brand-black/75 leading-relaxed line-clamp-3">{article.excerpt}</p>
            </motion.div>
          </div>
        </div>

        {/* Card footer */}
        <div className="space-y-2">
          <h3
            className={`font-display text-brand-black group-hover:text-brand-cobalt transition-colors duration-300 leading-none ${
              featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'
            }`}
          >
            {article.title}
          </h3>
          <p className="font-sans text-sm text-brand-muted leading-snug">{article.subtitle}</p>

          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/80 border border-brand-cobalt/30 px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-sans text-[11px] text-brand-muted flex-shrink-0 ml-4">{formattedDate}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

function DiagramWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden" style={{ background: '#EDEAE4' }}>
      {children}
    </div>
  )
}

function ArticleVisual({ slug, category, index }: { slug: string; category: string; index: number }) {
  if (slug === 'social-media-algorithms-kpis') {
    return <DiagramWrapper><PlatformEngagementDiagram /></DiagramWrapper>
  }
  if (slug === 'ai-hallucination-reduction') {
    return <DiagramWrapper><CalibrationVsAccuracyDiagram /></DiagramWrapper>
  }
  if (slug === 'ai-self-improvement-wellbeing') {
    return <DiagramWrapper><AIUsageTypologyDiagram /></DiagramWrapper>
  }
  if (slug === 'customer-journey-mapping') {
    return <DiagramWrapper><JourneyMapVisual /></DiagramWrapper>
  }
  if (slug === 'marketing-funnel-engineering') {
    return <DiagramWrapper><FunnelStageDiagram /></DiagramWrapper>
  }
  if (slug === 'mvp-traction-validation') {
    return <DiagramWrapper><ValidationSequenceDiagram /></DiagramWrapper>
  }
  if (slug === 'design-taste-frontend') {
    return <DiagramWrapper><SwapTestDiagram /></DiagramWrapper>
  }
  if (slug === 'content-writing-eeat') {
    return <DiagramWrapper><EEATFramework /></DiagramWrapper>
  }
  if (slug === 'app-security-rls-owasp') {
    return <DiagramWrapper><RLSStateDiagram /></DiagramWrapper>
  }
  if (slug === 'hermes-agent-persistent-ai') {
    return <DiagramWrapper><HermesMemoryTimeline /></DiagramWrapper>
  }
  if (slug === 'tokenmaxxing-ai-productivity') {
    return <DiagramWrapper><VanityVsValue /></DiagramWrapper>
  }
  if (slug === 'ai-image-video-generation-midjourney-higgsfield') {
    return <DiagramWrapper><CameraMovesGrid /></DiagramWrapper>
  }
  if (slug === 'agentic-ai-loops-workflows') {
    return <DiagramWrapper><WorkflowSpectrum /></DiagramWrapper>
  }
  if (slug === 'rag-retrieval-augmented-generation') {
    return <DiagramWrapper><RAGPipeline /></DiagramWrapper>
  }
  if (slug === 'aeo-three-gate-diagnostic') {
    return <DiagramWrapper><ThreeGateDiagram /></DiagramWrapper>
  }
  if (slug === 'claude-code-vs-codex') {
    return <DiagramWrapper><CostComparison /></DiagramWrapper>
  }
  if (slug === 'wispr-obsidian-notion-pkm-stack') {
    return <DiagramWrapper><FlowDiagram /></DiagramWrapper>
  }

  // Fallback: category-based editorial SVG for any future article without a matched diagram
  return <ArticleCategoryVisual category={category} index={index} />
}

function ArticleCategoryVisual({ category, index }: { category: string; index: number }) {
  const green = '#1A4D3A'

  if (category === 'Systems') {
    return (
      <svg viewBox="0 0 600 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="340" fill="#EDEAE4" />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 57} x2="600" y2={i * 57} stroke={green} strokeWidth="0.4" opacity="0.12" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="340" stroke={green} strokeWidth="0.4" opacity="0.12" />
        ))}
        <circle cx="120" cy="170" r="42" stroke={green} strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="120" cy="170" r="26" fill={green} opacity="0.12" />
        <text x="120" y="165" textAnchor="middle" fill={green} fontSize="9" fontFamily="monospace" opacity="0.7">WISPR</text>
        <text x="120" y="178" textAnchor="middle" fill={green} fontSize="7" fontFamily="monospace" opacity="0.5">FLOW</text>
        <circle cx="300" cy="170" r="42" stroke={green} strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="300" cy="170" r="26" fill={green} opacity="0.12" />
        <text x="300" y="165" textAnchor="middle" fill={green} fontSize="9" fontFamily="monospace" opacity="0.7">OBSIDIAN</text>
        <text x="300" y="178" textAnchor="middle" fill={green} fontSize="7" fontFamily="monospace" opacity="0.5">VAULT</text>
        <circle cx="480" cy="170" r="42" stroke={green} strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="480" cy="170" r="26" fill={green} opacity="0.12" />
        <text x="480" y="165" textAnchor="middle" fill={green} fontSize="9" fontFamily="monospace" opacity="0.7">NOTION</text>
        <text x="480" y="178" textAnchor="middle" fill={green} fontSize="7" fontFamily="monospace" opacity="0.5">DB</text>
        <line x1="163" y1="170" x2="255" y2="170" stroke={green} strokeWidth="1.2" opacity="0.5" markerEnd="url(#arr)" />
        <line x1="343" y1="170" x2="435" y2="170" stroke={green} strokeWidth="1.2" opacity="0.5" markerEnd="url(#arr)" />
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={green} opacity="0.5" />
          </marker>
        </defs>
        <text x="209" y="160" textAnchor="middle" fill={green} fontSize="7" fontFamily="monospace" opacity="0.4">capture</text>
        <text x="389" y="160" textAnchor="middle" fill={green} fontSize="7" fontFamily="monospace" opacity="0.4">coordinate</text>
      </svg>
    )
  }

  if (category === 'Tools') {
    const tallH = 120
    const shortH = Math.round(tallH * (15 / 155))
    return (
      <svg viewBox="0 0 600 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="340" fill="#EDEAE4" />
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1="60" y1={60 + i * 40} x2="540" y2={60 + i * 40} stroke={green} strokeWidth="0.3" opacity="0.1" />
        ))}
        <line x1="60" y1="260" x2="540" y2="260" stroke={green} strokeWidth="0.8" opacity="0.25" />
        <rect x="160" y={260 - tallH} width="100" height={tallH} rx="2" fill={green} opacity="0.7" />
        <text x="210" y={260 - tallH - 12} textAnchor="middle" fill={green} fontSize="16" fontFamily="monospace" fontWeight="700" opacity="0.9">$155</text>
        <text x="210" y="278" textAnchor="middle" fill={green} fontSize="9" fontFamily="monospace" opacity="0.6">Claude Code</text>
        <rect x="340" y={260 - shortH} width="100" height={shortH} rx="2" fill="#7A7872" opacity="0.4" />
        <text x="390" y={260 - shortH - 12} textAnchor="middle" fill="#7A7872" fontSize="16" fontFamily="monospace" fontWeight="700" opacity="0.7">$15</text>
        <text x="390" y="278" textAnchor="middle" fill="#7A7872" fontSize="9" fontFamily="monospace" opacity="0.5">Codex</text>
        <text x="300" y="308" textAnchor="middle" fill={green} fontSize="8" fontFamily="monospace" opacity="0.35" letterSpacing="1">SAME TASK · 10× COST DELTA</text>
      </svg>
    )
  }

  if (category === 'Engineering') {
    const steps = ['INGEST', 'CHUNK', 'EMBED', 'INDEX', 'RETRIEVE', 'RERANK', 'GEN']
    const BOX_W = 68
    const GAP = 8
    const startX = 36
    const startY = 120
    const BOX_H = 80
    return (
      <svg viewBox="0 0 600 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="340" fill="#EDEAE4" />
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 60} x2="600" y2={i * 60} stroke={green} strokeWidth="0.3" opacity="0.07" />
        ))}
        {steps.map((s, i) => {
          const x = startX + i * (BOX_W + GAP)
          const isQuery = i >= 4
          return (
            <g key={s}>
              <rect x={x} y={startY} width={BOX_W} height={BOX_H} rx="2" fill={isQuery ? green : '#C9C6BE'} opacity={isQuery ? 0.7 : 0.35} />
              <text x={x + BOX_W / 2} y={startY + 46} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={isQuery ? '#F5F4F0' : '#0A0A0A'} opacity={isQuery ? 0.95 : 0.5}>{s}</text>
              {i < steps.length - 1 && (
                <line x1={x + BOX_W + 1} y1={startY + BOX_H / 2} x2={x + BOX_W + GAP - 1} y2={startY + BOX_H / 2} stroke={green} strokeWidth="0.8" opacity="0.3" />
              )}
            </g>
          )
        })}
        <text x="300" y="230" textAnchor="middle" fill={green} fontSize="7.5" fontFamily="monospace" opacity="0.35" letterSpacing="1">RAG PIPELINE · RETRIEVE FIRST</text>
      </svg>
    )
  }

  if (category === 'Strategy') {
    const gates = [
      { label: 'FETCHABLE',   w: 160, x: 40 },
      { label: 'CHOSEN',      w: 120, x: 240 },
      { label: 'EXTRACTABLE', w: 80,  x: 400 },
    ]
    const H = 180
    const CY = 170
    return (
      <svg viewBox="0 0 600 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="340" fill="#EDEAE4" />
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 60} x2="600" y2={i * 60} stroke={green} strokeWidth="0.3" opacity="0.07" />
        ))}
        {gates.map((g, i) => (
          <g key={g.label}>
            <rect x={g.x} y={CY - H / 2} width={g.w} height={H} rx="2" fill={green} opacity={0.7 - i * 0.2} />
            <text x={g.x + g.w / 2} y={CY + H / 2 + 18} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={green} opacity={0.8 - i * 0.15} letterSpacing="1">{g.label}</text>
            {i < gates.length - 1 && (
              <line x1={g.x + g.w + 4} y1={CY} x2={gates[i + 1].x - 4} y2={CY} stroke={green} strokeWidth="1" opacity="0.3" markerEnd="url(#fga)" />
            )}
          </g>
        ))}
        <defs>
          <marker id="fga" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill={green} opacity="0.35" />
          </marker>
        </defs>
        <rect x="516" y={CY - 28} width="60" height="56" rx="2" fill={green} opacity="0.15" stroke={green} strokeWidth="1" />
        <text x="546" y={CY - 4} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={green}>CITED</text>
        <text x="546" y={CY + 12} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={green}>IN AI</text>
        <line x1="496" y1={CY} x2="516" y2={CY} stroke={green} strokeWidth="1" opacity="0.3" />
        {gates.map((g, i) => (
          <text key={i} x={g.x + g.w / 2} y={CY - H / 2 - 10} textAnchor="middle" fontFamily="monospace" fontSize="9" fill={green} opacity="0.4">0{i + 1}</text>
        ))}
        <text x="300" y="308" textAnchor="middle" fill={green} fontSize="8" fontFamily="monospace" opacity="0.3" letterSpacing="1">THREE GATES · AEO DIAGNOSTIC</text>
      </svg>
    )
  }

  if (category === 'Creative') {
    const W = 600
    const H = 340
    const LB = 42
    const frameX = 60
    const frameY = LB + 20
    const frameW = W - 120
    const frameH = H - LB * 2 - 40
    const third = frameW / 3
    const thirdH = frameH / 3
    return (
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width={W} height={H} fill="#EDEAE4" />
        <rect x="0" y="0" width={W} height={LB} fill={green} opacity="0.55" />
        <rect x="0" y={H - LB} width={W} height={LB} fill={green} opacity="0.55" />
        <rect x={frameX} y={frameY} width={frameW} height={frameH} fill="none" stroke={green} strokeWidth="0.6" opacity="0.25" />
        {[1, 2].map((i) => (
          <g key={i}>
            <line x1={frameX + third * i} y1={frameY} x2={frameX + third * i} y2={frameY + frameH} stroke={green} strokeWidth="0.4" opacity="0.12" />
            <line x1={frameX} y1={frameY + thirdH * i} x2={frameX + frameW} y2={frameY + thirdH * i} stroke={green} strokeWidth="0.4" opacity="0.12" />
          </g>
        ))}
        <circle cx={frameX + third * 2} cy={frameY + thirdH} r="8" stroke={green} strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx={frameX + third * 2} cy={frameY + thirdH} r="2" fill={green} opacity="0.25" />
        {([[frameX, frameY], [frameX + frameW, frameY], [frameX, frameY + frameH], [frameX + frameW, frameY + frameH]] as [number, number][]).map(([cx, cy], i) => {
          const dx = i % 2 === 0 ? 1 : -1
          const dy = i < 2 ? 1 : -1
          return (
            <g key={i}>
              <line x1={cx} y1={cy} x2={cx + dx * 16} y2={cy} stroke={green} strokeWidth="1.5" opacity="0.4" />
              <line x1={cx} y1={cy} x2={cx} y2={cy + dy * 16} stroke={green} strokeWidth="1.5" opacity="0.4" />
            </g>
          )
        })}
        <path d={`M${frameX + 30},${frameY + frameH / 2} Q${frameX + frameW / 2},${frameY + 20} ${frameX + frameW - 30},${frameY + frameH / 2}`} fill="none" stroke={green} strokeWidth="0.8" strokeDasharray="5 3" opacity="0.2" />
        <text x={W / 2} y={H - LB + 22} textAnchor="middle" fill={green} fontSize="8" fontFamily="monospace" opacity="0.5" letterSpacing="2">MIDJOURNEY · HIGGSFIELD · CINEMA</text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 600 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="340" fill="#EDEAE4" />
      <rect x="60" y="80" width="200" height="180" stroke={green} strokeWidth="1" fill="none" opacity="0.25" />
      <rect x="100" y="100" width="120" height="140" fill={green} opacity="0.06" />
      <line x1="60" y1="260" x2="540" y2="260" stroke={green} strokeWidth="0.5" opacity="0.2" />
      <text x="300" y="175" textAnchor="middle" fill={green} fontSize="52" fontFamily="serif" opacity="0.08" fontWeight="700">
        {index + 1}
      </text>
    </svg>
  )
}
