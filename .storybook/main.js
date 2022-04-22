const path = require('path');

module.exports = {
  features: {
    postcss: false,
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    // "@storybook/preset-typescript",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(ts|js|tsx|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve("@linaria/webpack-loader"),
          options: {
            sourceMap: process.env.NODE_ENV !== "production",
            extension: ".css",
            babelOptions: {
              configFile: path.resolve(__dirname, "..", ".babelrc")
            }
          }
        }
      ]
    });
    return config;
  }
}
