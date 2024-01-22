import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import gzipPlugin from "rollup-plugin-gzip";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    // ...
    rollupOptions: {
      // ...
      plugins: [
        // ...
        gzipPlugin({
          // Wähle die Dateitypen aus, die du komprimieren möchtest
          filter: /\.(js|css|html|json|svg)$/,
          // Gzip-Komprimierungseinstellungen (optional)
          minSize: 1024, // Mindestgröße der komprimierten Datei in Bytes
        }),
      ],
    },
  },
});
