var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/build');
var APP_DIR = path.resolve(__dirname, 'src/app');
var config = {
  cache: true,
  debug: true,
  devtool: 'eval',
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders: [{
      loader: 'babel-loader',
      include: APP_DIR,
      test: /\.(js|jsx|es6)$/,
      //exclude: /(node_modules|bower_components)/,
      // loader: 'babel-loader?cacheDirectory&optional=es7.decorators&stage=0',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react'],
      }
    },{
      test: /\.json?$/,
      loader: 'json-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.es', '.es6', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('"production"')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};

module.exports = config;