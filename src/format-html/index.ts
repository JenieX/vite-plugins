import prettier from 'prettier';
import type { Plugin } from 'vite';

function formatHTML(): Plugin {
  return {
    name: 'format-html',
    transformIndexHtml: {
      order: 'post',
      handler: async (html, ctx) => {
        const indexAbsolutePath = ctx.filename;

        // Does work, and does resolve from where `vite.config.ts` is located
        // And if no correct value is provided, it auto-located `.prettierrc.json`
        // Also, value can be an absolute path
        const prettierConfig = await prettier.resolveConfig(
          // './index.html',
          indexAbsolutePath,
        );

        return await prettier.format(html, {
          ...prettierConfig,
          parser: 'html',
        });
      },
    },
  };
}

export default formatHTML;
