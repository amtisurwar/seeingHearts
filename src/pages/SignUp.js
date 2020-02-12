import React, {Component} from 'react';
import css from '../css/style';
import Logo from '../components/Logo';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Input, Icon, Button, SocialIcon } from 'react-native-elements';
import Sign_up from './SignUp2';
import Footer from '../components/Footer';

export default class SignUp extends Component {

	constructor(props) {
	    super(props)
	}

    render() {
        return (
          <ScrollView style={css.container}>
                <View style={css.wrapper}>
              		<Logo />
              		<Sign_up />
          	    </View>
                <Footer />
          </ScrollView>
        );
  }
}

