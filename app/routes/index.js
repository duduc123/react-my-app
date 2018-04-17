import React, {Component} from 'react';
//路由类型：1 有#号的是哈希 hash history 2浏览器自带的 Browser Router 开发时候用的是hashRouter
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home/home';
import Head from '../containers/Head/head';
export default class RouterMap extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/' component={Home}/>
                        <Route path='/news' component={Head}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}