import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import css from '../css/style.js';
import { Input, Icon, Button, Avatar } from 'react-native-elements';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-community/async-storage';
import DashboardItem from '../components/DashboardItem';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName : '',
        }
    }

    async componentDidMount() {
        var profile = JSON.parse(await AsyncStorage.getItem('profile'));
        this.setState({displayName:profile.display_name})
    }
  render() {
    return (
      <ScrollView style={css.container}>
          <Logo />
            <View style={css.overflow}>
                  <View style={css.buttonContainerStyle}>
                        <DashboardItem key="0" stackurl="AllPostStack" text='All Hearts Gallery' />
                        <DashboardItem key="1" stackurl="BoldtPostStack" text="BOLDT.'s Hearts Posts" />

                  </View>
                  <View style={css.buttonContainerStyle}>
                      <DashboardItem key="2" stackurl="OtherPostStack" text="Other's Hearts Posts" />
                      <DashboardItem key="3" stackurl="MyPostStack" text="My Hearts Posts" />
                  </View>
            </View>
      	     <View style={{marginTop:50}}>
                <Footer />
             </View>
      </ScrollView>
    );
  }
}