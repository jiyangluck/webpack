// import ImageminPlugin from 'imagemin-webpack-plugin'
// import imageminMozjpeg from 'imagemin-mozjpeg'

var ImageminPlugin = require('imagemin-webpack-plugin').default;
var imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [{
            test: /.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /.vue$/,
            loader: 'vue-loader'
                //需要安装依赖 vue-template-compiler
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'
        }]
    },
    plugins: [
        //生成index.html文件的插件
        // new HtmlwebpackPlugin({
        //  title:'webpack',
        //  filename:'index.html'
        // })
        new ImageminPlugin({
            plugins: [
                imageminMozjpeg({
                    quality: 100,
                    progressive: true
                })
            ]
        })
    ],
    vue: {
        loaders: {
            js: 'babel?{"presets":["es2015"]}',
            css: 'vue-style!css'
        }
    }, //https://vuejs.org/v2/guide/installation.html#Standalone-vs-Runtime-only-Build
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}

console.log('webpack.config.js已经执行')
