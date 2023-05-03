/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#5D5CD6',
        subdued: '#A19A9A',
        'subdued-light': '#9F9A9A',
      },
      backgroundImage: {
        'hero-bg' : "url('/public/images/doodle-bg.png')"
      }
    },
  },
  plugins: [],
}

