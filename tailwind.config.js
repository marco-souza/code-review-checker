/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        "fade-in": "fadeIn 200ms ease-in-out",
        "fade-out": "fadeOut 200ms ease-in-out",
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { backgroundColor: theme("colors.transparent") },
          "100%": { backgroundColor: theme("colors.gray.800") },
        },
        fadeOut: {
          "0%": { backgroundColor: theme("colors.gray.800") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [
    // daisyUI plugin
    require("daisyui"),
    // default prefix is "ui"
    require("@kobalte/tailwindcss"),
    // or with a custom prefix:
    require("@kobalte/tailwindcss")({ prefix: "kb" }),
  ],
};
