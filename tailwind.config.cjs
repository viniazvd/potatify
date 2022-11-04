/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|secondary)-(DEFAULT|200|300|400|500|contrast)/,
      variants: ['hover', 'focus', 'active']
    },
    {
      pattern: /(bg|text|border)-(primary|contrast)/,
      variants: ['hover', 'focus', 'active']
    }
  ],
  theme: {
    fontFamily: {
      DEFAULT: "Montserrat"
    },
    extend: {
      colors: {
        contrast: {
          primary: "#fff"
        },
        primary: {
          DEFAULT: "#1E7A75",
          200: "#196662",
          300: "#145350",
          400: "#103F3D"
        },
        secondary: {
          DEFAULT: "#46BC8F",
          200: "#3B9E78",
          300: "#308061",
          400: "#24624A"
        },
        highlight: "#FBD700",
        neutral: "#FAFCFE",
        darkBase: "#202B36",
        positive: "#2bb673",
        negative: "#EB5757",
        caution: "#FAAD14"
      },
    },
  },
  plugins: [],
}
