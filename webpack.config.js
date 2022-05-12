const {name} = require('./package.json');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ServerPushWebpackPlugin = require('@feugene/webpack-plugin-server-push').default

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['*', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|dist)/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'src/index.html',
    }),
    new ServerPushWebpackPlugin({
      target:'nginx',
      options:{
        index: 'index.html',
        omitLocation: true,
        filename: name + '.conf',
      }
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/static", to: "static" },
        { from: "src/favicon.ico", to: "favicon.ico" },
      ],
    }),
  ],
};
