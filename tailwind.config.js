/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        'premier': '#00985B',
        'secondary': '#FFFFFF',
        'hijau-tua' : '#00492C',
        'hitam' : '#000000'
      }
    },
  },
  plugins: [],
}

