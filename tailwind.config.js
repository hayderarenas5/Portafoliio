/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "primary":"#CEE0DE",
        "secondary":"#00A8CC"
      }
    },
  },
  plugins: [],
}

