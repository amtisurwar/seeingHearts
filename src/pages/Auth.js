import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator, StatusBar} from 'react-native';
import css from '../css/style';
import AsyncStorage from '@react-native-community/async-storage';
// import Notification from '../Notification';
import config from 'react-native-config';
import Loader from '../components/Loader';

export default class Auth extends Component {
	constructor(props) {
	   super(props);
	}
	componentDidMount() {
	   this._bootstrapAsync();
	}

	_bootstrapAsync = async () => {
		const userToken = await AsyncStorage.getItem('userToken');
	   	this.props.navigation.navigate(userToken ? 'Dashboard' : 'Login2');
	};

  	render() {
    	return(
    		<View>
    			<StatusBar backgroundColor={config.STATUS_BAR_COLOR} barStyle="light-content" />
    			<ActivityIndicator />
    		</View>
    	)
  	}
}

