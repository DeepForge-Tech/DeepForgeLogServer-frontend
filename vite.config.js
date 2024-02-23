import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import svgr from 'vite-plugin-svgr'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/logs": {
        target: "http://localhost:5002",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/logs/, ""),
      },
      "/api/auth": {
        target: "http://localhost:5003",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/auth/, ""),
      }
    },
    port: 8100,
  },
  plugins: [react()],
});
