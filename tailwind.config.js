/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#d9d9d9",
          "200": "#4d4d4d",
          "300": "rgba(204, 204, 204, 0.25)",
          "400": "rgba(0, 0, 0, 0.75)",
          "500": "rgba(0, 0, 0, 0.05)",
          "600": "rgba(0, 0, 0, 0.5)",
          "700": "rgba(0, 0, 0, 0.15)",
        },
        "system-blue-007aff": "#007aff",
        "black-800-333333": "#333",
        "black-100-e5e5e5": "#e5e5e5",
        "system-green-26a212": "#26a212",
        "system-orange-ff9500": "#ff8c00",
        "system-red-ff3b30": "#ff3b30",
        "black-500-808080": "#808080",
        "black-50-f2f2f2": "#f2f2f2",
        "black-900-1a1a1a1": "#1a1a1a",
        "black-600-666666": "#666",
        "white-ffffff1": "#fff",
        "black-000000": "#000",
      },
      fontFamily: {
        inter: "Inter",
        "micro-button-label": "Roboto",
        title: "Poppins",
        outfit: "Outfit",
      },
      borderRadius: { base: "20px" },
    },
    fontSize: {
      base: "11px",
      lg: "12px",
      xl: "15px",
      "2xl": "16px",
      "3xl": "20px",
      "4xl": "30px",
      "5xl": "48px",
    },
  },
  corePlugins: { preflight: false },
};
