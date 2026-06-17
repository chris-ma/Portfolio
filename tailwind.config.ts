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
        'brand-black':        '#0A0A0A',
        'brand-white':        '#F5F4F0',
        'brand-cobalt':       '#2563EB',
        'brand-cobalt-light': '#60A5FA',
        'brand-graphite':     '#1C1C1C',
        'brand-concrete':     '#3A3A3A',
        'brand-muted':        '#6B6B6B',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        sans:    ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest:   '0.25em',
        ultra:    '0.35em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
