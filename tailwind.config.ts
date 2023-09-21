import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero_img: "url('../public/displayImg.png')",
      },
      colors: {
        'light-grey1': '#4E5358',
        'dark-grey1': '#2A2A2A',
        orangeJ: '#ffb400',
      },
      spacing: {
        comp1: '46rem',
        comp2: '46rem',
      },
      fontSize: {
        '6.5xl': ['4rem', '1'],
      },
      maxWidth: {
        content: '46rem',
        imgS: '20%',
      },
    },
  },
  plugins: [],
}
export default config
