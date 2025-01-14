// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],


// })
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "tailwindcss"
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer
        ],
      },
    },
  },
});