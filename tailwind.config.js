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
            'bgMobileHome': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/home/background-home-mobile.jpg?raw=true\')',
            'bgTabletHome': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/home/background-home-tablet.jpg?raw=true\')',
            'bgDesktopHome': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/home/background-home-desktop.jpg?raw=true\')',

            'bgMobileDestination': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/destination/background-destination-mobile.jpg?raw=true\')',
            'bgTabletDestination': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/destination/background-destination-tablet.jpg?raw=true\')',
            'bgDesktopDestination': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/destination/background-destination-desktop.jpg?raw=true\')',

            'bgMobileCrew': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/crew/background-crew-mobile.jpg?raw=true\')',
            'bgTabletCrew': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/crew/background-crew-tablet.jpg?raw=true\')',
            'bgDesktopCrew': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/crew/background-crew-desktop.jpg?raw=true\')',

            'bgMobileTechnology': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/technology/background-technology-mobile.jpg?raw=true\')',
            'bgTabletTechnology': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/technology/background-technology-tablet.jpg?raw=true\')',
            'bgDesktopTechnology': 'url(\'https://github.com/Fran3103/space/blob/main/src/assets/technology/background-technology-desktop.jpg?raw=true\')',
            
            'bg-tech1':'url(\'https://github.com/Fran3103/space/blob/main/src/assets/technology/background-technology-desktop.jpg?raw=true\')',
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