import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Remplace par le nom EXACT de ton repo GitHub
  base: "/holbertonschool-web_react/",
});
