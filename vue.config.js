const { defineConfig } = require('@vue/cli-service')
const { join } = require('path')
const ProvideLib = require('./webpack/index')

const alias = [
  { label: "@less", value: "src/assets/less" },
  { label: "@font", value: "src/assets/font" },
  { label: "@image", value: "src/assets/image" },
  { label: "@store", value: "src/store/index.ts" },
]


module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const target = config.resolve.alias
    alias.forEach((n) =>
      target.set(n.label, join(__dirname, n.value))
    )
    config.plugin('sqg-editer').use(ProvideLib).tap(() => [{
      libs: [{ name: 'sqg', var: 'SQG' }, { name: 'three', var: 'THREE' }]
    }])
  },
  productionSourceMap: false,
  devServer: { port: 8600 },
  outputDir: 'docs',
  publicPath: "./",
})
