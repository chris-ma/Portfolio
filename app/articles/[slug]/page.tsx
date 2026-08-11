import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticleBySlug, articles } from '@/lib/articles'
import {
  WisprMockup, ObsidianMockup, NotionMockup, FlowDiagram,
  ContextWindowComparison, BenchmarkChart, CostComparison, WorkflowSplit,
  QueryFanOut, ThreeGateDiagram, SAGELoop, ContentShapeComparison,
  RAGPipeline, HybridRetrievalDiagram, ChunkingComparison, AdaptiveRAGDiagram,
  WorkflowSpectrum, ReActLoop, PlanExecuteDiagram, AgentFailureModeDiagram,
  MidjourneyParams, CameraMovesGrid, PromptFormulaDiagram, ToolComparisonSplit,
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

  if (article.slug === 'agentic-ai-loops-workflows') {
    return <AgenticArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'rag-retrieval-augmented-generation') {
    return <RAGArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'aeo-three-gate-diagnostic') {
    return <AEOArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'claude-code-vs-codex') {
    return <CodexArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'wispr-obsidian-notion-pkm-stack') {
    return <PKMArticle article={article} formattedDate={formattedDate} />
  }

  if (article.slug === 'ai-image-video-generation-midjourney-higgsfield') {
    return <CreativeToolsArticle article={article} formattedDate={formattedDate} />
  }

  notFound()
}

function AgenticArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
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
          STOP<br />
          <span className="text-brand-cobalt">BUILDING</span><br />
          AGENTS.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Lede */}
        <section>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            Most things marketed as AI agents are not agents. They are workflows — fixed sequences of LLM calls
            with predefined branching logic and deterministic execution paths. The distinction matters, not
            because "workflow" is a demotion, but because calling a workflow an agent tends to make you engineer
            it wrong. You add complexity it doesn't need, remove predictability you were counting on, and then
            wonder why the system that was supposed to be intelligent keeps doing unexpected things.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            Anthropic's own engineering team puts it plainly: find the simplest solution possible, and only
            increase complexity when a simpler workflow genuinely can't do the job. The most common production
            mistake isn't under-engineering AI systems — it's reaching for autonomous loops when a fixed
            workflow would have been cheaper, faster, and far more debuggable.
          </p>
        </section>

        {/* Section 1 */}
        <section>
          <SectionHeading number="01" title="The distinction that actually matters" />
          <div className="space-y-4 mt-6">
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              A <strong className="text-brand-black">workflow</strong> executes LLM calls and tool calls through
              code paths you define in advance. You decide the structure; the model fills in the content. It is
              predictable, testable, and cheaper because every call has a known place in a known sequence.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              An <strong className="text-brand-black">agent</strong> is a system where the LLM dynamically
              decides its own sequence of actions based on what it observes — rather than following a control
              flow you wrote in advance. You own the goal and the guardrails; the model decides what to do next.
              Flexible. Harder to predict. More expensive. And errors can compound across steps in ways they
              can't in a fixed workflow.
            </p>
            <p className="font-sans text-base text-brand-black/75 leading-relaxed">
              The practical test: can you enumerate the steps this task requires before running it? If yes,
              you're building a workflow and should. If no — if the right next step genuinely depends on what
              the previous step returned, and you can't anticipate that in advance — that's when an agent
              earns its complexity.
            </p>
          </div>
        </section>

        {/* Section 2 — Five patterns */}
        <section>
          <SectionHeading number="02" title="The five patterns — use these first" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            These are Anthropic's own taxonomy. Five compositional patterns that are all technically workflows —
            predefined code paths — but that together cover nearly every real production use case.
            If your task fits any of these, you don't need a full autonomous agent.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-10">
            <WorkflowSpectrum />
          </div>

          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <AgentPatternRow
              n="01" label="Prompt chaining" when="Fixed, ordered sub-steps"
              desc={"Each LLM call processes the output of the previous one, in a fixed sequence. The model at step 3 doesn't decide to go to step 3 — your code does. Use when the task decomposes cleanly into ordered stages whose structure you can write down in advance."}
            />
            <AgentPatternRow
              n="02" label="Routing" when="Different input types"
              desc={"An LLM classifies the input and directs it to a specialized follow-up path. The model decides which branch, but not what the branches are. Use when different input types need genuinely different handling that's too varied to cover with one general prompt."}
            />
            <AgentPatternRow
              n="03" label="Parallelization" when="Independent subtasks"
              desc={"Multiple LLM calls run simultaneously, results aggregated at the end. Two sub-variants: sectioning (divide the problem, run each part independently) and voting (run the same task multiple ways, pick the consensus or best answer). Use when subtasks have no dependencies on each other."}
            />
            <AgentPatternRow
              n="04" label="Orchestrator–workers" when="Subtasks unknown until examined"
              desc={"A central LLM dynamically breaks a task into pieces and delegates to worker LLMs. The orchestrator decides the subtasks; the workers execute them. Closer to agentic than the previous patterns — the orchestrator has real decision-making power — but still a workflow if the worker execution paths are predefined."}
            />
            <AgentPatternRow
              n="05" label="Evaluator–optimizer" when="Clear quality bar, iteration helps"
              desc={"One LLM generates a response; a second evaluates it against criteria; loop until it passes or you hit a ceiling. The classic 'generate and critique' pattern. Works when you can state what 'good' looks like precisely enough that an LLM can score it reliably — if you can't, the loop runs without improving anything."} last
            />
          </div>

          <Callout label="Decision rule">
            If your task structure is knowable in advance, pick from this table.
            Only move to a full autonomous agent when the task genuinely requires dynamic, open-ended
            decision-making that can't be pinned down as a fixed sequence, route, or evaluation loop.
          </Callout>
        </section>

        {/* Section 3 — Loop patterns */}
        <section>
          <SectionHeading number="03" title="When you actually need a loop" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-10">
            Once a task does need genuine autonomy, two loop shapes handle the majority of production cases.
            The choice between them is less about which is "better" and more about which failure mode
            you're most worried about.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">ReAct (Reason + Act)</h3>
              <div className="border border-brand-concrete overflow-hidden mb-5">
                <ReActLoop />
              </div>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed mb-3">
                The foundational loop. The model alternates: <em>Thought</em> (what do I know, what do I
                need next) → <em>Action</em> (call a tool) → <em>Observation</em> (what came back) →
                loop or terminate.
              </p>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Strengths: transparent, auditable, adapts immediately to unexpected results. If a search
                returns nothing, it reformulates. If an API errors, it tries a fallback. The loop recalibrates
                after every single step.
              </p>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed mt-3">
                Weakness: prone to getting stuck on tasks that need strict execution order, since it
                recalibrates at every step rather than committing to a plan.
              </p>
              <div className="mt-4 p-3 border border-brand-concrete bg-brand-graphite/30">
                <p className="font-sans text-xs text-brand-cobalt font-medium">Use for:</p>
                <p className="font-sans text-xs text-brand-black/60 mt-1">Exploratory, open-ended tasks — debugging, research, anything where the right next step can't be known until the previous step returns.</p>
              </div>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">Plan-and-Execute</h3>
              <div className="border border-brand-concrete overflow-hidden mb-5">
                <PlanExecuteDiagram />
              </div>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed mb-3">
                Splits thinking into two phases. A planner LLM writes the full multi-step plan up front,
                then an executor runs each step in sequence — or in parallel where steps don't depend
                on each other.
              </p>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Strengths: locks in a coherent strategy before any irreversible action is taken. Reduces
                step-count on long-horizon tasks. Lets a cheaper model do plain execution once a stronger
                model has done the planning.
              </p>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed mt-3">
                Weakness: less adaptive — if an early step produces an unexpected result, the plan
                doesn't automatically recalibrate the way ReAct does.
              </p>
              <div className="mt-4 p-3 border border-brand-concrete bg-brand-graphite/30">
                <p className="font-sans text-xs text-brand-cobalt font-medium">Use for:</p>
                <p className="font-sans text-xs text-brand-black/60 mt-1">Long, structured tasks where you need a guaranteed sequence and mid-stream drift — the agent executing well but in the wrong order — is the failure mode you're most worried about.</p>
              </div>
            </div>
          </div>

          <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">Beyond the two basics</h3>
          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <AgentLoopRow label="Reflection" desc={"The simplest quality loop: generate output, evaluate it, accept or revise. The agent becomes its own reviewer. Identical in shape to evaluator-optimizer, but run as a loop within a single agent rather than as two separate calls."} />
            <AgentLoopRow label="Multi-agent / Debate" desc={"A coordinator LLM breaks a large task into pieces and dispatches to specialized sub-agents. For high-stakes factual decisions: spawn multiple agents with different stances and have them argue; a judge synthesizes the result. Measurably reduces hallucination because no single confident wrong answer goes unchallenged."} />
            <AgentLoopRow label="Agentic RAG" desc={"Retrieval embedded inside the reasoning loop rather than run once upfront. The agent decides mid-loop when it needs to retrieve and what to retrieve, based on what it's discovered so far. Different from standard RAG — retrieval itself becomes an available action at every step, not a fixed preprocessing stage."} />
            <AgentLoopRow label="Loop engineering / checkpointing" desc={"For long-running tasks: periodically checkpoint progress to a durable store — a doc, a file, a task list — and restart the loop with compressed context rather than letting the context window grow unbounded. The emerging standard for multi-session or multi-day tasks."} last />
          </div>
        </section>

        {/* Section 4 — Failure modes */}
        <section>
          <SectionHeading number="04" title="The four failure modes" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            These are what production teams actually learn, usually after deploying something that seemed to work fine in testing.
            Design against all of them before you build, not after.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-8">
            <AgentFailureModeDiagram />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <h4 className="font-sans font-semibold text-sm text-brand-black">Loop-stuck behavior</h4>
              <p className="font-sans text-sm text-brand-black/60 leading-relaxed">
                ReAct-style agents can cycle without making progress if the termination condition is
                poorly specified. The fix: define an explicit "done" condition, and add a hard step-count
                ceiling as a backstop. Both. Not one or the other.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans font-semibold text-sm text-brand-black">Error compounding</h4>
              <p className="font-sans text-sm text-brand-black/60 leading-relaxed">
                Each autonomous step is a chance to drift further from the goal. The longer the loop,
                the more this matters. Grounding in real environment feedback at each step — tool output,
                execution results — is what keeps this in check. Not just model reasoning.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans font-semibold text-sm text-brand-black">Circular evaluation</h4>
              <p className="font-sans text-sm text-brand-black/60 leading-relaxed">
                The evaluator-optimizer pattern breaks down when the evaluator can't reliably distinguish
                good output from bad. If you can't clearly state what "good" looks like, this pattern
                will loop without actually improving anything. State the quality bar before you build the loop.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-sans font-semibold text-sm text-brand-black">Over-engineering</h4>
              <p className="font-sans text-sm text-brand-black/60 leading-relaxed">
                Reaching for multi-agent orchestration or full autonomy on tasks that are actually
                fixed-sequence or simple classification problems. Reported as the single most common
                production mistake — not the reverse. The same note applies to agent frameworks:
                they simplify getting started, but hide what's actually happening, making debugging harder.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 — Build sequence */}
        <section>
          <SectionHeading number="05" title="Build it right — six steps in order" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            These steps are sequenced deliberately. Skipping ahead is the failure mode.
          </p>

          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <AgentBuildStep n={1} label="State the goal and the done condition"
              desc={"Before writing any code or prompt. If you can't state what success looks like, you're not ready to build the loop yet — you're still scoping the problem. A vague goal produces a loop that can never terminate correctly."} />
            <AgentBuildStep n={2} label="Try the simplest workflow pattern first"
              desc={"Usually prompt chaining or routing. Only move up the table toward orchestrator-workers or full autonomy if the simpler pattern demonstrably can't handle the task's actual complexity. Most don't need to move up."} />
            <AgentBuildStep n={3} label="Build guardrails before you build capability"
              desc={"Step-count ceilings, explicit termination conditions, human-in-the-loop checkpoints at points where an irreversible or high-stakes action would otherwise happen unsupervised. These come first."} />
            <AgentBuildStep n={4} label="Ground every step in real feedback"
              desc={"Tool call results, execution output, retrieved documents. Not just model reasoning. This is what lets an agent self-correct instead of drifting. A model that only reasons from its own prior output will compound its own errors."} />
            <AgentBuildStep n={5} label="Checkpoint long-running loops"
              desc={"To a durable external store rather than letting them run unbounded inside one context window. Compress and restart rather than accumulate indefinitely. Long context windows don't fix this — they delay it."} />
            <AgentBuildStep n={6} label="Evaluate before you scale"
              desc={"Measure whether the loop actually improves outcomes over the simpler workflow before committing to it in production. Same discipline as RAG: 'it looks like it's working' is not evaluation. The gain from autonomy should be measurable, not just felt."} last />
          </div>

          <Callout label="Field lesson">
            Start with direct LLM API calls. Most patterns in this piece take only a few lines of code
            without a framework. If you do adopt a framework, understand what it's doing underneath —
            incorrect assumptions about the internals are a common source of error, and frameworks that
            hide the prompts make debugging those errors much harder.
          </Callout>
        </section>

        {/* Quick reference */}
        <section>
          <SectionHeading number="06" title="Quick reference" />
          <p className="font-sans text-sm text-brand-muted mb-5 mt-4">Which pattern fits which task.</p>
          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            {([
              ['Fixed, ordered sub-steps', 'Prompt chaining'],
              ['Different input types need different handling', 'Routing'],
              ['Independent subtasks, or want consensus across attempts', 'Parallelization'],
              ['Subtasks unknown until main task is examined', 'Orchestrator-workers'],
              ['Clear quality bar exists and iteration helps', 'Evaluator-optimizer'],
              ['Exploratory, open-ended, uncertain next step', 'ReAct'],
              ['Long, structured, guaranteed sequence required', 'Plan-and-Execute'],
              ['High-stakes factual decision', 'Debate pattern (multi-agent)'],
              ['Retrieval need only becomes clear mid-task', 'Agentic RAG'],
              ['Task spans multiple sessions or days', 'Loop engineering + checkpointing'],
            ] as [string, string][]).map(([situation, pattern], i, arr) => (
              <div key={situation} className={`flex gap-0 ${i < arr.length - 1 ? '' : ''}`}>
                <div className="w-1/2 p-4 border-r border-brand-concrete">
                  <p className="font-sans text-sm text-brand-black/70">{situation}</p>
                </div>
                <div className="w-1/2 p-4">
                  <p className="font-sans text-sm font-medium text-brand-cobalt">{pattern}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-4 pb-16 border-t border-brand-concrete flex flex-wrap justify-between items-center gap-4">
          <Link href="/#notes" className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
            ← All Field Notes
          </Link>
          <div className="flex flex-wrap gap-2">
            {article!.tags.map((tag) => (
              <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/60 border border-brand-cobalt/20 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

function AgentPatternRow({ n, label, when, desc, last = false }: { n: string; label: string; when: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? '' : ''}`}>
      <div className="w-8 flex-shrink-0 p-4 border-r border-brand-concrete flex items-start justify-center">
        <span className="font-sans text-[10px] text-brand-muted font-medium">{n}</span>
      </div>
      <div className="flex-1 p-4">
        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <span className="font-sans font-semibold text-sm text-brand-black">{label}</span>
          <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/60 border border-brand-cobalt/20 px-2 py-0.5">{when}</span>
        </div>
        <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function AgentLoopRow({ label, desc, last = false }: { label: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? '' : ''}`}>
      <div className="w-44 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/30">
        <span className="font-sans font-semibold text-sm text-brand-cobalt">{label}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/65 p-4 leading-relaxed">{desc}</p>
    </div>
  )
}

function AgentBuildStep({ n, label, desc, last = false }: { n: number; label: string; desc: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? '' : ''}`}>
      <div className="w-12 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/20 flex items-start justify-center">
        <span className="font-display text-2xl text-brand-cobalt/30 leading-none">{n}</span>
      </div>
      <div className="flex-1 p-4">
        <h4 className="font-sans font-semibold text-sm text-brand-black mb-1.5">{label}</h4>
        <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function RAGArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
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
          RETRIEVE<br />
          <span className="text-brand-cobalt">FIRST.</span>
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
              RAG fixes two problems simultaneously: a language model&apos;s training data goes stale,
              and a model under-specified on a fact will confidently generate a plausible wrong answer.
              Retrieval gives it a source to draw from instead. It introduces one new way to fail:
              bad retrieval with false confidence attached.
            </p>
            <p className="font-sans text-base text-brand-black/80 leading-relaxed">
              The pipeline is seven steps and conceptually simple. Getting retrieval right is not.
              Most production mistakes aren&apos;t in the LLM call — they&apos;re in the three steps before it.
            </p>
          </div>
        </section>

        {/* Section 01 — What RAG is */}
        <section>
          <SectionHeading number="01" title="What RAG actually does" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            RAG (Retrieval-Augmented Generation) pairs a language model with an external retrieval system.
            Instead of answering purely from memorized training data, the model first retrieves relevant
            documents from a knowledge source, then generates its answer using those retrieved documents
            as grounding context. The answer cites specific sources. You can check it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-brand-cobalt/30 p-5 bg-brand-graphite">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-cobalt block mb-3">What it fixes</span>
              <div className="space-y-2">
                <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
                  <strong className="text-brand-black">Staleness</strong> — model training has a cutoff. RAG works with information from after that cutoff, or with private data the model never saw.
                </p>
                <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
                  <strong className="text-brand-black">Hallucination</strong> — without retrieval, a model under-specified on a fact generates a plausible-sounding wrong answer. With retrieval, it has an actual source.
                </p>
              </div>
            </div>
            <div className="border border-brand-concrete p-5 bg-brand-graphite">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-muted block mb-3">What it introduces</span>
              <p className="font-sans text-sm text-brand-black/75 leading-relaxed">
                <strong className="text-brand-black">False confidence</strong> — a RAG system with poor retrieval is worse than no RAG. It adds latency and cost while producing an ungrounded answer, now with a citation attached to give it unearned authority.
              </p>
            </div>
          </div>

          <Callout label="vs. fine-tuning">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              Fine-tuning changes model <em>behaviour</em> — tone, format, task specialization.
              RAG changes what <em>facts</em> the model has access to. If you need the model to know
              something specific, use RAG. If you need it to behave differently, fine-tune.
              RAG is also cheaper and faster to update: swap or add documents rather than retraining.
              This matters most when the underlying information changes frequently.
            </p>
          </Callout>
        </section>

        {/* Section 02 — The pipeline */}
        <section>
          <SectionHeading number="02" title="The pipeline" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            Seven steps, two phases. Steps 1–4 run at ingestion time (once per document, or when documents
            update). Steps 5–7 run at query time for every user request. The quality of the query-time
            steps depends entirely on how well the ingestion steps were done.
          </p>

          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <RAGPipeline />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Shaded steps run at query time — everything before the dashed line is ingestion.
            </figcaption>
          </figure>

          <div className="space-y-3">
            <PipelineRow n="1" label="Ingest" detail="Collect and clean source documents — PDFs, markdown, web pages, database records. Quality here determines quality throughout. Cleaning means removing headers and footers, stripping embedded-image text that won't extract, normalizing encoding." />
            <PipelineRow n="2" label="Chunk" detail="Split documents into smaller passages. Retrieval works at the chunk level. Chunk too small: context gets severed. Chunk too large: relevance gets diluted and tokens get wasted. Chunk size is a real trade-off — the right answer depends on your document type and query patterns." />
            <PipelineRow n="3" label="Embed" detail="Convert each chunk into a vector representation capturing semantic meaning. The embedding model choice affects retrieval quality directly. Domain-specific embedding models often outperform general-purpose ones on specialized content." />
            <PipelineRow n="4" label="Index" detail="Store vectors in a vector database for fast similarity search. Choice of database affects latency, scale, and operational complexity — but it's a secondary concern until you've got the first three steps right." />
            <PipelineRow n="5" label="Retrieve" detail="At query time, embed the user's query and compare against the index to surface the most relevant chunks. This is where hybrid search pays off: vector search finds conceptually related content, keyword search catches exact terms the embedding might blur." highlight />
            <PipelineRow n="6" label="Rerank" detail="A secondary model reorders the retrieved candidates by relevance before the final set is sent to the LLM. Common pattern: retrieve top 20, rerank down to 3–5. First-pass vector similarity is a rough filter, not a precise one." highlight />
            <PipelineRow n="7" label="Generate" detail="The query plus the final selected chunks are sent to the LLM, which generates the answer grounded in that context. This is the step most people optimise first. It's usually the wrong place to start." highlight />
          </div>
        </section>

        {/* Section 03 — Chunking */}
        <section>
          <SectionHeading number="03" title="Chunking strategy" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Fixed-size chunking — split every N characters — is a fast start and a low ceiling.
            The chunk boundary is arbitrary, so it frequently falls mid-sentence, severing context and
            making the extracted chunk ambiguous without what came before or after.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            Semantic chunking computes embeddings sentence-by-sentence and starts a new chunk when semantic
            similarity between adjacent sentences drops below a threshold. Boundaries correspond to where
            meaning actually shifts. Retrieving a semantically coherent chunk against a semantically similar
            query produces meaningfully better results — especially on documents that shift topic mid-section.
          </p>

          <figure>
            <div className="border border-brand-concrete overflow-hidden">
              <ChunkingComparison />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Fixed-size chunks split at arbitrary boundaries — semantic chunks split where meaning shifts.
            </figcaption>
          </figure>
        </section>

        {/* Section 04 — Hybrid retrieval */}
        <section>
          <SectionHeading number="04" title="Hybrid retrieval" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-4">
            Dense vector search and sparse keyword search (BM25) are complementary, not competing.
            Vector search finds conceptually related content even without matching words — useful for
            paraphrase, synonyms, and domain inference. Keyword search catches exact terms, proper names,
            codes, and identifiers that embeddings can blur by collapsing similar-sounding but distinct things.
          </p>
          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            Hybrid retrieval combined with reranking is the default for production systems in 2026.
            It&apos;s not exotic — it&apos;s the sensible baseline. The common reranking pattern: retrieve a
            broad candidate pool (~20), rerank down to 3–5 strong candidates, and send only those to the LLM.
            Reranking larger pools (100+) rarely pays off — useful signal concentrates at the head of the distribution.
          </p>

          <figure>
            <div className="border border-brand-concrete overflow-hidden">
              <HybridRetrievalDiagram />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Hybrid retrieval — both branches run on the same query, results merge before reranking.
            </figcaption>
          </figure>
        </section>

        {/* Section 05 — Query transformation */}
        <section>
          <SectionHeading number="05" title="Query transformation" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Raw user queries are often poorly shaped for retrieval. Two techniques address this:
          </p>

          <div className="space-y-4">
            <div className="border border-brand-concrete p-5">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-2">Query expansion</span>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Generate several reformulations of the same question to widen the retrieval net. A user asking
                &quot;how does this work with large files&quot; might retrieve more with
                &quot;performance characteristics on large datasets&quot; or &quot;scalability with file size&quot; added as parallel queries.
              </p>
            </div>
            <div className="border border-brand-concrete p-5">
              <span className="font-sans font-semibold text-sm text-brand-black block mb-2">HyDE — Hypothetical Document Embeddings</span>
              <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
                Have the model generate a hypothetical answer first, then embed and retrieve using <em>that</em> rather
                than the raw query. The hypothetical answer contains domain language the user&apos;s original
                question likely lacks. It&apos;s counterintuitive — you generate before you retrieve — but it
                works well for knowledge-intensive queries where the user&apos;s vocabulary doesn&apos;t match the document vocabulary.
              </p>
            </div>
          </div>
        </section>

        {/* Section 06 — Advanced patterns */}
        <section>
          <SectionHeading number="06" title="Advanced patterns" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            Know these exist. Don&apos;t reach for them by default.
          </p>

          <figure className="mb-8">
            <div className="border border-brand-concrete overflow-hidden">
              <AdaptiveRAGDiagram />
            </div>
            <figcaption className="font-sans text-xs text-brand-muted mt-3 text-center tracking-wide">
              Adaptive RAG — a classifier routes each query to the cheapest pipeline that can handle it.
            </figcaption>
          </figure>

          <div className="space-y-4">
            <AdvancedPatternRow
              name="Agentic RAG"
              detail="The model iteratively decides to run multiple retrieval steps, reformulating its own queries and reasoning across rounds before answering. Strong for multi-step questions where a single retrieve-then-generate pass misses intermediate context."
            />
            <AdvancedPatternRow
              name="GraphRAG"
              detail="Builds a knowledge graph over source data and retrieves via graph traversal rather than similarity search. The right tool when questions are relationship-heavy: 'how do these three entities connect' — the answer isn't in any single chunk and vector similarity won't find it."
            />
            <AdvancedPatternRow
              name="Adaptive RAG"
              detail="A query classifier routes each incoming question to the cheapest pipeline that can handle it. Simple factual questions go to fast vector RAG. Complex multi-step questions go to agentic RAG. Relationship questions go to GraphRAG. Emerging as the sensible default for production systems in 2026 — most real-world queries are simple and don't need the expensive path."
            />
          </div>

          <Callout label="The field's actual lesson" className="mt-8">
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">
              The most common production mistake is not under-engineering RAG — it&apos;s over-engineering it.
              Start with hybrid retrieval plus a reranker. Measure retrieval quality before adding anything else.
              Only add query transformation, agentic loops, or graph structures once metrics prove the simpler
              approach genuinely falls short for a specific, real class of queries — not because it seems more sophisticated.
            </p>
          </Callout>
        </section>

        {/* Section 07 — Two tracks */}
        <section>
          <SectionHeading number="07" title="Two tracks" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-8">
            The right architecture depends on scale. One setup I use routinely; one for production applications.
          </p>

          <div className="space-y-0 border border-brand-concrete mb-8">
            <div className="border-b border-brand-concrete">
              <div className="p-4 border-b border-brand-concrete/60 bg-brand-graphite/40">
                <span className="font-display text-2xl text-brand-cobalt">TRACK A</span>
                <span className="font-sans text-sm text-brand-muted ml-3">Personal / research RAG</span>
              </div>
              <div className="p-5 space-y-3">
                <RAGTrackRow n="1" text="One markdown file per topic — not one giant document. Retrieval works at the chunk level, and a single well-scoped file chunks more predictably than a sprawling one." />
                <RAGTrackRow n="2" text="Use headings as natural chunk boundaries. A model retrieving 'just the pricing section' should find it by heading alone." />
                <RAGTrackRow n="3" text="No exotic formatting — strip tables-as-images, embedded screenshots of text, heavy nested formatting. These are extraction failures identical to the Gate 3 problem in AEO." />
                <RAGTrackRow n="4" text="Plain files on disk (e.g. Obsidian 30-library/) are sufficient at this scale. Claude's context window plus good file organization functions as your retrieval layer." />
                <RAGTrackRow n="5" text="Update files in place rather than creating 'v2' copies. Retrieval should never have to guess which version is current." />
              </div>
            </div>
            <div>
              <div className="p-4 border-b border-brand-concrete/60 bg-brand-graphite/40">
                <span className="font-display text-2xl text-brand-black">TRACK B</span>
                <span className="font-sans text-sm text-brand-muted ml-3">Production / application RAG</span>
              </div>
              <div className="p-5 space-y-3">
                <RAGTrackRow n="1" text="Define the question set first. What will this system actually be asked? Build against real query patterns, not hypothetical ones." />
                <RAGTrackRow n="2" text="Choose a vector database on latency, pricing, and indexing behavior for your actual data volume — not on whichever is most discussed. Chroma and pgvector for smaller deployments; Pinecone, Weaviate, Qdrant, or Milvus for larger scale." />
                <RAGTrackRow n="3" text="Build hybrid retrieval + reranking before anything fancier. This alone puts you ahead of most production deployments." />
                <RAGTrackRow n="4" text="Instrument evaluation from the start — don't bolt it on after launch." />
                <RAGTrackRow n="5" text="Only add complexity (agentic loops, graph retrieval, query transformation) once evaluation data shows the simple pipeline is genuinely insufficient for a real class of queries." />
              </div>
            </div>
          </div>
        </section>

        {/* Section 08 — Failure modes */}
        <section>
          <SectionHeading number="08" title="Failure modes" />

          <div className="space-y-3">
            {[
              { title: 'Bad chunking', detail: 'Context lost at boundaries, or chunks too large to be precise. The most common retrieval quality problem — usually fixed by moving from fixed-size to semantic chunking.' },
              { title: 'Irrelevant embeddings', detail: 'Retrieval surfaces topically adjacent content that doesn\'t actually answer the question. Often a sign of a generic embedding model on domain-specific content, or missing query transformation.' },
              { title: 'Outdated index', detail: 'The knowledge base goes stale even though the system is technically "using RAG." Retrieval is only as current as the last index update.' },
              { title: 'Ambiguous queries', detail: 'Vague questions retrieve vague or scattered results. Query expansion and HyDE exist specifically for this — but the first fix is often pushing back on the query design.' },
              { title: 'False confidence', detail: 'A model will generate a fluent answer from irrelevant retrieved context if not explicitly instructed to say when context doesn\'t address the question. Faithfulness evaluation catches this. Visual inspection usually doesn\'t.' },
            ].map(({ title, detail }) => (
              <FailureMode key={title} n={0} title={title} desc={detail} />
            ))}
          </div>
        </section>

        {/* Evaluation */}
        <section>
          <SectionHeading number="09" title="Evaluation" />

          <p className="font-sans text-base text-brand-black/75 leading-relaxed mb-6">
            &quot;It looks like it&apos;s working&quot; is not evaluation. Systematic evaluation from day one is becoming
            standard — a majority of new RAG deployments now build it in from the start. Three things to measure:
          </p>

          <div className="space-y-0 border border-brand-concrete">
            <EvalRow
              metric="Retrieval quality"
              detail="Are the retrieved chunks actually relevant to the query? Measure precision and recall against a labeled test set. This is the most important metric — if retrieval is bad, generation can't save it."
            />
            <EvalRow
              metric="Faithfulness"
              detail="Does the generated answer reflect what's in the retrieved chunks, or did the model drift from them? A model that ignores its own retrieved context is producing ungrounded output — retrieval failed to constrain it."
            />
            <EvalRow
              metric="Answer relevance"
              detail="Does the final answer address what was actually asked? Distinct from faithfulness — an answer can be faithful to the retrieved context while still not answering the question if retrieval surfaced the wrong chunks."
              last
            />
          </div>

          <p className="font-sans text-sm text-brand-muted leading-relaxed mt-4 italic">
            RAGAS is a commonly used open framework for scoring these dimensions systematically.
          </p>
        </section>

        {/* Source note */}
        <section className="border-t border-brand-concrete pt-10">
          <p className="font-sans text-sm text-brand-muted leading-relaxed">
            Core RAG mechanism per Lewis et al. (2020), the original RAG paper. Implementation patterns —
            hybrid retrieval, reranking ratios, adaptive routing, evaluation-first deployment —
            drawn from practitioner sources reporting on production trends (2026). Treat specific tool and
            vendor comparisons as directional rather than definitive; verify against current documentation
            before committing to a specific vector database or framework.
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

function PipelineRow({ n, label, detail, highlight = false }: { n: string; label: string; detail: string; highlight?: boolean }) {
  return (
    <div className={`flex gap-0 border border-brand-concrete ${highlight ? 'border-brand-cobalt/30' : ''}`}>
      <div className={`w-12 flex-shrink-0 flex items-center justify-center border-r border-brand-concrete ${highlight ? 'bg-brand-cobalt/8 border-brand-cobalt/30' : 'bg-brand-graphite/40'}`}>
        <span className={`font-display text-xl ${highlight ? 'text-brand-cobalt' : 'text-brand-muted/50'}`}>{n}</span>
      </div>
      <div className="p-3 flex-1">
        <span className={`font-sans font-semibold text-sm block mb-1 ${highlight ? 'text-brand-cobalt' : 'text-brand-black'}`}>{label}</span>
        <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{detail}</p>
      </div>
    </div>
  )
}

function AdvancedPatternRow({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="border border-brand-concrete p-4">
      <span className="font-sans font-semibold text-sm text-brand-black block mb-1.5">{name}</span>
      <p className="font-sans text-sm text-brand-black/60 leading-relaxed">{detail}</p>
    </div>
  )
}

function RAGTrackRow({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="font-mono text-xs text-brand-cobalt/50 flex-shrink-0 mt-0.5">{n}.</span>
      <p className="font-sans text-sm text-brand-black/70 leading-relaxed">{text}</p>
    </div>
  )
}

function EvalRow({ metric, detail, last = false }: { metric: string; detail: string; last?: boolean }) {
  return (
    <div className={`flex gap-0 ${!last ? 'border-b border-brand-concrete' : ''}`}>
      <div className="w-40 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/40">
        <span className="font-sans font-semibold text-sm text-brand-cobalt block leading-tight">{metric}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/70 p-4 leading-relaxed">{detail}</p>
    </div>
  )
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

function CreativeToolsArticle({ article, formattedDate }: { article: ReturnType<typeof getArticleBySlug> & object; formattedDate: string }) {
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
          NOT<br />
          <span className="text-brand-cobalt">PROMPTING.</span><br />
          DIRECTING.
        </h1>

        <p className="font-sans text-lg md:text-xl text-brand-black/70 leading-relaxed max-w-2xl mt-6">
          {article!.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {article!.tags.map((tag) => (
            <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/70 border border-brand-cobalt/25 px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-[900px] mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Tool comparison */}
        <section>
          <div className="border border-brand-concrete overflow-hidden mb-8">
            <ToolComparisonSplit />
          </div>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            Midjourney and Higgsfield are not the same kind of tool in competition. One is built around
            image quality and aesthetic sensibility — stills, art direction, composition. The other is
            a director's console layered over 30-plus third-party and in-house video models, with
            70-plus named, one-click camera presets as its actual product. You use Midjourney to build
            the frame. You use Higgsfield to move it.
          </p>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed mt-5">
            The quality gap that separates usable AI video from something that actually looks like it was
            directed isn't model quality. It's intent. Defaulting to Static and hoping the prompt carries
            the shot is the wrong workflow. Picking a deliberate camera move for a deliberate narrative
            reason is the right one.
          </p>
        </section>

        {/* Midjourney section */}
        <section>
          <SectionHeading number="01" title="Midjourney — stills, art direction, composition" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            V8.2 is the current default as of mid-2026, focused on aesthetics and Personalization — it reads
            your accumulated ratings and moodboard to skew toward your taste. A handful of parameters do
            most of the work. The rest are edge cases.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-8">
            <MidjourneyParams />
          </div>

          <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">Technique that actually moves the needle</h3>
          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <CreativeTechRow
              label="Draft → full render workflow"
              desc={"Generate 8–12 low-quality variants in Draft Mode at roughly a quarter of standard credit cost. Pick the strongest 2–3 compositions. Then render those at full quality. Running full renders on your first pass is the expensive way to explore."}
            />
            <CreativeTechRow
              label="Subject vs. aesthetic split"
              desc={"Think of the prompt as defining the subject and --sref as defining the aesthetic. They're separate levers. Turn --sw up to let the style reference dominate; down to let the prompt take the lead. Mixing both in the prompt text is the most common source of muddy output."}
            />
            <CreativeTechRow
              label="Character consistency"
              desc={"For a recurring figure across a sequence, use Omni Reference (V7 and up) rather than re-describing the same face in text each time. Text-only re-description drifts. Reference locking doesn't. This applies to style, product shape, and environment geometry as much as faces."}
            />
            <CreativeTechRow
              label="Photorealism combination"
              desc={"--raw with low --s (stylize value) gives maximum photorealism — it cuts Midjourney's default aesthetic bias and follows the prompt more literally. Higher --s with default styling leans toward the polished Midjourney look. Most confusion about V8 output comes from not knowing which mode you're in."}
            />
            <CreativeTechRow
              label="Syntax drift is real"
              desc={"Midjourney changes parameter names and defaults between versions more than most tools — --style raw became --raw between V7 and the V8 family. Before building a repeatable workflow around any specific flag, confirm current syntax at docs.midjourney.com. Last quarter's syntax is not guaranteed to work."} last
            />
          </div>
        </section>

        {/* Higgsfield section */}
        <section>
          <SectionHeading number="02" title="Higgsfield — camera control, motion, Soul ID" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-6">
            Higgsfield is an orchestration layer over 30-plus underlying models — Kling 3.0, Veo 3.1,
            Seedance 2.0, Wan 2.6, MiniMax Hailuo, Sora 2, and its own Soul and Cinema models. You route
            each shot to whichever model fits it, from one interface, without managing separate subscriptions.
            The differentiators are Soul ID (persistent character identity across generations) and the camera
            preset system.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-8">
            <CameraMovesGrid />
          </div>

          <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">Model routing — which model for which shot</h3>
          <div className="border border-brand-concrete divide-y divide-brand-concrete mb-8">
            <CreativeTechRow label="Kling 3.0" desc={"Photorealistic human motion and character-driven scenes. The go-to for anything that requires a real face to move naturally. Also supports Kling Motion Control — takes a character reference image plus a separate motion-reference video and transfers the movement onto the still while preserving identity."} />
            <CreativeTechRow label="Veo 3.1" desc={"Atmospheric and outdoor scenes, native audio generation. Strong for establishing shots, environmental B-roll, and anything where ambient sound matters as much as the image."} />
            <CreativeTechRow label="Seedance 2.0" desc={"Multi-shot narrative and stylized motion. Use it when you need consistent motion logic across a short sequence rather than a single clip."} />
            <CreativeTechRow label="Wan 2.6" desc={"Restyling and video-to-video transfer. Takes real footage and reskins it rather than generating from nothing — useful for adapting one piece of content across multiple visual treatments without reshooting."} last />
          </div>

          <h3 className="font-sans font-semibold text-sm tracking-[0.15em] uppercase text-brand-cobalt mb-4">The honest trade-offs</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {([
              ['Motion stability', "Complex, busy action sequences get unstable. Calm single-subject shots and stylized B-roll are where it performs best. Don't use it to replicate a Michael Bay sequence — use it to hold a character in a deliberate frame."],
              ['Soul ID accuracy', '"Will never drift" is marketing, not guarantee — especially across many sequential generations. Treat it as a strong anchor, not a lock.'],
              ['Credit economics', 'It\'s a credit-metered aggregator. Realistic per-clip cost runs well above the headline subscription once re-rolls factor in. Budget roughly $0.60–$1.00 per usable Kling-quality clip, more for Sora/Veo-tier output.'],
              ['Learning curve', 'It operates as a structured pipeline, not a single-prompt generator. There\'s real workflow to learn versus typing one line and hoping. The presets are the payoff for that investment.'],
            ] as [string, string][]).map(([label, desc]) => (
              <div key={label} className="border border-brand-concrete p-4">
                <h4 className="font-sans font-semibold text-xs text-brand-black mb-1.5">{label}</h4>
                <p className="font-sans text-xs text-brand-black/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <Callout label="Camera technique rule">
            Stick to one primary camera move per clip. Distortion and artifacting increase sharply
            when a prompt asks for multiple conflicting motions at once. Layer a primary move with at
            most one subtle secondary effect — Dolly In plus a gentle Tilt Up — not two competing primaries.
            Name the move in both places: select the preset in the app and repeat the move's name in the
            prompt text. This reinforces the motion engine's target and gives the most reliable, repeatable result.
          </Callout>
        </section>

        {/* Cinematography vocabulary */}
        <section>
          <SectionHeading number="03" title="Cinematography vocabulary — know these cold" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            Prompting with cinematographic precision beats prompting with mood words every time.
            "35mm film photography, Rembrandt lighting" outperforms "cinematic, moody" reliably and repeatably.
            These are the terms worth having immediately available — they work across both tools.
          </p>

          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            {([
              ['Dolly', 'Camera physically moves toward / away / alongside the subject on a track. Different from zoom — the whole camera moves, changing perspective relationships.'],
              ['Dolly zoom (vertigo effect)', 'Dolly and zoom move in opposite directions simultaneously. Background appears to warp while subject stays framed. Hitchcock. Iconic. Use once.'],
              ['Crane / Jib', 'Camera moves vertically, often combined with a horizontal arc. Frequently used for reveals — starting low, rising to show scale.'],
              ['Dutch angle', 'Camera tilted off the horizontal axis. Signals unease, disorientation, instability. One of the most misused moves — reserve it for genuine tension.'],
              ['Rack focus / focus change', 'Shifting focal point from one plane to another within a shot. Directs viewer attention without cutting. Requires shallow depth of field to read clearly.'],
              ['Shallow depth of field', 'Narrow zone of sharp focus, blurred background. Draws attention to subject. Combined with 35mm or 85mm focal length shorthand to signal the look.'],
              ['Anamorphic', 'Wide-format lens look. Horizontal lens flares, oval bokeh. Immediately reads as "film" rather than "digital video."'],
              ['God rays / volumetric light', 'Visible light shafts through haze or fog. Atmospheric. Works best when paired with a specific light source — through a warehouse window, through forest canopy.'],
              ['FPV (first-person view)', 'Fast, drone-style, unstabilized POV associated with chase and action framing. The opposite of a locked-off studio shot.'],
              ['B-roll', 'Supplementary footage that cuts away from the main narrative shot. In AI generation, the fastest shots to generate and the easiest to over-produce.'],
            ] as [string, string][]).map(([term, def], i, arr) => (
              <div key={term} className="flex gap-0">
                <div className="w-52 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/20">
                  <span className="font-sans font-semibold text-sm text-brand-black">{term}</span>
                </div>
                <p className="font-sans text-sm text-brand-black/65 p-4 leading-relaxed">{def}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prompt formula */}
        <section>
          <SectionHeading number="04" title="The universal prompt formula" />
          <p className="font-sans text-base text-brand-black/70 leading-relaxed mt-4 mb-8">
            This structure works across both tools. The order matters — subject and environment set the
            foundation; lighting and lens guide the model's interpretation; style and parameters tune the output.
            App-level controls (aspect ratio, model selection, duration in Higgsfield) belong in the interface,
            not buried in prompt text.
          </p>

          <div className="border border-brand-concrete overflow-hidden mb-8">
            <PromptFormulaDiagram />
          </div>

          <div className="border border-brand-concrete p-6 bg-brand-graphite/20 space-y-4 mb-6">
            <div>
              <p className="font-sans text-xs text-brand-cobalt font-medium tracking-[0.1em] uppercase mb-1.5">Image (Midjourney-style)</p>
              <p className="font-mono text-sm text-brand-black/70 leading-relaxed">
                {"A contemplative portrait of a woman in her 30s, Rembrandt lighting casting gentle shadows across her face, medium format photography aesthetic, shallow depth of field --ar 4:5 --raw --s 150"}
              </p>
            </div>
            <div className="border-t border-brand-concrete pt-4">
              <p className="font-sans text-xs text-brand-cobalt font-medium tracking-[0.1em] uppercase mb-1.5">Video (Higgsfield-style)</p>
              <p className="font-mono text-sm text-brand-black/70 leading-relaxed">
                {"Cinematic slow dolly-in on [subject] standing in a fog-filled warehouse, camera glides forward at a steady creep, shallow depth of field with background softening, volumetric god rays through haze, teal-and-orange grade, anamorphic flares, 24fps film look — Preset: Dolly In"}
              </p>
            </div>
          </div>

          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <CreativeTechRow label="One dominant cue" desc={"One dominant style or lighting cue is more reliable than five competing ones. Pick the one or two terms that matter most. 'Rembrandt lighting, shallow depth of field' is better than 'dramatic, moody, cinematic, noir, ethereal.'"} />
            <CreativeTechRow label="Concrete beats vague" desc={'"35mm film photography, Rembrandt lighting" outperforms "cinematic, moody" every time. The model has nothing to work with when you give it a mood word and no technical signal.'} />
            <CreativeTechRow label="App controls stay in the app" desc={"Settings that are app-level controls — duration, aspect ratio, model choice in Higgsfield — belong in the interface, not in the prompt. Add a short reminder at the end of your saved prompt template so you don't forget to set them each time."} last />
          </div>
        </section>

        {/* Uses beyond the obvious */}
        <section>
          <SectionHeading number="05" title="Uses beyond still and clip generation" />
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {([
              ['Product visualization', '360 Orbit + macro lens language + high-key studio lighting is a standard e-commerce formula. Shows a product in the round without a physical shoot.'],
              ['Storyboarding', 'Draft Mode (Midjourney) or rapid MiniMax passes (Higgsfield) to block out a full sequence cheaply before committing budget to final-quality renders.'],
              ['Brand / character consistency', 'Soul ID and Omni Reference exist specifically to solve the serialized-content problem: same face, same voice, across an entire campaign or episodic series.'],
              ['Restyling existing footage', "Wan 2.6's video-reference and style-transfer capability takes real footage and reskins it — useful for adapting one piece of content across multiple visual treatments without reshooting."],
              ['Concept art', "Midjourney's strength in stylized composition makes it a fast concept-art layer ahead of a 3D build (directly relevant to Three.js / Unity / UE5 environment work)."],
              ['Voiceover + lipsync', 'Higgsfield bundles multilingual translation with automatic lip-sync and voice swapping — useful for adapting one video asset across markets without re-shooting or re-recording.'],
            ] as [string, string][]).map(([label, desc]) => (
              <div key={label} className="border border-brand-concrete p-4">
                <h4 className="font-sans font-semibold text-xs text-brand-black mb-1.5">{label}</h4>
                <p className="font-sans text-xs text-brand-black/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What separates good from average */}
        <section>
          <SectionHeading number="06" title="What separates good output from average" />
          <div className="border border-brand-concrete divide-y divide-brand-concrete">
            <CreativeTechRow
              label="Direct, don't just prompt"
              desc={"The biggest quality jump in Higgsfield specifically comes from treating the preset menu as a director's toolkit — picking a deliberate camera move for a deliberate narrative reason — rather than defaulting to Static and relying on text to carry all the motion description. Bullet Time on a quiet moment reads as a mistake, not a choice."}
            />
            <CreativeTechRow
              label="Iterate cheap, finish expensive"
              desc={"Block out and test compositions on faster or cheaper models (Draft Mode, MiniMax) before spending premium credits on Sora / Veo / Kling-tier final renders. The ratio should be heavily weighted toward drafting — one final render per ten drafts is not unusual."}
            />
            <CreativeTechRow
              label="Reference images beat text for anything you need constant"
              desc={"Style, character, product, environment geometry — across multiple generations, text re-description drifts and reference locking doesn't. If you need it to look the same in shot 6 as it did in shot 1, don't re-describe it. Reference it."}
            />
            <CreativeTechRow
              label="Match camera language to narrative intent"
              desc={"The named presets are the vocabulary. Using the right move still matters more than using an unusual one. A Crash Zoom on a slow, contemplative scene is a directorial error regardless of how sharp the render is. Calm shots deserve slow dollies. High-impact moments earn fast cuts and crash zooms."} last
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-4 pb-16 border-t border-brand-concrete flex flex-wrap justify-between items-center gap-4">
          <Link href="/#notes" className="font-sans text-[11px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-cobalt transition-colors duration-200">
            ← All Field Notes
          </Link>
          <div className="flex flex-wrap gap-2">
            {article!.tags.map((tag) => (
              <span key={tag} className="font-sans text-[10px] tracking-[0.15em] uppercase text-brand-cobalt/60 border border-brand-cobalt/20 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

function CreativeTechRow({ label, desc, last = false }: { label: string; desc: string; last?: boolean }) {
  return (
    <div className="flex gap-0">
      <div className="w-48 flex-shrink-0 p-4 border-r border-brand-concrete bg-brand-graphite/20">
        <span className="font-sans font-semibold text-sm text-brand-cobalt">{label}</span>
      </div>
      <p className="font-sans text-sm text-brand-black/65 p-4 leading-relaxed">{desc}</p>
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
