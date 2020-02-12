import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import css from '../css/style';

import SignIn from './SignIn2';
import SignUp from './SignUp2';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { Input, Icon, Button, SocialIcon, ButtonGroup, Card } from 'react-native-elements';

export default class Login2 extends Component {
	constructor () {
	  super()
	  this.state = {
	    selectedIndex: 0
	  }
	  this.updateIndex = this.updateIndex.bind(this)
	}

	updateIndex (selectedIndex) {
	  this.setState({selectedIndex})
	}

	getLoginForm() {
		return(
			<View>
				<View style={[css.loginPointer,css.circlePointer]}></View>
				<View style={css.loginCardStyle}>
			    	<SignIn />
				</View>
			</View>
		)
	}

	getRegisterForm() {
		return(
			<View>
				<View style={[css.registerPointer,css.circlePointer]}></View>
				<View style={css.loginCardStyle}>
					<SignUp />
				</View>
			</View>
		)
	}

  	render() {
  		const buttons = ['LOG IN', 'REGISTER'];
  		const { selectedIndex } = this.state;
  		const form = selectedIndex == 0 ? this.getLoginForm() : this.getRegisterForm();
  		
	    return (
			<ScrollView style={css.container}>
				<View style={css.wrapper}>
					<Logo />
					<ButtonGroup
				      onPress={this.updateIndex}
				      selectedIndex={selectedIndex}
				      buttons={buttons}
				      containerStyle={css.btnGroupContainer}
				      selectedButtonStyle={css.btnGroupSelectedButton}
				      buttonStyle={css.btnGroupButton}
				      innerBorderStyle={css.btnGroupInnerBorder}

				    />
					<ScrollView>
						{form}
					</ScrollView>
				</View>
				<Footer />
			</ScrollView>
		);
  }
}

