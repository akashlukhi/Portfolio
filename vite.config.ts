import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import gzipPlugin from "rollup-plugin-gzip";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react()],
});
