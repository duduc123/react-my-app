//app->index.js入口文件 ，所有 的源文件都放在app中
import React from 'react';
import { render } from 'react-dom';
//公共样式
import './assets/index.less';
import App from "./containers/index";

//redux
import {Provider} from 'react-redux';
import {configureStore} from './store';
let store = configureStore();
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
var tic = function(timmer, cb) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            cb();
            resolve();
        }, timmer);
    });
};

var step = function() {
    let d = new Promise(function(resolve, reject){
        resolve();
    });
    d.then(function() {
        return tic(3000, red);
    }).then(function() {
        return tic(2000, green);
    }).then(function() {
        return tic(1000, yellow);
    }).then(function() {
        step();
    });
};
step();

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));