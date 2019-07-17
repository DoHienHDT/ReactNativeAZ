import React, {useContext} from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import RootNavigator from './RootStackNavigator';

const SwitchNavigator = createSwitchNavigator(
    {
      RootNavigator,
    },
    {
      initialRouteName: 'RootNavigator',
    },
  );
  
