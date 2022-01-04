/* eslint-disable no-dupe-keys */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  ignorePatterns: ["temp.js", "**/vendor/*.js"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: true,
        trailingComma: "all",
        singleQuote: false,
        printWidth: 80,
        tabWidth: 2,
        endOfLine: "auto",
      },
    ],
  },
};
