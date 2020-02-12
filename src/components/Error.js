import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import css from '../css/style.js';
import { Badge } from 'react-native-elements';

export default class Error extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={css.errorContainer}>
         <Text style={css.errorText}>{this.props.errormsg}</Text>
        </View>
    );
  }
}

