import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, ActivityIndicator, Linking} from 'react-native';

export default class AboutUs extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		Linking.openURL('http://www.seeinghearts.com/about');
		this.props.navigation.navigate('Dash');
	}

  render() {
    return (
      <ScrollView>
          <ActivityIndicator />
      </ScrollView>
    );
  }
}