// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static", // Changed from "server" to "static" for Firebase free plan
  site: "https://milestone.dev", // Replace with your actual domain
  integrations: [tailwind()],
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