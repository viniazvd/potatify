/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
    maxWidth: {
      mobile: "768px",
      tablet: "992px",
      desktop: "1200px"
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        sans: ["'Inter'", ...defaultTheme.fontFamily.sans]
      },
      screens: {
        mobile: '640px',
        tablet: '1024px',
        desktop: '1280px',
      },
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
  plugins: [
    function({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
}
