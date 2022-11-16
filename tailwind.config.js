const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      brand: {
        primary: "#FC766AFF",
        contrast: "#5B84B1FF",
      },
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      amber: colors.amber,
      yellow: colors.yellow,
      violet: colors.violet,
      lime: colors.lime,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
