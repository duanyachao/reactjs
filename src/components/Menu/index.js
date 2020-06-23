import React, { Component } from 'react';
import { Menu  } from 'antd';
import { NavLink } from 'react-router-dom';
import menuConfig from './../../config/menuConfig';
import { connect } from 'react-redux'
import { switchMenu  } from './../../redux/action'
const {SubMenu}=Menu;
class Mainmenu extends Component {
  state={
    currentKey:''
  } 
  componentWillMount(){
    const menuTreeNode=this.renderMenu(menuConfig)
    let currentKey=window.location.hash.replace(/#|\?.*$/g,'')
    this.setState({
      currentKey,
      menuTreeNode  
    })
  }
  handleClick=({ item, key, keyPath, domEvent })=>{
    const {dispatch}=this.props;
    dispatch(switchMenu(item.props.title))
    this.setState({
      currentKey:key  
    })
  }  
  renderMenu=(data)=>{
    return data.map((item)=>{
      if (item.children) {
        return(
          <SubMenu title={item.title} key={item.key}>{this.renderMenu(item.children)}</SubMenu>
        )
   
      }
      return <Menu.Item key={item.key} title={item.title}><NavLink to={item.key}>{item.title}</NavLink></Menu.Item>
    })
  }
  render() {
    return (
      <Menu 
        selectedKeys={[this.state.currentKey]}
        onClick={this.handleClick}
        theme="dark" 
        mode="inline">{this.state.menuTreeNode}</Menu>
    );
  }
}
export default connect()(Mainmenu)