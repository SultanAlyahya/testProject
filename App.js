import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import currency from './views/blindUI/currency'
import decide from './views/decide'
import blindHomePage from './views/blindUI/blindHomePage'
import volunteerHomePage from './views/volunteerUI/volunteerHomePage'
import login from './views/volunteerUI/login'
import signup from './views/volunteerUI/signup'
import createAccountB from './views/blindUI/createAccountB'
import image from './views/blindUI/displayImage'
import TextRecognitionCamera from './views/blindUI/TextRecognitionCamera'
//import object from './views/blindUI/ObjectRecognitionPage'
import cam from './views/blindUI/cam'
import textPage from './views/blindUI/TextRecognition'

import Svg, { Circle, Rect } from 'react-native-svg';

class HomeScreen extends React.Component {
  render() {
    return (
      <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: 'center', justifyContent: 'center' },
      ]}>
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Rect
          x="15"
          y="15"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        />
      </Svg>
    </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  decideP: {
    screen: decide,
  },
  blindHomePageP:{
    screen: blindHomePage,
  },
  volunteerHomePageP:{
    screen: volunteerHomePage,
  },
  loginP:{
    screen: login,
  },
  signupP:{
    screen: signup,
  },
  createAccountBP:{
    screen: createAccountB,
  },
  CurrencyP:{
    screen: currency
  },
  imageP:{
    screen: image
  },
  TextP:{
    screen: TextRecognitionCamera
  },
  // objectP:{
  //   screen: object
  // },
  CameraP:{
    screen: cam
  },
  textPageP:{
    screen: textPage
  },
});

export default createAppContainer(AppNavigator);
