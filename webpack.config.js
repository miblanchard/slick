const webpack = require('webpack');

module.exports = [
  {
    devtool: 'source-map', // or use source-map-eval
    entry: `${__dirname}/src/main.jsx`,
    output: {
      path: `${__dirname}/`,
      filename: 'bundle.min.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
        },
      ],
    },
    plugins:[
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
      }),
    ]
  },
];
