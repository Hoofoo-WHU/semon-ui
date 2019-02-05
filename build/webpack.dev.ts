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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

export default config