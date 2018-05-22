const merge=require('webpack-merge');
const baseConfig=require('./webpack.config.base.js');

module.exports=merge(baseConfig,{
	output:{
		pathinfo:true,
		filename:'static/js/bundle.js',
		chunkFilename:'static/js/[name].chunk.js',
		publicPath:'/'
	},
	
})