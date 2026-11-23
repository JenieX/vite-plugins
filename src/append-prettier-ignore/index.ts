import type { Plugin } from 'vite';
import MagicString from 'magic-string';

function appendPrettierIgnore(): Plugin {
  return {
    name: 'append-prettier-ignore',
    enforce: 'post',
    renderChunk: {
      order: 'post',
      handler: (code) => {
        const instance = new MagicString(code);

        instance.prepend('\n// prettier-ignore\n');

        return {
          code: instance.toString(),
          map: instance.generateMap({ hires: true }),
        };
      },
    },
  };
}

export default appendPrettierIgnore;
