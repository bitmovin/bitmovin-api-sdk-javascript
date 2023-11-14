const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const baseFileName = 'bitmovin-api-sdk';

const config = {
  mode: isProd ? 'production' : 'development',
  context: path.join(__dirname, 'src'),
  entry: ['./index.ts'],
  output: {
    filename: `${baseFileName}.browser${isProd ? '.min' : ''}.js`,
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'bitmovin-api-sdk'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    emitOnErrors: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: false,
  stats: process.env.WEBPACK_MODE === 'log' ? { preset: 'verbose' } : { preset: 'normal' }
};

module.exports = config;
