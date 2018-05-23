'use strict';

const fs=require('fs');
const path=require('path');

const appDirectory=fs.realpathSync(process.cwd());
const resolvePath=relativePath=>path.resolve(appDirectory,relativePath);

module.exports={
	appEntry:resolvePath('src/app.js'),
	appDist:resolvePath('dist'),
	appHtml:resolvePath('public/index.html'),
}