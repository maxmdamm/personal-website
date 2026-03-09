/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102542',
        },
        offwhite: {
          DEFAULT: '#f4f4f9',
        },
        orange: {
          DEFAULT: '#f26419',
        },
        lightblue: {
          DEFAULT: '#89c2d9',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        // Horizon fallback to Syncopate
        horizon: ['Horizon', 'Syncopate', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
