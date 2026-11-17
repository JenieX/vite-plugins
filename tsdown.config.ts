import { defineConfig } from 'tsdown';

const config = defineConfig({
  entry: ['src/*/index.ts'],

  dts: true,

  // Doesn't set types field
  // exports: {
  //   enabled: true,
  //   packageJson: false,
  // },

  outExtensions() {
    return {
      js: '.js',
      dts: '.d.ts',
    };
  },

  deps: {
    neverBundle: true,

    // Not needed if `neverBundle` is set
    // dts: {
    //   neverBundle: [
    //     'postcss',
    //     'vite',
    //     'lightningcss',
    //   ],
    // },
  },
});

export default config;
