/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        killarney: {
          50: "#f5f9f4",
          100: "#e5f3e5",
          200: "#cbe7cb",
          300: "#a2d3a3",
          400: "#72b673",
          500: "#4e994f",
          600: "#3c7d3d",
          700: "#336534",
          800: "#2b502c",
          900: "#254227",
          950: "#102311",
        },
        energy: {
          50: "#fdfbe9",
          100: "#fcf8c5",
          200: "#fbef8d",
          300: "#f8de4f",
          400: "#f4c91b",
          500: "#e4b10e",
          600: "#c4890a",
          700: "#9d620b",
          800: "#824e11",
          900: "#6e3f15",
          950: "#402008",
        },
        thorns: {
          50: "#fdf3f3",
          100: "#fde3e3",
          200: "#fccccc",
          300: "#f8a9a9",
          400: "#f27777",
          500: "#e74c4c",
          600: "#d42e2e",
          700: "#b22323",
          800: "#932121",
          900: "#802323",
          950: "#420d0d",
        },
        woodsmoke: {
          50: "#f6f5f5",
          100: "#e8e5e5",
          200: "#d4cecd",
          300: "#b6acaa",
          400: "#908380",
          500: "#756865",
          600: "#645a56",
          700: "#544d4a",
          800: "#494341",
          900: "#403b39",
          950: "#191716",
        },
        dove: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#707070",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#262626",
        },
        denim: {
          50: "#eff8ff",
          100: "#dbeffe",
          200: "#bfe5fe",
          300: "#94d5fc",
          400: "#61bcf9",
          500: "#3c9ef5",
          600: "#2681ea",
          700: "#1e6bd7",
          800: "#215cba",
          900: "#1f4a89",
          950: "#172e54",
        },
      },
    },
  },
  plugins: [],
};
