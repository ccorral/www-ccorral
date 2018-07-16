/**
 * Development Webpack Configuration
 */

const Dotenv = require('dotenv-webpack');
const { resolve } = require('path');

const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  
  devtool: 'cheap-module-eval-source-map',
  
  context: resolve(__dirname, 'app'),
  
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${process.env.NODE_HOST || 'localhost'}:${process.env.NODE_PORT || 8111}`,
    './'
  ],
  
  output: {
    filename: 'app-[hash].js',
    path: resolve(__dirname, 'build'),
    publicPath: '/',
  },
  
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        },
        {
            test: /\.(css|less)$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }, {
                loader: 'less-loader',
            }],
        },
        { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=[name]-[hash].[ext]' },
        { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
        { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },
  
  devServer: {
    host: process.env.NODE_HOST || 'localhost',
    port: process.env.NODE_PORT || 8111,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: true
    }
  },
  
  plugins: [
    new Dotenv({
      safe: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/app/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new ExtractTextPlugin({ filename: 'app-[hash].css', disable: false, allChunks: true })
  ]
  
}