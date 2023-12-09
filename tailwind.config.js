/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "red-color": "#ff3838",
      },
    },
  },
  plugins: [require("daisyui")],
};
