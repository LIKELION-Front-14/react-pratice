import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // 패키지 경로를 여기로 수정!

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
