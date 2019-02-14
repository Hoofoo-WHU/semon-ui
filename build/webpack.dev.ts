import * as webpack from 'webpack'
import * as merge from 'webpack-merge'

import base from './webpack.base'

const config: webpack.Configuration = merge(base, {
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
    new webpack.HotModuleReplacementPlugin()
  ]
})

export default config