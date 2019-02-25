// Karma configuration
// Generated on Mon Feb 18 2019 01:08:29 GMT+0800 (GMT+08:00)
import * as Karma from 'karma'
import * as webpack from 'webpack'
import webpackConfig from './build/webpack.test'

interface KarmaWebpackConfigOption extends Karma.ConfigOptions {
  webpack: webpack.Configuration,
  mochaReporter: any,
  coverageReporter: any
}
interface KarmaWebpackConfig extends Karma.Config {
  set: (config: KarmaWebpackConfigOption) => void
}

export default (config: KarmaWebpackConfig) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon-chai', 'source-map-support'],

    // list of files / patterns to load in the browser
    files: [
      'test/**/*.test.tsx',
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.test.tsx': ['webpack']
    },

    webpack: webpackConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],

    mochaReporter: {
      colors: {
        success: 'green',
        info: 'blue',
        warning: 'yellow',
        error: 'red'
      },
      symbols: {
        success: '✨ ',
        info: '✉️ ',
        warning: '⚠️ ',
        error: '❌ '
      }
    },

    coverageReporter: {
      reporters: [
        { type: 'lcovonly' },
        { type: 'text' }
      ],
      check: {
        global: {
          excludes: [
            'node_modules/**/*'
          ]
        }
      }
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
