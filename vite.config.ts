// vite.config.ts  ← ЗАМЕНЯЕТ существующий файл полностью
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
    proxy: {
      // В режиме разработки /api/chat → localhost:3001/api/chat
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
}));
