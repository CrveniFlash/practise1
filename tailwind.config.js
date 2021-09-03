const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      rose: colors.rose,
      amber: colors.amber,
      emerald: colors.emerald,
      violet: colors.violet,
      pink: colors.pink,
      btnPrimary: '#8D5CF6',
        
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
