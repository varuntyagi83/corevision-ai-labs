import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-anton)'],
        body: ['var(--font-barlow)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        navy: {
          950: '#060E1C',
          900: '#0A1628',
          800: '#0D1E35',
          700: '#112540',
          600: '#163050',
        },
        teal: {
          accent: '#1BB8C0',
          glow: 'rgba(27,184,192,0.15)',
        },
        copper: {
          accent: '#C87941',
          glow: 'rgba(200,121,65,0.15)',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in': 'fadeIn 0.6s ease both',
        'slide-in': 'slideIn 0.8s cubic-bezier(0.4,0,0.2,1) both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
