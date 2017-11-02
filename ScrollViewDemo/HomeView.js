
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
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
    var myTimer = null;
   this.state = {currentPage: 0};
  }

  render() {
    return (
        <View style={style.homeStyle}>
          {/* scrollView*/}
          <ScrollView ref="scrollview" style={style.scrollStyle}
                    // 设置水平滚动
                    horizontal={true}
                    // 隐藏水平指示器
                    showsHorizontalScrollIndicator={false}
                    // 设置分页效果
                    pagingEnabled={true}
                    onMomentumScrollEnd={(s)=>this.momentScrollEnd(s)}
                      onScrollBeginDrag={()=>this.beginDrag()}
                      onScrollEndDrag={()=>this.endDrag()}

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

  // 生命周期方法: 组件已经加载后的逻辑处理,常常在这里进行网络请求等复杂的操作
  componentDidMount() {


    this.startTimer();
  }

  // 开启定时器
  startTimer(){
   // 获取scrollView
    var sv = this.refs.scrollview;
   // 添加定时器

    var page = 0;

    this.myTimer = setInterval(()=>{

      if (this.state.currentPage + 1 >= 5){
        page = 0;
      }else {
        page = this.state.currentPage + 1;
      }
     // 刷新圆点状态
      this.setState({
        currentPage: page
      })
     // 滚动scroolview

      var offX = page * ScreenWidth;
      sv.scrollResponderScrollTo({x:offX});

    },1000);


  }

  beginDrag(){
    clearTimeout(this.myTimer)
  }
  endDrag(){

    this.startTimer()
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
  momentScrollEnd(s){
    // 获取x方向偏移
    var offX = s.nativeEvent.contentOffset.x;
    // 计算页码
    var pageIndex = Math.floor(offX / ScreenWidth);

    this.setState({
      currentPage:pageIndex
    });
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