import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import css from '../css/style.js';
import DetailView from '../components/DetailView';

export default class NotificationPage extends Component {	
	static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state;
		var item = [];
		if(params.data) {
			var data = params.data;
			item = JSON.parse(data.item);
		}
	    return {
	      title: item.post_title ? item.post_title : 'Posts',
	    }
	};
	constructor(props) {
	    super(props);
	    this.state = {
	      items: {}
	    }
	}

  	render() {
		const params  = this.props.navigation.state.params;
		var item = [];
		if(params.data) {
			var data = params.data;
			item = JSON.parse(data.item);
		}
  		return (
		      <ScrollView style={css.container}>
		    	<DetailView item={item} />
		      </ScrollView>
		    );
  	}
}

