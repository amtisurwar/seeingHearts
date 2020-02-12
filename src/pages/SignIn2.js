import React, {Component} from 'react';
import css from '../css/style';
import Logo from '../components/Logo';
import Social from '../components/SocialLogin';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { Input, Icon, Button, SocialIcon } from 'react-native-elements';
import API from '../api/Api';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

class SignIn2 extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      email   : '',
	      password: '',
          error: '',
	    }
	}

	Login = async() => {
        var response = await new API('Login',{"email":this.state.email,"password":this.state.password}).getResponse();
        try {
            if(response.states == 200) {
                await AsyncStorage.setItem("userToken",response.token);
                await AsyncStorage.setItem("profile",response.profile);
                this.props.navigation.navigate('Dashboard');
            }
            else {
                throw response.message;
            }
        } catch(exception) {
            this.setState({error:exception});
        }
	 }

  render() {
    return (
      <ScrollView>
          <View style={css.wrapper}>
          		<View style={css.inputMainContainer}>
      		        <Input
      		          placeholder='Email'
      		          errorMessage={this.state.error}
                      value={this.state.email}
                      onChangeText={(text) => this.setState({'email': text})}
      		          inputContainerStyle={css.inputContainer}
      		          leftIconContainerStyle={css.leftIconContainerStyle}
      		          leftIcon={
      		            <Icon
      		              name='user-circle-o'
      		              type='font-awesome'
      		              size={24}
      		              color='#00b5ec'
      		            />
      		          }
      		        />
				</View>
				<View style={css.inputMainContainer}>
      		        <Input
      		          placeholder='Password'
      		          errorMessage=''
                      value={this.state.password}
                      onChangeText={(text) => this.setState({'password': text})}
      		          inputContainerStyle={css.inputContainer}
      		          leftIconContainerStyle={css.leftIconContainerStyle}
      		          secureTextEntry={true}
      		          leftIcon={
      		            <Icon
      		              name='lock'
      		              type='font-awesome'
      		              size={24}
      		              color='#00b5ec'
      		            />
      		          }
      		        />
				</View>
      		    <Button
      		      title="LOG IN"
      		      containerStyle={css.buttonContainerStyle}
      		      buttonStyle={css.buttonStyle}
      		      onPress={() => this.Login()}
      		    />
          </View>
      </ScrollView>
    );
  }
}

export default withNavigation(SignIn2);