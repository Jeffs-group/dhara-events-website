import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#05060A',
        surface: '#0E1020',
        card: '#0E1020',
        'card-border': 'rgba(255, 255, 255, 0.08)',
        primary: {
          DEFAULT: '#5B5BF0',
          hover: '#7C6CF5',
          gradient: 'linear-gradient(135deg, #5B5BF0 0%, #7C6CF5 100%)',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5D77A',
          dark: '#AA820A',
        },
        brand: {
          bg: '#05060A',
          dark: '#0A0B12',
          surface: '#0E1020',
          accent: '#7C6CF5',
          indigo: '#5B5BF0',
          gold: '#D4AF37',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(91, 91, 240, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(124, 108, 245, 0.7)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
