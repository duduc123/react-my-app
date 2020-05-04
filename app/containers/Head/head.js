import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {connect} from 'react-redux';
import { Carousel } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail'
    };
    //this.handleClick() = this.handleClick().bind(this);
    //this.handleMouseOver() = this.handleMouseOver().bind(this);
  }
  handleMouseOver() {
      console.log('handle mouse over');
  }
  handleClick(e) {
      console.log('handle click')
    //this.setState({current: e.key});
  }
  render() {
    return (
        <div>
            <div  onMouseOver={this.handleMouseOver}><a onClick={this.handleClick}>sdasewe</a><a onClick={this.handleClick}>daewrqwerwe</a></div>
      <Menu  selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="home"/>主页
        </Menu.Item>
        <SubMenu title={< span > <Icon type="smile"/>个人业务</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">金葵花理财</Menu.Item>
            <Menu.Item key="setting:2">私人银行</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">出国金融</Menu.Item>
            <Menu.Item key="setting:4">个人贷款</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={< span > <Icon type="setting"/>公司业务</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">现金管理</Menu.Item>
            <Menu.Item key="setting:2">国内业务</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">跨境金融</Menu.Item>
            <Menu.Item key="setting:4">投资银行</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
        </div>
    );
  }
}