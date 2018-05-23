import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {connect} from 'react-redux';
import { Carousel } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail'
    }
  }
  handleClick(e) {
    this.setState({current: e.key});
  }
  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
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
        <SubMenu title={< span > <Icon type="setting"/>信用卡</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">信用卡首页</Menu.Item>
            <Menu.Item key="setting:2">客户服务</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">信用卡在线申请</Menu.Item>
            <Menu.Item key="setting:4">特惠快讯</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu title={< span > <Icon type="setting"/>今日招行</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">招行新闻</Menu.Item>
            <Menu.Item key="setting:2">招行介绍</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">投资者关系</Menu.Item>
            <Menu.Item key="setting:4">微博</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="#" target="_blank" rel="noopener noreferrer">Travel Book</a>
        </Menu.Item>
      </Menu>
    );
  }
}