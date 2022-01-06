import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import styleImport from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/index`,
        },
      ],
    }),
  ],
  server: {
    fs: {
      strict: false,
    },
  },
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".ts"],
  },
});
