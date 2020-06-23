import React, { Component } from 'react';
import {Icon, Avatar, Menu,Dropdown,Breadcrumb  } from 'antd';
import './index.less';
import Utils from '../../utils';
import { connect } from 'react-redux'
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http:www.baidu.com">个人中心</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http:www.baidu.com">个人设置</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">退出登录</Menu.Item>
  </Menu>
);
class Header extends Component {
  componentWillMount(){
    this.setState({
      userName:'元丰科技'
    })
    setInterval(()=>{
      let sysTime= Utils.formateDate(new Date());
      this.setState({
        sysTime
      })
    },1000)
    
  }

  render() {
    
    return (
      <div className="header">
          <div className="loginInfo">
          <Icon type="message" className="infoTips" />
          <Avatar className="userIcon" icon="user" />
          <Dropdown overlay={menu}><a className="userName" href="#">{this.state.userName}</a></Dropdown>
          </div>
          <div className="breadcrumb">
          <Breadcrumb className="breadcrumbTitle">
              <Breadcrumb.Item>{this.props.menuName}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="dateTime">{this.state.sysTime}</div>
          </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      menuName: state.menuName
  }
}

export default connect(mapStateToProps)(Header)