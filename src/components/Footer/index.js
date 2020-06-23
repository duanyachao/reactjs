import React, { Component } from 'react';
import { Icon } from 'antd';
import './index.less';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* <img className="logoB" src="./assets/logoB.png" alt=""/> */}
        <div className="copyRight">Copyright  <Icon type="copyright" />2019 河南元丰科技网络股份有限公司版权所有</div>
      </div>
    );
  }
}

export default Footer;