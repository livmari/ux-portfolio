const colors = require('tailwindcss/colors')
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        `"Mulish"`,
        `ui-sans-serif`,
        `system-ui`,
        `sans-serif`,
        `"Apple Color Emoji"`,
        `"Segoe UI Emoji"`,
        `"Segoe UI Symbol"`,
        `"Noto Color Emoji"`,
      ],
      serif: [
        `"Instrument Serif"`,
        `ui-serif`,
        `Georgia`,
        `Cambria`,
        `"Times New Roman"`,
        `Times`,
        `serif`,
      ],
    },
    extend: {
      colors: {
        gray: colors.zinc,
        primary: colors.indigo,
      },
    },
  },
  plugins: [],
}
export default config
