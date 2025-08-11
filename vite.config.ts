import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: '/DevHouse_blog/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});