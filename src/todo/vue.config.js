module.exports = {
    baseUrl: './', //在 baseUrl前面加个点baseUrl: './'
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, 
    chainWebpack: () => {},
    configureWebpack: () => {},
    devServer: {
      open: process.platform === 'darwin',
      host: 'localhost',
      port: 8088,
      https: false,
      hotOnly: false,
      proxy: null,
      before: app => {}
    }
  }
