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

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));