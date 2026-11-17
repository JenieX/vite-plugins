import prettier from 'prettier';
import type { Plugin } from 'vite';

function formatHTMLIndex(): Plugin {
  return {
    name: 'format-html-index',
    generateBundle: {
      order: 'post',
      async handler(outputOptions, bundle) {
        for (const output of Object.values(bundle)) {
          if (output.type !== 'asset') continue;
          if (!output.fileName.endsWith('.html')) continue;

          const source = String(output.source);

          const prettierConfig = await prettier.resolveConfig(output.fileName);

          output.source = await prettier.format(source, {
            ...prettierConfig,
            parser: 'html',
          });
        }
      },
    },
  };
}

export default formatHTMLIndex;
