const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      brand: {
        // darkest: '#45415C',
        darkest: '#233448',
        dark: '#A84F71',
        primary: '#D45C7E',
        light: '#C9533E',
        lightest: '#DC7B28',
        contrast: '#F3D9C0'
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
