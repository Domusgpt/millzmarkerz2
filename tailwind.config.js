/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vaporwave': {
          'primary': '#ff00ff',
          'secondary': '#00ffff', 
          'accent': '#ffff00',
          'dark': '#000020',
          'mid': '#181848',
          'light': '#9124cc'
        }
      }
    },
  },
  plugins: [],
}
