/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,}',
  ],
  theme: {
    fontFamily: {
      DEFAULT: 'Poppins'
    },
    container: {
      padding: {
        DEFAULT: '10px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    extend: {
      colors: {
        primary: '#09E7B4',
        secondary: '#FF680A'
      },
      backgroundImage: {
        heroBg1: 'url(/src/assets/hero/layer_1.png)',
       
        heroBg3: 'url(/src/assets/hero/layer_3.png)',
      }
    },
  },
  plugins: [],
}

