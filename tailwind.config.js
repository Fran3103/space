/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors:{
            primary: '#0B0D17',
            secondary: '#D0D6f9',
            thirt: '#FFFFFF'

        },
        fontFamily: {
            primary: 'Bellefair',
            secondary: 'Barlow Condensed'
        },
      extend: {},
    },
    plugins: [],
  }