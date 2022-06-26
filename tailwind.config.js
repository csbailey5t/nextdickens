const { blue } = require('tailwindcss/colors');

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ddnpblue": "#6d9fd7",
        "ddnptaupe": "#cec6a5",
        "ddnpgrey": "#506859",
        "ddnpgreen": "#b5d0b6", 
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};

// 6d9fd7 - blue
// cec6a5 - taupe background
// 506859 - grey green
// b5d0b6 - green from wix

