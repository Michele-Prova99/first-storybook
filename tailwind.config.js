/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ["Moderat", ...defaultTheme.fontFamily.sans],
        "brand-extended": ["Moderat-Extended", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        fit: defaultTheme.borderRadius["2xl"],
        "4xl": "2rem",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        "fit-slate-500": "#072638",
        "fit-gray-50": "#FCFCFC",
        "fit-gray-100": "#F8F8F8",
        "fit-gray-200": "#EDEDED",
        "fit-gray-300": "#EDF1F5",
        "fit-gray-400": "#B9B9B9",
        "fit-gray-700": "#3F505A",
        "fit-neutral-700": "#3D3D3D",
        "fit-neutral-800": "#161616",
        "fit-neutral-900": "#0d0d0d",
        "fit-blue-500": "#005CA3",
        "fit-green-10": "#E6F8F4",
        "fit-green-700": "#007049",
        "fit-primary-10": "#E5F6F8",
        "fit-primary-500": "#00A9B8",
        "fit-primary-800": "#005867",
        "fit-yellow-10": "#FFF9E8",
        "fit-yellow-600": "#906D00",
        "fit-red-10": "#F9E5EE",
        "fit-red-500": "#C20058",
        "fit-red-800": "#A50042",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-in-out",
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-outline": {
          "-webkit-text-fill-color": "transparent",
          "-webkit-text-stroke-width": "1px",
          "-webkit-text-stroke-color": "inherit",
        },
      });
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".row": {
          display: "flex",
          "flex-wrap": "wrap",
          "margin-left": "-1rem",
          "margin-right": "-1rem",
        },
        ".col": {
          "padding-left": theme("padding.4"),
          "padding-right": theme("padding.4"),
        },
      });
    }),
  ],
};
