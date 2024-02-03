/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  // Prettier plugin adding support for formatting `.astro` files
  // https://github.com/withastro/prettier-plugin-astro/blob/5f7c26e007ebf89391d8112165d975353ed18126/README.md
  plugins: ['prettier-plugin-astro'],
  // The "overrides" key is used to define specific formatting rules for certain file types.
  // In this case, it's added to prevent prettier from adding trailing commas for JSON files,
  // as it doesn't follow the JSON format.
  overrides: [
    {
      files: ['*.json', '.*rc'],
      options: {
        parser: 'json5',
        quoteProps: 'preserve',
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
};
