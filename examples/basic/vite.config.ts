import { defineConfig } from 'vite';
import removeHTMLComments from '@jeniex/vite-plugins/remove-html-comments';
import formatHTML from '@jeniex/vite-plugins/format-html';
import { renameHTM } from '@jeniex/vite-plugins';

export default defineConfig({
  base: './',

  plugins: [
    removeHTMLComments(),
    formatHTML(),
    renameHTM('basic-example'),
  ],
});
