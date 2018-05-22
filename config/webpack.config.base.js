const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const paths=require('./paths');
console.log("appEntry is "+paths.appEntry);



module.exports={
	entry:{
       main:paths.appEntry,
	},
	resolve:{
		extensions:['.js','.jsx','.less','.css','.jsx','.json'],
	},
	module:{
		rules:[
           {
           	  test:/\.(png|jpe?g|gif|svg)$/,
           	  use:[
                 {
                 	loader:'url-loader',
                 	options:{
                       limit:8192,
                       fallback:'file-loader',
                 	}
                 }
           	  ]
           },{
           	  test:/\.(js|jsx)$/,
           	  loader:require.resolve('babel-loader'),
           	  include:path.resolve(__dirname,'../src'),
           },{

           }

		]
	},
	plugins:[
       new HtmlWebpackPlugin({
       	  template:paths.appHtml,
       	  inject:true,
       	  title:'devServer',
       })
	]
}