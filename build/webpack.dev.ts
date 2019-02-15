import * as webpack from 'webpack'
import * as merge from 'webpack-merge'
import * as path from 'path'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'


import base from './webpack.base'

const config: webpack.Configuration = merge(base, {
  entry: {
    index: path.resolve('src/app.tsx'),
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: base.output.path
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'dts-css-modules-loader',
          'css-loader?modules&localIdentName=s-[local]',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html')
    })
  ]
})

export default config