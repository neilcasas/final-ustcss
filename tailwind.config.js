/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#287FEB',
        secondary: '#DDEFFF',
        accentpurple:'#6973DB',
        accentorange: '#D25E00'
      }
    },
  },
  plugins: [],
}