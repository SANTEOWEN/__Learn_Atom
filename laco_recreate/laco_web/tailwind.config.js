/* eslint-disable no-undef */
const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        'thin': '100',
        'light': '300',
        'normal': '400',
        'bold': '700',
        'extra-bold': '800',
        'black': '900'
      },
      backgroundColor: {
        'custom-blue-1': '#006bb3',
        'custom-blue-2': '#0098ff'
      },
      color: {
        'btn-blue-1': '#3876bf'
      },
      transitionProperty: {
        'flex': 'flex',
      },
      transitionDuration: {
        '800': '800ms',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}