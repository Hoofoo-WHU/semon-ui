import * as path from 'path'
import * as webpack from 'webpack'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
  entry: path.resolve('src/index.tsx'),
  output: {
    path: path.resolve('dist'),
    filename: '[name]-[hash:8].js'
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
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html')
    })
  ]
}

export default config