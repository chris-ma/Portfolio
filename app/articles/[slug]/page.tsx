import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticleBySlug, articles } from '@/lib/articles'
import { WisprMockup, ObsidianMockup, NotionMockup, FlowDiagram } from '@/components/articles/ArticleMockups'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} — Chris Ma`,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const formattedDate = new Date(article.date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  if (article.slug === 'wispr-obsidian-notion-pkm-stack') {
    return <PKMArticle article={article} formattedDate={formattedDate} />
  }

  notFound()
}

function PKMArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      {/* Back nav */}
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link
          href="/#notes"
          className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200"
        >
          ← Field Notes
        </Link>
      </div>

      {/* Article header */}
      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">
            {article!.category}
          </span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-[108px] text-brand-black leading-none tracking-tightest mb-4">
          CAPTURE<br />
          <span className="text-brand-cobalt">THINK.</span><br />
          COORD.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted border border-brand-concrete px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-[720px] mx-auto px-6 md:px-10 py-16 space-y-16">

        {/* Intro — the boundary rule */}
        <section>
          <div className="border-l-2 border-brand-cobalt pl-6 mb-8">
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              Most PKM setups fail the same way: tools overlap, filing decisions happen mid-thought, and
              maintenance debt compounds until the system collapses. The fix is boundaries — not cleverness.
            </p>
          </div>

          <Callout label="The Rule">
            <div className="space-y-2">
              <RuleRow icon="◎" tool="Wispr Flow" role="Capture" note="Input method only. No home of its own." />
              <RuleRow icon="◈" tool="Obsidian" role="Thinking" note="Anything that needs to be written: specs, research, RAG docs, decision logs." />
              <RuleRow icon="⊞" tool="Notion" role="Coordination" note="Anything that needs a status, date, or relation." />
            </div>
            <p className="font-sans text-sm text-brand-muted mt-4 pt-4 border-t border-brand-concrete">
              Test: does this need a status field? Yes → Notion. No → Obsidian.
            </p>
          </Callout>
        </section>

        {/* Flow diagram */}
        <figure>
          <div className="border border-brand-concrete overflow-hidden">
            <FlowDiagram />
          </div>
          <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
            System overview — Wispr feeds both capture destinations; Notion links out to Obsidian, never the reverse.
          </figcaption>
        </figure>

        {/* Wispr section */}
        <section>
          <SectionHeading number="01" title="Wispr Flow" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Wispr is not a storage layer. It&apos;s a dictation engine — you speak, text appears wherever your cursor is.
            The setup is minimal and the benefits compound fast once you&apos;re in the habit.
          </p>

          <SetupList items={[
            { label: 'Hotkey', value: 'fn (desktop default) — keep it frictionless.' },
            { label: 'Privacy Mode', value: 'Enable before dictating anything client-confidential. Audio and active-window screenshots are transmitted to Wispr\'s servers by default.' },
            { label: 'Custom dictionary', value: 'Seed immediately with domain vocabulary: Marketo, BrightEdge, AEM, GA4, GSC, OKLCH, Saltiga, Innovation Atlas, fishtripper, Prado.' },
            { label: 'Command Mode (Pro)', value: 'Select text → "make this more formal" / "turn this into bullet points."' },
            { label: 'Notetaker', value: 'Mac only, free plan, launched Aug 2026. System-audio meeting capture — no bot joins the call. Windows and mobile not yet available.' },
          ]} />

          <p className="font-sans text-sm text-brand-muted leading-relaxed mt-6 italic">
            Primary use case: dictating long Claude prompts and dumping raw ideas directly into the Obsidian inbox note.
          </p>

          {/* Wispr mockup */}
          <figure className="mt-8">
            <div className="border border-brand-concrete overflow-hidden">
              <WisprMockup />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Wispr Flow dictation capsule — hovers at cursor position, disappears when done.
            </figcaption>
          </figure>
        </section>

        {/* Obsidian section */}
        <section>
          <SectionHeading number="02" title="Obsidian" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Obsidian is the thinking layer. Every note lives in a local markdown file — no proprietary format,
            no lock-in. The vault structure below is opinionated but simple: four numbered folders plus a templates
            directory. The inbox folder does the heaviest lifting.
          </p>

          <CodeBlock>{`00-inbox/          ← everything lands here first, unprocessed
10-projects/       ← one folder per active project
20-areas/          ← ongoing: career, properties, fishing
30-library/        ← research + RAG source docs
40-archive/
_templates/`}</CodeBlock>

          <p className="font-sans text-sm text-brand-black/75 leading-relaxed mt-6 mb-4">
            Every note uses the same frontmatter structure — this makes the Bases views work and keeps retrieval consistent:
          </p>

          <CodeBlock>{`---
type:    # idea | project | research | log
project: # e.g. innovation-atlas, lambda, strata-tool
status:  # unprocessed | active | on-hold | done
created: # YYYY-MM-DD
tags: []
---`}</CodeBlock>

          {/* Obsidian mockup */}
          <figure className="mt-8">
            <div className="border border-brand-concrete overflow-hidden">
              <ObsidianMockup />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Obsidian vault — file tree with numbered folders, note editor showing standard frontmatter.
            </figcaption>
          </figure>

          <h3 className="font-display text-3xl text-brand-black mt-10 mb-4">Bases Views</h3>
          <p className="font-sans text-sm text-brand-black/70 leading-relaxed mb-6">
            Three views are all you need. Install Bases and configure these — they make the daily processing loop fast.
          </p>

          <div className="space-y-4">
            <BasesView
              name="Inbox"
              desc="All notes where status = 'unprocessed', ordered by creation date. This is where you start every morning."
              filter="status == 'unprocessed'"
            />
            <BasesView
              name="Active Projects"
              desc="All project-type notes currently active. Your working dashboard."
              filter="type == 'project' AND status == 'active'"
            />
            <BasesView
              name="Stale"
              desc="Unprocessed notes older than 30 days. Review candidates — delete, file, or promote to Notion."
              filter="status == 'unprocessed' AND created < today() - 30d"
            />
          </div>

          <Callout label="Plugin shortlist" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              Templater, QuickAdd, Obsidian Git, Excalidraw. Resist adding more until these earn their keep.
              The marginal plugin is where vaults go to rot.
            </p>
          </Callout>

          <p className="font-sans text-sm text-brand-muted leading-relaxed mt-6 italic">
            RAG note: keep one markdown file per topic in <code className="font-mono text-brand-cobalt text-xs">30-library/</code>,
            headings as retrieval anchors, no exotic formatting — this is already the ideal shape for feeding into Claude.
          </p>
        </section>

        {/* Notion section */}
        <section>
          <SectionHeading number="03" title="Notion" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Notion handles everything with a status or a date. If a project exists as an Obsidian folder, it
            also exists as a row in the Projects database — but working content lives in Obsidian, never duplicated
            in Notion.
          </p>

          {/* Notion mockup */}
          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <NotionMockup />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Notion Projects database — four core databases with relational links between them.
            </figcaption>
          </figure>

          <h3 className="font-display text-3xl text-brand-black mb-4">Database Schema</h3>

          <div className="space-y-6">
            <DatabaseSchema
              name="Projects"
              rows={[
                ['Name', 'Title'],
                ['Status', 'Select — Idea / Active / On Hold / Done'],
                ['Next Action', 'Text'],
                ['Target Date', 'Date'],
                ['Obsidian Link', 'URL → vault note'],
                ['Tasks', 'Relation → Tasks'],
                ['Ideas', 'Relation → Ideas'],
                ['Content', 'Relation → Content'],
              ]}
            />
            <DatabaseSchema
              name="Tasks"
              rows={[
                ['Name', 'Title'],
                ['Project', 'Relation → Projects'],
                ['Due', 'Date'],
                ['Status', 'Select — To Do / Doing / Done'],
              ]}
            />
            <DatabaseSchema
              name="Ideas"
              rows={[
                ['Name', 'Title'],
                ['Source', 'Select — Wispr / Meeting / Reading / Other'],
                ['Status', 'Select — Raw / Evaluating / Promoted / Archived'],
                ['Promoted To', 'Relation → Projects'],
              ]}
            />
            <DatabaseSchema
              name="Content"
              rows={[
                ['Name', 'Title'],
                ['Project', 'Relation → Projects'],
                ['Channel', 'Select — Blog / Social / Landing Page / Video'],
                ['Status', 'Select — Draft / Review / Scheduled / Live'],
                ['Publish Date', 'Date'],
              ]}
            />
          </div>
        </section>

        {/* The loop */}
        <section>
          <SectionHeading number="04" title="The Loop" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            The system only works if the loop runs. Three cadences, each with a distinct scope:
          </p>

          <div className="space-y-0 border border-brand-concrete">
            <LoopRow
              cadence="All day"
              label="Capture"
              desc="Wispr → Obsidian inbox or Notion Ideas. No filing decisions in the moment. Volume over curation."
            />
            <LoopRow
              cadence="10 min daily"
              label="Process"
              desc="Empty the Obsidian inbox — delete, file into a project folder, or promote to a Notion row. Nothing stays unprocessed overnight."
            />
            <LoopRow
              cadence="30 min Sunday AEST"
              label="Review"
              desc="Notion Projects board — set next action per project. Obsidian Stale view — archive or act."
              last
            />
          </div>
        </section>

        {/* Failure modes */}
        <section>
          <SectionHeading number="05" title="Failure Modes to Avoid" />

          <div className="space-y-4">
            <FailureMode
              n={1}
              title="No two-way sync"
              desc="Notion links out to Obsidian via URL. Never automate the reverse — keeping Notion as read-only of the vault avoids the infinite loop of conflicting updates."
            />
            <FailureMode
              n={2}
              title="No project duplication"
              desc="The row lives in Notion. The folder lives in Obsidian. Working content is in one place only. The moment you copy content across both, you've created a maintenance burden that never resolves."
            />
            <FailureMode
              n={3}
              title="Build in order"
              desc="Wispr + Obsidian inbox (week 1) → Notion spine (week 2) → Bases views (week 3) → agents last, once there's real data to run them against. Skipping ahead means building on air."
            />
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-base text-brand-black/70 leading-relaxed max-w-prose">
            This stack isn&apos;t clever. It&apos;s boring in the right way — each tool does one thing, the boundaries are
            explicit, and the maintenance loop is short enough to actually run. The goal isn&apos;t a perfect system,
            it&apos;s one that doesn&apos;t require willpower to maintain.
          </p>
        </section>

        {/* Back link */}
        <div className="border-t border-brand-concrete pt-8">
          <Link
            href="/#notes"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.1em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200"
          >
            ← Back to Field Notes
          </Link>
        </div>
      </article>
    </div>
  )
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-brand-concrete">
      <span className="font-display text-5xl text-brand-cobalt/20">{number}</span>
      <h2 className="font-display text-4xl md:text-5xl text-brand-black">{title.toUpperCase()}</h2>
    </div>
  )
}

function Callout({ label, children, className = '' }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-brand-graphite border border-brand-concrete p-6 ${className}`}>
      <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-cobalt mb-4 block">{label}</span>
      {children}
    </div>
  )
}

function RuleRow({ icon, tool, role, note }: { icon: string; tool: string; role: string; note: string }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-brand-cobalt/60 mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <span className="font-sans font-semibold text-sm text-brand-black">{tool}</span>
        <span className="font-sans text-sm text-brand-cobalt mx-1.5">=</span>
        <span className="font-sans font-semibold text-sm text-brand-cobalt">{role}.</span>
        <span className="font-sans text-sm text-brand-black/60 ml-1.5">{note}</span>
      </div>
    </div>
  )
}

function SetupList({ items }: { items: { label: string; value: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map(({ label, value }) => (
        <li key={label} className="flex gap-3 font-sans text-sm">
          <span className="text-brand-cobalt flex-shrink-0 w-[140px] font-medium">{label}</span>
          <span className="text-brand-black/70">{value}</span>
        </li>
      ))}
    </ul>
  )
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-brand-graphite border border-brand-concrete p-5 font-mono text-xs text-brand-black/70 leading-relaxed overflow-x-auto">
      {children}
    </pre>
  )
}

function BasesView({ name, desc, filter }: { name: string; desc: string; filter: string }) {
  return (
    <div className="border border-brand-concrete p-4">
      <div className="flex items-start justify-between gap-4 mb-2">
        <span className="font-sans font-semibold text-sm text-brand-black">{name}</span>
        <code className="font-mono text-[10px] text-brand-cobalt/70 bg-brand-graphite px-2 py-0.5 flex-shrink-0">{filter}</code>
      </div>
      <p className="font-sans text-sm text-brand-black/60">{desc}</p>
    </div>
  )
}

function DatabaseSchema({ name, rows }: { name: string; rows: [string, string][] }) {
  return (
    <div>
      <h4 className="font-sans font-semibold text-sm text-brand-cobalt tracking-[0.1em] uppercase mb-2">{name}</h4>
      <div className="border border-brand-concrete divide-y divide-brand-concrete/60">
        {rows.map(([prop, type]) => (
          <div key={prop} className="flex gap-0 font-sans text-xs">
            <span className="w-40 px-3 py-2 text-brand-black font-medium flex-shrink-0">{prop}</span>
            <span className="px-3 py-2 text-brand-muted border-l border-brand-concrete/60">{type}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LoopRow({ cadence, label, desc, last = false }: { cadence: string; label: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? 'border-b border-brand-concrete' : ''}`}>
      <div className="w-36 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/50">
        <span className="font-sans text-[10px] text-brand-muted block leading-snug">{cadence}</span>
        <span className="font-sans font-semibold text-sm text-brand-cobalt mt-0.5 block">{label}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/70 p-4 leading-relaxed">{desc}</p>
    </div>
  )
}

function FailureMode({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start">
      <span className="font-display text-4xl text-brand-cobalt/20 flex-shrink-0 leading-none">{n}</span>
      <div>
        <h4 className="font-sans font-semibold text-sm text-brand-black mb-1">{title}</h4>
        <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
