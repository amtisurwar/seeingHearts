import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import css from '../css/style.js';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import config from 'react-native-config';

class RightIcon extends Component {
  render() {
    return (
        <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Dash')}>
                <Icon
                    color={config.TEXT_COLOR}
                    name='home'
                    type='font-awesome'
                    containerStyle={{marginRight:10}}
                  />
              </TouchableOpacity>
        </View>
    );
  }
}

export default withNavigation(RightIcon);