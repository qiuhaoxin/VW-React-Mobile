import React from 'react';
import ReactDom from 'react-dom';
 import App from './page.js';

const render=(Component)=>{
   ReactDom.render(
    <Component />,
    document.getElementById('root'))
}
render(App)

if(module.hot){
	module.hot.accept('./page.js',function(){
		console.log("hot module replacement!");
		render(App)
	})
}