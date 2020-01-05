const path = require('path');

module.exports = {
  // enntry file
  entry: ['@babel/polyfill', './src/main.js'],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?![marked])/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
        }
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
  //mode : 'production'
};