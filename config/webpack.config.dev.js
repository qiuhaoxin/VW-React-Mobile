const merge=require('webpack-merge');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack=require('webpack');

const baseConfig=require('./webpack.config.base.js');

const paths=require('./paths');

// const config=merge(baseConfig,{
// 	output:{
// 		pathinfo:true,
// 		filename:'static/js/bundle.js',
// 		chunkFilename:'static/js/[name].chunk.js',
// 		publicPath:'/'
// 	},
//     plugins:[
//        new HtmlWebpackPlugin({
//        	  template:paths.appHtml,
//        	  inject:true,
//        	  title:'devServer',
//        }),
//        new webpack.NamedModulesPlugin(),
//        new webpack.HotModuleReplacementPlugin(),
// 	]	
// })
console.log("appDist is "+paths.appDist);
module.exports=merge(baseConfig,{
	output:{
		path:path.resolve(__dirname,"../dist"),
		filename:'bundle.js',
		publicPath: "/"
	},
    plugins:[
       new HtmlWebpackPlugin({
       	  template:paths.appHtml,
       	  inject:true,
       	  title:'devServer',
       }),
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin(),//HotModuleReplacementPlugin
	]
})