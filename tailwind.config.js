const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    container:{
      center:true
    },
    tabSize: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
    },
    colors: {
      blue: "#ff7849",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize:{
       xl:"10px",
       lg:"40px"
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      aspectRatio:{
        '4/3':'4/3'
      }
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ matchUtilities, theme ,addComponents,addBase}) {
      matchUtilities(
        {
          tab: (value) => ({
            tabSize: value,
          }),
        },
        { values: theme("tabSize") }
      );
      addComponents({
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600",
        },
        ".card": {
          backgroundColor: theme("colors.blue"),
          borderRadius: ".25rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        },
      });
      addBase({
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
