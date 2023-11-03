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
            thirt: '#FFFFFF',
            four:'#4D5057',
            Gradient: 'rgba(208,204,209, 0.45)'

        },
        fontFamily: {
            primary: 'Bellefair',
            secondary: 'Barlow Condensed'
        },
        backgroundImage: {
            'bgMobileHome': 'url(\'src/assets/home/background-home-mobile.jpg\')',
            'bgTabletHome': 'url(\'src/assets/home/background-home-tablet.jpg\')',
            'bgDesktopHome': 'url(\'src/assets/home/background-home-desktop.jpg\')',

            'bgMobileDestination': 'url(\'src/assets/destination/background-destination-mobile.jpg\')',
            'bgTabletDestination': 'url(\'src/assets/destination/background-destination-tablet.jpg\')',
            'bgDesktopDestination': 'url(\'src/assets/destination/background-destination-desktop.jpg\')',

            'bgMobileCrew': 'url(\'src/assets/crew/background-crew-mobile.jpg\')',
            'bgTabletCrew': 'url(\'src/assets/crew/background-crew-tablet.jpg\')',
            'bgDesktopCrew': 'url(\'src/assets/crew/background-crew-desktop.jpg\')',

            'bgMobileTechnology': 'url(\'src/assets/Technology/background-Technology-mobile.jpg\')',
            'bgTabletTechnology': 'url(\'src/assets/Technology/background-Technology-tablet.jpg\')',
            'bgDesktopTechnology': 'url(\'src/assets/Technology/background-Technology-desktop.jpg\')',
            
            'bg-tech1':'url(\'src/assets/Technology/background-Technology-desktop.jpg\')',
        },
        backgroundColor:{
            'bgGradient': 'rgba(208,204,209, 0.45)',
            'bgGradientMobile': 'rgba(10,20,30, 1)',
            'bg-button':'#FFFFFF',
            'bg-transparent':'rgba(0,0,0, 0)'
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1060px',
            xl: '1440px',
          },
      extend: {},
    },
    plugins: [],
  }