/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        tprincipal: ['Poppins', 'sans-serif'],
        tsecundario: ['Kalnia', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
