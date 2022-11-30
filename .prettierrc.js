/**
 * Prettier config file
 * @see https://prettier.io/docs/en/index.html
 * @see https://prettier.io/docs/en/options.html
 */
module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  bracketSameLine: false,
  bracketSpacing: false,
  tabWidth: 2,
  semi: true,
  importOrder: ["<THIRD_PARTY_MODULES>", '^data/?(.*)$', '^services/?(.*)$', '^hooks/?(.*)$', '^presentation/?(.*)$', '^/(?!public)(.*)$', '^./', '^public/(.*)$'],
  importOrderSeparation: true,
};

