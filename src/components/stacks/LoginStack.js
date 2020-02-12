import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import HeaderIcon from '../header/BarIcon';
import config from 'react-native-config';
import Login from '../../pages/Login';
import css from '../../css/style';

const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login/Register',
      headerLeft: <HeaderIcon navigationProps={navigation} />,
      headerStyle: css.headerStyle,
      headerTintColor: config.HEADER_TINT_COLOR,
    }),
  },
});

module.exports = LoginStack;