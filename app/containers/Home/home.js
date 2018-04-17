import React, {Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../components/Slider/index";
import Ad from "./subpage/Ad";
import Head from "../Head/head";
import ClickCounter from "../../components/Train/ClickCounter";
import {connect} from 'react-redux'
class Home extends Component {
    render() {
        return (
            <div>
                <Head/>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Slider/>
                <Ad/>
                <ClickCounter/>
            </div>
        )
    }
}
export default connect(
    state => {
        return {userInfo:state.userInfo}
    }
)(Home)