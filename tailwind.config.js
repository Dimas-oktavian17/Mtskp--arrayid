/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    fontFamily: {
      header: ["Source Sans Pro", "sans-serif"],
      main: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        // Home Background
        homePrimary: "#0d0e25;",
        homeSecondary: "#FC881D",
        // main BG
        mainPrimary: "#FFF6ED",
        primary2hover: "#dae0f7",
        secondary: "#0C1B4D",
        secondary2: "#F4F7FF",
        secondary3: "#657094",
        Theme: "#eef2ff",
        btnDark: "rgba(51, 65, 85, 0.3)",
        donwlod: "rgba(74, 114, 255, 0.25)",
        "bg-icon": "rgba(12, 27, 77, 0.1)",
        dark: "rgba(12, 27, 77, 1)",
        accordion: "rgba(12, 27, 77, 0.6)",
        footer: "rgba(74, 114, 255, 0.05)",
        darkFooter: "rgba(30, 41, 59, .3)",
      },
    },
  },
  plugins: [],
};
