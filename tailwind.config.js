/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu Sans', 'sans-serif'],
      'tungsten': ['Tungsten-Bold', 'sans-serif'],
      'virgil': ['Virgil', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

