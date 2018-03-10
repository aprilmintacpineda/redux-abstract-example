const webpack = require('webpack');

var uglifyJsPlugin = process.env.PROD == 1? [
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    output: {
      comments: false
    },
    compressor: {
      warnings: false
    }
  }),

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
] : [];

module.exports = [
  {
    name: 'javascript',
    entry: __dirname + '/src/entry.js',
    output: {
      filename: 'app.js',
      path: __dirname + '/public/js'
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: uglifyJsPlugin
  }
];