/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
      {
        dark: {
          primary: "#374151",
          secondary: "#FDE68A",
          accent: "#000000",
          neutral: "#ffffff",
          "base-100": "#1F2937",
          info: "#fde047",
          success: "#1BBB70",
          warning: "#fcfafa",
          error: "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
