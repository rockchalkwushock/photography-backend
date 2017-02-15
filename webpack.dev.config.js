require('dotenv-safe').load();

const webpack = require('webpack');
const { join } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'axios', 'lodash-es', 'react', 'react-dom', 'react-redux',
  'react-redux-multilingual', 'react-redux-toastr', 'react-router',
  'react-router-redux', 'redux', 'redux-auth-wrapper',
  'redux-form', 'redux-pack', 'redux-promise-middleware',
  'semantic-ui-react'
];

module.exports = {
  devtool: 'eval',
  target: 'web',
  entry: {
    bundle: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './client/index.js'
    ],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  devServer: {
    contentBase: join(__dirname, 'dist'),
    port: 9000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        CLOUD_NAME: JSON.stringify(process.env.CLOUD_NAME),
        UPLOAD_PRESET: JSON.stringify(process.env.UPLOAD_PRESET),
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new ExtractTextPlugin('style.css'),
  ]
};
