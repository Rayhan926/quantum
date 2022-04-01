module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: "#BC3859",
        dark: {
          hard: "#050B1C",
          medium: "#191F3E",
          soft: "#242C51",
          "very-soft": "#242C51"
        },
        gray: "#8D8CAB"
      }
    },
  },
  plugins: [],
}