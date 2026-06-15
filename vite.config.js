import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const spaFallback = () => ({
  name: "spa-fallback",
  closeBundle() {
    const indexPath = resolve("dist/index.html");
    if (existsSync(indexPath)) {
      copyFileSync(indexPath, resolve("dist/404.html"));
    }
  },
});

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), spaFallback()],
});
