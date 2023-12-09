/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }


tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#E76F51',
          secondary: '#264653',
        }
      }
    }
  }