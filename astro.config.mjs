import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), astroI18next(), sitemap(), vue(), react()],
  site: import.meta.env.DEV
    ? "http://localhost:3000"
    : "https://www.my-site.dev",
  vite: {
    define: {
      "process.env.NODE_ENV": `'${process.env.NODE_ENV}'`,
    },
  },
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
