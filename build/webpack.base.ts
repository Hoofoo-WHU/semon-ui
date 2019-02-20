import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          'babel-loader',
          'awesome-typescript-loader'
        ],
        exclude: /node_modules|dist/
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  }
}

export default config