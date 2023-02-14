import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import { astroImageTools } from "astro-imagetools";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [tailwind(), astroI18next(), astroImageTools, sitemap(), vue()],
  site: import.meta.env.DEV
    ? "http://localhost:3000"
    : "https://www.my-site.dev",
});
