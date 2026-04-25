import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan:    '#06b6d4',
          orange:  '#f97316',
          emerald: '#10b981',
          purple:  '#8b5cf6',
          amber:   '#f59e0b',
          red:     '#ef4444',
        },
        surface: {
          DEFAULT: '#0d1117',
          card:    '#161b22',
          raised:  '#1c2333',
          border:  'rgba(255,255,255,0.06)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'geo-gradient':  'linear-gradient(135deg, #0d1117 0%, #0a1628 50%, #0d1117 100%)',
        'hero-mesh':     'radial-gradient(ellipse at 20% 50%, rgba(6,182,212,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(249,115,22,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.10) 0%, transparent 50%)',
        'card-glow-cyan':   'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, transparent 60%)',
        'card-glow-orange': 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 60%)',
        'card-glow-purple': 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, transparent 60%)',
      },
      animation: {
        'float':         'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x':    'gradient-x 8s ease infinite',
        'shimmer':       'shimmer 2s linear infinite',
        'slide-up':      'slide-up 0.5s ease-out',
        'fade-in':       'fade-in 0.6s ease-out',
        'spin-slow':     'spin 20s linear infinite',
        'orbit':         'orbit 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        orbit: {
          '0%':   { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
      },
      boxShadow: {
        'glow-cyan':   '0 0 30px rgba(6,182,212,0.25)',
        'glow-orange': '0 0 30px rgba(249,115,22,0.25)',
        'glow-purple': '0 0 30px rgba(139,92,246,0.25)',
        'card':        '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
