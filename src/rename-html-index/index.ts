import type { Plugin } from 'vite';

// Vite doesn't have a dedicated option to rename index.html
function renameHTMLIndex(name: string): Plugin {
  return {
    name: 'test',
    generateBundle: {
      order: 'post',
      async handler(outputOptions, bundle, isWrite) {
        const indexHtml = bundle['index.html'];
        if (!indexHtml || indexHtml.type !== 'asset') return;

        this.emitFile({
          type: 'asset',
          fileName: `${name}.html`,
          source: indexHtml.source,
        });

        delete bundle['index.html'];
      },
    },
  };
}

export default renameHTMLIndex;
