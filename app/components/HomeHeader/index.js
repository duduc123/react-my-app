import React, {Component} from 'react';
import './index.less'
//main page head component
export default class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header back">
                <div className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-xiangxia2"></i>
                </div>
                <div className="search">
                    <i className="iconfont icon-sousuo-xianxing"></i>
                    <input type="text"/>
                </div>
                <div className="profile">
                    <i className="iconfont icon-yonghufill"></i>
                </div>
            </div>
        )
    }
}