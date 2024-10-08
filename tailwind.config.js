/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "winter", "nord", "emerald"],
  },
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
      },
      gridTemplateColumns: {
        "1fr-auto": "1fr auto",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],
};
