const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', 
    entry: './src/index.js', // entry point
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true, // clean dist
    },
    devServer: {
      static: './dist',
      open: true,
      hot: true,
    },
    module: {
      rules: [
        {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
              sources: {
                list: [
                  // Handling standard tags img, source
                  {
                    tag: 'img',
                    attribute: 'src',
                    type: 'src',
                  },
                  {
                    tag: 'source',
                    attribute: 'srcset',
                    type: 'srcset',
                  },
                ],
              },
            },
          },
        {
          test: /\.scss$/i,
          use: [
            'style-loader', // insert styles to DOM
            'css-loader',   // transforms css to js
            'sass-loader',  // compiles scss in css
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|avif|ico)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 50 * 1024, // 50kb - small files will be inlined as base64
            },
          },
          generator: {
            filename: 'images/[name][ext]', // big files 
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // initial html
        favicon: './src/img/favicon.ico'
      }),
    ],
};