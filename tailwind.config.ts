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
        ieee: {
          blue: '#00629B',
          'blue-light': '#0084C8',
          'blue-dark': '#004B7A',
          'blue-deep': '#003560',
          navy: '#1B2A4A',
          sky: '#E8F4FD',
          'sky-mid': '#C8E4F5',
          gold: '#F5A623',
          white: '#FFFFFF',
          'gray-soft': '#F7F9FC',
          'gray-mid': '#E2EAF2',
          'gray-text': '#6B7B8D',
          'text-dark': '#1A2535',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'ieee-gradient': 'linear-gradient(135deg, #003560 0%, #00629B 50%, #0084C8 100%)',
        'ieee-gradient-soft': 'linear-gradient(135deg, #E8F4FD 0%, #C8E4F5 100%)',
        'hero-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(0,98,155,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,132,200,0.1) 0%, transparent 50%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 98, 155, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 98, 155, 0.18)',
        'nav': '0 2px 20px rgba(0, 53, 96, 0.12)',
        'glow': '0 0 40px rgba(0, 132, 200, 0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,132,200,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(0,132,200,0.5)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
