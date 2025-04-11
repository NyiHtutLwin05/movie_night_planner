/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FCA311',
          dark: '#E59210',
        },
        background: {
          DEFAULT: '#1C1C2E',
          lighter: '#2D2D44',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#B0B0C3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};