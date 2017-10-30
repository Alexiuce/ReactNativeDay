/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


/* 加载项目的json数据*/

var jsonData = require('./resource/Json/data.json');

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var col = 3;
var ItemWidth = 100;
var hMargin = (width - ItemWidth * col) / (col + 1);

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
          
          {this.renderAllIconView()}
      </View>
    );
  }
   /* 创建所需的视图  */
  renderAllIconView(){
      // 1. 创建数组
      var dataObjs = [];
      // 图片数组
      var images =[require('./resource/Image/icon0.png'),require('./resource/Image/icon1.png'),
          require('./resource/Image/icon2.png'),require('./resource/Image/icon3.png'),
          require('./resource/Image/icon4.png'),require('./resource/Image/icon5.png')
      ];
      // 2. 遍历数据, 创建view后, 添加到数组中
      for (var i = 0; i < jsonData.data.length;i++){
          // 获取视图数据
          var data = jsonData.data[i];
          // 添加到数组中
          dataObjs.push(
              <View key={i} style={styles.iconViewStyle}>
                   <Image source={images[i]} style={styles.picStyle}/>
              <Text style={styles.nameStyle}>
                  {data.title}
              </Text>
              </View>
              
        );
      }
      return dataObjs;
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#F5FCFF',
      flexWrap:'wrap'
  },
    /* 单个视图样式 */
    iconViewStyle:{
      backgroundColor:'#999999',
     marginTop:30,
        marginLeft:hMargin,
      width:ItemWidth,
      height:ItemWidth,
      alignItems:'center'
    },
    /* 图片样式*/
    picStyle:{
        marginTop:3,
        width:70,
        height:70

    },
    /* 名称样式*/
    nameStyle:{
        marginTop:7

    },

});
