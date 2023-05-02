import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import { astroImageTools } from "astro-imagetools";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next(), astroImageTools, sitemap(), vue(), image()],
  site: import.meta.env.DEV ? "http://localhost:3000" : "https://www.my-site.dev"
});