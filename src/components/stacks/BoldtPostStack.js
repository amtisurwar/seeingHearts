import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import HeaderIcon from '../header/BarIcon';
import config from 'react-native-config';
import css from '../../css/style';
import BoldtPost from '../../pages/BoldtPost';
import Details from '../../pages/Details';
import RightIcon from '../RightIcon';

const BoldtPostStack = createStackNavigator({
  All: {
    screen: BoldtPost,
    navigationOptions: ({ navigation }) => ({
      title: "Boldt.'s Posts",
      headerLeft: <HeaderIcon navigationProps={navigation} />,
      headerRight: <RightIcon />,
      headerStyle: css.headerStyle,
      headerTintColor: config.HEADER_TINT_COLOR,
    }),
  },
  Details: Details
});

module.exports = BoldtPostStack;
