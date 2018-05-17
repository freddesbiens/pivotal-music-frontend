const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
//const copyCommand = 'cp -r %DIR%/node_modules %DIR%/dist/'.replace(/%DIR%/g, __dirname);
//const deleteCommand = 'rm -rf %DIR%/dist/node_modules/.cache'.replace(/%DIR%/g, __dirname);

module.exports = {
  entry: { server: './server.ts' },
  resolve: { extensions: ['.js', '.ts'] },
  target: 'node',
  mode: 'none',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/node_modules/],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
  },
  plugins: [

    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for 'WARNING Critical dependency: the request of a dependency is an expression'
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    ),
    /*new CopyWebpackPlugin([
      { from: './package.json', to: path.join(__dirname, 'dist') },
    ]),*/
    new WebpackShellPlugin({
      //onBuildStart: ['echo Copying node_modules...', copyCommand],
      onBuildEnd: ['./createpcfdist.sh']
    })
  ]
};