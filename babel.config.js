module.exports = {
  presets: [
    ["@babel/preset-env", { modules: false, useBuiltIns: "usage" }],
    "@babel/typescript"
  ],
  plugins: ['@babel/plugin-proposal-optional-chaining']
};
