import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("three") ||
              id.includes("@react-three/fiber") ||
              id.includes("@react-three/drei")
            ) {
              return "three";
            }

            if (id.includes("framer-motion")) {
              return "motion";
            }

            if (id.includes("@emailjs/browser")) {
              return "email";
            }

            if (id.includes("react") || id.includes("react-dom")) {
              return "react";
            }

            return "vendor";
          }
        },
      },
    },
  },
});
