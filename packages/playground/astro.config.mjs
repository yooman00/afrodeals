import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  //site: 'https://astro-snipcart-playground.vercel.app',
  site: "https://yooman00.github.io",
  base: "/afrodeals",
  integrations: [tailwind()]
});