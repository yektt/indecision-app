// entry --> output


const path = require('path');

// it is a way to expose something to another file
module.exports = {
  entry: './src/app.js',
  // this will be an object
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};
