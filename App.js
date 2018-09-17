import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Auth from './src/components/Auth';

const App = StackNavigator({
  Main: {screen: Auth}
});

AppRegistry.registerComponent('App', () => App);