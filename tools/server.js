/* eslint-disable no-console */
import express from 'express';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import chalk from 'chalk';
import historyApiFallback from 'connect-history-api-fallback';

const port = process.env.PORT || 1337;
const app = express();
const bundler = webpack(config);

app.use(historyApiFallback());

app.use(require("webpack-hot-middleware")(bundler));

app.use(require('webpack-dev-middleware')(bundler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(process.env.NODE_ENV);
    open('http://localhost:' + port);
    console.log(chalk.yellow(`Listening on port ${port}`));
  }
});
