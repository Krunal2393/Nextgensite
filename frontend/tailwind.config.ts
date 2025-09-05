export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",    // All JS/TS/React files in src
    "./public/index.html",           // Main HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F1F6FC",
          100: "#E2EDFA",
          200: "#C4DBF5",
          300: "#A7C8F0",
          400: "#69A3E6",
          500: "#2C7EDD",
          600: "#266FC7",
          700: "#1F5CA6",
          800: "#174884",
          900: "#123A6B",
        },
        secondary: {
          50: "#F4F5F9",
          100: "#E9EAF4",
          200: "#C8CBE3",
          300: "#A8ADD1",
          400: "#676FB0",
          500: "#27318F",
          600: "#232C81",
          700: "#1D246B",
          800: "#171C55",
          900: "#121746",
        },
        grey: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(90deg, #0B2E6D 0%, #3E85C5 100%)",
        "gradient-2": "linear-gradient(90deg, #F37C22 0%, #FFD580 100%)",
        "gradient-3": "linear-gradient(90deg, #00A859 0%, #66CC33 100%)",
      },
    },
  },
  plugins: [],
}