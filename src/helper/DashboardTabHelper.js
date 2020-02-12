import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Upload from '../pages/Upload';
import SearchStack from '../components/stacks/SearchStack';
import Dashboard from '../pages/Dashboard';
import {Icon} from 'react-native-elements';
import config from 'react-native-config';

const TabNavigator = createBottomTabNavigator({
  Dashboard: Dashboard,
  Search: SearchStack,
  Upload: Upload,
},{
	defaultNavigationOptions: ({ navigation }) => ({
	    tabBarIcon: ({ focused, horizontal, tintColor }) => {
	       const { routeName } = navigation.state;
	       let iconName;
	       if (routeName === 'Dashboard') {
	         iconName = 'home';
	       } else if (routeName === 'Search') {
	         iconName = 'search';
	       }
	       else if (routeName === 'Upload') {
	         iconName = 'upload';
	       }
			return <Icon type='font-awesome' name={iconName} size={25} color={tintColor} />;
	    },
	}),
	initialRouteName:'Dashboard',
	tabBarOptions: {
	    activeTintColor: config.HEADER_TINT_COLOR,
	    activeBackgroundColor:config.APP_PRIMARY_COLOR,
	    inactiveBackgroundColor:'#ccf0fb',
	    style: {
	    	borderTopWidth:0,
	    },

	},
});

module.exports = createAppContainer(TabNavigator);