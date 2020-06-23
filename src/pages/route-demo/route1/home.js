import React, { Component } from 'react';
import { HashRouter as Router,Route,Link,Switch  } from 'react-router-dom';
import Main from './main';
import About from './about';
import Topic from './topic';
export default class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                        <li><Link to="/topic">话题</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                    </Switch>
               </div>
            </Router>
        );
    }
}