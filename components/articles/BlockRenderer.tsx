import type { Block } from '@/lib/blocks'
import RecommendedReading from './RecommendedReading'

function ParagraphBlock({ content }: { content: string }) {
  return (
    <p className="font-sans text-lg text-bk-parchment/75 leading-relaxed mb-6 max-w-prose">
      {content}
    </p>
  )
}

function HeadingBlock({ number, title }: { number: string; title: string }) {
  const id = `section-${number}`
  return (
    <div
      id={id}
      className="group flex items-baseline gap-4 mb-6 pb-4 border-b border-bk-rule scroll-mt-24"
    >
      <span className="font-book font-bold text-5xl text-bk-gold/20">{number}</span>
      <h2 className="font-book font-bold text-4xl md:text-5xl text-bk-parchment">
        {title.toUpperCase()}
      </h2>
      <a
        href={`#${id}`}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 font-mono text-[11px] text-bk-gold/40 hover:text-bk-gold ml-1 flex-shrink-0 self-center"
        aria-label={`Link to section ${number}`}
      >
        #
      </a>
    </div>
  )
}

function CalloutBlock({ label, content }: { label: string; content: string }) {
  return (
    <div className="bg-bk-deep border-l-2 border-bk-gold pl-6 pr-6 py-5 mb-6">
      <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-gold mb-2">
        {label}
      </p>
      <p className="font-sans text-base text-bk-parchment/80 leading-relaxed">{content}</p>
    </div>
  )
}

function QuoteBlock({ text, attribution }: { text: string; attribution?: string }) {
  return (
    <blockquote className="border-l-2 border-bk-gold pl-6 my-8">
      <p className="font-book italic text-xl md:text-2xl text-bk-parchment leading-snug mb-3">
        &ldquo;{text}&rdquo;
      </p>
      {attribution && (
        <cite className="font-mono text-[9px] tracking-[0.2em] uppercase text-bk-muted not-italic">
          — {attribution}
        </cite>
      )}
    </blockquote>
  )
}

function DividerBlock() {
  return <hr className="border-0 border-t border-bk-rule my-12" />
}

function ListBlock({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 font-sans text-base text-bk-parchment/75 leading-relaxed">
          <span className="text-bk-gold flex-shrink-0 mt-0.5">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((block) => {
        switch (block.type) {
          case 'paragraph':
            return <ParagraphBlock key={block.id} content={block.content} />
          case 'heading':
            return <HeadingBlock key={block.id} number={block.number} title={block.title} />
          case 'callout':
            return <CalloutBlock key={block.id} label={block.label} content={block.content} />
          case 'quote':
            return <QuoteBlock key={block.id} text={block.text} attribution={block.attribution} />
          case 'divider':
            return <DividerBlock key={block.id} />
          case 'list':
            return <ListBlock key={block.id} items={block.items} />
          case 'recommended_reading':
            return <RecommendedReading key={block.id} items={block.items} />
          default:
            return null
        }
      })}
    </div>
  )
}
