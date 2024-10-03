import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.stone,
      primary: colors.indigo,
      'playful-blue': '#99B7F5',
      'playful-green': '#267F53',
      'playful-orange': '#F5793B',
      'playful-pink': '#F296BD',
      'playful-yellow': '#FCCA59',
    },
  },
  plugins: [],
}
export default config
