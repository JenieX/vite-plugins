import { defineConfig } from 'vite';
import removeHTMLComments from '@jeniex/vite-plugins/remove-html-comments';
import formatHTMLIndex from '@jeniex/vite-plugins/format-html-index';
import renameHTMLIndex from '@jeniex/vite-plugins/rename-html-index';

export default defineConfig({
  base: './',

  plugins: [
    removeHTMLComments(),
    formatHTMLIndex(),
    renameHTMLIndex('basic-example'),
  ],
});
