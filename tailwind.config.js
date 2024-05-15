/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display:['poppins', 'sans-serif'],
      body:['poppins', 'sans-serif']
    },
    extend: {
      colors:{
        "primary-aqua":"#61cece"
      }
    },
  },
  plugins: [],
};
