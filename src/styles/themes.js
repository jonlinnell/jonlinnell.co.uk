export const LIGHT = 'LIGHT';

export const colours = {
  darkest: '#233448',
  dark: '#A84F71',
  primary: '#D45C7E',
  light: '#C9533E',
  lightest: '#DC7B28',
  contrast: '#F3D9C0',
  white: '#FFFFFF',
};

const fonts = {
  heading: "'Raleway', sans-serif",
  content: "'Lato', sans-serif",
};

const themes = {
  [LIGHT]: {
    colours: {
      brand: colours,
      background: colours.white,

      primary: colours.primary,
      secondary: colours.dark,
      contrast: colours.lightest,
    },
    fonts,
  },
};

export default themes;
