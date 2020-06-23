import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Footer from './components/Footer';
import './styles/common.less';
class Admin extends Component {
    render() {
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={20} className="main">
                    <Header />
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer />
                </Col>
            </Row>
        );
    }
}

export default connect()(Admin);