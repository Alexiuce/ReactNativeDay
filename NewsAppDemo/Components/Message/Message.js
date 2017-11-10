import React, {Component} from 'react'

import {
  View,
  Platform,
  Text,
  StyleSheet,
} from 'react-native'


export  default class  Message extends Component<{}>{

  render(){
    return(



        <View style={styel.containerStyle}>
          <Text>Message</Text>
        </View>
    );
  }
}


const styel = StyleSheet.create({
  containerStyle:{
    flex: 1,
    backgroundColor:"green",
  },
});