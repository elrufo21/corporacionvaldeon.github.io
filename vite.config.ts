import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/corporacionvaldeon.github.io/", // Asegura que coincida con el nombre de tu repo
});
