/** @type {import('tailwindcss').Config} */
const typography = require("@tailwindcss/typography");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },

  theme: {
    extend: {
      daisyui: {
        themes: ["cupcake", "dark", "cmyk"],
      },
    },
  },
  plugins: [typography, require("daisyui")],
};
