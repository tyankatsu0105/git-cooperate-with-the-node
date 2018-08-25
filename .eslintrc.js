module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  env: {
    node: true,
    browser: true,
    jquery: true,
    es6: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true
      }
    ]
  }
};
