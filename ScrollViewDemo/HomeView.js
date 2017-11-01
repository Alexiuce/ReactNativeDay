
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});



var Dimensions = require('Dimensions');

var ScreenWidth = Dimensions.get('window').width;

// 添加定时器
var TimerMixin = require('react-timer-mixin');


var picData = require('./ImageData.json');
var picHeight = 150;

export default class HomeView extends Component<{}> {

  // 注册定时器
  mixins: [TimerMixin]

  render() {
    return (
        <View style={style.homeStyle}>
        <ScrollView style={style.scrollStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
        >
          {this.setupUI()}
        </ScrollView>
        </View>
    );
  }


  setupUI() {
    var views = [];
    var viewColors = ["red", "yellow", "green", "blue", "#007979"];
    var picRequirs = [require('./img/img_01.png'),require('./img/img_02.png'),require('./img/img_03.png'),require('./img/img_04.png'),require('./img/img_05.png')];
    for (var i = 0; i < viewColors.length; i++) {
      views.push(
          <View key={i} style={[style.subViewStyle,{ backgroundColor:viewColors[i]}]}>
            <Text>{"./img/img_0"+(i+1)+".png"}</Text>
            <Image source={picRequirs[i]} style={style.imgStyle}/>
          </View>
      );
    }

    return views;
  }
}

const style = StyleSheet.create({
  homeStyle:{
    flex:1,
    backgroundColor:'gray',
  },
  scrollStyle:{
   marginTop:64,
   backgroundColor:'white',
   // height:90,
  },
  subViewStyle:{
    width:ScreenWidth,
    height:picHeight,
  },
  imgStyle:{
    width:ScreenWidth,
    height:120,
  },

});