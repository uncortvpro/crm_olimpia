import type { Config } from 'tailwindcss';
import VAR from './global/variables';

export default <Partial<Config>>{
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
        DEFAULT: `${VAR.CONTAINER_PADDING_XS}px`,
        xl: `${VAR.CONTAINER_PADDING_XL}px`,
      },
    },
    screens: {
      xs: `${VAR.BREAKPOINTS_XS}px`,
      sm: `${VAR.BREAKPOINTS_SM}px`,
      md: `${VAR.BREAKPOINTS_MD}px`,
      lg: `${VAR.BREAKPOINTS_LG}px`,
      xl: `${VAR.BREAKPOINTS_XL}px`,
      '2xl': `${VAR.BREAKPOINTS_2XL}px`,
      '3xl': `${VAR.BREAKPOINTS_3XL}px`,
      '4xl': `${VAR.BREAKPOINTS_4XL}px`,
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
        'primary-gray': "#727272",
        "dark-transparent": "#0000001f",
        dark: {
          DEFAULT: '#3b3b3b',
          100: '#383838'
        },
        'placeholder': '#B6B6B6',
      },
      screens: {
        "is-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}