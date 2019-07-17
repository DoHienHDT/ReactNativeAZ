import React from 'react';
import {Text} from 'react-native';
import { createStackNavigator, NavigationRouteConfig, StackNavigatorConfig } from 'react-navigation';
import IntroScreen from '../screens/LoginScreen';
import TempScreen from '../screens/HomeScreen';

const routeConfig: NavigationRouteConfig = {
    LoginScreen: {
        screen: IntroScreen,
        navigationOptions: {
            title: 'LoginScreen',
        },
        path: 'loginScreen',
    },

    HomeScreen: {
        screen: TempScreen,
        navigationOptions: {
            title: 'HomeScreen',
        },
        path: 'homeScreen',
    },
};

const navigatorConfig: StackNavigatorConfig = {
    initialRouteName: 'LoginScreen',
    navigationOptions: ({ navigation, screenProps } : { navigation: any, screenProps: any}) => {
        const { theme } = screenProps;
        return ({
          headerStyle: {
            backgroundColor: theme.background,
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            elevation: 0,
          },
          headerTitleStyle: { color: theme.fontColor },
          headerTintColor: theme.tintColor,
        });
      },
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
    navigation?: any;
    theme?: object;
}

class RootNavigator extends React.Component<IProps> {
    private static router = RootStackNavigator.router;
  
    public render() {
      return (
        <RootStackNavigator
          navigation={this.props.navigation}
          screenProps={{ theme: this.props.theme }}
        />
      );
    }
  }

  export default RootNavigator;
