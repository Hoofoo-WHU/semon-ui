import prod from './webpack.prod'
import * as merge from 'webpack-merge'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'


const config = merge(prod, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})

export default config