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
    },
  },
  plugins: [],
}


