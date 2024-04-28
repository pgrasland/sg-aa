import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const isBuild = import.meta.env.PROD;
console.log(`Running astro - prefetch enable : ${isBuild}`)
// https://astro.build/config
export default defineConfig({
  site: 'https://pgrasland.github.io',
  base: '/sg-aa',
  prefetch: isBuild ? true: false,
  outDir: "public",
  publicDir: "static",
  integrations: [tailwind()],
  image: {
    domains: ['127.0.0.1', 'localhost', 'placekitten.com']
  }
});
