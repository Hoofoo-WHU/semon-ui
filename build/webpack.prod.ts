import * as merge from 'webpack-merge'
import * as webpack from 'webpack'
import * as CleanWebpackPlugin from 'clean-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import * as path from 'path'
import base from './webpack.base'
import * as fs from 'fs'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'

const componentEntry = {}
fs.readdirSync(path.resolve('src/component')).forEach(file => {
  componentEntry[`${file.replace(/\.tsx$/, '')}`] = path.resolve(`src/component/${file}`)
})

const config: webpack.Configuration = merge(base, {
  mode: 'production',
  entry: {
    index: path.resolve('src/index.ts'),
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
          MiniCssExtractPlugin.loader,
          'css-loader?modules&localIdentName=s-[local]',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve('dist'), {
      root: path.resolve('')
    }),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
})

export default config