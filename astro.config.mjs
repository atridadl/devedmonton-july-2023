import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  },
  integrations: [preact(), react(), solidJs(), svelte(), vue(), tailwind()],
  output: "hybrid",
  compressHTML: true,
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
