/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-marca':       '#175442',
        'verde-eclipse':     '#0E3528',
        'verde-salvia':      '#DCE7DE',
        'offwhite-botanico': '#F6EADC',
        'bege-aerado':       '#FBF6EE',
        'dourado-champagne': '#B49964',
        'dourado-brilho':    '#D4B883',
        'texto-escuro':      '#13251E',
        'texto-claro':       '#F6EADC',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body:    ['Manrope', 'system-ui', 'sans-serif'],
      },
      animation: {
        'heartbeat': 'heartbeat 1.2s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'float-leaf': 'float-leaf 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.15)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.08)' },
          '56%': { transform: 'scale(1)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(180,153,100,0.5)' },
          '50%': { boxShadow: '0 0 0 16px rgba(180,153,100,0)' },
        },
        'float-leaf': {
          '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}


