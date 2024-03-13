import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(),
    // autoprefixer(),
    // postcssImport(),
  ],
  base: "/",
});