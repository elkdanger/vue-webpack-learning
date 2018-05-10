const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProduction
    ? 'production'
    : 'development',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({sourceMap: true, cache: true}),
      new OptimizeCssAssetsPlugin()
    ]
  },
  resolve: {
    extensions: [
      '.js', '.json', '.vue'
    ],
    alias: {
      '@': path.join(__dirname, '..', 'src'),
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extract: true
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'}),

    new MiniCssExtractPlugin({filename: '[name].css'}),

    new VueLoaderPlugin()
  ]
}
