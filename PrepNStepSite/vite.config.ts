import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),vercel()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        home: './home.html',
        weeklymenu: './weeklymenu.html',
        mealplans: './mealplans.html',
        workout: "./workout.html",
        blog: "./blog.html",
        musclegain: "./musclegain.html",
        cutting: "./cutting.html",
        chefschoice: "./chefschoice.html"
      }
    }
  },
})