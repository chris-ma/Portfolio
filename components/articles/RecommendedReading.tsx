interface ReadingItem {
  title: string
  author: string
  type: 'Book' | 'Paper' | 'Article'
  description: string
}

export default function RecommendedReading({ items }: { items: ReadingItem[] }) {
  return (
    <section className="border-t border-brand-concrete pt-10">
      <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-brand-cobalt mb-6 block">
        Recommended Reading
      </span>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.title} className="bg-brand-graphite border border-brand-concrete p-5">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-sans text-[9px] tracking-[0.18em] uppercase text-brand-cobalt/60 border border-brand-cobalt/20 px-1.5 py-0.5 flex-shrink-0">
                {item.type}
              </span>
              <span className="font-display text-lg text-brand-black leading-tight">{item.title}</span>
            </div>
            <p className="font-sans text-xs text-brand-muted mb-2">{item.author}</p>
            <p className="font-sans text-sm text-brand-black/70 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
