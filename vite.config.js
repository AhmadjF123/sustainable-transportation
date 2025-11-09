import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // يسمح بالوصول من أي IP بالشبكة
    port: 5173, // البورت اللي تشتغل عليه، ممكن تغييره لو تحب
  },
});
