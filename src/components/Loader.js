import React, {Component} from 'react';
import {Platform, Text, View, ScrollView, Image, Modal, ActivityIndicator, StatusBar} from 'react-native';
import css from '../css/style.js';
import { Icon, Overlay } from 'react-native-elements';
import config from 'react-native-config';

export default class Loader extends Component {
	constructor(props) {
		super(props)
	}

  	render() {
  		return(
  		<View>
	      	<Modal 
	      		isVisible={this.props.show}
	      		animationType="slide"
	      		transparent={true}
	      		>
	      	  	<View style={css.loader}>
	      	  		<ActivityIndicator size="large" color={config.APP_PRIMARY_COLOR} />
	      	  	</View>
	      	</Modal>
	    </View>
	   )
	}
}
