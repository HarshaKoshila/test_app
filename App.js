/**
 * Test Application For 99x Assignment
 * Harsha
 *
 * @format
 * @flow
 */


import React, { Fragment, useEffect, Component } from 'react';
import { StatusBar, Text, View, AppRegistry, Alert } from 'react-native';
import Router from './Router';
import SafeAreaView from 'react-native-safe-area-view';


import { MAIN_COLOR, BACKGROUND_COLOR } from './Utility/color';



export default class App extends Component {

  render() {
    console.disableYellowBox = true;
    return ( 
        <Router /> 
    );
  }
}


