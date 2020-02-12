import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View, ScrollView, Linking} from 'react-native';
import DashboardStack from '../components/stacks/DashboardStack';
import config from 'react-native-config';
import css from '../css/style.js';
import Footer from '../components/Footer';

import {
  createAppContainer,
  createDrawerNavigator,
  NavigationActions,
  DrawerItems,
  SafeAreaView
} from 'react-navigation';
import AllPostStack from '../components/stacks/AllPostStack';
import BoldtPostStack from '../components/stacks/BoldtPostStack';
import OtherPostStack from '../components/stacks/OtherPostStack';
import MyPostStack from '../components/stacks/MyPostStack';

import Logout from '../pages/Logout';
import AboutUs from '../pages/AboutUs';
import { Icon } from 'react-native-elements';
import DrawerView from '../components/DrawerView';

const DashboardDrawerNavigator = createDrawerNavigator({
  Dash: {
    screen: DashboardStack,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (<Icon name="home" type='font-awesome' color={tintColor} size={22} />),
    },
  },
  AllPostStack: {
    screen: AllPostStack,
    navigationOptions: {
      drawerLabel: 'All Hearts Gallery',
      drawerIcon: ({ tintColor }) => (<Icon name="heart" type='font-awesome' color={tintColor} size={22} />),
    },
  },
  BoldtPostStack: {
    screen: BoldtPostStack,
    navigationOptions: {
      drawerLabel: "      BOLDT.'s Hearts Posts",
      drawerIcon: ({ tintColor }) => (<Icon name="heart-o" type='font-awesome' color={tintColor} size={22} />),
    },
  },
  OtherPostStack: {
    screen: OtherPostStack,
    navigationOptions: {
      drawerLabel: "      Other's Hearts Posts",
      drawerIcon: ({ tintColor }) => (<Icon name="heart-o" type='font-awesome' color={tintColor} size={22} />),
    },
  },
  MyPostStack: {
    screen: MyPostStack,
    navigationOptions: {
      drawerLabel: '      My Hearts Posts',
      drawerIcon: ({ tintColor }) => (<Icon name="heart-o" type='font-awesome' color={tintColor} size={22} />),
    },
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      drawerLabel: 'About Seeing Hearts',
      drawerIcon: ({ tintColor }) => (<Icon name="info-circle" type='font-awesome' color={tintColor} size={22} />),
    },
  },
  
},{
  drawerBackgroundColor: config.APP_PRIMARY_COLOR,
  drawerWidth: Dimensions.get('window').width - 80,
  contentOptions: {
    activeTintColor: config.TEXT_COLOR,
    inactiveTintColor: config.TEXT_COLOR,
    activeBackgroundColor: config.NAVIGATION_COLOR,
    labelStyle: {
      fontSize:16,
    },
    itemStyle: css.drawerItemStyle,
  },
  contentComponent: props => <CustomDrawer {...props} />
});

const CustomDrawer = props => (
  <ScrollView>
    <View>
        <DrawerView />
        <DrawerItems {...props} />
    </View>
  </ScrollView>
);

export default createAppContainer(DashboardDrawerNavigator);