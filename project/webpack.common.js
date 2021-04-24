const path = require('path');

module.exports = {
  entry: {
    javascript: './src/public/client.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/src/public/build/'),
  },
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules')
    },
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.(png|jpg)$/,
        use: { 
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
          }
        },
      }
    ],
  }
}