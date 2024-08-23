/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif']
      }
    },
    keyframes: {
      'rgb-border': {
        '0%, 100%': { borderColor: 'rgb(255, 0, 0)' }, // red
        '25%': { borderColor: 'rgb(255, 255, 0)' }, // yellow
        '50%': { borderColor: 'rgb(0, 255, 0)' }, // green
        '75%': { borderColor: 'rgb(0, 0, 255)' }, // blue
      },
    },
    animation: {
      'rgb-border': 'rgb-border 5s linear infinite',
    },
  },
  plugins: [],
}