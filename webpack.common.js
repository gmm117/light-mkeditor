const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  // enntry file
  entry: './src/app.js',
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname + "/build")
  },
  stats: {
    children: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [ {
          loader : 'file-loader',
          options : {
            name: '[path][hash].[ext]',
            esModule : false
          }
        }],
      },
      {
        test: /\.html$/,
        use: [
            {
                loader: "html-loader",
                options: { minimize: true }
            }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      // template: './public/index.html', // public/index.html 파일을 읽는다.
      template :  path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html', // output으로 출력할 파일은 index.html 이다.
    }),
    new ExtractTextPlugin({
      filename : '[hash].css'
    }),
    new OptimizeCSSAssetsPlugin({}),
    new CleanWebpackPlugin()
  ]
};