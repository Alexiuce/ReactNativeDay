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
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window')

export default class LoginView extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          {/* 头像*/}
          <Image source={require('./img/icon.png')} style={styles.iconStyle}/>
          {/* 用户名和密码*/}
          <TextInput style={styles.inputStyle}
                     placeholder="请输入账号"
          />
          <TextInput style={styles.inputStyle}
                     placeholder="密码"
          />
          {/*登陆*/}
          <TouchableOpacity activeOpacity={0.5} onPressIn={()=>this.clickLogin()}>
          <View style={styles.loginStyle} >
            <Text>登陆</Text>
          </View>
        </TouchableOpacity>
          {/* 设置*/}
          <View style={styles.settingViewStyle}>
            <Text>忘记密码</Text>
            <Text>注册用户</Text>
          </View>
          {/* 其他登陆*/}
          <View style={styles.otherViewStyle}>
            <Text>其他登陆方式123:</Text>
            <Image source={require('./img/icon3.png')} style={styles.otherImageStyle}/>
            <Image source={require('./img/icon7.png')}style={styles.otherImageStyle}/>
            <Image source={require('./img/icon8.png')}style={styles.otherImageStyle}/>
          </View>
        </View>
    );
  }

  clickLogin(){
    Alert.alert("title1","message1")
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999999',
  },
  iconStyle:{
    marginTop:100,
    marginBottom:30,
    width:60,
    height:60,
    alignSelf:'center',
    borderRadius:30,
  },
  inputStyle:{
    width:width,
    height:30,
    backgroundColor:'white',
    marginTop:1,
    textAlign:"center"
  },
  loginStyle:{
    marginTop:15,
    marginLeft:15,
    borderRadius: 5,
    backgroundColor:"#00ffff",
    height:40,
    width:width - 30,
    justifyContent:'center',
    alignItems:'center',
  },
  settingViewStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:15,
    marginLeft:15,
    marginRight:15,
  },
  otherViewStyle:{
    flexDirection:'row',
    alignItems:'center',
    position: "absolute",
    bottom:30,
    left:15,

  },
  otherImageStyle:{
    width: 40,
    height:40,
    borderRadius:20,
    marginLeft:15,

  },
});

