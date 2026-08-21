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
  MCPInteropDiagram,
  N8NMCPBridgeDiagram,
  ModelLandscapeDiagram,
  AttackSuccessRateDiagram,
  OSINTCycleDiagram,
  PerceptionAccuracyDiagram,
  EmailFlowPriorityDiagram,
  RateLimitStackDiagram,
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
        {/* Visual area */}
        <div
          className="relative overflow-hidden mb-5 border border-bk-rule/60"
          style={{ aspectRatio: featured ? '16/7' : '3/2' }}
        >
          <ArticleVisual slug={article.slug} category={article.category} index={index} />

          {/* Category + read-time overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-bk-muted bg-bk-deep/90 px-3 py-1.5 border border-bk-rule/60">
              {article.category}
            </span>
            <span className="font-mono text-[9px] tracking-[0.1em] text-bk-muted/70 bg-bk-deep/80 px-2.5 py-1.5 border border-bk-rule/60">
              {article.readTime}
            </span>
          </div>

          {/* Hover reveal */}
          <div className="absolute inset-0 overflow-hidden z-20">
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-bk-deep/96 p-5 border-t border-bk-rule/60"
              initial={{ y: '100%', opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-sm text-bk-muted leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-2">
          <h3
            className={`font-book text-bk-parchment group-hover:text-bk-gold transition-colors duration-150 leading-tight ${
              featured ? 'text-4xl md:text-5xl' : ''
            }`}
            style={!featured ? { fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' } : undefined}
          >
            {article.title}
          </h3>
          <p className="font-sans text-sm text-bk-muted leading-snug">{article.subtitle}</p>

          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.18em] uppercase text-bk-muted/60 border border-bk-rule/60 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono text-[9px] text-bk-muted/50 flex-shrink-0 ml-4">
              {formattedDate}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

function DiagramWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-bk-deep">
      {children}
    </div>
  )
}

function ArticleVisual({ slug, category, index }: { slug: string; category: string; index: number }) {
  if (slug === 'api-rate-limits-design') return <DiagramWrapper><RateLimitStackDiagram /></DiagramWrapper>
  if (slug === 'data-visualization-charts') return <DiagramWrapper><PerceptionAccuracyDiagram /></DiagramWrapper>
  if (slug === 'email-marketing-automation') return <DiagramWrapper><EmailFlowPriorityDiagram /></DiagramWrapper>
  if (slug === 'osint-ai-intelligence') return <DiagramWrapper><OSINTCycleDiagram /></DiagramWrapper>
  if (slug === 'prompt-injection-llm-security') return <DiagramWrapper><AttackSuccessRateDiagram /></DiagramWrapper>
  if (slug === 'chinese-llms-open-weight') return <DiagramWrapper><ModelLandscapeDiagram /></DiagramWrapper>
  if (slug === 'n8n-process-automation') return <DiagramWrapper><N8NMCPBridgeDiagram /></DiagramWrapper>
  if (slug === 'mcp-model-context-protocol') return <DiagramWrapper><MCPInteropDiagram /></DiagramWrapper>
  if (slug === 'social-media-algorithms-kpis') return <DiagramWrapper><PlatformEngagementDiagram /></DiagramWrapper>
  if (slug === 'ai-hallucination-reduction') return <DiagramWrapper><CalibrationVsAccuracyDiagram /></DiagramWrapper>
  if (slug === 'ai-self-improvement-wellbeing') return <DiagramWrapper><AIUsageTypologyDiagram /></DiagramWrapper>
  if (slug === 'customer-journey-mapping') return <DiagramWrapper><JourneyMapVisual /></DiagramWrapper>
  if (slug === 'marketing-funnel-engineering') return <DiagramWrapper><FunnelStageDiagram /></DiagramWrapper>
  if (slug === 'mvp-traction-validation') return <DiagramWrapper><ValidationSequenceDiagram /></DiagramWrapper>
  if (slug === 'design-taste-frontend') return <DiagramWrapper><SwapTestDiagram /></DiagramWrapper>
  if (slug === 'content-writing-eeat') return <DiagramWrapper><EEATFramework /></DiagramWrapper>
  if (slug === 'app-security-rls-owasp') return <DiagramWrapper><RLSStateDiagram /></DiagramWrapper>
  if (slug === 'hermes-agent-persistent-ai') return <DiagramWrapper><HermesMemoryTimeline /></DiagramWrapper>
  if (slug === 'tokenmaxxing-ai-productivity') return <DiagramWrapper><VanityVsValue /></DiagramWrapper>
  if (slug === 'ai-image-video-generation-midjourney-higgsfield') return <DiagramWrapper><CameraMovesGrid /></DiagramWrapper>
  if (slug === 'agentic-ai-loops-workflows') return <DiagramWrapper><WorkflowSpectrum /></DiagramWrapper>
  if (slug === 'rag-retrieval-augmented-generation') return <DiagramWrapper><RAGPipeline /></DiagramWrapper>
  if (slug === 'aeo-three-gate-diagnostic') return <DiagramWrapper><ThreeGateDiagram /></DiagramWrapper>
  if (slug === 'claude-code-vs-codex') return <DiagramWrapper><CostComparison /></DiagramWrapper>
  if (slug === 'wispr-obsidian-notion-pkm-stack') return <DiagramWrapper><FlowDiagram /></DiagramWrapper>

  return <ArticleCategoryVisual category={category} index={index} />
}

function ArticleCategoryVisual({ category, index }: { category: string; index: number }) {
  const gold = '#D4AF6E'
  const rule = '#2A4455'

  if (category === 'Systems') {
    return (
      <svg viewBox="0 0 600 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="340" fill="#0D1F28" />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 57} x2="600" y2={i * 57} stroke={rule} strokeWidth="0.5" opacity="0.4" />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="340" stroke={rule} strokeWidth="0.5" opacity="0.4" />
        ))}
        <circle cx="120" cy="170" r="42" stroke={gold} strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="300" cy="170" r="42" stroke={gold} strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="480" cy="170" r="42" stroke={gold} strokeWidth="1" fill="none" opacity="0.3" />
        <line x1="163" y1="170" x2="255" y2="170" stroke={gold} strokeWidth="0.8" opacity="0.35" />
        <line x1="343" y1="170" x2="435" y2="170" stroke={gold} strokeWidth="0.8" opacity="0.35" />
      </svg>
    )
  }

  if (category === 'Creative') {
    return (
      <svg viewBox="0 0 600 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="340" fill="#0D1F28" />
        <rect x="0" y="0" width="600" height="42" fill={gold} opacity="0.12" />
        <rect x="0" y="298" width="600" height="42" fill={gold} opacity="0.12" />
        <rect x="60" y="62" width="480" height="216" fill="none" stroke={rule} strokeWidth="0.8" opacity="0.5" />
        {[1, 2].map((i) => (
          <g key={i}>
            <line x1={60 + 160 * i} y1="62" x2={60 + 160 * i} y2="278" stroke={rule} strokeWidth="0.5" opacity="0.35" />
            <line x1="60" y1={62 + 72 * i} x2="540" y2={62 + 72 * i} stroke={rule} strokeWidth="0.5" opacity="0.35" />
          </g>
        ))}
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 600 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="340" fill="#0D1F28" />
      <rect x="60" y="80" width="200" height="180" stroke={rule} strokeWidth="1" fill="none" opacity="0.5" />
      <line x1="60" y1="260" x2="540" y2="260" stroke={rule} strokeWidth="0.5" opacity="0.4" />
      <text x="300" y="195" textAnchor="middle" fill={gold} fontSize="80" fontFamily="Georgia, serif" opacity="0.07" fontWeight="700">
        {index + 1}
      </text>
    </svg>
  )
}
