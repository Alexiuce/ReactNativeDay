import React, {Component} from 'react'

import {
  View,
  Platform,
  Text,
  StyleSheet,
} from 'react-native'


export  default class  Home extends Component<{}>{

  render(){
    return(
        <View style={styel.containerStyle}>
          <Text>Home</Text>
        </View>
    );
  }
}


const styel = StyleSheet.create({
  containerStyle:{
    flex: 1,
    backgroundColor:"red",
  },
});