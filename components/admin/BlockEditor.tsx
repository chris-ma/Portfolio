'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Block, BlockType, DbArticle, ReadingItem } from '@/lib/blocks'
import { createBlock } from '@/lib/blocks'
import { createClient } from '@/lib/supabase/client'

const FIELD_INPUT = 'w-full bg-transparent border border-bk-rule px-3 py-2 font-sans text-sm text-bk-parchment placeholder:text-bk-muted/40 focus:outline-none focus:border-bk-gold transition-colors duration-200'

const BLOCK_PALETTE: { type: BlockType; label: string; description: string }[] = [
  { type: 'paragraph', label: 'Paragraph', description: 'Body text' },
  { type: 'heading', label: 'Section heading', description: 'Numbered section' },
  { type: 'callout', label: 'Callout', description: 'Highlighted note' },
  { type: 'quote', label: 'Quote', description: 'Pull quote with attribution' },
  { type: 'divider', label: 'Divider', description: 'Horizontal rule' },
  { type: 'list', label: 'List', description: 'Bullet list with em-dashes' },
  { type: 'recommended_reading', label: 'Recommended reading', description: 'Books / papers / articles' },
]

interface MetaState {
  slug: string
  title: string
  subtitle: string
  category: string
  date: string
  read_time: string
  tags: string
  excerpt: string
  published: boolean
}

interface Props {
  articleId?: string
  initialMeta?: Partial<MetaState>
  initialBlocks?: Block[]
}

function ParagraphEditor({ block, onChange }: { block: Extract<Block, { type: 'paragraph' }>; onChange: (b: Block) => void }) {
  return (
    <textarea
      value={block.content}
      onChange={(e) => onChange({ ...block, content: e.target.value })}
      placeholder="Start writing…"
      rows={4}
      className="w-full bg-transparent font-sans text-base text-bk-parchment/80 leading-relaxed placeholder:text-bk-muted/30 focus:outline-none resize-none"
    />
  )
}

function HeadingEditor({ block, onChange }: { block: Extract<Block, { type: 'heading' }>; onChange: (b: Block) => void }) {
  return (
    <div className="flex items-center gap-4">
      <input
        value={block.number}
        onChange={(e) => onChange({ ...block, number: e.target.value })}
        placeholder="01"
        className="w-14 bg-transparent font-book font-bold text-3xl text-bk-gold/40 focus:outline-none focus:text-bk-gold/60 text-center"
      />
      <input
        value={block.title}
        onChange={(e) => onChange({ ...block, title: e.target.value })}
        placeholder="Section title"
        className="flex-1 bg-transparent font-book font-bold text-2xl text-bk-parchment placeholder:text-bk-muted/30 focus:outline-none"
      />
    </div>
  )
}

function CalloutEditor({ block, onChange }: { block: Extract<Block, { type: 'callout' }>; onChange: (b: Block) => void }) {
  return (
    <div className="border-l-2 border-bk-gold pl-4 space-y-2">
      <input
        value={block.label}
        onChange={(e) => onChange({ ...block, label: e.target.value })}
        placeholder="Label"
        className="w-full bg-transparent font-mono text-[9px] tracking-[0.25em] uppercase text-bk-gold placeholder:text-bk-gold/30 focus:outline-none"
      />
      <textarea
        value={block.content}
        onChange={(e) => onChange({ ...block, content: e.target.value })}
        placeholder="Callout content…"
        rows={3}
        className="w-full bg-transparent font-sans text-sm text-bk-parchment/80 leading-relaxed placeholder:text-bk-muted/30 focus:outline-none resize-none"
      />
    </div>
  )
}

function QuoteEditor({ block, onChange }: { block: Extract<Block, { type: 'quote' }>; onChange: (b: Block) => void }) {
  return (
    <div className="border-l-2 border-bk-gold pl-4 space-y-2">
      <textarea
        value={block.text}
        onChange={(e) => onChange({ ...block, text: e.target.value })}
        placeholder="Quote text…"
        rows={3}
        className="w-full bg-transparent font-book italic text-lg text-bk-parchment placeholder:text-bk-muted/30 focus:outline-none resize-none"
      />
      <input
        value={block.attribution ?? ''}
        onChange={(e) => onChange({ ...block, attribution: e.target.value })}
        placeholder="Attribution (optional)"
        className="w-full bg-transparent font-mono text-[9px] tracking-[0.2em] uppercase text-bk-muted placeholder:text-bk-muted/30 focus:outline-none"
      />
    </div>
  )
}

function ListEditor({ block, onChange }: { block: Extract<Block, { type: 'list' }>; onChange: (b: Block) => void }) {
  function updateItem(i: number, value: string) {
    const items = [...block.items]
    items[i] = value
    onChange({ ...block, items })
  }
  function addItem() {
    onChange({ ...block, items: [...block.items, ''] })
  }
  function removeItem(i: number) {
    onChange({ ...block, items: block.items.filter((_, idx) => idx !== i) })
  }

  return (
    <div className="space-y-2">
      {block.items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-bk-gold text-sm flex-shrink-0">—</span>
          <input
            value={item}
            onChange={(e) => updateItem(i, e.target.value)}
            placeholder="List item…"
            className="flex-1 bg-transparent font-sans text-sm text-bk-parchment/80 placeholder:text-bk-muted/30 focus:outline-none"
          />
          <button
            onClick={() => removeItem(i)}
            className="text-bk-muted hover:text-red-400 transition-colors text-xs flex-shrink-0"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        onClick={addItem}
        className="font-mono text-[9px] tracking-[0.2em] uppercase text-bk-gold/50 hover:text-bk-gold transition-colors duration-200"
      >
        + Add item
      </button>
    </div>
  )
}

function ReadingItemEditor({
  item,
  onChange,
  onRemove,
}: {
  item: ReadingItem
  onChange: (item: ReadingItem) => void
  onRemove: () => void
}) {
  return (
    <div className="bg-bk-slate border border-bk-rule p-4 space-y-2">
      <div className="flex items-center gap-2">
        <select
          value={item.type}
          onChange={(e) => onChange({ ...item, type: e.target.value as ReadingItem['type'] })}
          className="bg-bk-deep border border-bk-rule font-mono text-[9px] tracking-[0.15em] uppercase text-bk-gold px-2 py-1 focus:outline-none"
        >
          <option value="Book">Book</option>
          <option value="Paper">Paper</option>
          <option value="Article">Article</option>
        </select>
        <input
          value={item.title}
          onChange={(e) => onChange({ ...item, title: e.target.value })}
          placeholder="Title"
          className="flex-1 bg-transparent font-book font-bold text-sm text-bk-parchment placeholder:text-bk-muted/30 focus:outline-none"
        />
        <button onClick={onRemove} className="text-bk-muted hover:text-red-400 transition-colors text-xs flex-shrink-0">
          ✕
        </button>
      </div>
      <input
        value={item.author}
        onChange={(e) => onChange({ ...item, author: e.target.value })}
        placeholder="Author"
        className="w-full bg-transparent font-sans text-xs text-bk-muted placeholder:text-bk-muted/30 focus:outline-none"
      />
      <input
        value={item.href ?? ''}
        onChange={(e) => onChange({ ...item, href: e.target.value })}
        placeholder="URL (optional)"
        className="w-full bg-transparent font-mono text-[10px] text-bk-gold/60 placeholder:text-bk-muted/30 focus:outline-none"
      />
      <textarea
        value={item.description}
        onChange={(e) => onChange({ ...item, description: e.target.value })}
        placeholder="Description…"
        rows={2}
        className="w-full bg-transparent font-sans text-xs text-bk-parchment/70 placeholder:text-bk-muted/30 focus:outline-none resize-none"
      />
    </div>
  )
}

function RecommendedReadingEditor({
  block,
  onChange,
}: {
  block: Extract<Block, { type: 'recommended_reading' }>
  onChange: (b: Block) => void
}) {
  function updateItem(i: number, item: ReadingItem) {
    const items = [...block.items]
    items[i] = item
    onChange({ ...block, items })
  }
  function addItem() {
    onChange({
      ...block,
      items: [...block.items, { title: '', author: '', type: 'Book', description: '', href: '' }],
    })
  }
  function removeItem(i: number) {
    onChange({ ...block, items: block.items.filter((_, idx) => idx !== i) })
  }

  return (
    <div className="space-y-3">
      <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-gold">Recommended Reading</p>
      {block.items.map((item, i) => (
        <ReadingItemEditor
          key={i}
          item={item}
          onChange={(updated) => updateItem(i, updated)}
          onRemove={() => removeItem(i)}
        />
      ))}
      <button
        onClick={addItem}
        className="font-mono text-[9px] tracking-[0.2em] uppercase text-bk-gold/50 hover:text-bk-gold transition-colors duration-200"
      >
        + Add item
      </button>
    </div>
  )
}

function BlockCard({
  block,
  index,
  total,
  onChange,
  onMove,
  onDelete,
}: {
  block: Block
  index: number
  total: number
  onChange: (b: Block) => void
  onMove: (from: number, to: number) => void
  onDelete: (id: string) => void
}) {
  return (
    <div className="group relative bg-bk-deep border border-bk-rule hover:border-bk-gold/30 transition-colors duration-200 p-5">
      {/* Controls */}
      <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        {index > 0 && (
          <button
            onClick={() => onMove(index, index - 1)}
            className="font-mono text-[9px] text-bk-muted hover:text-bk-parchment transition-colors px-1"
            title="Move up"
          >
            ↑
          </button>
        )}
        {index < total - 1 && (
          <button
            onClick={() => onMove(index, index + 1)}
            className="font-mono text-[9px] text-bk-muted hover:text-bk-parchment transition-colors px-1"
            title="Move down"
          >
            ↓
          </button>
        )}
        <button
          onClick={() => onDelete(block.id)}
          className="font-mono text-[9px] text-bk-muted hover:text-red-400 transition-colors px-1"
          title="Delete block"
        >
          ✕
        </button>
      </div>

      {/* Block type label */}
      <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-bk-muted/40 mb-3">
        {block.type.replace('_', ' ')}
      </p>

      {/* Editor */}
      {block.type === 'paragraph' && <ParagraphEditor block={block} onChange={onChange} />}
      {block.type === 'heading' && <HeadingEditor block={block} onChange={onChange} />}
      {block.type === 'callout' && <CalloutEditor block={block} onChange={onChange} />}
      {block.type === 'quote' && <QuoteEditor block={block} onChange={onChange} />}
      {block.type === 'divider' && (
        <div className="border-t border-bk-rule my-2 opacity-40" />
      )}
      {block.type === 'list' && <ListEditor block={block} onChange={onChange} />}
      {block.type === 'recommended_reading' && (
        <RecommendedReadingEditor block={block} onChange={onChange} />
      )}
    </div>
  )
}

export default function BlockEditor({ articleId, initialMeta, initialBlocks }: Props) {
  const router = useRouter()
  const [meta, setMeta] = useState<MetaState>({
    slug: '',
    title: '',
    subtitle: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    read_time: '5 min read',
    tags: '',
    excerpt: '',
    published: false,
    ...initialMeta,
  })
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks ?? [])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function addBlock(type: BlockType) {
    setBlocks((prev) => [...prev, createBlock(type)])
  }

  function updateBlock(updated: Block) {
    setBlocks((prev) => prev.map((b) => (b.id === updated.id ? updated : b)))
  }

  function deleteBlock(id: string) {
    setBlocks((prev) => prev.filter((b) => b.id !== id))
  }

  function moveBlock(from: number, to: number) {
    setBlocks((prev) => {
      const next = [...prev]
      const [item] = next.splice(from, 1)
      next.splice(to, 0, item)
      return next
    })
  }

  async function save(publish?: boolean) {
    setSaving(true)
    setError('')

    const supabase = createClient()
    const payload = {
      slug: meta.slug,
      title: meta.title,
      subtitle: meta.subtitle,
      category: meta.category,
      date: meta.date,
      read_time: meta.read_time,
      tags: meta.tags.split(',').map((t) => t.trim()).filter(Boolean),
      excerpt: meta.excerpt,
      blocks,
      published: publish !== undefined ? publish : meta.published,
      updated_at: new Date().toISOString(),
    }

    let result
    if (articleId) {
      result = await supabase.from('articles').update(payload).eq('id', articleId)
    } else {
      result = await supabase.from('articles').insert(payload).select('id').single()
    }

    setSaving(false)

    if (result.error) {
      setError(result.error.message)
      return
    }

    if (!articleId && result.data) {
      router.push(`/admin/articles/${result.data.id}`)
    } else {
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-bk-slate">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-bk-slate/95 backdrop-blur border-b border-bk-rule px-6 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="/admin/articles"
            className="font-mono text-[9px] tracking-[0.2em] uppercase text-bk-muted hover:text-bk-parchment transition-colors duration-200"
          >
            ← Articles
          </a>
          <span className="text-bk-rule">|</span>
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-bk-muted">
            {articleId ? 'Editing' : 'New article'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {error && <p className="font-sans text-xs text-red-400">{error}</p>}
          <button
            onClick={() => save(false)}
            disabled={saving}
            className="font-mono text-[9px] tracking-[0.2em] uppercase px-4 py-2 border border-bk-rule text-bk-muted hover:border-bk-parchment hover:text-bk-parchment transition-all duration-200 disabled:opacity-40"
          >
            {saving ? 'Saving…' : 'Save draft'}
          </button>
          <button
            onClick={() => save(true)}
            disabled={saving}
            className="font-mono text-[9px] tracking-[0.2em] uppercase px-4 py-2 border border-bk-gold text-bk-gold hover:bg-bk-gold hover:text-bk-deep transition-all duration-200 disabled:opacity-40"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10">
        {/* Main canvas */}
        <div className="space-y-6 min-w-0">
          {/* Metadata */}
          <div className="bg-bk-deep border border-bk-rule p-6 space-y-4">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-gold">Metadata</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Title" required>
                <input
                  value={meta.title}
                  onChange={(e) => setMeta((m) => ({ ...m, title: e.target.value }))}
                  placeholder="Article title"
                  className={FIELD_INPUT}
                />
              </Field>
              <Field label="Slug" required>
                <input
                  value={meta.slug}
                  onChange={(e) => setMeta((m) => ({ ...m, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') }))}
                  placeholder="url-slug"
                  className={`${FIELD_INPUT} font-mono`}
                />
              </Field>
              <Field label="Subtitle" className="md:col-span-2">
                <input
                  value={meta.subtitle}
                  onChange={(e) => setMeta((m) => ({ ...m, subtitle: e.target.value }))}
                  placeholder="One-line subtitle"
                  className={FIELD_INPUT}
                />
              </Field>
              <Field label="Excerpt" className="md:col-span-2">
                <textarea
                  value={meta.excerpt}
                  onChange={(e) => setMeta((m) => ({ ...m, excerpt: e.target.value }))}
                  placeholder="2–3 sentence preview for the listing page"
                  rows={3}
                  className="field-input resize-none"
                />
              </Field>
              <Field label="Category">
                <input
                  value={meta.category}
                  onChange={(e) => setMeta((m) => ({ ...m, category: e.target.value }))}
                  placeholder="Strategy / Systems / Craft"
                  className={FIELD_INPUT}
                />
              </Field>
              <Field label="Read time">
                <input
                  value={meta.read_time}
                  onChange={(e) => setMeta((m) => ({ ...m, read_time: e.target.value }))}
                  placeholder="8 min read"
                  className={FIELD_INPUT}
                />
              </Field>
              <Field label="Date">
                <input
                  type="date"
                  value={meta.date}
                  onChange={(e) => setMeta((m) => ({ ...m, date: e.target.value }))}
                  className={FIELD_INPUT}
                />
              </Field>
              <Field label="Tags (comma-separated)">
                <input
                  value={meta.tags}
                  onChange={(e) => setMeta((m) => ({ ...m, tags: e.target.value }))}
                  placeholder="AI, Strategy, DXP"
                  className={FIELD_INPUT}
                />
              </Field>
            </div>
          </div>

          {/* Block canvas */}
          <div className="space-y-3">
            {blocks.length === 0 && (
              <div className="border border-dashed border-bk-rule p-12 text-center">
                <p className="font-sans text-sm text-bk-muted">
                  Add blocks from the palette →
                </p>
              </div>
            )}
            {blocks.map((block, i) => (
              <BlockCard
                key={block.id}
                block={block}
                index={i}
                total={blocks.length}
                onChange={updateBlock}
                onMove={moveBlock}
                onDelete={deleteBlock}
              />
            ))}
          </div>
        </div>

        {/* Block palette sidebar */}
        <div className="lg:sticky lg:top-20 space-y-2 h-fit">
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-bk-gold mb-4">
            Add block
          </p>
          {BLOCK_PALETTE.map(({ type, label, description }) => (
            <button
              key={type}
              onClick={() => addBlock(type)}
              className="w-full text-left bg-bk-deep border border-bk-rule hover:border-bk-gold/40 p-3 transition-colors duration-200 group"
            >
              <p className="font-sans text-sm text-bk-parchment group-hover:text-bk-gold transition-colors duration-200">
                {label}
              </p>
              <p className="font-sans text-[11px] text-bk-muted mt-0.5">{description}</p>
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label className="block font-mono text-[8px] tracking-[0.2em] uppercase text-bk-muted mb-1.5">
        {label}
        {required && <span className="text-bk-gold ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}
