import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import HeaderIcon from '../header/BarIcon';
import config from 'react-native-config';
import Search from '../../pages/Search';
import SearchPostResult from '../../pages/SearchPostResult';
import css from '../../css/style';

const SearchStack = createStackNavigator({
  SearchPost: {
      screen: Search,
      navigationOptions: ({ navigation }) => ({
        header: null,
      })
  },
  SearchPostResult: {
    screen: SearchPostResult,
    navigationOptions: ({ navigation }) => ({
      title: 'Search Hearts Posts',
    })
  },
});

module.exports = SearchStack;