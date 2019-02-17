import * as webpack from 'webpack'
import * as merge from 'webpack-merge'
import * as path from 'path'
import * as fs from 'fs'
import base from './webpack.base'

const entry = {}
fs.readdirSync(path.resolve('test')).forEach(file => {
  entry[`test/${file.replace(/\.tsx?$/, '')}`] = path.resolve(`test/${file}`)
})

const config: webpack.Configuration = merge(base, {
  entry: {
    ...entry
  },
  mode: "development",
  devtool: "inline-source-map",
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
  }
})

export default config