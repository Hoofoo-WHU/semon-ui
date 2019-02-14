import * as merge from 'webpack-merge'
import * as webpack from 'webpack'
import * as CleanWebpackPlugin from 'clean-webpack-plugin'
import * as path from 'path'
import base from './webpack.base'
import * as fs from 'fs'

const componentEntry = {}
fs.readdirSync(path.resolve('src/component')).forEach(file => {
  componentEntry[`lib/${file.replace(/\.tsx$/, '')}`] = path.resolve(`src/component/${file}`)
})

const config: webpack.Configuration = merge(base, {
  mode: 'production',
  entry: {
    ...componentEntry
  },
  output: {
    library: 'semon',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve('dist'), {
      root: path.resolve('')
    })
  ]
})

export default config