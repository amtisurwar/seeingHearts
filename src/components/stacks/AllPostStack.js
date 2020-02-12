import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import HeaderIcon from '../header/BarIcon';
import config from 'react-native-config';
import css from '../../css/style';
import AllPost from '../../pages/AllPost';
import Details from '../../pages/Details';
import RightIcon from '../RightIcon';

const AllPostStack = createStackNavigator({
  All: {
    screen: AllPost,
    navigationOptions: ({ navigation }) => ({
      title: 'All Post',
      headerLeft: <HeaderIcon navigationProps={navigation} />,
      headerStyle: css.headerStyle,
      headerRight: <RightIcon />,
      headerTintColor: config.HEADER_TINT_COLOR,
    }),
  },
  Details: Details
});

module.exports = AllPostStack;
