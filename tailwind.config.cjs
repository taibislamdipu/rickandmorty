/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        primary: "#191D29",
        secondary: "#9DFE00",
        thirdColor: "#14D9E5",
        blur: "#292C38",
      },
      fontFamily: {
        bodyFont: ["TTTravels", "Sans Serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
