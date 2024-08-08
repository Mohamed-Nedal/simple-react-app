/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#2C3E50",
        greenColor: "#1ABC9C",
        darkColor: "#1A252F",
        bgOverlay: "#1abc9ce6",
        slideOverlay: "#0d6efd40",
      },
    },
  },
  plugins: [],
};
