import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    Pages({
      react: true,
      importMode: 'async'
    }),
    solidPlugin(),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
