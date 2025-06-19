/** @type {import('tailwindcss').Config} */
import colors from './src/styles/colors';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: colors.light.background,
          dark: colors.dark.background,
        },
        surface: {
          light: colors.light.surface,
          dark: colors.dark.surface,
        },
        accent: {
          light: colors.light.accent,
          dark: colors.dark.accent,
        },
        primary: {
          light: colors.light.primary,
          dark: colors.dark.primary,
        },
        text: {
          light: colors.light.text,
          dark: colors.dark.text,
        },
      },
      fontFamily: {
        sans: ['"Poiret One"', 'sans-serif'],
        tangerine: ['"Tangerine"', 'cursive'],
      },
    },
  },
  plugins: [],
};