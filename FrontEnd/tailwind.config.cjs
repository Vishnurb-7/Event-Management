/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  extend: {
    fontFamily: {
      Viaoda: ['Viaoda Libre', 'cursive'],
      Volkhov: ['Volkhov', 'serif']
    }
  },
  plugins: [],
}
