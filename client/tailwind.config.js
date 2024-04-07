/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#212121",
        "dark-ui": "#171717",
        "dark-acc": "#424242",
        "dark-acc2": '#2F2F2F',
        "white-bg": "#FFFFFF",
        "white-ui": "#F9F9F9",
        "white-acc": "#D9D9D9",
        "white-acc2": "#ECECEC"
      }
    },
  },
  plugins: [],
}