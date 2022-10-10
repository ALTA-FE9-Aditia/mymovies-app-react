/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue"],
    },
    extend: {
      colors: {
        "netflix-red": "#E50914",
        "bg-tr": "#134c51",
        "bg-nav": "#175b61",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
