# React + Webpack模板之路由篇

## 需要解决的问题
* jsx的编译合并压缩
* scss的编译合并压缩
* 图片资源的处理
* html的压缩
* 单页应用的路由问题
* 使用redux管理应用数据

## webpack要点
* entry       -- webpack从入口文件解析出资源关系图，webpack只理解javascript，其他资源借助`loader`和`plugins`完成
* output      -- 导出的js文件
* loader      -- 解析不同类型的资源（如css、png）转换成模块
* plugins     -- 解析助手，增强解析模块的能力，如对模块压缩、合并、替换等

## module
* 处理ES6
  - babel-loader

* 处理scss
  - sass-loader
  - post-cssloader.autoprefixer
  - css-loader

* 处理图片资源
  - url-loader

## plugins
* html-webpack-plugin
  - 配置html模板，打包后的模块自动插入html

* webpack.optimize.CommonsChunkPlugin
  - 分离js模块，一般为打包node_modules文件

* extract-text-webpack-plugin
  - 分离css模块，独立打包成文件；而不是以默认的方式，以style标签的形式插入到head

* copy-webpack-plugin
  - 复制文件到指定目录，如复制 `src/favicon.ico` 到 `build/favicon.ico`

## webpack-dev-server 启动开发调试模式
* npm start 
  - webpack-dev-server --config webpack.dev.js --progress --colors --inline --hot

## issues
* react-router 迁移至 react-router-dom@^4.1.1，api变化较大，在路由中全面贯彻组合（Compose）思想
* npm install --save-dev babel-plugin-transform-object-rest-spread  解析扩展运算符插件


