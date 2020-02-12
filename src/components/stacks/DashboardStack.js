import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import HeaderIcon from '../header/BarIcon';
import config from 'react-native-config';
import Dashboard from '../../pages/Dashboard';
import css from '../../css/style';
import DashboardTabs from '../../helper/DashboardTabHelper';

const DashboardStack = createStackNavigator({
  Dash: {
    screen: DashboardTabs,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: <HeaderIcon navigationProps={navigation} />,
      headerStyle: css.headerStyle,
      headerTintColor: config.HEADER_TINT_COLOR,
    }),
  },
});

module.exports = DashboardStack;
