import type { Config } from 'tailwindcss'

const config: Config = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens: {
    //   lil: '470px',
    // },
    minHeight: {
      auto: 'auto',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero_img: "url('/displayImg.png')",
        build_img: "url('/building.svg')",
        repair_img: "url('/repair.svg')",
        design_img: "url('/design.svg')",
        static_img: "url('/staticProjectImg.svg')",
      },
      colors: {
        'light-grey1': '#4E5358',
        'dark-grey1': '#2A2A2A',
        'light-grey2': '#F7F7F7',
        orangeJ: '#ffb400',
        golden: '#daab6e',
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
      typography: {
        DEFAULT: {
          css: {
            '.responsive-text': {
              fontSize: 'calc(1rem + 1vw)',
              lineHeight: '1',
            },
            'h2, .h2': {
              fontSize: '1.325rem',
              lineHeight: '1',
            },
            'h3, .h3': {
              fontSize: '1.3rem',
              lineHeight: '1',
            },
            'h4, .h4': {
              fontSize: '1.275rem',
              lineHeight: '1',
            },
            'h5, .h5': {
              fontSize: '1rem',
              // Optionally, specify line-height as well
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-clip-path')],
}
export default config
