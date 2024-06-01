/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      backgroundColor: {
        'custom-blue-1': '#006bb3',
        'custom-blue-2': '#0098ff'
      },
      color: {
        'btn-blue-1' : '#3876bf'
      },
      transitionProperty: {
        'flex': 'flex',
      },
      transitionDuration: {
        '800':'800ms',
      }
    },
  },
  plugins: [],
}