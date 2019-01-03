import React, { Component } from 'react';
import './App.css';
// eslint-disable-next-line
import logo from './logo.svg';
export default class App extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
