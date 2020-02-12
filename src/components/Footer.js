import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import css from '../css/style.js';

export default class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
        <View style={css.footer}>
            <Text style={css.footertext}>&copy; BOLDT. 2013 - {year}</Text>
        </View>
    );
  }
}

