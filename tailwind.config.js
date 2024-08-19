/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.js'
  ],
  theme: {
    screens: {
      'sm': {'max': '640px'},
      'md': {'min': '641px', 'max': '1070px'},
      'lg': '1071px'
    },
    fontFamily: {
      'serif': ['Montserrat'],
      'sans': ['Inter'] 
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('./images/bg-intro-mobile.svg')",
        'hero-desktop': "url('./images/bg-intro-desktop.svg')"
      },
      spacing: {
        '73': '4.5625rem'
      },
      fontSize: {
        'md': ['40px', '46px']
      },
      height: {
        '25px': '1.5625rem',
        '450px': '28.125rem',
        '500px': '31.25rem',
        '900px': '56.25rem'
      }, 
      maxHeight: {
        '100px': '6.25rem',
        '260px': '16.25rem',
        '500px': '31.25rem',
        '550px': '34.375rem',
        '900px': '56.25rem',
        '770px': '48.125rem'
      },
      maxWidth: {
        '220px': '13.75rem',
        '260px': '16.375rem',
        '360px': '22.5rem',
        '450px': '28.125rem',
        '770px': '48.125rem'
      },
      width: {
        '85%': '85%',
        '90%': '90%',
        '180px': '11.25rem',
        '360px': '22.5rem'
      },
      colors: {
        'greenish': 'rgba(49,211,92)',
        'sky-blueish': 'rgba(43,183,218,1)',
        'greyish-blue': 'hsl(233, 8%, 62%)',
        'dark-blueish': 'hsl(233, 26%, 24%)',
        'light-grey-blue': 'hsl(220, 16%, 96%)',
        'light-grey-grey': 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}

