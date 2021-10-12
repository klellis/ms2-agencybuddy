const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      indigo: {
        light: '#b3bcf5', 
        DEFAULT: '#5c6ac4', 
        dark: '#202e7a',
      
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
},
},
  // ...
}