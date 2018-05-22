const Webpack=require('webpack');
const config=require('../config/webpack.config.prod.js');
const chalk=require('chalk');

Webpack(config,(err,stats)=>{
    if(err){
    	console.error(chalk.red("error is "+err.stack||err));
	    if(err.details){
	    	console.error(chalk.red("error detail is "+err.details));
	    }
	    return;
    }	
    const info=stats.toJson();
    if(stats.hasErrors()){
    	console.error(chalk.red('error in stats is '+info.errors));
    }
    if(stats.hasWarnings()){
    	console.warn(chalk.yellow('warning in stats is '+info.warnings));
    }


})