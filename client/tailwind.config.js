/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#212121",
        "ui": "#171717",
        "acc": "#424242",
        "acc2": '#2F2F2F'
      }
    },
  },
  plugins: [],
}