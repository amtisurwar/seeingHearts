import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import HeaderIcon from '../header/BarIcon';
import config from 'react-native-config';
import css from '../../css/style';
import MyPost from '../../pages/MyPost';
import Details from '../../pages/Details';
import RightIcon from '../RightIcon';

const MyPostStack = createStackNavigator({
  All: {
    screen: MyPost,
    navigationOptions: ({ navigation }) => ({
      title: "My Posts",
      headerLeft: <HeaderIcon navigationProps={navigation} />,
      headerRight: <RightIcon />,
      headerStyle: css.headerStyle,
      headerTintColor: config.HEADER_TINT_COLOR,
    }),
  },
  Details: Details
});

module.exports = MyPostStack;
