import React, { Component } from 'react';
import { Tree} from 'antd';
import { Empty } from 'antd';
import {connect} from 'react-redux';
import axios from './../../../../axios'
import {} from './../../../../redux/action'
const { TreeNode,DirectoryTree} = Tree;
class TreeNodeJGGL extends Component {
  state={
    nodeList:'',
    currentKey:''
  }
    
  onSelect = (keys, event) => {

    console.log('Trigger Select', keys, event);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };
    loadJGGLList = ()=>{
      axios.ajax({
        url:'/v1/org/getOrgNameForCompany',
        method:'get',
        data:{
          params:{
            orgType:this.props.orgType
          }
        }
      }).then((res)=>{
        if (res.meta && res.data) {
          this.setState({
            nodeList:res.data   
          }) 
        }
      })
    }
    renderTree=(data)=>{
      return data.map(item => {
        if (!item.childrenList) {
            return (
                <TreeNode title={item.orgName} key={item.id} />
            )
        } else {
            return (
                <TreeNode title={item.orgName} key={item.id}>
                    {this.renderTree(item.childrenList)}
                </TreeNode>
            )
        }
    })
    }
    componentWillMount(){
      this.loadJGGLList()
      
    }
    render() {
      if (this.state.nodeList) {
        return(
          <DirectoryTree
            multiple
            onSelect={this.onSelect}
            onExpand={this.onExpand}>
            { this.renderTree(this.state.nodeList)}
          </DirectoryTree> )
      } else {
        return (
          <Empty description="暂无数据" image={Empty.PRESENTED_IMAGE_SIMPLE} />
          );  
      }
        
    }
}
const mapStateToProps = state => {
  return {
      orgType: state.orgType
  }
}
export default connect(mapStateToProps)(TreeNodeJGGL)