const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? 'weather_app_vue_pet'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/variables.scss";
        `
      }
    }
  }
})
