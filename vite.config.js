import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@store", replacement: "/src/store/store" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@utils", replacement: "/src/utils/utils" },
    ],
  },
});
