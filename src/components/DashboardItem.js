import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import css from '../css/style.js';
import { Icon } from 'react-native-elements';
import config from 'react-native-config';
import { withNavigation } from 'react-navigation';

class DashboardItem extends Component {
  render() {
    return (
        <View style={[css.dashboardList,css.wrapper]}>
        	<TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.stackurl)}>
	            <Icon
	                size={60}
	                color={config.TEXT_COLOR}
	                name='heart'
	                type='font-awesome'
	              />
	            <Text style={css.dashboardListText}>{this.props.text}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

export default withNavigation(DashboardItem);