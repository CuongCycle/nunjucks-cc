const path = require('path');
const webpack = require('webpack');
const config = require('./gulpfile.js/config');
const webpackConfig = env => {
  const watch = env === 'dev' ? true : false;
  const webpackConfig = {
    cache: false,
    mode: 'development',
    entry: {
      main: [`${config.path.assets}/js/index.js`],
    },
    output: {
      path: path.resolve(`${config.path.build}/assets/js/`),
      publicPath: '/js/',
      filename: '[name].js',
    },
    watch,
    watchOptions: {
      aggregateTimeout: 300,
      ignored: '/node_modules/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  };

  if (env === 'dev') {
    webpackConfig.devtool = 'source-map';
  }

  // if (env === 'qc') {
  // }

  // if (env === 'production') {
  // }

  return webpackConfig;
};

module.exports = webpackConfig;
