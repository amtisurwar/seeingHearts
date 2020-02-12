import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import config from 'react-native-config';

export default class BarIcon extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  redirectHome = () => {
    this.props.navigationProps.push('Auth');
  }
  render() {
    if(this.props.notify) {
      return(
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.redirectHome.bind(this)}>
              <Icon
                reverse
                name='home'
                type='font-awesome'
                color={config.APP_PRIMARY_COLOR}
              />
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
              <Icon
                reverse
                name='bars'
                type='font-awesome'
                color={config.APP_PRIMARY_COLOR}
              />
          </TouchableOpacity>
        </View>
      );      
    }
  }
}
