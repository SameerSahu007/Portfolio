/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        navcolor : '#5837D0',
        navtextcolor : '#81C6E8',
        backcolor : '#171C28',
        namecolor : '#bde4f7'
    },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], 
        'roboto' : ['Roboto Mono']
      },
    },
  },
  plugins: [],
}
