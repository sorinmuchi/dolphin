/**
 * Webpack dev server
 */

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './config.babel';

export default (app) => {
  const webpackCompiler = webpack(webpackConfig);

  // use dev middleware
  app.use(webpackDevMiddleware(webpackCompiler, {
    // defines the level of messages to log
    logLevel: 'warn',
    publicPath: webpackConfig.output.publicPath,
  }));
};
