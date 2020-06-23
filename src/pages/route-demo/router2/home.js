import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (

                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                        <li><Link to="/topic">话题</Link></li>
                    </ul>
                    <hr/>
                    {this.props.children}
               </div>

        );
    }
}