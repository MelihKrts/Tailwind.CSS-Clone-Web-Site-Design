/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {

    extend: {

      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },

      colors: {
        bordercolor:'#b3b3b3',
        buttonhover:'#ffc61e',
      },
  
      screens: {
        'xs': '475px',
      },

    },
  },
  plugins: [],
}
