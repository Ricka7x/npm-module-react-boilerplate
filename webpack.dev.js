const path = require('path')
const precss = require('precss')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './docs/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [precss(), autoprefixer()]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      [`${process.env.npm_package_name}`]: path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    port: 3000,
    open: true
  }
}
