import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.join(__dirname,"gateway","build"),
  },
  base:"/",
  server: {
    proxy: {
      "/api/logs": {
        target: "http://localhost:5002",
        changeOrigin: true,
        secure: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/logs/, ""),
      },
      "/api/auth": {
        target: "http://localhost:5003",
        changeOrigin: true,
        secure: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/auth/, ""),
      }
    },
    port: 8100,
  },
  plugins: [react()],
});
