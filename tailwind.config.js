/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#243A5A',
          dark: '#1A2B42',
          light: '#3A4F6F',
        },
        accent: {
          DEFAULT: '#C9A24D',
          light: '#D4B366',
        },
      },
    },
  },
  plugins: [],
};
