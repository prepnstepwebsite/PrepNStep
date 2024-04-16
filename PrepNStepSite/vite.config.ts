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
        weeklymenu: './weeklymenu.html',
        mealplans: './mealplans.html',
        workout: "./workout.html",
        blog: "./blog.html",
        MuscleGain: "./MuscleGain.html",
        Cutting: "./Cutting.html",
        ChefsChoice: "./ChefsChoice.html"
      }
    }
  },
  base: process.env.VITE_BASE_PATH || '/PrepNStep'
})