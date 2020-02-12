import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator, AsyncStorage} from 'react-native';

export default class Logout extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		AsyncStorage.clear();
		this.props.navigation.navigate('Login2');
	}

  render() {
    return (
      <ScrollView>
          <ActivityIndicator />
      </ScrollView>
    );
  }
}