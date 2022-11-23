/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: { margin: { "26%": "26%", "70%": "70%" } },
    container: {
      center: true,
      padding: "3rem",
    },
  },
  plugins: [],
};
