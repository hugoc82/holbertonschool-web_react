// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ⬅️ ajout du plugin Tailwind v4

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ⬅️ activation du plugin
  ],
  esbuild: {
    // Traiter les .js du dossier src comme du JSX
    loader: "jsx",
    include: /src\/.*\.js$/,
    // (exclusion par défaut de node_modules conservée)
  },
});
