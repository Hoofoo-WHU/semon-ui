import * as merge from 'webpack-merge'
import * as webpack from 'webpack'
import * as CleanWebpackPlugin from 'clean-webpack-plugin'
import * as path from 'path'
import base from './webpack.base'

const config: webpack.Configuration = merge(base, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(path.resolve('dist'), {
      root: path.resolve('')
    })
  ]
})

export default config