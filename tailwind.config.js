/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.tsx',
    './pages/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#F8D22F',
        white: '#FFFFFF',
        brand: '#0007BC',
        cyan: '#34EDDF',
        'black-900': '#161616',
        'black-800': '#242424',
        'black-700': '#4C5270',
        'black-500': '#6A6F88',
        'black-300': '#ACACBC',
        'black-100': '#D6D6E0',
        'black-50': '#F2F2F6',
        blue: '#0007BC',
        'blue-dark': '#0A0D4A',
        'blue-light': '#00FFFF',
        'blue-800': '#0B108D',
        'gray-100': '#E6E6E6',
        success: '#1DC32F',
        error: '#FF2D55',
        alert: '#FF9500',
      }
    },
  },
  plugins: [],
}
