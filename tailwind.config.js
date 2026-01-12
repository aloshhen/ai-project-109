/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'electric-coffee': {
          DEFAULT: '#FF6B00',
          50: '#FFB800',
          100: '#FF9100'
        },
        'slate-dark': {
          950: '#0F172A'
        }
      },
      backgroundImage: {
        'electric-gradient': 'linear-gradient(135deg, #FF6B00, #FFB800)'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        }
      }
    }
  },
  plugins: []
}