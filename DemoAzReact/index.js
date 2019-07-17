/**
 * @format
 */
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

AppRegistry.registerComponent(appName, () => HomeScreen);

