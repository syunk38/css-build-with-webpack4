MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: { 
    "css/style": `${__dirname}/src/css/style.scss`, 
    "js/bundle": `${__dirname}/src/js/index.js`
  },
  output: {
    path: `${__dirname}/dist/`,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          'css-loader',
          {
            loader: `postcss-loader`
          },
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
};
