import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import HeaderIcon from '../header/BarIcon';
import config from 'react-native-config';
import css from '../../css/style';
import OtherPost from '../../pages/OtherPost';
import Details from '../../pages/Details';
import RightIcon from '../RightIcon';

const OtherPostStack = createStackNavigator({
  All: {
    screen: OtherPost,
    navigationOptions: ({ navigation }) => ({
      title: "Other's Posts",
      headerLeft: <HeaderIcon navigationProps={navigation} />,
      headerRight: <RightIcon />,
      headerStyle: css.headerStyle,
      headerTintColor: config.HEADER_TINT_COLOR,
    }),
  },
  Details: Details
});

module.exports = OtherPostStack;
