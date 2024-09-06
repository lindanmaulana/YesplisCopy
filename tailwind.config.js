import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Sora: ["Sora", "serif"],
      },
      colors: {
        primary: "#1932B9",
        secondary: "#172029",
        third: "#FFFFFF"
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"]
  }
};
