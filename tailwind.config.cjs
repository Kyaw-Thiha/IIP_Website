/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "Lato", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      colors: {
        primary: "#181F4B",
        secondary: "#F29023",
        background: "#F3F1EC",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // secondary: {
        //   100: "#e8810e",
        //   200: "#cb710c",
        //   300: "#ae610a",
        //   400: "#F29023",
        //   DEFAULT: "#F29023",
        //   500: "#915109",
        //   600: "#744007",
        //   700: "#573005",
        //   800: "#3a2003",
        //   900: "#1d1002",
        // },
      },
    },
  },
  plugins: [],
};
