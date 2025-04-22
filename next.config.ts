/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This is crucial - must be 'class' not 'media'
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}