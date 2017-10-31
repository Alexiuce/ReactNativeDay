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
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

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
          <Text>登陆</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  iconStyle:{
    marginTop:100,
    width:60,
    height:60,
    alignSelf:'center',
    borderRadius:30,
  },
  inputStyle:{
    width:300,
    height:30,
    borderWidth:1,
    borderColor:'green',
    alignSelf:'center',
    marginTop:5,
  },
  loginStyle:{
    borderRadius: 5,
    backgroundColor:"#00ffff",
    height:40,
    width:100,
    alignSelf:'center'
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
    alignItems:'center'

  },
  otherImageStyle:{
    width: 40,
    height:40,
    marginLeft:15,
  },
});

