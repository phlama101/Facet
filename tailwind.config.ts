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
          bg:          '#0E0F14',
          surface:     '#16181F',
          'surface-hi':'#1E2028',
          border:      '#2A2D38',
          'border-hi': '#3A3E4D',
          text:        '#EDEEF2',
          dim:         '#9CA0AE',
          subtle:      '#6B6F7C',
          accent:      '#7AD7F0',
          'accent-hot':'#5FC5DE',
          gold:        '#E4B74A',
          coral:       '#F28C76',
          jade:        '#7FC29B',
          amethyst:    '#B57EDC',
          ruby:        '#E25B6E',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        sm: '2px',
      },
      animation: {
        'fade-in':      'fade-in 0.4s ease-out',
        'slide-up':     'slide-up 0.4s ease-out',
        'lesson-pulse': 'lesson-pulse 2.4s ease-in-out infinite',
        'path-shimmer': 'path-shimmer 1.8s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'lesson-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%':      { transform: 'scale(1.1)', opacity: '0.85' },
        },
        'path-shimmer': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.65' },
        },
      },
    },
  },
  plugins: [],
}

export default config
