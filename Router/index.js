import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { zoomIn, fadeIn } from 'react-navigation-transitions';

import Splash from './../Screen/SplashScreen';
import First from './../Screen/FirstScreen';
import Second from './../Screen/SecondScreen';
import Third from './../Screen/ThirdScreen';


//Add Animated Navigation
const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'SplashScreen'
    && nextScene.route.routeName === 'FirstScreen') {
    return zoomIn();
  } else {
    return fadeIn();
  }
}


// ----------------- Main Stack Navigator -------------------
const MainNavigator = createStackNavigator({
  SplashScreen: { screen: Splash },
  FirstScreen: { screen: First },
  SecondScreen: { screen: Second },
  ThirdScreen: { screen: Third },
},
  {
    initialRouteName: 'SplashScreen',
    transitionConfig: (nav) => handleCustomTransition(nav),
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      gesturesEnabled: false,
    }
  });

const App = createAppContainer(MainNavigator);

export default App;