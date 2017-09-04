/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import chalk from 'chalk';
import historyApiFallback from 'connect-history-api-fallback';

const port = process.env.PORT || 7331;
const app = express();

app.use(compression());
app.use(historyApiFallback());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    open('http://localhost:' + port);
    console.log(chalk.yellow(`Listening on port ${port}`));
  }
});
