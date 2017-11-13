import React, {Component} from 'react'

import {
  View,
  Platform,
  Text,
  StyleSheet,

} from 'react-native'


const  BaseURL = "http://httpbin.org/"



export  default class  Home extends Component<{}>{


  constructor(props){
    super(props)

  }


  render(){
    return(
        <View style={styel.containerStyle}>
          <Text>Home</Text>
        </View>
    );
  }



  // 组件加载
  componentDidMount() {

    // 请求网络数据
    this.fetchHttpData()

  }

  // 网络请求方法
  fetchHttpData(){

    fetch(BaseURL + 'get')
        .then((response)=>{
           // 请求响应数据
          console.log(response)
        })
        .catch((error)=>{
          // 请求失败处理
        })
  }

}


const styel = StyleSheet.create({
  containerStyle:{
    flex: 1,
    backgroundColor:"red",
  },
});