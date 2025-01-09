import { defineConfig } from 'vite';

export default defineConfig({
  root: './',               // Specifies the root directory
  build: {
    outDir: 'dist',         // Defines the output directory for the production build
    rollupOptions: {
      input: 'index.html',  // Specify your entry point (main HTML file)
    }
  },
  server: {
    port: 3000,             // Set the port for the local dev server
  },
});
