import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/",
  publicPath: '/Portfolio/',
  plugins: [react()],
  ssr: {
    noExternal: ['react', 'react-dom'],
  },
});
