import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next(), astroImageTools, sitemap()],
});
