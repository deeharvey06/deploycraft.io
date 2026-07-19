/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B1220',
        surface: '#111827',
        primary: {
          DEFAULT: '#2563EB',
          hover: '#3B82F6',
        },
        accent: {
          DEFAULT: '#14B8A6',
          hover: '#2DD4BF',
        },
        text: {
          DEFAULT: '#F9FAFB',
          secondary: '#94A3B8',
        },
        border: '#1E293B',
        success: '#22C55E',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.25), transparent), radial-gradient(ellipse 60% 40% at 80% 10%, rgba(20,184,166,0.15), transparent)',
        'grid-pattern':
          'linear-gradient(rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.05) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(37,99,235,0.4)',
        'glow-accent': '0 0 40px -10px rgba(20,184,166,0.4)',
        card: '0 4px 24px -4px rgba(0,0,0,0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1.4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
      },
    },
  },
  plugins: [],
}
