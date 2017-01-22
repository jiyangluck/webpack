var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:'./src/main.js',
	output:{
		filename:'./dist/bundle.js'
	},
	module:{
		loaders:[
			{
				test:/.js$/,
				loader:'babel-loader',
				exclude: /(node_modules)/,
				query:{
					presets:['es2015']
				}
			},
			{
				test:/.vue$/,
				loader:'vue-loader'
				//需要安装依赖 vue-template-compiler
			}
		]
	},
	// plugins:[
	// 	//生成index.html文件的插件
	// 	// new HtmlwebpackPlugin({
	// 	// 	title:'webpack',
	// 	// 	filename:'index.html'
	// 	// })
	// ],
	vue: {
        loaders: {
            js: 'babel?{"presets":["es2015"]}',
            css: 'vue-style!css'
        }
    },
}

console.log('webpack.config.js已经执行')