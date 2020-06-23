import React, { Component } from 'react';
import { HashRouter as Router,Route,Switch  } from 'react-router-dom';
import Main from './main';
import About from './about';
import Topic from './topic';
import Home from './home';
export default class RouterDemo extends Component {
    render() {
        return (
            <Router>
                    <Home>
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                    </Switch>
                    </Home>
            </Router>
        );
    }
}