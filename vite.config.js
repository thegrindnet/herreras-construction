import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/herreras-construction/",
  servor: {
    port: 3000,
  },
});
