import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import { sharpImageService } from "astro/assets";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next(), sitemap(), vue(), react()],
  site: import.meta.env.DEV ? "http://localhost:3000" : "https://www.my-site.dev",
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  }
});