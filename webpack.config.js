/* eslint-env node */
const path = require('path')
const fs = require('fs')
const lessToJs = require('less-vars-to-js')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const extractCss = new ExtractTextPlugin('styles.css')
const APP_DIR = path.resolve(__dirname, './src')
const BUILD_DIR = path.resolve(__dirname, './build')
const NODE_MODULES_DIR = path.resolve(__dirname, './node_modules')

const theme = lessToJs(
  fs.readFileSync(path.join(APP_DIR, 'override.less'), 'utf8')
) // Load less override variables

module.exports = {
  mode: 'development',
  entry: {
    main: `${APP_DIR}/index.js`
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        include: [
          `${NODE_MODULES_DIR}/antd`,
          APP_DIR
        ],
        use: extractCss.extract([
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: theme
            } // Override default less variables
          }
        ])
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        use: {
          loader: 'url-loader',
          options: {
            name: `${BUILD_DIR}/assets/iconfont/[name].[ext]`
          }
        }
      },
      // {
      //   test: /\.(jpe?g|png)$/,
      //   include: `${APP_DIR}/assets/images`,
      //   loader: 'file-loader?name=public/assets/[name].[hash].[ext]'
      // },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/index.html`
    }),
    new CleanWebpackPlugin([BUILD_DIR]),
    extractCss
  ],
  resolve: {
    extensions: ['.js'],
    modules: [APP_DIR, 'node_modules']
  },
  devtool: '#cheap-module-source-map',
  devServer: {
    contentBase: './',
    port: 9000,
    compress: false,
    historyApiFallback: {
      rewrites: [{ from: /^\/$/, to: BUILD_DIR }]
    }
  }
}
