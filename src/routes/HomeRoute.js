import React, { Component } from 'react';
import {
  createDrawerNavigator,
} from 'react-navigation';

import HomeStack from '../components/stacks/HomeStack';
import LoginStack from '../components/stacks/LoginStack';
import SignStack from '../components/stacks/SignStack';

const DrawerNavigatorExample = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  LogIn: {
    screen: LoginStack,
    navigationOptions: {
      drawerLabel: 'Login/Register',
    },
  },
  Sign: {
    screen: SignStack,
    navigationOptions: {
      drawerLabel: 'Login or Register',
    },
  }
});

export default DrawerNavigatorExample;