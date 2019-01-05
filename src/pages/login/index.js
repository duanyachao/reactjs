import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
// eslint-disable-next-line
import axios from '../../axios/index';
import Footer from '../../components/Footer';
// eslint-disable-next-line
import Utils from '../../utils/utils';
import './index.less';
import logo from '../../resource/assets/logo-ant.svg';
const FormItem = Form.Item;

export default class Login extends Component {
  state = {};

  componentDidMount() {
    //每次进入登录页清除之前的登录信息
  }

  loginReq = params => {
    window.location.href = '/#/';
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-header">
          <div className="logo">
            <img src={logo} alt="慕课后台管理系统" />
            React全家桶+AntD 共享经济热门项目后台管理系统
          </div>
        </div>
        <div className="login-content-wrap">
          <div className="login-content">
            <div className="word">
              共享出行 <br />
              引领城市新经济
            </div>
            <div className="login-box">
              <div className="error-msg-wrap">
                <div className={this.state.errorMsg ? 'show' : ''}>
                  {this.state.errorMsg}
                </div>
              </div>
              <div className="title">慕课欢迎你</div>
              <LoginForm ref="login" loginSubmit={this.loginReq} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

class LoginForm extends Component {
  state = {};

  loginSubmit = e => {
    e && e.preventDefault();
    const _this = this;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        var formValue = _this.props.form.getFieldsValue();
        _this.props.loginSubmit({
          username: formValue.username,
          password: formValue.password
        });
      }
    });
  };

  checkUsername = (rule, value, callback) => {
    var reg = /^\w+$/;
    if (!value) {
      callback('请输入用户名!');
    } else if (!reg.test(value)) {
      callback('用户名只允许输入英文字母');
    } else {
      callback();
    }
  };

  checkPassword = (rule, value, callback) => {
    if (!value) {
      callback('请输入密码!');
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            initialValue: 'admin',
            rules: [{ validator: this.checkUsername }]
          })(<Input placeholder="用户名" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            initialValue: 'admin',
            rules: [{ validator: this.checkPassword }]
          })(
            <Input
              type="password"
              placeholder="密码"
              wrappedcomponentref={inst => (this.pwd = inst)}
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            onClick={this.loginSubmit}
            className="login-form-button"
          >
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}
LoginForm = Form.create({})(LoginForm);
