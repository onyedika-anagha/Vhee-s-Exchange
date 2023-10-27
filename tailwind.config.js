/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      colors: {
        vhee: {
          50: "#f0ffe5",
          100: "#dbffc7",
          200: "#b9ff96",
          300: "#8cfc5a",
          400: "#64f328",
          500: "#43d909",
          600: "#2fae02",
          700: "#258407",
          800: "#22680c",
          900: "#1e580f",
          950: "#104903",
        },
        marshland: {
          50: "#f6f8f5",
          100: "#e1e8df",
          200: "#c2d0bf",
          300: "#9ab197",
          400: "#749071",
          500: "#597557",
          600: "#455d44",
          700: "#3b4c39",
          800: "#313f30",
          900: "#2c362b",
          950: "#0b0f0b",
        },
      },
    },
  },
  plugins: [],
};
