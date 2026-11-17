import type { Plugin } from 'vite';

function removeHTMLComments(): Plugin {
  return {
    name: 'remove-html-comments',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html.replace(/<!--[\s\S]*?-->/g, '');
      },
    },
  };
}

export default removeHTMLComments;
