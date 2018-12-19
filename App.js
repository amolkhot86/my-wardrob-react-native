/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {
  createStackNavigator,
} from 'react-navigation';
import IntroScreen from './imports/ui/screens/IntroScreen'
import CameraScreen from './imports/ui/screens/CameraScreen'

const App = createStackNavigator({
  Intro: { 
    screen: IntroScreen,
    navigationOptions: { header: null }
  },
  CameraScreen:{
    screen: CameraScreen,
    navigationOptions: { header: null }
  }
});

export default App;