/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      // adiciona a Open Sans como fonte padrão
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      // adiciona as cores do projeto
      colors: {
        primary: "#00B451",
        secondary: "#ff9801",
      },
    },
  },
  plugins: [],
}
