import devServer, { defaultOptions } from "@hono/vite-dev-server";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  build: { outDir: "./dist" },
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    tailwindcss(),
    devServer({
      ...defaultOptions,
      entry: "./dev.ts",
      exclude: [...defaultOptions.exclude, /^.*\/src\/.*/, "/"],
    }),
  ],
});
