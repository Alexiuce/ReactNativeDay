
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});



var Dimensions = require('Dimensions');

var ScreenWidth = Dimensions.get('window').width;

export default class HomeView extends Component<{}> {
  render() {
    return (
        <ScrollView style={style.scrollStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
        >
          {this.setupUI()}
        </ScrollView>
    );
  }


  setupUI() {
    var views = [];
    var viewColors = ["red", "yellow", "green", "blue", "#007979"];
    for (var i = 0; i < viewColors.length; i++) {
      views.push(
          <View key={i} style={{backgroundColor:viewColors[i],width:ScreenWidth,height:100}}>
            <Text>{viewColors[i]}</Text>
          </View>
      );
    }

    return views;
  }
}

const style = StyleSheet.create({
  scrollStyle:{
   marginTop:64,
   backgroundColor:'gray',
   height:90,
  },
  subViewStyle:{
    width:ScreenWidth,
    height:100,
  },

});