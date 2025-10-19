import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  esbuild: {
    // Traiter les .js du dossier src comme du JSX (garde ta logique existante)
    loader: "jsx",
    include: /src\/.*\.js$/,
  },
});
