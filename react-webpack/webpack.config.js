'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Jarvis = require('webpack-jarvis')

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new HtmlPlugin({
      title: 'Asd',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    }),
    new Jarvis({
      port: 1337 // optional: set a port
    })
  ],

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'standard'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: ['style', 'css']
      }
    ]
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      css: path.join(__dirname, 'src', 'css')
    }
  }
}
