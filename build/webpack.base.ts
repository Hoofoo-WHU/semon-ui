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
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules|dist/
      }
    ]
  }
}

export default config