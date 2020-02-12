import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import css from '../css/style';

const TabScreen = createMaterialTopTabNavigator(
  {
    SignIn: 
    { 
        screen: SignIn, 
        navigationOptions:{
            tabBarLabel: 'Log In'
        },
    },
    SignUp: 
    { 
        screen: SignUp, 
        navigationOptions:{
            tabBarLabel: 'Register'
        },
    },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: css.MaterialTopTabNavigatorStyle,
      labelStyle: css.MaterialTopTabNavigatorLabelStyle,
      indicatorStyle: css.MaterialTopTabNavigatorIndicatorStyle,
    },
  }
);
const TabHelper = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: null,
    },
  },
});
export default createAppContainer(TabHelper);