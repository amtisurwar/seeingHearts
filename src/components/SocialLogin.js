import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import css from '../css/style.js';
import { Icon, Button, SocialIcon } from 'react-native-elements';

export default class SocialLogin extends Component {
  render() {
    return (
        <View style={css.socialWrapper}>
          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
          />
          <SocialIcon
            title='Sign In With Google'
            button
            type='google-plus-official'
          />
        </View>
    );
  }
}

