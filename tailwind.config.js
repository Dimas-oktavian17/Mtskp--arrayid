/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      header: ["Source Sans Pro", "sans-serif"],
      main: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        // nav
        navli: "#ffffff99",
        // Home Background
        homePrimary: "#0d0e25",
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
      boxShadow: {
        btnSecondary: "0px 30px 60px rgba(252, 136, 29, 0.25)",
        btnfeature: "0px 30px 60px rgba(13, 14, 37, 0.2)",
        expresion: " 0px 40px 60px rgba(13, 14, 37, 0.1)",
      },
      backgroundImage: {
        "home-primary": "url('../components/icons/Rectangle 1.svg')",
        "home-secondary": "url('../components/icons/Rectangle 3.svg')",
      },
    },
  },
  plugins: [],
};
