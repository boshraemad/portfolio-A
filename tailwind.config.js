/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: "#F42e00",
      },
         fontFamily: {
        poppins: ["Stolzl", "sans-serif"],
      },
    },
  },
  plugins: [],
}

