import React, { Component } from 'react';
// eslint-disable-next-line
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
