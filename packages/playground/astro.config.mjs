import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://yooman00.github.io",
  base: "/afrodeals",
  publicDir: "public",
  integrations: [tailwind()],
  //trailingSlash: 'never'
});