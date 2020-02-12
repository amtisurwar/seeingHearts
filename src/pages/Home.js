import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import css from '../css/style.js';


export default class Home extends Component {
  render() {
    return (
      <ScrollView style={css.container}>
          <View style={css.wrapper}>
          	<Text style={{color:'red'}}>Hi Home11 !!!</Text>
          </View>
      </ScrollView>
    );
  }
}

