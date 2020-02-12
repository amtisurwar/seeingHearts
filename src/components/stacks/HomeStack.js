import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import HeaderIcon from '../header/BarIcon';
import Home from '../../pages/Home';
import Login2 from '../../pages/Login2';
import css from '../../css/style';
import config from 'react-native-config';
import Auth from '../../pages/Auth';
import Logout from '../../pages/Logout';
// import Dashboard from '../../pages/Dashboard';
import DashboardRoute from '../../routes/DashboardRoute';
import NotificationPage from '../../pages/NotificationPage';
import Notification from '../../Notification';
import { Icon } from 'react-native-elements';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <HeaderIcon navigationProps={navigation} />,
      headerStyle: css.headerStyle,
      headerTintColor: config.HEADER_TINT_COLOR,
    }),
  },
  NotificationPage:{
    screen: NotificationPage,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: <HeaderIcon navigationProps={navigation} notify={true} />,
      headerStyle: css.headerStyle,
      headerTintColor: config.HEADER_TINT_COLOR,
    }),
  },
  Notification: Notification,
  Auth: {
    screen: Auth,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Dashboard: {
    screen: DashboardRoute,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Logout:{
    screen:Logout,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null
    })
  },
  Login2: {
    screen: Login2,
    navigationOptions: ({ navigation }) => ({
      title: 'Login or Register in Seeing hearts',
      headerLeft: null,
      headerStyle: css.headerStyle,
      headerTintColor: config.HEADER_TINT_COLOR,
    }),
  }
},{
    initialRouteName: 'Notification'
});

module.exports = HomeStack;