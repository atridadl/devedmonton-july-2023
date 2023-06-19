import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [preact(), react(), solidJs(), svelte(), vue(), tailwind()],
  output: "hybrid",
  compressHTML: true,
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});
