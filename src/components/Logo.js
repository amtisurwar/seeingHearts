import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import css from '../css/style.js';

export default class Logo extends Component {
  render() {
    return (
        <View style={css.LoginLogoContainer}>
            <Image
              source={require('../assets/img/logo.png')}
              style={css.LoginLogoStyle}
              resizeMode='contain'
            />
        </View>
    );
  }
}

