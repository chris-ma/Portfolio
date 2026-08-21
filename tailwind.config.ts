import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Book Cloth — warm gold on deep slate
        'bk-slate':     '#1C3340',
        'bk-deep':      '#0D1F28',
        'bk-gold':      '#D4AF6E',
        'bk-parchment': '#F0EAD6',
        'bk-muted':     '#B8A898',
        'bk-burgundy':  '#8B2635',
        'bk-rule':      '#2A4455',
        // Studio Dumbar tokens (kept for potential reuse / article pages)
        'sd-ground':    '#FFFFFF',
        'sd-surface':   '#F5F5F5',
        'sd-ink':       '#1A1A1A',
        'sd-secondary': '#6B6B6B',
        'sd-tertiary':  '#AAAAAA',
        'sd-rule':      '#E0E0E0',
        'sd-cyan':      '#00AEEF',
        'sd-magenta':   '#E6007E',
        'sd-yellow':    '#FFE000',
        // Broadcast tokens (article pages)
        'bc-black':    '#0A0A0A',
        'bc-surface':  '#111111',
        'bc-dark':     '#1A1A1A',
        'bc-white':    '#E8E8E8',
        'bc-gray':     '#888888',
        'bc-dim':      '#3A3A3A',
        'bar-white':   '#C8C8C8',
        'bar-yellow':  '#E8E000',
        'bar-cyan':    '#00D8E8',
        'bar-green':   '#00C800',
        'bar-magenta': '#C800C8',
        'bar-red':     '#CC2000',
        'bar-blue':    '#0000C8',
        'bar-black':   '#0A0A0A',
        // Legacy (article diagrams)
        'brand-black':        '#0A0A0A',
        'brand-white':        '#F5F4F0',
        'brand-cobalt':       '#1A4D3A',
        'brand-cobalt-light': '#3D7A60',
        'brand-graphite':     '#EDEAE4',
        'brand-concrete':     '#C9C6BE',
        'brand-muted':        '#7A7872',
      },
      fontFamily: {
        book:    ['var(--font-playfair)', 'Georgia', '"Times New Roman"', 'serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        sans:    ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      letterSpacing: {
        tightest:  '-0.04em',
        widest:    '0.25em',
        ultra:     '0.35em',
        broadcast: '0.18em',
      },
    },
  },
  plugins: [],
}

export default config
