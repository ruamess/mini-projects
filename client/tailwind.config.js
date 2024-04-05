/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#065E7C",
        "sea-blue": "#387E96"
         
      }
    },
  },
  plugins: [],
}