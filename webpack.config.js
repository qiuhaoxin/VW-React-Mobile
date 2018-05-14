const webpack=require('webpack');
const path=require('path');
module.exports={
	entry:{
		main:'./src/app.js',
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].[hash:8].js',
		publicPath:'.',
	},
	resolve:{
		extensions:['.js','.jsx','.css','.less'],

	}
	module:{
		rules:[
           {
           	  test:/\.css$/,
              use:[

              ]
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