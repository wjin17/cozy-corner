import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import devServer, { defaultOptions } from "@hono/vite-dev-server";

// https://vite.dev/config/
export default defineConfig({
  build: { outDir: "./dist/web" },
  plugins: [
    react(),
    tailwindcss(),
    devServer({
      ...defaultOptions,
      entry: "./src/api/index.ts",
      exclude: [
        ...defaultOptions.exclude,
        /.*\.jsx$/,
        /.*\.scss$/,
        /^\/assets\/.+/,
      ],
    }),
  ],
});
