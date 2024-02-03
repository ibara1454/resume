export default {
  singleQuote: true,
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
