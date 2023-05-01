/** @type {import('tailwindcss').Config} */

const { Container } = require('postcss');
const { space } = require('postcss/lib/list');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#33A0FF',
        'red': {

          '110':'#FF6875',
          '210':'#FF4858',
          '310':'#FF4252'
        } ,
        // 'redgrad': '#FF4858',
        'bluegrad':'#8F65FF',
        // f6f7f8
        //  #c1c8ce
        
      },
      width:{
        '128': '29rem',
      },
      spacing:{
        
      '128': '1000px',
      },
      container:{
        center: true,
      }
    },
  },
  plugins: [],
}