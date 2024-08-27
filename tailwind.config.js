/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
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
