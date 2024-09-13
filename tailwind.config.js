/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
    "./styles.css"
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#3A0CA3',
        'bright-blue': '#4CC9F0',
        'vibrant-pink': '#F72585',
        'light-gray': '#F8F9FA',
        'dark-blue-gray': '#2B2D42',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}