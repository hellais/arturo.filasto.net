/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      "off-white": "#d1d5db",
      "light-yellow": "#FEEDC4",
      "strong-red": "#E50D0E",
      "medium-red": "#7D010A",
      "dark-red": "#521611",
      "off-black": "#1E0F0D",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
