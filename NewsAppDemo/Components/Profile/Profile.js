import React, {Component} from 'react'

import {
  View,
  Platform,
  Text,
  StyleSheet,
} from 'react-native'


export  default class  Profile extends Component<{}>{

  render(){
    return(
        <View style={styel.containerStyle}>
          <Text>Profile</Text>
        </View>
    );
  }
}


const styel = StyleSheet.create({
  containerStyle:{
    flex: 1,
    backgroundColor:"yellow",
  },
});