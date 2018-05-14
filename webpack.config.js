const webpack=require('webpack');

module.exports={
	entry:{
		main:'./src/app.js',
	},
	output:{
		path:'./dest',
		filename:'[name].[hash:8].js',
		publicPath:'.',
	},
	module:{
		rules:[
           {
           	  test:/\.css$/,

           },
           {
           	  test:/\.(js|jsx)$/,
           	  loader:'babel-loader',
           	  exclude:'node_modules',
           },
           {
           	  test:/\.less$/,
           	  loader:'less-loader',
           },
           {
           	  test:/\.(jpe?g|pgn|svg|gif)/,
           	  loader:'file-loader',
           }
		]
	},
	plugin:[

	]
}