/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      'scroll-left': 'scroll-left 20s linear infinite',
      'scroll-right': 'scroll-right 20s linear infinite',
    },
  },
  plugins: [],
}

