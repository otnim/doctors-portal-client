/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBackground: "url('/src/assets/images/bg.png')",
        appointmentBackground: "url('/src/assets/images/appointment.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#161A1D",
          "base-100": "#FCFCFD",
        },
      },
    ],
  },
}
