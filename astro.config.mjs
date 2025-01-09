// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";  // Add this line

export default defineConfig({
  output: "static",
  site: "https://milestone.dev",
  integrations: [tailwind()],
  adapter: node({  // Add this section
    mode: "standalone"
  }),
  server: {
    port: 3000,
    host: true,
  },
  vite: {
    ssr: {
      noExternal: ["@astrojs/tailwind"],
    },
  },
});