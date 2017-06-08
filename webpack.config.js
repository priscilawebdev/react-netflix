const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: './public/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
    errorDetails: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query:
        {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      }
    ]
  }
}
