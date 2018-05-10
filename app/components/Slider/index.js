import React, {Component} from 'react';
import {Carousel} from 'antd';
import './index.less'
function onChange(a, b, c) {
    console.log(a, b, c);
}
export default class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0
        };
    }
    render() {

        return (
            <div className="carousel">
            <Carousel afterChange={onChange}>
                <div>
                    <ul>
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>meal</span>
                        </li>
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>meal</span>
                        </li>
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>meal</span>
                        </li>
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>meal</span>
                        </li>
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>meal</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>meal</span>
                        </li>
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>meal</span>
                        </li>
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>meal</span>
                        </li>
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>meal</span>
                        </li>
                        <li>
                            <i className="iconfont icon-coupons"></i>
                            <span>meal</span>
                        </li>
                    </ul>
                </div>
            </Carousel>
            </div>
        )
    }
}