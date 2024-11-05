/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#065f46', // dark green
          light: '#059669',
          dark: '#064e3b',
        }
      }
    },
  },
  plugins: [],
}