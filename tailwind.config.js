/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0c1014",
        gray: "#44474a",
        pink: "#fd5d80",
        lightPurple: "#6d81f9",
        deepPurple: "#553aff",
        lightLime: "#9cfacf",
        white: "#c7c8c9",
      },
    },
  },
  plugins: [],
};
