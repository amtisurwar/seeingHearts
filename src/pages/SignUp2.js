import React, {Component} from 'react';
import css from '../css/style';
import Logo from '../components/Logo';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView
} from 'react-native';
import { Input, Icon, Button, SocialIcon } from 'react-native-elements';

export default class SignUp2 extends Component {

	constructor(props) {
	    super(props);
	    state = {
	      email   : '',
	      password: '',
	    }
	}

	onClickListener = (viewId) => {
	    Alert.alert("Alert", "Button pressed "+viewId);
	 }

  render() {
    return (
      <ScrollView>
          <View style={css.wrapper}>
          		<View style={css.inputMainContainer}>
                    <Input
                      placeholder='Name'
                      errorMessage=''
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
      		          placeholder='Email'
      		          errorMessage=''
      		          inputContainerStyle={css.inputContainer}
      		          leftIconContainerStyle={css.leftIconContainerStyle}
      		          leftIcon={
      		            <Icon
      		              name='envelope'
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
				<View style={css.inputMainContainer}>
      		        <Input
      		          placeholder='Confirm Password'
      		          errorMessage=''
      		          inputContainerStyle={css.inputContainer}
      		          leftIconContainerStyle={css.leftIconContainerStyle}
      		          secureTextEntry={true}
      		          leftIcon={
      		            <Icon
      		              name='key'
      		              type='font-awesome'
      		              size={24}
      		              color='#00b5ec'
      		            />
      		          }
      		        />
				</View>
      		    <Button
      		      title="REGISTER"
      		      containerStyle={css.buttonContainerStyle}
      		      buttonStyle={css.buttonStyle}
      		      onPress={() => this.onClickListener('login')}
      		    />
          </View>
      </ScrollView>
    );
  }
}

