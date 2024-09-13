/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
    "./input.css"
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#3A0CA3',
        'bright-blue': '#4CC9F0',
        'vibrant-pink': '#F72585',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}