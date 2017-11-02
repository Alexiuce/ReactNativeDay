
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

  // 初始化方法
  constructor(props){
   super(props);
   this.state = {currentPage: 0};
  }

  render() {
    return (
        <View style={style.homeStyle}>
          {/* scrollView*/}
          <ScrollView style={style.scrollStyle}
                    // 设置水平滚动
                    horizontal={true}
                    // 隐藏水平指示器
                    showsHorizontalScrollIndicator={false}
                    // 设置分页效果
                    pagingEnabled={true}
        >
          {this.setupUI()}
        </ScrollView>
          {/* 圆点视图 */}
          <View style={style.pageViewStyle}>
            {this.setupPageCircleView()}
          </View>
        </View>
    );
  }

// 设置滚动子视图
  setupUI() {
    var views = [];
    var picRequirs = [require('./img/img_01.png'),require('./img/img_02.png'),require('./img/img_03.png'),require('./img/img_04.png'),require('./img/img_05.png')];
    for (var i = 0; i < picRequirs.length; i++) {
      views.push(
          <View key={i} style={[style.subViewStyle]}>
            <Image source={picRequirs[i]} style={style.imgStyle}/>
          </View>
      );
    }

    return views;
  }
  // 设置圆点指示视图
  setupPageCircleView(){
    var circleViews = [];
    for(var i = 0; i < 5; i++){
      var circleColor = (i == this.state.currentPage)? "black":"white";
          circleViews.push(
          <View key={i} style={[style.circleStyle,{backgroundColor:circleColor}]}>
          </View>
      );
    }
    return circleViews;
  }
}

const style = StyleSheet.create({
  homeStyle:{
    marginTop:64,
    backgroundColor:'gray',
  },
  scrollStyle:{
   // marginTop:64,
   backgroundColor:'white',
  },
  subViewStyle:{
    width:ScreenWidth,
    height:picHeight,
  },
  imgStyle:{
    width:ScreenWidth,
    height:picHeight,
  },
  pageViewStyle:{
    width:ScreenWidth,
    height:20,
    position:"absolute",
    bottom:0,
    backgroundColor:'rgba(0,0,0,0.3)',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  circleStyle:{
    width:8,
    height:8,
    borderRadius:4,
    marginLeft:5,
  },

});