var path = require('path');
var webpack = require('webpack');

module.exports = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
  devtool: 'eval',
    entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: __dirname,
    filename: './app/bundle.js',
    publicPath: '/',
  },
  resolve: {
    root: path.resolve('./app'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'jsx-loader'],
      exclude: /node_modules/,
      include: __dirname
    },
    { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
