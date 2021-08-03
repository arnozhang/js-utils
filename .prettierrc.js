module.exports = {
  semi: true,           // 自动补全分号，配合 ESLint 的 rules 调整，【要求项目级全局统一】
  singleQuote: true,    // 开启单引号模式，这个配置也【要求项目级全局统一】
  trailingComma: 'all', //【Required】为了 CR 时方便看 diff
  // arrowParens: 'avoid', // or always
  printWidth: 80,
  tabWidth: 2,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};
