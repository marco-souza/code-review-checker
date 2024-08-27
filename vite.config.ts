import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import monkey from "vite-plugin-monkey";

const stage = process.env.STAGE?.startsWith("prod")
  ? "production"
  : "development" as const;

const productionTargets = [
  "https://github.com/*/*/pull/*",
];

const matchStageMap = {
  "development": [
    "https://kobalte.dev/*",
    "https://daisyui.com/*",
    ...productionTargets,
  ],
  "production": productionTargets,
};

export default defineConfig({
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
