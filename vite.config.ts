import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/features"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@type": path.resolve(__dirname, "src/type"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@mock": path.resolve(__dirname, "src/mock"),
    },
  },
});
