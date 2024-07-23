/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html","./public/*.js"],
  theme: {
    extend: {
      fontFamily : {
        logo : ['Pinyon Script'],
        text : ['PT Sans'],
        about : ['Karla']
      },
      spacing : {
        auto : '100%',
      },
      screens : {
        sm : '355px',
        sm1 : '455px',
        sm2 : '245px',
      },
      maxWidth :{
        md1 : '550'
      }
    },
  },
  plugins: [],
}

