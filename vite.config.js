import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
    },
    port: 3000,
  },
  plugins: [react()],
});
