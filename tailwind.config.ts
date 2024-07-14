const colors = require('tailwindcss/colors')
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.zinc,
      primary: colors.indigo,
      accent: {
        50: '#FDFDEC',
        100: '#F9F9C8',
        200: '#F5F5A3',
        300: '#F1F17E',
        400: '#EDED5A',
        500: '#E9E935',
        600: '#DCDC18',
        700: '#B8B814',
        800: '#939310',
        900: '#6E6E0C',
        950: '#494908',
      },
    },
    extend: {
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
}
export default config
