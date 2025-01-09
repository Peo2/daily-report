/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'purple': '#9333ea',
       'mainbg' : '#0e1217',
       'red': '#ef4444',
       'brown': '#ad6648',
       'firsttxcolor' : '#fff',
       'firsticon' : '#1d4ed8',
       'firsticoninside' : '#0E1217',
       'zerocolor' : '#ec4899',
       'newpostcolor' : '#0e1217',
       'kcolor' : '#1c1f26',
       'gencolor' : '#a8b3cf',
       'white' : '#ffffff',
       'dimwhite' : '#a8a29e',
       'searchcolor' : '#1e293b',
       'bluecolor' : '#0000ff',
       'green' : '#3cb371',
    },
    extend: {},
      width: {
        '434px': '434px',
        '62px': '62px',
        '434': '434px',
        '1360px': '1360px',
         '156.75px': '156.75px',
         '318px' : '318px',
         '1314px' : '1314px',
         '24.92px': '24.92px',
          '200px': '200px'
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
  },
  
  plugins: [],
}

