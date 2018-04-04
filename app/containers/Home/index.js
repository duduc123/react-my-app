import React, {Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../components/Slider/index";
import Ad from "./subpage/Ad";
import {connect} from 'react-redux'
class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Slider/>
                <Ad/>
            </div>
        )
    }
}
export default connect(
    state => {
        return {userInfo:state.userInfo}
    }
)(Home)