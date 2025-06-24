const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: "./src/scripts/main.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "static"),
      publicPath: "/static",
      serveIndex: true, // http://localhost:8080/static/ is exposed; use only for learning
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    edge: "127",
                    firefox: "128",
                    chrome: "127",
                    safari: "17.5",
                    ie: "11",
                  },
                  // targets: '> 0.25%, not dead',
                  useBuiltIns: "usage",
                  corejs: "3.21.1",
                },
              ],
            ],
          },
        },
      },
    ],
  },
};

