import React,{Component} from 'react';
import {getAd} from "../../fetch/home";
export default class Menu extends Componnet{
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
  render() {
    return (
      <div>
      </div>
    );
  }
    componentDidMount() {
        getAd()
            .then(res => res.json())
            .then(data => {
                this.setState({data});
            });
    }
}