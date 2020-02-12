import React, {Component} from 'react';
import css from '../css/style';
import Logo from '../components/Logo';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Sign_in from './SignIn2';
import Footer from '../components/Footer';

export default class SignIn extends Component {

	constructor(props) {
	    super(props)
	}

  render() {
    return (
        <ScrollView style={css.container}>
            <View style={css.wrapper}>
          		<Logo />
                <Sign_in />
            </View>
            <Footer />
      </ScrollView>
    );
  }
}

