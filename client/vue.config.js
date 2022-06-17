module.exports = {
    pages: {
      index: {
        entry: 'src/main.js'
      }
    },
    devServer: {
      compress: true,
      disableHostCheck: true,
      proxy: {
        "^/api": {
          target: process.env.VUE_APP_API_END_POINT,
          changeOrigin: true,
        },
      },
    },
  }