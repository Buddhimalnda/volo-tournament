/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#5800FF",
      "blue-light": "#00FFF5",
      purple: "#570A57",
      pink: "#F806CC",
      orange: "#FF8D29",
      green: "#49FF00",
      yellow: "#FFCD38",
      "gray-dark": "#393E46",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      black: "#222831",
      light: "#EEEEEE",
      primary: "#FF4654",
      // "primary-t": "#2e024970",
      secondry: "#0F1923",
      thired: "#A91079",
      danger: "#8C0000",
      success: "#06FF00",
      alert: "#FF8D29",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      caveat: ["Caveat", "cursive"],
      DynaPuff: ["DynaPuff", "cursive"],
      Fleur: ["Fleur De Leah", "cursive"],
      Pacifico: ["Pacifico", "cursive"],
      Rubik: ["Rubik Dirt", "cursive"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
