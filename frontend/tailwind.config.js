/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto'],
      },
    },
    daisyui: {
      themes: ['lofi'],
    },
    plugins: [require('daisyui')],
  },
}
