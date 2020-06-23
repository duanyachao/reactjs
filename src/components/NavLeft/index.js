import React, { Component } from 'react';
import './index.less';
import Mainmenu from '../Menu';
export default class NavLeft extends Component {
  render() {
    return (
      <div className="navLeft">
        <div className="logo">
          <img src="/assets/logoS.png" alt="" />
          <h1>元丰科技农业信息化云平台</h1>
        </div>
        <Mainmenu/>
      </div>
    );
  }
}
