/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeController from './screens/HomeController';
import LoginController from './screens/LoginController';

const RootStack = createStackNavigator(
    {
      Login: {screen: LoginController},
      Home: {screen: HomeController},
    },
    {
      initialRouteName: 'Login',
    }
  );
  const AppContainer = createAppContainer(RootStack);


AppRegistry.registerComponent(appName, () => AppContainer);


