import React, {Component} from 'react';
import css from '../css/style.js';
import config from 'react-native-config';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Loader from '../components/Loader';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';

export default class SearchPostResult extends Component {
	constructor() {
	    super();
	    this.state = {
	      dataSource: {},
	      loader: false,
	    };
	}

	async componentDidMount() {
		this.getData();
	}

	async getData() {
		this.setState({
	      dataSource: this.props.posts,
	    });
	}

  	render() {
  		if(!this.state.loader) {
	  		return (
		      <ScrollView style={css.container}>
		      	  <Gallery dataSource={this.state.dataSource} title="Search Hearts Posts" subTitle='Select a Heart to read story' />
		      	  <Footer />
		      </ScrollView>
		    );
  		}
  		else {
  			return(
  				<Loader show={true} />
  			)
  		}
  	}
}