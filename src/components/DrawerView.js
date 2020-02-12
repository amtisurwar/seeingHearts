import React, { Component } from 'react';
import {withNavigation} from 'react-navigation';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon, Avatar, Button } from 'react-native-elements';
import css from '../css/style.js';
import config from 'react-native-config';
import AsyncStorage from '@react-native-community/async-storage';

class DrawerView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            initials: '',
        }
    }

    componentDidMount() {
        this.getInfo();
    }

    async getInfo() {
        let profile = JSON.parse(await AsyncStorage.getItem('profile'));
        var matches = profile.display_name.match(/\b(\w)/g);
        var initials = matches.join('');
        
        this.setState({
            name: profile.display_name,
            email: profile.user_email,
            initials: initials,
        }) 
    }

  render() {
    return (
        <View>
            <View style={css.drawerFirstContainer}>
                <View style={css.drawerInfo}>
                  <Text style={css.drawerName}>{this.state.name}</Text>
                  <Text style={css.drawerEmail}>{this.state.email}</Text>
                </View>
                <Avatar
                  size="large"
                  rounded
                  title="MK"
                  activeOpacity={0.7}
                  containerStyle={[css.avatar,{marginTop:60,right:10}]}
                  overlayContainerStyle={css.avatarStyle}
                />
            </View>
            <View style={css.drawerSignOutContainer}>
                <Button
                  title="Sign Out"
                  type="clear"
                  reverse
                  titleStyle={[css.textColor,{marginLeft:8}]}
                  onPress={() => this.props.navigation.navigate('Logout')}
                  icon={
                    <Icon
                        size={22}
                        color={config.TEXT_COLOR}
                        name='sign-out'
                        type='font-awesome'

                      />
                    }
                />
            </View>
        </View>
    
    )
  }
}

export default withNavigation(DrawerView);