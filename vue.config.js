const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    proxy: {
      '/api': { // 当匹配的 /api 时.向 target 取数据
        target: 'http://192.168.1.5:3000', // 目标服务器
        changeorign: true,
        pathRewrite: {
          '/api': '' // 重写url地址
        }
      }
    }
  }
})
