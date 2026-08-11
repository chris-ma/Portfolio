import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticleBySlug, articles } from '@/lib/articles'
import {
  WisprMockup, ObsidianMockup, NotionMockup, FlowDiagram,
  ContextWindowComparison, BenchmarkChart, CostComparison, WorkflowSplit,
  QueryFanOut, ThreeGateDiagram, SAGELoop, ContentShapeComparison,
} from '@/components/articles/ArticleMockups'

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

  if (article.slug === 'aeo-three-gate-diagnostic') {
    return <AEOArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'claude-code-vs-codex') {
    return <CodexArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'wispr-obsidian-notion-pkm-stack') {
    return <PKMArticle article={article} formattedDate={formattedDate} />
  }

  notFound()
}

function AEOArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
  return (
    <div className="bg-brand-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-10 pb-0">
        <Link href="/#notes" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
          ← Field Notes
        </Link>
      </div>

      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">{article!.category}</span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-8xl md:text-[110px] lg:text-[130px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          <span className="text-brand-cobalt">THREE</span><br />
          GATES.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted border border-brand-concrete px-2.5 py-1">{tag}</span>
          ))}
        </div>
      </header>

      <article className="max-w-[720px] mx-auto px-6 md:px-10 py-16 space-y-16">

        {/* Lede */}
        <section>
          <div className="border-l-2 border-brand-cobalt pl-6 space-y-4">
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              Most content optimization assumes a visibility problem. It usually isn&apos;t.
              It&apos;s a mechanism problem — the engine never opened your page, or chose not to click through,
              or couldn&apos;t extract a usable answer from what it found. Three different problems.
              Three different fixes.
            </p>
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              Treating them as one is why most AEO advice gives you motion without traction.
            </p>
          </div>
        </section>

        {/* Section 01 — The core reframe */}
        <section>
          <SectionHeading number="01" title="The core reframe" />

          <Callout label="The rule">
            <p className="font-sans text-base text-brand-cobalt font-medium leading-relaxed">
              The model can only answer from what it fetched. Not what exists. Not what is true.
              What it actually pulled into context for that specific query.
            </p>
          </Callout>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mt-6 mb-4">
            This sounds obvious stated plainly. It&apos;s not obvious in practice, because most content
            optimization still treats AI visibility the same way it treats search ranking — as a function
            of quality, relevance, and authority. Those things matter. But they&apos;re evaluated only after
            the engine has already decided to open your page. Get eliminated before that decision and
            quality is irrelevant.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed">
            The mechanism works in sequence. A human types a messy, multi-part question. The engine
            doesn&apos;t search for that exact query — it translates it into several clean, query-shaped
            searches (query fan-out). Each search returns its own candidate source list. The engine
            then decides which candidates to open, which pages to extract from, and finally which
            extracted chunks to use in composing the answer. Three decisions. Three places to fail.
          </p>
        </section>

        {/* Query fan-out diagram */}
        <figure>
          <div className="border border-brand-concrete overflow-hidden">
            <QueryFanOut />
          </div>
          <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
            Query fan-out — one human prompt becomes multiple discrete searches, each with its own candidate source list.
          </figcaption>
        </figure>

        {/* Section 02 — The cover */}
        <section>
          <SectionHeading number="02" title="The cover" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            Before any extraction, before any quality assessment, the engine makes a click decision
            based on what&apos;s visible without opening the page: URL, title, snippet, sometimes
            a freshness date. That&apos;s the cover. Content quality inside the page is irrelevant at this
            stage. If your title signals brand story rather than utility — if your snippet reads like
            a press release rather than an answer — the engine won&apos;t click through regardless of
            what&apos;s inside.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed">
            This is why a well-written product page with strong SEO fundamentals can still be
            invisible in AI answers. The cover wasn&apos;t shaped for the engine&apos;s selection criteria.
            Optimizing the inside without optimizing the cover is backwards.
          </p>
        </section>

        {/* Section 03 — The three gates */}
        <section>
          <SectionHeading number="03" title="The three gates" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            Use this diagnostic any time visibility is lower than expected. It tells you
            <em className="text-brand-black"> which</em> problem you have rather than asking you to guess.
          </p>

          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <ThreeGateDiagram />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Three gates — failing any one removes you from consideration for that query.
            </figcaption>
          </figure>

          <div className="space-y-4">
            <GateRow
              n="01"
              name="Fetchable"
              question="Can the engine reach and ingest your page?"
              checks={['Indexed and not blocked by robots.txt?', 'Not behind a paywall or authentication?', 'Crawl errors in GSC?']}
              symptom="Low visibility score across platforms — you're not in the candidate list at all."
            />
            <GateRow
              n="02"
              name="Chosen"
              question="Does your cover look like the answer?"
              checks={['Title signals utility, not brand?', 'Snippet is answer-shaped, not promotional?', 'Format matches the query intent — comparison vs single review?']}
              symptom="Decent visibility score but low rank (9th, 10th position). You're in the list but not being selected."
            />
            <GateRow
              n="03"
              name="Extractable"
              question="Can the engine lift a clean, usable chunk?"
              checks={['Answers visible in plain HTML, not JavaScript-rendered?', 'Not buried in accordions or tabs?', 'Text-based — not locked in images, charts, or video with no surrounding copy?']}
              symptom="Being cited but content isn't appearing in the actual answer. The engine found you but couldn't pull a clean extract."
            />
          </div>

          <Callout label="Platform divergence is diagnostic" className="mt-8">
            <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
              Ranking first on ChatGPT and tenth on Gemini isn&apos;t noise — it means two engines are
              applying different selection logic to the same content. The fix for each will be different.
              Averaging them into a single &quot;AI visibility&quot; number hides both the problem and the opportunity.
              Diagnose each platform separately.
            </p>
          </Callout>
        </section>

        {/* Section 04 — Score vs Rank */}
        <section>
          <SectionHeading number="04" title="Score vs Rank" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            These two metrics get conflated constantly. They measure completely different things.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-brand-cobalt/30 p-5 bg-brand-graphite">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-cobalt block mb-2">Visibility Score</span>
              <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
                Your raw presence in AI answers. This can rise for everyone simultaneously as engines
                cite more sources overall. A rising score tells you the category is growing.
              </p>
            </div>
            <div className="border border-brand-concrete p-5 bg-brand-graphite">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted block mb-2">Visibility Rank</span>
              <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
                Your position relative to competitors. This is the number that tells you whether
                you&apos;re actually winning. Track both, but optimise for rank.
              </p>
            </div>
          </div>

          <p className="font-sans text-sm text-brand-muted leading-relaxed italic">
            A rising score with flat or falling rank means the category is growing but you&apos;re not
            capturing more of it. This is the most common misread in AEO reporting — a chart that
            goes up and right masking a competitive position that&apos;s quietly getting worse.
          </p>
        </section>

        {/* Section 05 — The SAGE loop */}
        <section>
          <SectionHeading number="05" title="The SAGE loop" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            SAGE is a four-stage cycle — Setup, Analyze, Generate, Engineer — and its most useful
            property is that it tells you which stage to be in right now. The temptation is to default
            to Generate (producing content) because it feels productive. Generating against the wrong
            gaps, or without measurement, is how you ship a lot and move nothing.
          </p>

          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <SAGELoop />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              SAGE loop — a cycle you run continuously, not a checklist you complete once.
            </figcaption>
          </figure>

          <div className="space-y-0 border border-brand-concrete mb-6">
            <SAGERow
              stage="Setup"
              trigger={`"We don't know what to track yet"`}
              actions={['Define 5–10 prompts using real buyer language, not target keywords', 'Validate each has genuine query volume', 'Map 3–5 direct competitors for citation comparison', 'Tag by funnel stage and persona for later filtering']}
            />
            <SAGERow
              stage="Analyze"
              trigger={`"We're not sure what's missing or why we're losing"`}
              actions={['Run the three-gate diagnostic on 5 lowest-visibility priority pages', 'Pull citation data — see which competitor sources are winning compound-job queries', 'Check platform divergence — diagnose each engine separately', "Identify 3 \"should be winning but isn't\" pages"]}
            />
            <SAGERow
              stage="Generate"
              trigger={`"We know the gap but nothing is shipping"`}
              actions={['Prioritize highest-leverage fixes first — not the easiest ones', 'Rewrite one existing page as a utility asset as a test before building net-new', 'Re-run visibility check 2–4 weeks post-publish — never assume it worked']}
            />
            <SAGERow
              stage="Engineer"
              trigger={`"It's working but it's manual every time"`}
              actions={['Set recurring monthly minimum SAGE review', 'Build automated alerts for visibility drops on priority pages', "Write a one-page reusable brief template so wins aren't personality-dependent"]}
              last
            />
          </div>
        </section>

        {/* Section 06 — Content that gets cited */}
        <section>
          <SectionHeading number="06" title="Content that gets cited" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            Two concepts do most of the work here.
          </p>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            <strong className="text-brand-black">Compound jobs</strong> — queries that combine
            multiple needs in a single ask (&quot;cooling <em>and</em> support&quot;, not just
            &quot;cooling&quot;). These force the engine to be selective. It can&apos;t satisfy every angle,
            so it picks the source that covers the combination best. Single-angle content loses to
            content that resolves the compound job in one place. This is where differentiation
            concentrates, because most content is still written to rank on one keyword at a time.
          </p>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            <strong className="text-brand-black">Utility assets</strong> — content shaped to match
            what the engine is already fetching: comparative, high-density, answer-shaped. Explicitly
            not: product pages, brand-story copy, buried leads. The format question to ask before
            writing is &quot;does this match the shape of the answer the AI is already producing for
            this query?&quot; — not &quot;does this match our content brief?&quot;
          </p>

          <figure>
            <div className="border border-brand-concrete overflow-hidden">
              <ContentShapeComparison />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Utility asset vs product page — same topic, different shape, very different citation rate.
            </figcaption>
          </figure>

          <Callout label="Supply chain awareness" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              Every AI-generated answer has a traceable supply chain: specific sources, specific
              citations, specific reasons one brand gets mentioned over another. Most marketers never
              read this chain. Understanding which sources an engine draws from — and why those
              rather than others — shows you what content shape actually wins for a given query
              before you&apos;ve written a word.
            </p>
          </Callout>
        </section>

        {/* Section 07 — Stack application */}
        <section>
          <SectionHeading number="07" title="Applying this to the stack" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            The three-gate model maps directly onto existing tools. The diagnostic is faster
            when you already know which data to pull.
          </p>

          <div className="space-y-4">
            <StackRow
              tool="BrightEdge"
              gate="Gate 2 → 3"
              detail="Already tracks some AI-answer visibility — cross-reference its citation data against the three-gate model rather than treating an AI visibility drop as one undifferentiated problem. The citation data tells you which sources are winning; the gate diagnostic tells you why."
            />
            <StackRow
              tool="GSC"
              gate="Gate 1"
              detail="Crawl errors and index-coverage data map directly onto Gate 1 (Fetchable). Check this first, before assuming a content or positioning problem. A crawl block or indexing gap is a one-step fix; a content positioning problem is a quarter of work."
            />
            <StackRow
              tool="AEM"
              gate="Gate 3"
              detail="Audit page templates against the extraction principle. Are answers buried in accordions or tabs — a common AEM pattern — that block Gate 3? Extractability is a template-level problem, not a content-level one. Fixing the template fixes it across every page using it."
            />
            <StackRow
              tool="Marketo"
              gate="Gate 2"
              detail="Campaign landing pages built brand-first rather than utility-first are classic Gate 2 failures. A page optimized for a compound job (X vs Y for [use case]) will outperform a single-angle product page in AI citation terms even with identical SEO fundamentals. Rewrite one as a test before rebuilding the whole set."
            />
          </div>
        </section>

        {/* Source note */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-sm text-brand-muted leading-relaxed">
            The SAGE framework, three-gate model, query fan-out, and utility asset framing are sourced
            from Profound University&apos;s Profound 101 curriculum — Profound is the AEO analytics
            platform named sole Leader on G2&apos;s first AEO Grid (Winter 2026). The underlying framework
            is platform-agnostic. Product-specific performance claims from their marketing material
            should be treated with more scepticism than the model itself.
          </p>
        </section>

        <div className="border-t border-brand-concrete pt-8">
          <Link href="/#notes" className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.1em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
            ← Back to Field Notes
          </Link>
        </div>
      </article>
    </div>
  )
}

function GateRow({ n, name, question, checks, symptom }: {
  n: string; name: string; question: string; checks: string[]; symptom: string;
}) {
  return (
    <div className="border border-brand-concrete">
      <div className="flex items-baseline gap-3 p-4 pb-3 border-b border-brand-concrete bg-brand-graphite/40">
        <span className="font-display text-3xl text-brand-cobalt/25 leading-none">{n}</span>
        <span className="font-display text-2xl text-brand-black">{name.toUpperCase()}</span>
      </div>
      <div className="p-4 space-y-3">
        <p className="font-sans text-sm font-semibold text-brand-black/80">{question}</p>
        <ul className="space-y-1">
          {checks.map((c) => (
            <li key={c} className="font-sans text-sm text-brand-muted flex gap-2">
              <span className="text-brand-cobalt/60 flex-shrink-0">✓</span>{c}
            </li>
          ))}
        </ul>
        <div className="pt-2 border-t border-brand-concrete/60">
          <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-muted mr-2">Symptom</span>
          <span className="font-sans text-xs text-brand-black/60 italic">{symptom}</span>
        </div>
      </div>
    </div>
  )
}

function SAGERow({ stage, trigger, actions, last = false }: {
  stage: string; trigger: string; actions: string[]; last?: boolean;
}) {
  return (
    <div className={`flex gap-0 ${!last ? 'border-b border-brand-concrete' : ''}`}>
      <div className="w-32 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/40">
        <span className="font-display text-xl text-brand-cobalt block">{stage.toUpperCase()}</span>
        <span className="font-sans text-[10px] text-brand-muted leading-tight block mt-1 italic">{trigger}</span>
      </div>
      <ul className="p-4 space-y-1.5 flex-1">
        {actions.map((a) => (
          <li key={a} className="font-sans text-sm text-brand-black/70 flex gap-2">
            <span className="text-brand-cobalt/40 flex-shrink-0">—</span>{a}
          </li>
        ))}
      </ul>
    </div>
  )
}

function StackRow({ tool, gate, detail }: { tool: string; gate: string; detail: string }) {
  return (
    <div className="border border-brand-concrete p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-sans font-semibold text-sm text-brand-black">{tool}</span>
        <span className="font-mono text-[10px] text-brand-cobalt bg-brand-graphite px-2 py-0.5 border border-brand-cobalt/25">
          {gate}
        </span>
      </div>
      <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{detail}</p>
    </div>
  )
}

function CodexArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
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

      {/* Header */}
      <header className="max-w-[900px] mx-auto px-6 md:px-10 pt-12 pb-10 border-b border-brand-concrete">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-cobalt border border-brand-cobalt/40 px-3 py-1.5">
            {article!.category}
          </span>
          <span className="font-sans text-[11px] text-brand-muted">{formattedDate}</span>
          <span className="font-sans text-[11px] text-brand-muted">·</span>
          <span className="font-sans text-[11px] text-brand-muted">{article!.readTime}</span>
        </div>

        <h1 className="font-display text-7xl md:text-9xl lg:text-[120px] text-brand-black leading-none tracking-tightest mb-4">
          THE<br />
          <span className="text-brand-cobalt">$140</span><br />
          QUESTION.
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

      {/* Body */}
      <article className="max-w-[720px] mx-auto px-6 md:px-10 py-16 space-y-16">

        {/* Lede */}
        <section>
          <div className="border-l-2 border-brand-cobalt pl-6 space-y-4">
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              In one documented Express.js refactor, Claude Code cost $155. Codex cost $15. Same task, same outcome —
              a working, passing codebase — but one ran 10× the bill. That gap is real. So is the other direction:
              blind code-quality reviews of the same output preferred Claude Code 67% of the time vs Codex&apos;s 25%.
            </p>
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              Neither number wins the argument cleanly. They tell you what you&apos;re trading, not what to choose.
            </p>
          </div>
        </section>

        {/* Section 01 — Context window */}
        <section>
          <SectionHeading number="01" title="Context window" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            1M tokens vs 200K. On a greenfield project with clean module boundaries, the difference is irrelevant.
            On a three-year-old monolith with circular imports, undocumented global state, and ten contributors&apos;
            worth of conflicting conventions — it&apos;s the whole game.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            Claude Code can hold the full codebase graph while making a change. Codex has to sample it. Whether
            that sampling degrades the result depends entirely on how interconnected the code is. On a tightly
            coupled legacy codebase, it usually does.
          </p>

          <figure>
            <div className="border border-brand-concrete overflow-hidden">
              <ContextWindowComparison />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              1M vs 200K token context window — 5× difference; significant on large, interconnected codebases.
            </figcaption>
          </figure>

          <p className="font-sans text-sm text-brand-muted leading-relaxed mt-6 italic">
            This is the most durable differentiator between the two tools — not benchmark scores, which shift with
            every model update, but a structural fact about how much each agent can hold at once.
          </p>
        </section>

        {/* Section 02 — Benchmarks */}
        <section>
          <SectionHeading number="02" title="Benchmarks vs reviews" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            On Terminal-Bench 2.0, Codex leads: 82.7% vs 69.4%. On SWE-bench Verified, they&apos;re effectively
            tied: 88.7% vs 88.6%. Both measure whether the tool completed an automated evaluation of a coding task —
            not whether a senior developer would merge that output without edits.
          </p>

          <figure className="my-8">
            <div className="border border-brand-concrete overflow-hidden">
              <BenchmarkChart />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Benchmark scores vs blind code-quality reviews — divergence is the story.
            </figcaption>
          </figure>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            The blind review number is the interesting one. A 42-point gap in human code-quality preference doesn&apos;t
            show up in benchmark pass rates because benchmarks are binary — the test either passes or it doesn&apos;t.
            They don&apos;t measure readability, consistency with existing patterns, or whether the approach you&apos;d
            have chosen yourself.
          </p>

          <Callout label="How to read these numbers">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              SWE-bench Verified and Terminal-Bench measure different tasks — treat them as directional, not
              directly comparable. Blind review numbers vary by evaluator and task type. Verify current figures
              at source before using them to justify budget decisions.
            </p>
          </Callout>
        </section>

        {/* Section 03 — Cost */}
        <section>
          <SectionHeading number="03" title="The actual cost" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Claude Code burns 3–4× more tokens per task than Codex on comparable benchmarks. Extended thinking
            is on by default and billed at 5× the input token rate — meaningful if you&apos;re running it
            iteratively against large files.
          </p>

          <figure className="my-8">
            <div className="border border-brand-concrete overflow-hidden">
              <CostComparison />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Same Express.js refactor — one documented community test. Treat as directional.
            </figcaption>
          </figure>

          <div className="space-y-4 mt-6">
            <CostNote
              label="Subscription structure"
              text="Claude Code runs on your Claude subscription. Usage is shared across Claude Code, Claude.ai chat, and Cowork — heavy chat use eats into your coding budget. The $20 Pro tier is suited for light usage; daily multi-file work generally needs the $100 Max tier."
            />
            <CostNote
              label="Codex billing"
              text="Codex uses token-based credits separate from ChatGPT's chat budget. Sandbox costs vary by month and codebase size — hard to forecast upfront but easier to cap per task."
            />
            <CostNote
              label="The right comparison"
              text="Neither is cheap at scale. Model the cost against hours saved, not against each other in isolation. A $140 difference per refactor is noise if it replaces a day of senior engineering time. It isn't if you're running 50 tasks a week."
            />
          </div>
        </section>

        {/* Section 04 — When to use which */}
        <section>
          <SectionHeading number="04" title="When to reach for each" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            The most effective pattern isn&apos;t picking one tool — it&apos;s knowing which moment calls for which.
          </p>

          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <WorkflowSplit />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Workflow fit — the decision is about task shape, not tool quality.
            </figcaption>
          </figure>

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            Reach for <strong className="text-brand-cobalt font-semibold">Claude Code</strong> when you&apos;re in
            the editor actively building something, the context needs to span many files, and the iteration is
            conversational — you&apos;re steering, not just queuing work.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            Reach for <strong className="text-brand-black font-semibold">Codex</strong> when the task is
            well-defined enough to hand off unattended: dependency bumps, isolated type fixes, feature flags on
            a stable interface. It handles async PRs well precisely because the task spec does the steering.
          </p>
          <p className="font-sans text-sm text-brand-muted leading-relaxed italic">
            Agent Teams — multiple Claude Code instances sharing a task list — changes this calculus somewhat for
            large parallel workloads, but that&apos;s a workflow for teams rather than solo development.
          </p>
        </section>

        {/* Section 05 — Practical tips */}
        <section>
          <SectionHeading number="05" title="Getting more out of Claude Code" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Three habits that materially affect both output quality and cost:
          </p>

          <div className="space-y-0 border border-brand-concrete">
            <TipRow
              label="Cap extended thinking"
              detail={<>On by default, billed at 5× input token rate. Use <code className="font-mono text-brand-cobalt text-xs">MAX_THINKING_TOKENS</code> or <code className="font-mono text-brand-cobalt text-xs">/effort</code> to drop it for tasks that don&apos;t need deep reasoning — most Marketo scripting, AEM component work, small fixes.</>}
            />
            <TipRow
              label="Checkpoint before stepping away"
              detail="Save progress to a doc, then /clear and restart with compressed context rather than resuming a stale session. A session that's gone cold accumulates confusion — you're better off giving it a clean brief than asking it to pick up mid-thought."
            />
            <TipRow
              label="Right model, right task"
              detail="Default to Sonnet for routine work — scripting, component scaffolding, small fixes. Reserve Opus for genuine multi-file architecture decisions where the extra context comprehension justifies the token cost."
              last
            />
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-base text-brand-black/70 leading-relaxed max-w-prose">
            Both tools are accelerators on well-scoped tasks. Neither replaces architectural judgement on
            ambiguous requirements — that&apos;s still your job. The question isn&apos;t which AI is smarter;
            it&apos;s which workflow fits what you&apos;re building today.
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

function CostNote({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex gap-4 items-start border-l border-brand-concrete pl-4">
      <div>
        <span className="font-sans font-semibold text-sm text-brand-black block mb-1">{label}</span>
        <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function TipRow({ label, detail, last = false }: { label: string; detail: React.ReactNode; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? 'border-b border-brand-concrete' : ''}`}>
      <div className="w-44 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/50">
        <span className="font-sans font-semibold text-sm text-brand-cobalt leading-snug block">{label}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/70 p-4 leading-relaxed">{detail}</p>
    </div>
  )
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
