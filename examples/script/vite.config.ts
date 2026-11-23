import { defineConfig } from 'vite';
import { appendPrettierIgnore } from '@jeniex/vite-plugins';
import path from 'node:path';

export default defineConfig({
  input: path.resolve(import.meta.dirname, 'src/main.ts'),

  build: {
    minify: 'terser',

    rolldownOptions: {
      output: {
        format: 'iife',
        entryFileNames: 'main.js',
      },
    },
  },
  plugins: [appendPrettierIgnore()],
});
