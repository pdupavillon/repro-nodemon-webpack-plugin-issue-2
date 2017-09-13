var webpack = require('webpack')
var path = require('path')
var dist = path.resolve(__dirname, './dist')
var NodemonPlugin = require('nodemon-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    path: dist,
    filename: 'index.js'
  },
  target: 'node',
  node:{
    __dirname: false,
    __filename: false
  },
  plugins:[
    new CopyWebpackPlugin([{ from: './src/locales', to: 'locales'}]),
    new NodemonPlugin()]
}
