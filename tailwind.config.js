/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      main: '#08a8e4',
      white: 'ffffff',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
