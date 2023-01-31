/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      colors: {
        primary: "#181F4B",
        secondary: "#F29023",
      },
    },
  },
  plugins: [],
};
