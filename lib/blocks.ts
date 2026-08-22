export type BlockType =
  | 'paragraph'
  | 'heading'
  | 'callout'
  | 'quote'
  | 'divider'
  | 'list'
  | 'recommended_reading'

export interface ParagraphBlock {
  id: string
  type: 'paragraph'
  content: string
}

export interface HeadingBlock {
  id: string
  type: 'heading'
  number: string
  title: string
}

export interface CalloutBlock {
  id: string
  type: 'callout'
  label: string
  content: string
}

export interface QuoteBlock {
  id: string
  type: 'quote'
  text: string
  attribution?: string
}

export interface DividerBlock {
  id: string
  type: 'divider'
}

export interface ListBlock {
  id: string
  type: 'list'
  items: string[]
}

export interface ReadingItem {
  title: string
  author: string
  type: 'Book' | 'Paper' | 'Article'
  description: string
  href?: string
}

export interface RecommendedReadingBlock {
  id: string
  type: 'recommended_reading'
  items: ReadingItem[]
}

export type Block =
  | ParagraphBlock
  | HeadingBlock
  | CalloutBlock
  | QuoteBlock
  | DividerBlock
  | ListBlock
  | RecommendedReadingBlock

export interface DbArticle {
  id: string
  slug: string
  title: string
  subtitle: string
  category: string
  date: string
  read_time: string
  tags: string[]
  excerpt: string
  blocks: Block[]
  published: boolean
  created_at: string
  updated_at: string
}

export function createBlock(type: BlockType): Block {
  const id = crypto.randomUUID()
  switch (type) {
    case 'paragraph':
      return { id, type, content: '' }
    case 'heading':
      return { id, type, number: '01', title: '' }
    case 'callout':
      return { id, type, label: 'Note', content: '' }
    case 'quote':
      return { id, type, text: '', attribution: '' }
    case 'divider':
      return { id, type }
    case 'list':
      return { id, type, items: [''] }
    case 'recommended_reading':
      return {
        id,
        type,
        items: [{ title: '', author: '', type: 'Book', description: '', href: '' }],
      }
  }
}
