const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathsToClean = ['dist'];

module.exports = [{
  entry: './electron-server/app',
  // entry: path.resolve(__dirname, './electron-server/app'),
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
    // publicPath:
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    rules: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      },

    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, {})
  ],
  target: 'electron-renderer'
}, {
  entry: './fe/test.js',
  // entry: path.resolve(__dirname, './electron-server/app'),
  // node: {
  //   __dirname: false,
  //   __filename: false
  // },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    // publicPath:
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [{
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['es2015']
      //     }
      //   }]
      // },
      {
        test: /\.html$/,
        use: ['html-loader']
      }, {
        test: /\.(jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
            publicPath: 'img/'
          }
        }]
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'fe/index.html'
    })
  ]
}]
