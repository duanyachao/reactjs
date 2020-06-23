import React, { Component,StyleSheet } from 'react';
import './index.less';
import { Layout,Row, Col } from 'antd'
const {Header,Content,Footer}=Layout
export default class BigDataShow extends Component {
  render() {
    return (
      <div>
        <Layout className="wrapper">
          <Header className="bigDataHeader">
            <h1 className="title">牟平县智慧农业大数据中心</h1>  
          </Header>
          <Content className="data_content">
            <div className="data_tip">
              温馨提示: 点击标题后跳转至详情页面。
            </div>
            <Row className="data_main">
              <Col span={4} className="main_left">左</Col>
              <Col span={16} className="main_center">中</Col>
              <Col span={4} className="main_right">右</Col>
            </Row>
          </Content>
          <Footer className="bigDataFooter">牟平县智慧农业大数据中心</Footer>
        </Layout>
      </div>
    )
  }
}

