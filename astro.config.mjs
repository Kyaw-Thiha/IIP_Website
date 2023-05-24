import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), astroI18next(), sitemap(), react()],
  site: import.meta.env.DEV
    ? "http://localhost:3000"
    : "https://www.my-site.dev",
  vite: {
    define: {
      "process.env.NODE_ENV": `'${process.env.NODE_ENV}'`,
    },
    ssr: {
      noExternal: ["@radix-ui/react-slot", "@radix-ui/react-compose-refs"],
    },
  },
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
