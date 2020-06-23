import React, { Component } from 'react';
import { Card, Button, Table, Form, Input, Checkbox, Select, Radio, Icon, message, Modal, DatePicker } from 'antd';
import axios from '../../../axios';
import Utils from '../../../utils';
import ETable from '../../../components/ETable';
import Moment from 'moment';
import './index.less';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
export default class DeviceMg extends Component {

    state = {
        list: []
    }

    params = {
        page: 1
    }

    requestList = () => {
        axios.ajax({
            url: '/v1/org/getOrgNameForCompany',
            data: {
                params: {
                    orgType: 2,
                    page: this.params.page
                }
            }
        }).then((res) => {
            this.setState({
                list: res.data.map((item, index) => {
                    item.key = index
                    return item;
                }),
                // pagination: Utils.pagination(res, (current) => {
                //     this.params.page = current;
                //     this.requestList();
                // })
            })
        })
    }

    componentDidMount() {
        this.requestList();
    }
    // 操作员工
    handleOperator = (type) => {
        let item = this.state.selectedItem;
        if (type == 'create') {
            this.setState({
                title: '创建机构',
                isVisible: true,
                type
            })
        } else if (type == "edit" || type == 'detail') {
            if (!item) {
                Modal.info({
                    title: '信息',
                    content: '请选择一个机构'
                })
                return;
            }
            this.setState({
                title: type == 'edit' ? '编辑机构' : '查看详情',
                isVisible: true,
                userInfo: item,
                type
            })
        } else if (type == "delete") {
            if (!item) {
                Modal.info({
                    title: '信息',
                    content: '请选择一个机构'
                })
                return;
            }
            Utils.ui.confirm({
                text: '确定要删除此机构吗？',
                onOk: () => {
                    axios.ajax({
                        url: '/user/delete',
                        data: {
                            params: {
                                id: item.id
                            }
                        }
                    }).then((res) => {
                        if (res.code == 0) {
                            this.setState({
                                isVisible: false
                            })
                            this.requestList();
                        }
                    })
                }
            })
        }
    }
    handleSubmit = () => {
        let type = this.state.type;
        let data = this.userForm.props.form.getFieldsValue();
        axios.ajax({
            url: type == 'create' ? '/user/add' : '/user/edit',
            data: {
                params: {
                    ...data
                }
            }
        }).then((res) => {
            if (res.code == 0) {
                this.setState({
                    isVisible: false
                })
                this.requestList();
            }
        })
    }
    render() {
        const columns = [{
            title: '编号',
            dataIndex: 'orgCode'
        }, {
            title: '机构名称',
            dataIndex: 'orgName'
        },
        ];
        return (
            <div>
                <Card style={{ marginTop: 10 }}>
                    <Button type="primary" icon="plus" onClick={() => this.handleOperator('create')}>创建机构</Button>
                    <Button icon="edit" onClick={() => this.handleOperator('edit')}>编辑机构</Button>
                    <Button onClick={() => this.handleOperator('detail')}>机构详情</Button>
                    <Button type="danger" icon="delete" onClick={() => this.handleOperator('delete')}>删除机构</Button>
                </Card>
                <div className="content-wrap">
                    <ETable
                        columns={columns}
                        updateSelectedItem={Utils.updateSelectedItem.bind(this)}
                        selectedRowKeys={this.state.selectedRowKeys}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
                <Modal
                    title={this.state.title}
                    visible={this.state.isVisible}
                    onOk={this.handleSubmit}
                    width={800}
                    onCancel={() => {
                        this.userForm.props.form.resetFields();
                        this.setState({
                            isVisible: false,
                            userInfo: ''
                        })
                    }}
                >
                    <UserForm userInfo={this.state.userInfo} type={this.state.type} wrappedComponentRef={(inst) => this.userForm = inst} />
                </Modal>
            </div>
        );
    }
}
class UserForm extends Component{

    getState = (state)=>{
        return {
            '1':'咸鱼一条',
            '2':'风华浪子',
            '3':'北大才子一枚',
            '4':'百度FE',
            '5':'创业者'
        }[state]
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {span: 5},
            wrapperCol: {span: 16}
        };
        const userInfo = this.props.userInfo || {};
        const type = this.props.type;
        return (
            <Form layout="horizontal">
                <FormItem label="姓名" {...formItemLayout}>
                    {
                        userInfo && type=='detail'?userInfo.username:
                        getFieldDecorator('user_name',{
                            initialValue:userInfo.username
                        })(
                            <Input type="text" placeholder="请输入姓名"/>
                        )
                    }
                </FormItem>
                <FormItem label="性别" {...formItemLayout}>
                    {
                        userInfo && type=='detail'?userInfo.sex==1?'男':'女':
                        getFieldDecorator('sex',{
                            initialValue:userInfo.sex
                        })(
                        <RadioGroup>
                            <Radio value={1}>男</Radio>
                            <Radio value={2}>女</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem label="状态" {...formItemLayout}>
                    {
                        userInfo && type=='detail'?this.getState(userInfo.state):
                        getFieldDecorator('state',{
                            initialValue:userInfo.state
                        })(
                        <Select>
                            <Option value={1}>咸鱼一条</Option>
                            <Option value={2}>风华浪子</Option>
                            <Option value={3}>北大才子一枚</Option>
                            <Option value={4}>百度FE</Option>
                            <Option value={5}>创业者</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="生日" {...formItemLayout}>
                    {
                        userInfo && type=='detail'?userInfo.birthday:
                        getFieldDecorator('birthday',{
                            initialValue:Moment(userInfo.birthday)
                        })(
                        <DatePicker />
                    )}
                </FormItem>
                <FormItem label="联系地址" {...formItemLayout}>
                    {
                        userInfo && type=='detail'?userInfo.address:
                        getFieldDecorator('address',{
                            initialValue:userInfo.address
                        })(
                        <Input.TextArea rows={3} placeholder="请输入联系地址"/>
                    )}
                </FormItem>
            </Form>
        );
    }
}
UserForm = Form.create({})(UserForm);
