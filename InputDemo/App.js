/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';


// var LoginView = require('./LoginView');

import LoginView from "./LoginView"

export default class App extends Component<{}> {
  render() {
    return (
        <LoginView/>
    );
  }
}

