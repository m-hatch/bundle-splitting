const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * get build environment
 */
const dev = process.env.NODE_ENV !== 'production' && process.argv.indexOf('-p') === -1;

/*
 * configure plugins
 */
const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'src/index.template'
});

const DevPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
];

const ProdPlugins = [
  DefinePluginConfig,
  new CleanWebpackPlugin(),
  new webpack.HashedModuleIdsPlugin()
];

const CommonPlugins = [
  HtmlWebpackPluginConfig
];

/*
 * webpack config
 */
module.exports = {
  entry: {
    index: [
      'react-hot-loader/patch',
      path.join(__dirname, '/src/index.js')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: dev 
      ? '[name].bundle.[hash].js'
      : '[name].bundle.[contenthash].js',
    publicPath: '/'
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    contentBase: './dist',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
  },
  mode: dev ? 'development' : 'production',
  optimization: {
    minimize: false,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all'
        },
        vendor: {
          test(mod) {
            // exclude anything outside node modules
            if (!mod.context.includes('node_modules')) {
              return false;
            }

            // exclude react and react-dom
            if (/[\\/]node_modules[\\/](react|react-dom)[\\/]/.test(mod.context)) {
              return false;
            }

            // return all other node modules
            return true;
          },
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: dev
    ? DevPlugins.concat(CommonPlugins)
    : ProdPlugins.concat(CommonPlugins)
};
