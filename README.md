#### package.json文件属性相关

#### 新官网https://webpack.js.org/

#### 加载图片
* 加载图片文件需要url-loader和file-loader

#### webpack终极优化
* http://imweb.io/topic/5868e1abb3ce6d8e3f9f99bb

#### webpack插件
* 用imagemin-webpack-plugin 压缩图片
* 用webpack-spritesmith 合并雪碧图
* 对于支持es6的js运行环境使用babili

#### webpack配置

* 打包
* 加载器
* 热插拔
* plugins 插件
* 生成html：html-webpack-plugin
* 样式相关--sass
* Favlist 属性
* resole 属性
* alias 别名
* webpack.prod.config.js文件
* 实例文件
``` js
var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: path.resolve(__dirname,'../client/main.js'),
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
      filename: "commons.js"
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: false,
  vue: {
    loaders: {
      sass: 'style!css!sass?indentedSyntax',
      scss: 'style!css!sass'
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false;
  // http://vuejs.github.io/vue-loader/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
```
