import React, {Component} from 'react';
import css from '../css/style.js';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Heading from './Heading';
import { withNavigation } from 'react-navigation';

class Gallery extends Component {
  	constructor(props) {
  		super(props)
  		this.state = {
  			orientationStatus : '',
        	screenHeight: 0,
        	screenWidth : 0,
        	numColumns: 2,
  		}
	}
	componentDidMount() {
		// this._onLayout();
	}

	// _onLayout(event){
	// 	const { width, height } = event.nativeEvent.layout; //somewhat similar object
		
	// 	const orientation = (width > height) ? 'LANDSCAPE' : 'PORTRAIT';
		
		
	// 	console.log("width: ",width,"height: ",height);
	// 	console.log("orientation: ",orientation);
	// }
	// <View style={css.galleryContainer} onLayout={this._onLayout}>
	render() {
    	return (
    	<ScrollView>
    		<Heading title={this.props.title} subTitle={this.props.subTitle} />
	        <View style={css.galleryContainer}>
	          <FlatList
	            data={this.props.dataSource}
	            renderItem={({ item }) => (
	              <View style={css.gallerySpecificImage}>
	              	<TouchableOpacity onPress={() => this.props.navigation.navigate('Details',{item: item})}>
	                	<Image style={css.imageThumbnail} source={{ uri: item.image_url_large_thumbnail }} />
	                </TouchableOpacity>
	              </View>
	            )}
	            key={this.state.numColumns}
	            numColumns={this.state.numColumns}
	            keyExtractor={(item, index) => item.ID}
	          />
	       </View>
	    </ScrollView>
    );
  }
}

export default withNavigation(Gallery);