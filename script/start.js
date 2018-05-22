const devServer=require('webpack-dev-server');
const webpack=require('webpack');
const config=require('../config/webpack.config.dev.js');
const devServerConfig=require('../config/webpack.devserver.config.js');

const chalk=require('chalk');

const compiler=webpack(config);

const DEFAULT_PORT=process.env.PORT || 3002;




const devServerOptins=Object.assign({},devServerConfig,{

});

const server=devServer(compiler,devServerOptins);


server.listen(3002,'127.0.0.1',()=>{
   console.log(chalk.blue(`server is starting at port ${DEFAULT_PORT}`));
})