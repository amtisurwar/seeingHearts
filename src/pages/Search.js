import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import css from '../css/style.js';
import { Input, Icon, Button, Avatar } from 'react-native-elements';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import config from 'react-native-config';
import DatePicker from 'react-native-datepicker'
import Heading from '../components/Heading';
import API from '../api/Api';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            keyword: '',
        }
    }

    async SearchPost() {
        var response = await new API('SearchPosts',{"limit":50,"keyword":this.state.keyword}).getResponse();
        alert(1);
        this.props.navigation.navigate('SearchPostResult',{'posts' : response.posts});
    }

  render() {
    return (
      <ScrollView style={css.container}>
		<Logo />
          <View>
          	<Heading title='Search by Posts: title, content and/or date' />
          	<View>
  	            <View style={css.UploadBodyContent}>
  	                 <View style={css.inputMainContainer}>
        		        <Input
        		          placeholder='Keyword'
                          value={this.state.keyword}
                          onChangeText={(text) => this.setState({'keyword': text})}
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
                    <DatePicker
                        style={[css.inputContainer,css.datePicker]}
                        mode="date"
                        date={this.state.date}
                        placeholder="Select Date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => {this.setState({date: date})}}
                        iconComponent={
                            <Icon 
                            size={24}
                            color={config.APP_PRIMARY_COLOR}
                            name='calendar'
                            type='font-awesome'
                            containerStyle={css.dateIcon}
                            />
                         }
                        customStyles={{
                          dateText : css.dateText,
                          dateInput: css.dateInput
                        }}
                        
                    />
                    <View style={css.dateCrossIcon}>
                        <Button
                          title="Clear Date"
                          type="clear"
                          titleStyle={css.clearText}
                          onPress={() => this.setState({"date": ''})}
                          icon={
                            <Icon
                                size={20}
                                color={config.APP_PRIMARY_COLOR}
                                name='times-circle-o'
                                type='font-awesome'
                              />
                        }
                        />
                    </View>
                    <Button
  					  title="SEARCH"
  					  containerStyle={css.buttonContainerStyle}
  					  buttonStyle={css.buttonStyle}
                      onPress={() => this.SearchPost()}
                      icon={
                          <Icon
                            name="search"
                            size={16}
                            type='font-awesome'
                            containerStyle={css.buttonIconStyle}
                            color={config.HEADER_TINT_COLOR}
                          />
                        }
  					/>
  	            </View>
  	        </View>
          </View>
          <Footer />
      </ScrollView>
    );
  }
}
