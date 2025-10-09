import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Traiter les .js du dossier src comme du JSX
    loader: "jsx",
    include: /src\/.*\.js$/,
    // (on garde l'exclusion par défaut de node_modules)
  },
});
