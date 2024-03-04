import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const isBuild = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  prefetch: isBuild ? true: false,
  integrations: [tailwind()],
  image: {
    domains: ['127.0.0.1', 'localhost', 'placekitten.com']
  }
});
