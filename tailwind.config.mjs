/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  theme: {
    extend: {
      colors: {
        dark: '#121225',
        light: '#F1F1F1',
        glass: '#E3EFFF',
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        barlow: ['Barlow', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
