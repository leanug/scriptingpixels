import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: [
          'Ubuntu', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',
          '"Helvetica Neue"', 'sans-serif', '"Apple Color Emoji"',
          '"Segoe UI Emoji"', '"Segoe UI Symbol"',
        ],
      },
  	}
  },
  plugins: [
    require('daisyui'), 
    require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'cyberpunk', 'aqua', 'dracula']
  }
}
export default config
