import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [tailwind()],
  image: {
    domains: ['127.0.0.1', 'localhost', 'placekitten.com']
  }
});
