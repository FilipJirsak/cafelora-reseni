const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'img/[name]-[hash:6][ext]'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '', noErrorOnMissing: true },
      ],
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL ?? 'https://cafelora.kodim.app/api'),
    }),
  ],
};
