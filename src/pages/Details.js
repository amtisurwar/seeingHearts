import React, {Component} from 'react';
import DetailView from '../components/DetailView';
import {
  ScrollView,
  Text,
} from 'react-native';
import css from '../css/style.js';

export default class Details extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
          title: params.item.post_title ? params.item.post_title: 'Posts',
        }
    };
	constructor(props) {
	    super(props)
	}

  	render() {
        const {item} = this.props.navigation.state.params;
        
        return (
	      <ScrollView style={css.container}>
	           <DetailView item={item} />
	      </ScrollView>
	    );
  }
}