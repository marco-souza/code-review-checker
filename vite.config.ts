import path from "node:path";
import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import solidPlugin from "vite-plugin-solid";

const stage = process.env.STAGE?.startsWith("prod")
  ? "production"
  : "development";

const productionTargets = ["https://github.com/*/*/pull/*"];

const matchStageMap = {
  development: [
    "https://kobalte.dev/*",
    "https://daisyui.com/*",
    "https://tailwindcss.com/*",
    "https://*",
    ...productionTargets,
  ],
  production: productionTargets,
};

export default defineConfig({
  assetsInclude: ["./src/static/**"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "#": path.resolve(__dirname, "/"),
    },
  },
  plugins: [
    solidPlugin(),
    monkey({
      entry: "src/index.tsx",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        namespace: "npm/vite-plugin-monkey",
        match: matchStageMap[stage],
      },
    }),
  ],
});
