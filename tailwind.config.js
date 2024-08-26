/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily:{
        "inter" : ["Inter", "sans-serif"]
    },
    extend: {
      colors:{
        'primary':' #E6533C',
      },
      backgroundImage:{
        'hero-pattern': 'linear-gradient(180deg, #111 0%, rgba(119, 119, 119, 0.00) 100%)'
      }
    },
  },
  plugins: [],
}

