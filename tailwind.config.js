/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c37055',
        secondary: '#f7e7d2',
        tertiary: '#fdf8f4',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};