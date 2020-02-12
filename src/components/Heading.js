import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import css from '../css/style.js';

export default class Heading extends Component {
  render() {
    return (
        <View style={[css.galleryHeader]}>
	      <Text style={css.galleryHeading}>{this.props.title}</Text>
	      {this.props.subTitle && <Text style={css.uploadSubHeading}>{this.props.subTitle}</Text>}
	    </View>
    );
  }
}
