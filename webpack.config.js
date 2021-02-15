const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'dev'

const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, ('./dist')),
  assets: path.join(__dirname, ('./assets'))
}

module.exports = {
  entry: {
    main: path.resolve(__dirname, './webpack/index.js')
  },
  output: {
    path: path.resolve(__dirname, `${PATHS.dist}`),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': PATHS.assets,
      '~': PATHS.src
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      // Fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource'
      },
      // CSS, PostCSS, Sass
      {
        // scss
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: false }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, './postcss.config.js')
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
          /*   {
                           loader: 'sass-resources-loader',
                           options: {
                               resources: [
                                   './src/assets/scss/core/base.scss',
                               ],
                           },
                       }, */
        ]
      },
      {
        // css
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, './postcss.config.js')
              },
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, `${PATHS.src}/template.html`), // шаблон
      filename: 'index.html' // название выходного файла
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({}),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, `${PATHS.dist}`),
    open: true,
    compress: true,
    hot: true,
    port: 8080
  }
}
