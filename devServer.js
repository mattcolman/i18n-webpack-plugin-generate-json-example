const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 3000;

const compiler = webpack(Object.assign({}, config, {
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/dev-server',
    ...config.entry.app,
  ],
  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}));

const devServer = new WebpackDevServer(compiler, {
  hot: true,
  disableHostCheck: true,
  contentBase: 'public/',
  publicPath: config.output.publicPath,
  quiet: false,
  stats: { colors: true },
  historyApiFallback: true,
  watchOptions: {
    ignored: /node_modules/,
  },
});

devServer.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('//***************************//');
  console.log('Server ready on port %d', port);
  console.log('//***************************//');
});
