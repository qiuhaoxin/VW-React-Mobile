const webpack=require('webpack');
const path=require('path');
const cleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

const cssFilename = 'static/css/[name].[contenthash:8].css';

const ExtractTextOptions=Array(cssFilename.split('/').length).join('../');
//console.log("ExtractTextOptions is "+ExtractTextOptions);

/*
* postcss
*/
const autoprefixer=require('autoprefixer');
const postcssAspectRatioMini=require('postcss-aspect-ratio-mini');
const postcssPxToViewport=require('postcss-px-to-viewport');
const postcssWriteSvg=require('postcss-write-svg');
const postcssCssNext=require('postcss-cssnext');
const postcssViewportUnits=require('postcss-viewport-units');
const cssnano=require('cssnano');


process.env.NODE_ENV="production";
process.env.BABEL_ENV="production";

module.exports={
	mode:'production',
	entry:{
		main:path.resolve(__dirname,'./src/app.js'),
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'static/js/[name].[hash:8].js',
		publicPath:'./',
	},
	resolve:{
		extensions:['.js','.jsx','.css','.less'],

	},
	module:{
		rules:[
           {
           	  test:/\.css$/,
              loader:ExtractTextPlugin.extract(
                {
                  fallback: {
                    loader: require.resolve('style-loader'),
                    options: {
                      hmr: false,
                    },
                  },
                  use: [
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:5]'
                      },
                    }
                  ],
                  publicPath:ExtractTextOptions
                }
              )
           },
           {
           	  test:/\.(js|jsx)$/,
           	  loader:require.resolve('babel-loader'),
           	  include:path.resolve(__dirname,'./src'),
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
	plugins:[
       new cleanWebpackPlugin(['dist']),
       new HtmlWebpackPlugin({
       	  template:path.resolve(__dirname,'./public/index.html'),
       	  title:'test layout',
       	  inject:true,
       }),
       new ExtractTextPlugin({
         filename:cssFilename,
       })

	]
}