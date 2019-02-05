import * as path from 'path'
import * as webpack from 'webpack'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('dist'),
    filename: '[name]-[hash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html')
    })
  ]
}

export default config