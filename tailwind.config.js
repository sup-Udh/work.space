/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#d9d9d9",
          "200": "rgba(0, 0, 0, 0.75)",
          "300": "rgba(0, 0, 0, 0.05)",
          "400": "rgba(0, 0, 0, 0.5)",
          "500": "rgba(0, 0, 0, 0.15)",
        },
        black: "#000",
      },
      fontFamily: { switzer: "Switzer", outfit: "Outfit" },
      borderRadius: { base: "20px" },
    },
    fontSize: { xs: "16px", sm: "20px", base: "30px", lg: "48px" },
  },
  corePlugins: { preflight: false },
};
