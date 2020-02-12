import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import css from '../css/style.js';
import { Input, Icon, Button, Avatar } from 'react-native-elements';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import config from 'react-native-config';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Picture',
  mediaType: 'photo',
  cameraType: 'back',
  storageOptions: {
    skipBackup: true,
  },
};



export default class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            avatarSource: require('../assets/img/upload2.png'),
            title: '',
            description: '',
            error:[],
        }
    }

    UploadPost() {
        console.log(this.state);
    }

    UploadPicture() {
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };

            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
              avatarSource: source,
            });
          }
        });
    }

  render() {
    return (
      <ScrollView style={css.container}>
		<Logo />
          <View>
          	<View style={css.uploadHeader}>
          		<Text style={css.uploadHeading}>Upload a Heart Post</Text>
          	</View>
          	<Avatar
          	  size="xlarge"
          	  source={this.state.avatarSource}
              imageProps={{resizeMode: 'cover'}}
          	  showEditButton
              rounded
          	  containerStyle={css.avatar}
              avatarStyle={css.avatarStyle}
              onEditPress={() => this.UploadPicture()}
          	/>
          	<View style={css.UploadBody}>
  	            <View style={css.UploadBodyContent}>
  	              	<View style={css.inputMainContainer}>
        		        <Input
        		          placeholder='Title'
                          value={this.state.title}
                          onChangeText={(text) => this.setState({'title': text})}
        		          errorMessage=''
        		          inputContainerStyle={css.inputContainer}
        		          leftIconContainerStyle={css.leftIconContainerStyle}
        		          leftIcon={
        		            <Icon
        		              name='pencil-square-o'
        		              type='font-awesome'
        		              size={24}
        		              color={config.APP_PRIMARY_COLOR}
        		            />
        		          }
        		        />
  					</View>
  					<View style={[css.inputMainContainer,css.textArea]}>
        		        <Input
        		          placeholder='Description'
                          value={this.state.description}
                          onChangeText={(text) => this.setState({'description': text})}
        		          errorMessage=''
        		          multiline={true}
        		          numberOfLines = {8}
        		          inputContainerStyle={[css.inputContainer,css.textArea]}
        		          leftIconContainerStyle={css.leftIconContainerStyle}
        		          leftIcon={
        		            <Icon
        		              name='commenting-o'
        		              type='font-awesome'
        		              size={24}
        		              color={config.APP_PRIMARY_COLOR}
        		            />
        		          }
        		        />
  					</View>
  					<Button
  					  title="UPLOAD"
  					  containerStyle={css.buttonContainerStyle}
  					  buttonStyle={css.buttonStyle}
  					  icon={
                          <Icon
                            name="upload"
                            size={16}
                            type='font-awesome'
                            containerStyle={css.buttonIconStyle}
                            color={config.HEADER_TINT_COLOR}
                          />
                        }
                        onPress={() => this.UploadPost()}
  					/>
  	            </View>
  	        </View>
          </View>
          <Footer />
      </ScrollView>
    );
  }
}
