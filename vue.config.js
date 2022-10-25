/**
 * 配置参考:
 * https://cli.vuejs.org/zh/config/
 */
 const urls = require('./src/config/env')
 // remove "vuetify-loader": "^1.7.3" from package.json
 // const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
 module.exports = {
   lintOnSave: true,
   productionSourceMap: false,
   chainWebpack: config => {
     const entry = config.entry('app')
   },
   css: {
     // 忽略 CSS order 顺序警告
     extract: { ignoreOrder: true }
   },
   configureWebpack: (config) => {
     if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'uat') {
       // 仅在生产环境下启用该配置
       return {
         performance: {
           // 打包后最大文件大小限制
           maxAssetSize: 1024000
         },
         plugins: [
           
         ]
       }
     }
   },
   // 配置转发代理
   devServer: {
     port: 8080,
     proxy: {
       '/': {
         target: urls.baseUrl,
         ws: false, // 需要websocket 开启
         pathRewrite: {
           '^/': '/'
         }
       }
     }
   }
 }
 