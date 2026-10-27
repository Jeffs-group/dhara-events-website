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
          DEFAULT: '#6B5CF6',
          hover: '#A89BFF',
          deep: '#3535D2',
          gradient: 'linear-gradient(135deg, #3535D2 0%, #6B5CF6 100%)',
        },
        brand: {
          bg: '#05060A',
          dark: '#05060A',
          surface: '#0E1020',
          violet: '#6B5CF6',
          lavender: '#A89BFF',
          deep: '#3535D2',
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
          '0%': { boxShadow: '0 0 15px rgba(107, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(168, 155, 255, 0.65)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
