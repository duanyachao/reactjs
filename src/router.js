import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect,withRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import BigDataShow from './pages/bigDataShow';
import Jggl from './pages/aiot/jggl';
import Yhgl from './pages/aiot/yhgl';
import Scqygl from './pages/aiot/scqygl';
import Home from './pages/home';
// import Page404 from './pages/tips';
import deviceMg from './pages/aiot/deviceMg';
import Common from './common'
export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/common" render={() =>
              <Common>
                <Route path="/common/bds" component={BigDataShow} />
              </Common>
            }
            />
            <Route path="/" render={() =>
              <Admin>
                <Switch>
                <Route path="/home" component={Home} />
                <Route path="/aIot/jggl" component={Jggl} />
                <Route path="/aIot/yhgl" component={Yhgl} />
                <Route path="/aIot/scqygl" component={Scqygl} />
                <Route path="/aIot/deviceMg" component={deviceMg} />
                </Switch>
              </Admin>
            } />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
