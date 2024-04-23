/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
      },
      backgroundImage: {
        'home-bg': "url('/public/header_01.jpg')",
      },
      colors: {
        'primary-color': '#A4C18B',
        'secondary-color': '#384230',
      },
    },
  },
  plugins: [],
}
