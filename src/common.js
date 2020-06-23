import React,{Component} from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import './styles/common.less'
export default class Common extends Component {

    render() {
        return (
            <div>
                <Row className="content">
                    {this.props.children}
                </Row>
            </div>
        );
    }
}