const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');


module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.js",
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ]
  }
});