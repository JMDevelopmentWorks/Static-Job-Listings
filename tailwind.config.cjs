/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        filterCyan: '	#EEF6F6',
        backgroundCyan: '	#EFFAFA',
        darkCyan: '#7B8E8E',
        veryDarkCyan: '#2C3A3A',
        desaturatedCyan: '#5BA4A4',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      fontSize: {
        appBase: "15px",
      },
      boxShadow: {
        card: '0 10px 30px -15px',
      },
      backgroundImage: {
        bgDesktop: 'url(./src/assets/images/bg-header-desktop.svg)',
        bgMobile: 'url(./src/assets/images/bg-header-mobile.svg)',
      },
    },
  },
  plugins: [],
}
