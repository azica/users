import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        icon: true,
        exportType: "named",
        svgProps: {
          width: "100%",
          height: "100%",
        },
      },
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/colors.scss";`
      },
    },
  },
  resolve: {
    alias: {
      assets: "/src/assets",
      hooks: "/src/hooks",
      components: "/src/components",
      pages: "/src/pages",
      services: "/src/services",
      shared: "/src/shared"
    },
  },
  build: {
    outDir: "dist",
  },
});

