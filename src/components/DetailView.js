import React, {Component} from 'react';
import css from '../css/style.js';
import Footer from './Footer';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import { Icon, Button, SocialIcon, Card } from 'react-native-elements';
import config from 'react-native-config';
import HTML from 'react-native-render-html';


export default class DetailView extends Component {
    render(){
        var item = this.props.item;
        var htmlContent = item.post_content;
        console.log(htmlContent);
        return(
            <Card
              title={item.post_title.toUpperCase()}
              titleStyle={css.cardTitle}
              >
              <Image resizeMode="cover" style={{height:300}} source={{ uri: item.image_url_large }} />
               <ScrollView style={{ flex: 1 }}>
                   <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
               </ScrollView>
              <Button
                icon={<Icon name='share-alt' type='font-awesome' containerStyle={css.buttonIconStyle} color={config.HEADER_TINT_COLOR} />}
                buttonStyle={css.shareButtonStyle}
                title='SHARE' />
              <Button
                title={"Posted on: "+item.post_date}
                type="clear"
                titleStyle={css.postedButton}
                containerStyle={css.postedButtonStyle}
                icon={
                    <Icon
                      name="calendar"
                      type="font-awesome"
                      size={15}
                      iconStyle={[css.buttonIconStyle,css.cardTitle]}
                    />
                    }
                />
            </Card>
        )
    }
}