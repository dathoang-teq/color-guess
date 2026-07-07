import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Color Guess",
        short_name: "Color Guess",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/icons/iconAppSmall.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/iconAppBig.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
