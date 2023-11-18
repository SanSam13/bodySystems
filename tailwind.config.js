/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#E10A0A',
        'accent-color': '#3C1053',
        'footer-color': '#2C0B3E',
        'text-black': '#333333',
        'text-gray': '#999999'
      },
      fontFamily: {
        'DMSans': ['DM Sans', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans-serif'],
      }
      
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}

