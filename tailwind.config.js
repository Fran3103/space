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
        backgroundImage: {
            'bgMobile': 'url(\'src/assets/home/background-home-mobile.jpg\')',
            'bgTablet': 'url(\'src/assets/home/background-home-tablet.jpg\')',
            'bgDesktop': 'url(\'src/assets/home/background-home-desktop.jpg\')',
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
          },
      extend: {},
    },
    plugins: [],
  }