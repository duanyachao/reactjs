import React, { Component } from 'react';
import { Form, Input, Button, Icon ,Checkbox,message } from 'antd';
import axios from './../../axios';
import { connect } from 'react-redux'
import { doLogin } from './../../redux/action';
import Footer from './../../components/Footer';
import Utils from './../../utils';
import './index.less';
import logo from './../../resource/assets/logoS.png';
const FormItem = Form.Item;

 class Login extends Component {
  state = {};

  componentDidMount() {
    //每次进入登录页清除之前的登录信息
  }
  render() {
    return (
      <div className="login-page">
        <div className="login-header">
          <div className="logo">
            <img src={logo} alt="农业物联网云平台" />
            元丰科技农业物联网云平台
          </div>
        </div>
        <div className="login-content-wrap">
          <div className="login-content">
            <div className="word">
              智慧物联 <br />
              引领农业新经济
            </div>
            <div className="login-box">
              <div className="error-msg-wrap">
                <div className={this.state.errorMsg ? 'show' : ''}>
                  {this.state.errorMsg}
                </div>
              </div>
              <div className="title">元丰欢迎你</div>
              <LoginForm {...this.props}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.ajax({
          url:'/v1/doLogin',
          method:'post',
          data:{
            params:{
              'loginName': values.username,
              'password': values.password,
              'phoneNum': values.phone
            }
          }
        }).then((res)=>{
            if (res.meta.success) {
              const {dispatch ,userInfo}=this.props;
              dispatch(doLogin(res.data))
              this.props.history.push('/common/bds')
            } else {
              message.info(res.meta.message);              
            }
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {dispatch}=this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号!' }],
          })(
            <Input
              prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="手机号"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          还没有账号？现在去 <a href="">注册!</a>
        </FormItem>
      </Form>
    );
  }
}

LoginForm = Form.create({})(LoginForm);
export default connect()(Login) 