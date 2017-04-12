const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/app/index.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'}
    ]
  }
};