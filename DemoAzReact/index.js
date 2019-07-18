/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeController from './screens/HomeController';
import LoginController from './screens/LoginController';
import CustomerHomeController from './screens/CustomerHomeController';
import LisCustomerController from './Customer/ListCustomerController';

const RootStack = createStackNavigator(
    {
      Login: {
          screen: LoginController
          
        },
      Home: {
          screen: HomeController,
          navigationOptions: {
            title: 'AZ CRM',
            headerTitleStyle :{color: 'white'},
          },
        },
      CustomerHome: {
            screen: CustomerHomeController,
            navigationOptions: {
              title: 'Khách hàng',
              headerTitleStyle :{color: 'white'},
            },
          },
      ListCustomer: {
            screen: LisCustomerController,
            navigationOptions: {
              title: 'Khách hàng',
              headerTitleStyle :{color: 'white'},
            },
          }
    },
    {
      initialRouteName: 'Login',
    },
    {
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: '#fff',
        },
        initialRouteName: 'Home',
      }
  );
  const AppContainer = createAppContainer(RootStack);

AppRegistry.registerComponent(appName, () => AppContainer);


