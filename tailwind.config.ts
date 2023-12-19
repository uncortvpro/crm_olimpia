import type { Config } from 'tailwindcss';
import VAR from './global/variables';

export default <Partial<Config>> {
  content: [
    './components//*.{js,vue,ts}',
    './layouts//*.vue',
    './pages//*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        xl: "20px",
      },
    },
    screens: {
      xs: "375px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
    fontFamily: {
      Primary: ["Nunito", "sans"],
      Logo: ["Syne", "sans"],
    },
    extend: {
      gridTemplateColumns: {
      },
      gridTemplateRows: {
      },
      transitionDuration: {
        'hover': '200ms',
      },
      opacity: {
        'hover': '60%',
      },
      backgroundImage: {
      },
      boxShadow: {

      },
      colors: {
        'primary-color': '#9de500',
        dark: '#3b3b3b'
      },
      screens: {
        "is-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}