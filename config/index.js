'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
var proxyConfig = require('./proxyConfig');

module.exports = {
  dev: {
    // disableHostCheck: true,
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: proxyConfig.proxy,

    // Various Dev Server settings
    host: '127.0.0.1', // can be overwritten by process.env.HOST   localhost
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),//资源根路径 项目打包后存放的路径 即项目目录下的dist文件
    assetsSubDirectory: 'static',//资源子目录 存放静态资源文件的static，css、js、img
    assetsPublicPath: '/mybp/',//资源公共路径 ，我们访问静态资源需要额外的前缀,vue项目运行于 二级域名
    // assetsPublicPath: '/',//vue项目运行于 一级域名
    /**
     * Source Maps
     */
    //productionSourceMap: true,//去掉编译文件中map文件。在编译好后，我们会看到文件夹下有特别多的.map文件，这些文件主要是帮助我们线上调试代码，查看样式
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    //2020-10-30把gzip打开 productionGzip: false-> productionGzip: true
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
   
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
