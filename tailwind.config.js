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
      maxWidth: {
        'rekomendasi-card': '380px'
      },
      maxHeight: {
        'rekomendasi-card': '490px'
      },

      padding: {
        'section': '100px'
      },

      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      },
      colors: {
        'premier': '#048853',
        'secondary': '#FFFFFF',
        'premier-2' : '#00985B',
        'hijau-tua' : '#00492C',
        'hitam' : '#000000',
        'pink': "#FF0000"
      }
    },
  },
  plugins: [],
}

