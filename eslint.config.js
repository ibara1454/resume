// Copied from
// https://github.com/ota-meshi/eslint-plugin-astro/blob/212e026b65626b9e15854b475c09f16194fcdd6f/README.md
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
