/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#333333', 
        'primary': '#FFBE21',
        'secondary': '#D0ABA0'
      }, 
      backgroundImage: {
        'img': "url('/src/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

